import type { ChatEventName, ChatEventPayload } from '@dentech/chat-widget';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const CHAT_NETLIFY_FORM = 'maya-chat-submission';
const MAX_CHAT_MESSAGE_CHARS = 6000;

function getNetlifyFormAction(): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return '/';
  return base.endsWith('/') ? base : `${base}/`;
}

function postChatSubmissionToNetlify(payload: ChatEventPayload) {
  const message = (payload.message ?? '').slice(0, MAX_CHAT_MESSAGE_CHARS);
  const body = new URLSearchParams({
    'form-name': CHAT_NETLIFY_FORM,
    'bot-field': '',
    mode: payload.mode ?? '',
    source: payload.source ?? '',
    sessionId: payload.sessionId ?? '',
    pagePath: (payload.pagePath ?? '').slice(0, 2000),
    message,
  }).toString();

  void fetch(getNetlifyFormAction(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  }).catch(() => {
    /* Netlify Forms is best-effort; chat must still work if this fails */
  });
}

export function trackChatEvent(eventName: ChatEventName, payload: ChatEventPayload = {}) {
  if (typeof window === 'undefined') return;
  const eventPayload = { event: eventName, ...payload };
  window.dataLayer?.push(eventPayload);
  window.dispatchEvent(new CustomEvent('dentech-chat-analytics', { detail: eventPayload }));

  if (eventName === 'chat_send') {
    postChatSubmissionToNetlify(payload);
  }
}
