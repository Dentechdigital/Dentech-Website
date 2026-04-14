import React, { createContext, useContext } from 'react';
import type {
  ChatCompletionRequest,
  ChatCompletionResponse,
  ChatEventName,
  ChatEventPayload,
  ChatFaqItem,
  ChatHelpdeskCategory,
  ChatLinkComponent,
} from './types';

export type ChatRuntimeConfig = {
  sessionStorageKey: string;
  welcomeMessage: string;
  teaserTitle: string;
  teaserBody: string;
  teaserStatusLine: string;
  teaserPrimaryCta: string;
  teaserSecondaryCta: string;
  teaserFooterNote: string;
  chatHeaderTitle: string;
  chatHeaderEmoji?: string;
  chatHeaderSupportLine: string;
  chatHeaderStatusLine: string;
  /** When set with `assistantAvatarSrc`, the Chat tab header shows this profile (image + name) instead of the legacy team strip. */
  assistantName?: string;
  assistantAvatarSrc?: string;
  /** One line under the name; defaults to `chatHeaderSupportLine` if omitted. */
  assistantTagline?: string;
  /** Short label above the name (e.g. “AI admin assistant”). */
  assistantRoleBadge?: string;
  faqTabHeader: string;
  helpdeskIntroTitle: string;
  helpdeskIntroBody: string;
  dialogAriaLabel: string;
  tabChatLabel: string;
  tabHelpdeskLabel: string;
  quickStartsLabel: string;
  composerAriaLabel: string;
  composerPlaceholder: string;
  faqItems: ChatFaqItem[];
  starterPrompts: string[];
  qualificationPrompts: string[];
  helpdeskCategories: ChatHelpdeskCategory[];
  headerAvatarSrcs: string[];
  launcherBadgeSrc: string;
  defaultContactCta: { label: string; to: string };
  bookStrategyCallCta: { label: string; to: string };
  faqModeNoMatchReply: string;
  faqModeNoMatchSuggestedCtas: { label: string; to: string }[];
  offlineErrorMessage: string;
  liveAssistantUnavailableMessage: string;
  ctaNudgeMessage: string;
  locale: string;
  getPageContext: () => string;
  sendChatCompletion: (request: ChatCompletionRequest) => Promise<ChatCompletionResponse>;
  onTrack?: (event: ChatEventName, payload?: ChatEventPayload) => void;
  LinkComponent: ChatLinkComponent;
  teaserDelayMs?: number;
  /** Minimum time (ms) to show the typing indicator before an assistant reply (~2–3s feels natural). Respects `prefers-reduced-motion`. */
  assistantReplyMinDelayMs?: number;
};

const ChatConfigContext = createContext<ChatRuntimeConfig | null>(null);

export function ChatConfigProvider({ value, children }: { value: ChatRuntimeConfig; children: React.ReactNode }) {
  return <ChatConfigContext.Provider value={value}>{children}</ChatConfigContext.Provider>;
}

export function useChatConfig(): ChatRuntimeConfig {
  const ctx = useContext(ChatConfigContext);
  if (!ctx) throw new Error('useChatConfig must be used inside ChatConfigProvider.');
  return ctx;
}
