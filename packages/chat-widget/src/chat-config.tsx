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
