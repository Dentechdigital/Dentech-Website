export type ChatMode = 'faq' | 'chat';

export type ChatRole = 'user' | 'assistant' | 'system';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  createdAt: number;
};

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
