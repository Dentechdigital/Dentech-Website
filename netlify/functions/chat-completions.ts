import { CHATBOT_FAQ } from '../../data/chatbotFaq';
import { CHATBOT_STARTER_PROMPTS } from '../../data/chatbotPrompts';
import type { ChatCompletionRequest, ChatCompletionResponse, ChatIntent, SuggestedCta } from '../../types/chatbot';

type Event = {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string | undefined>;
};

type Result = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

const WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_COUNT = 15;
const REQUEST_BODY_LIMIT = 9_000;
const MESSAGE_CHAR_LIMIT = 500;
const MESSAGE_COUNT_LIMIT = 12;
const rateTracker = new Map<string, number[]>();

function json(statusCode: number, body: unknown): Result {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify(body),
  };
}

function trimHistory(key: string, now: number): number[] {
  const current = rateTracker.get(key) ?? [];
  const filtered = current.filter((ts) => now - ts < WINDOW_MS);
  rateTracker.set(key, filtered);
  return filtered;
}

function sanitizeText(value: string) {
  return value.replace(/<[^>]+>/g, '').replace(/[\u0000-\u001F\u007F]/g, '').trim();
}

function inferIntent(input: string): ChatIntent {
  const text = input.toLowerCase();
  if (/(price|pricing|cost|budget|retainer)/.test(text)) return 'pricing';
  if (/(book|appointment|contact|call)/.test(text)) return 'booking';
  if (/(case|result|proof|portfolio)/.test(text)) return 'case-studies';
  if (/(ottawa|canada|quebec|location|where)/.test(text)) return 'locations';
  if (/(timeline|how long|months|weeks)/.test(text)) return 'timeline';
  if (/(service|seo|ads|website|social|automation)/.test(text)) return 'services';
  return 'general';
}

function mapCtas(intent: ChatIntent): SuggestedCta[] {
  switch (intent) {
    case 'pricing':
      return [
        { label: 'View Pricing', to: '/#pricing' },
        { label: 'Talk to Dentech', to: '/contact' },
      ];
    case 'services':
      return [
        { label: 'Explore Services', to: '/services' },
        { label: 'See Case Studies', to: '/case-studies' },
      ];
    case 'case-studies':
      return [
        { label: 'Case Studies', to: '/case-studies' },
        { label: 'Book Strategy Call', to: '/contact' },
      ];
    case 'booking':
      return [{ label: 'Contact Dentech', to: '/contact' }];
    default:
      return [
        { label: 'Contact Team', to: '/contact' },
        { label: 'Browse Services', to: '/services' },
      ];
  }
}

function faqFallback(prompt: string): ChatCompletionResponse | null {
  const normalized = prompt.toLowerCase();
  const match = CHATBOT_FAQ.find((faq) =>
    [faq.question, ...faq.prompts].some((seed) => normalized.includes(seed.toLowerCase().slice(0, 14))),
  );
  if (!match) return null;
  return {
    reply: match.answer,
    intent: match.intent,
    confidence: 0.94,
    suggestedCtas: match.ctas,
    suggestedPrompts: match.prompts,
    safetyFlags: [],
  };
}

function detectInjectionRisk(prompt: string): boolean {
  const riskyPatterns = [
    /ignore (all|previous|prior) instructions/i,
    /reveal (your|the) (system|hidden) prompt/i,
    /developer message/i,
    /jailbreak/i,
  ];
  return riskyPatterns.some((pattern) => pattern.test(prompt));
}

async function queryGemini(payload: ChatCompletionRequest): Promise<ChatCompletionResponse> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Chat service is not configured yet.');
  }

  const latest = payload.messages[payload.messages.length - 1]?.text ?? '';
  const intent = inferIntent(latest);
  const injectionRisk = detectInjectionRisk(latest);
  const curatedFaqBlock = CHATBOT_FAQ.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join('\n\n');

  const policy = [
    'You are Dentech Assistant for a dental marketing agency.',
    'Only use approved business claims from provided context.',
    'Do not fabricate guarantees, stats, clients, or outcomes.',
    'No medical, legal, or financial advice.',
    'Keep replies concise and conversion-oriented for clinic owners/managers.',
    'If uncertain, state limitation and route to Contact/Services/Pricing CTA.',
  ].join('\n');

  const userContext = payload.messages
    .slice(-8)
    .map((message) => `${message.role.toUpperCase()}: ${message.text}`)
    .join('\n');

  const prompt = `${policy}

Page context: ${payload.pageContext}
Mode: ${payload.mode}
Intent guess: ${intent}
Prompt-injection-risk: ${injectionRisk ? 'yes' : 'no'}

Approved FAQ context:
${curatedFaqBlock}

Conversation:
${userContext}

Reply with plain text only.`;

  const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.25,
        topP: 0.9,
        maxOutputTokens: 300,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Assistant is temporarily unavailable. Please retry.');
  }

  const data = (await response.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };

  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!reply) {
    throw new Error('Empty assistant response.');
  }

  const safetyFlags = [];
  if (injectionRisk) safetyFlags.push('prompt_injection_risk' as const, 'policy_guardrail_applied' as const);

  return {
    reply,
    intent,
    confidence: injectionRisk ? 0.55 : 0.8,
    suggestedCtas: mapCtas(intent),
    suggestedPrompts: CHATBOT_STARTER_PROMPTS.slice(0, 4),
    safetyFlags,
  };
}

export async function handler(event: Event): Promise<Result> {
  if (event.httpMethod !== 'POST') {
    return json(400, { code: 'bad_request', message: 'Only POST is allowed.', retryable: false });
  }

  if (!event.body || event.body.length > REQUEST_BODY_LIMIT) {
    return json(400, { code: 'bad_request', message: 'Payload is missing or too large.', retryable: false });
  }

  let payload: ChatCompletionRequest;
  try {
    payload = JSON.parse(event.body) as ChatCompletionRequest;
  } catch {
    return json(400, { code: 'bad_request', message: 'Invalid JSON payload.', retryable: false });
  }

  if (
    !payload.sessionId ||
    !Array.isArray(payload.messages) ||
    !payload.messages.length ||
    payload.messages.length > MESSAGE_COUNT_LIMIT
  ) {
    return json(400, { code: 'bad_request', message: 'Request shape is invalid.', retryable: false });
  }

  const ip = event.headers['x-nf-client-connection-ip'] || event.headers['x-forwarded-for'] || 'unknown';
  const key = `${ip}_${payload.sessionId}`;
  const now = Date.now();
  const visits = trimHistory(key, now);
  if (visits.length >= RATE_LIMIT_COUNT) {
    return json(429, { code: 'rate_limited', message: 'Too many chat requests. Please retry shortly.', retryable: true });
  }
  visits.push(now);
  rateTracker.set(key, visits);

  payload.messages = payload.messages.map((message) => ({
    ...message,
    text: sanitizeText(message.text).slice(0, MESSAGE_CHAR_LIMIT),
  }));

  if (payload.messages.some((m) => !m.text)) {
    return json(400, { code: 'bad_request', message: 'Message cannot be empty.', retryable: false });
  }

  try {
    const latestPrompt = payload.messages[payload.messages.length - 1]?.text ?? '';
    const fallback = payload.mode === 'faq' ? faqFallback(latestPrompt) : null;
    const result = fallback ?? (await queryGemini(payload));
    return json(200, result);
  } catch {
    return json(500, {
      code: 'server_error',
      message: 'Chat service is temporarily unavailable.',
      retryable: true,
    });
  }
}
