import type { ComponentType, ReactNode } from 'react';

export type ChatMode = 'faq' | 'chat';

export type ChatRole = 'user' | 'assistant' | 'system';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  createdAt: number;
};

/** Slim message shape for analytics / transcript export (no message `id`). */
export type ChatTranscriptMessage = Pick<ChatMessage, 'role' | 'text' | 'createdAt'>;

export type ChatIntent =
  | 'pricing'
  | 'services'
  | 'booking'
  | 'case-studies'
  | 'locations'
  | 'timeline'
  | 'general';

export type ChatConversionStage = 'explore' | 'evaluate' | 'ready';

export type SuggestedCta = {
  label: string;
  to: string;
};

export type ChatSafetyFlag = 'prompt_injection_risk' | 'policy_guardrail_applied' | 'fallback_response';

export type ChatCompletionRequest = {
  sessionId: string;
  mode: ChatMode;
  locale: string;
  pageContext: string;
  messages: ChatMessage[];
};

export type ChatCompletionResponse = {
  reply: string;
  intent: ChatIntent;
  confidence: number;
  suggestedCtas: SuggestedCta[];
  suggestedPrompts: string[];
  safetyFlags: ChatSafetyFlag[];
};

export type ChatErrorResponse = {
  code: 'bad_request' | 'unauthorized' | 'rate_limited' | 'server_error';
  message: string;
  retryable: boolean;
};

export type ChatFaqItem = {
  id: string;
  question: string;
  answer: string;
  prompts: string[];
  intent: ChatIntent;
  ctas: SuggestedCta[];
};

export type ChatEventName =
  | 'chat_open'
  | 'chat_teaser_click'
  | 'chat_prompt_click'
  | 'chat_send'
  | 'chat_cta_click'
  | 'chat_error';

export type ChatEventPayload = {
  mode?: 'faq' | 'chat';
  intent?: string;
  source?: string;
  retryable?: boolean;
  /** Present on `chat_send` for logging / CRM (truncate at source if needed). */
  sessionId?: string;
  message?: string;
  pagePath?: string;
};

export type ChatHelpdeskCategory = {
  id: string;
  label: string;
  intents: ChatIntent[];
};

export type ChatLinkComponentProps = {
  to: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export type ChatLinkComponent = ComponentType<ChatLinkComponentProps>;
