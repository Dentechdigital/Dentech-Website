import './chat-widget.css';

import React from 'react';
import { ChatConfigProvider } from './chat-config';
import type { ChatRuntimeConfig } from './chat-config';
import { ChatProvider } from './ChatProvider';
import ChatWidgetView from './ChatWidgetView';

export type {
  ChatCompletionRequest,
  ChatCompletionResponse,
  ChatConversionStage,
  ChatErrorResponse,
  ChatEventName,
  ChatEventPayload,
  ChatFaqItem,
  ChatHelpdeskCategory,
  ChatIntent,
  ChatLinkComponent,
  ChatLinkComponentProps,
  ChatMessage,
  ChatMode,
  ChatRole,
  ChatSafetyFlag,
  ChatTranscriptMessage,
  SuggestedCta,
} from './types';

export { ChatConfigProvider, useChatConfig } from './chat-config';
export type { ChatRuntimeConfig } from './chat-config';
export { ChatProvider, useChat } from './ChatProvider';
export { default as ChatWidgetView } from './ChatWidgetView';
export type { ChatWidgetViewProps } from './ChatWidgetView';

export function MountChatWidget({ config, routeKey }: { config: ChatRuntimeConfig; routeKey?: string }) {
  return (
    <ChatConfigProvider value={config}>
      <ChatProvider>
        <ChatWidgetView routeKey={routeKey} />
      </ChatProvider>
    </ChatConfigProvider>
  );
}
