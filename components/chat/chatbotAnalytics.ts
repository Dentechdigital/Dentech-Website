type ChatEventName =
  | 'chat_open'
  | 'chat_teaser_click'
  | 'chat_prompt_click'
  | 'chat_send'
  | 'chat_cta_click'
  | 'chat_error';

type ChatEventPayload = {
  mode?: 'faq' | 'chat';
  intent?: string;
  source?: string;
  retryable?: boolean;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackChatEvent(eventName: ChatEventName, payload: ChatEventPayload = {}) {
  if (typeof window === 'undefined') return;
  const eventPayload = { event: eventName, ...payload };
  window.dataLayer?.push(eventPayload);
  window.dispatchEvent(new CustomEvent('dentech-chat-analytics', { detail: eventPayload }));
}
