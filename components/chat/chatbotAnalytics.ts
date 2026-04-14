import type { ChatEventName, ChatEventPayload } from '@dentech/chat-widget';

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
