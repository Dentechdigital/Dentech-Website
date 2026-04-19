import type { ChatEventName, ChatEventPayload, ChatMode, ChatTranscriptMessage } from '@dentech/chat-widget';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const CHAT_NETLIFY_FORM = 'maya-chat-submission';
const MAX_TRANSCRIPT_CHARS = 95_000;

/** Default 3 minutes; override with `VITE_CHAT_TRANSCRIPT_IDLE_MS` (milliseconds, min 30s). */
function parseIdleMs(): number {
  const raw = import.meta.env.VITE_CHAT_TRANSCRIPT_IDLE_MS;
  const n = raw != null && String(raw).trim() !== '' ? Number(raw) : NaN;
  if (Number.isFinite(n) && n >= 30_000) return Math.min(n, 60 * 60_000);
  return 3 * 60_000;
}

let idleTimer: ReturnType<typeof setTimeout> | null = null;
let lastSnapshot: {
  sessionId: string;
  mode: ChatMode;
  pagePath: string;
  messages: ChatTranscriptMessage[];
} | null = null;

function getNetlifyFormAction(): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return '/';
  return base.endsWith('/') ? base : `${base}/`;
}

function userTurnCount(messages: ChatTranscriptMessage[]): number {
  return messages.filter((m) => m.role === 'user').length;
}

function speakerLabel(role: ChatTranscriptMessage['role']): string {
  if (role === 'user') return 'User';
  if (role === 'assistant') return 'Maya';
  return role;
}

function formatTranscript(messages: ChatTranscriptMessage[]): string {
  return messages
    .map((m) => `${speakerLabel(m.role)}: ${m.text}`)
    .join('\n\n');
}

function buildSubmissionBody(snapshot: NonNullable<typeof lastSnapshot>): string | null {
  if (userTurnCount(snapshot.messages) < 1) return null;
  const transcript = formatTranscript(snapshot.messages).slice(0, MAX_TRANSCRIPT_CHARS);
  return new URLSearchParams({
    'form-name': CHAT_NETLIFY_FORM,
    'bot-field': '',
    sessionId: snapshot.sessionId,
    pagePath: snapshot.pagePath.slice(0, 2000),
    mode: snapshot.mode,
    userTurns: String(userTurnCount(snapshot.messages)),
    transcript,
  }).toString();
}

function postTranscript(body: string) {
  void fetch(getNetlifyFormAction(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  }).catch(() => {
    /* Netlify Forms is best-effort; chat must still work if this fails */
  });
}

function flushScheduledTranscript() {
  idleTimer = null;
  if (!lastSnapshot) return;
  const body = buildSubmissionBody(lastSnapshot);
  if (!body) return;
  postTranscript(body);
}

/**
 * Debounces a single Netlify submission with the full transcript after idle time.
 * If the visitor leaves the tab earlier, `pagehide` tries `sendBeacon` once (no duplicate with idle flush when timer is cleared).
 */
export function recordChatConversationForNetlify(args: {
  sessionId: string;
  mode: ChatMode;
  pagePath: string;
  messages: ChatTranscriptMessage[];
}) {
  lastSnapshot = args;
  if (userTurnCount(args.messages) < 1) {
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = null;
    return;
  }
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(flushScheduledTranscript, parseIdleMs());
}

function installPagehideCapture() {
  if (typeof window === 'undefined') return;
  window.addEventListener('pagehide', () => {
    if (idleTimer == null || !lastSnapshot) return;
    const body = buildSubmissionBody(lastSnapshot);
    if (!body) return;
    clearTimeout(idleTimer);
    idleTimer = null;
    const url = getNetlifyFormAction();
    try {
      const blob = new Blob([body], { type: 'application/x-www-form-urlencoded' });
      if (navigator.sendBeacon(url, blob)) return;
    } catch {
      /* fall through */
    }
    postTranscript(body);
  });
}

installPagehideCapture();

export function trackChatEvent(eventName: ChatEventName, payload: ChatEventPayload = {}) {
  if (typeof window === 'undefined') return;
  const eventPayload = { event: eventName, ...payload };
  window.dataLayer?.push(eventPayload);
  window.dispatchEvent(new CustomEvent('dentech-chat-analytics', { detail: eventPayload }));
}
