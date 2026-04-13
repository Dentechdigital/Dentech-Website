import React, { createContext, useContext, useMemo, useState } from 'react';
import { CHATBOT_FAQ } from '../../data/chatbotFaq';
import { CHATBOT_STARTER_PROMPTS } from '../../data/chatbotPrompts';
import type { ChatCompletionResponse, ChatMessage, ChatMode, SuggestedCta } from '../../types/chatbot';
import { trackChatEvent } from './chatbotAnalytics';
import { sendChatCompletion } from './useChatApi';

type ChatContextValue = {
  mode: ChatMode;
  setMode: (mode: ChatMode) => void;
  messages: ChatMessage[];
  loading: boolean;
  error: string | null;
  suggestedCtas: SuggestedCta[];
  suggestedPrompts: string[];
  sendPrompt: (text: string, source?: string) => Promise<void>;
  sessionId: string;
};

const ChatContext = createContext<ChatContextValue | null>(null);

const SESSION_STORAGE_KEY = 'dentech-chat-session';

function ensureSessionId() {
  if (typeof window === 'undefined') return 'server-session';
  const existing = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (existing) return existing;
  const newSession = `chat_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, newSession);
  return newSession;
}

function makeMessage(role: ChatMessage['role'], text: string): ChatMessage {
  return {
    id: `${role}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
    createdAt: Date.now(),
  };
}

function resolveLocalFaq(prompt: string): ChatCompletionResponse | null {
  const normalized = prompt.toLowerCase();
  const faq = CHATBOT_FAQ.find((item) =>
    [item.question, ...item.prompts].some((text) => normalized.includes(text.toLowerCase().slice(0, 16))),
  );
  if (!faq) return null;
  return {
    reply: faq.answer,
    intent: faq.intent,
    confidence: 0.9,
    suggestedCtas: faq.ctas,
    suggestedPrompts: faq.prompts,
    safetyFlags: [],
  };
}

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ChatMode>('faq');
  const [messages, setMessages] = useState<ChatMessage[]>([
    makeMessage(
      'assistant',
      'Welcome to Dentech. Ask about pricing, services, timeline, or next steps and I will guide you quickly.',
    ),
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestedCtas, setSuggestedCtas] = useState<SuggestedCta[]>([{ label: 'Contact Dentech', to: '/contact' }]);
  const [suggestedPrompts, setSuggestedPrompts] = useState<string[]>(CHATBOT_STARTER_PROMPTS);
  const sessionId = useMemo(() => ensureSessionId(), []);

  const sendPrompt = async (text: string, source = 'input') => {
    const prompt = text.trim();
    if (!prompt || loading) return;
    const userMessage = makeMessage('user', prompt);
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);
    trackChatEvent('chat_send', { mode, source });

    try {
      let result: ChatCompletionResponse | null = null;
      if (mode === 'faq') result = resolveLocalFaq(prompt);

      if (!result) {
        if (typeof navigator !== 'undefined' && navigator.onLine === false) {
          throw new Error('You appear offline. Please reconnect and try again.');
        }
        result = await sendChatCompletion({
          sessionId,
          mode,
          locale: 'en-CA',
          pageContext: typeof window === 'undefined' ? '/' : window.location.pathname,
          messages: [...messages, userMessage].slice(-10),
        });
      }

      setMessages((prev) => [...prev, makeMessage('assistant', result.reply)]);
      setSuggestedCtas(result.suggestedCtas.length ? result.suggestedCtas : [{ label: 'Contact Dentech', to: '/contact' }]);
      setSuggestedPrompts(result.suggestedPrompts.length ? result.suggestedPrompts : CHATBOT_STARTER_PROMPTS);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong while sending your message.';
      setError(message);
      setMessages((prev) => [
        ...prev,
        makeMessage(
          'assistant',
          'I could not complete that request right now. You can still continue by using Contact, Pricing, or Services.',
        ),
      ]);
      trackChatEvent('chat_error', { mode, source, retryable: true });
    } finally {
      setLoading(false);
    }
  };

  const contextValue = useMemo(
    () => ({ mode, setMode, messages, loading, error, suggestedCtas, suggestedPrompts, sendPrompt, sessionId }),
    [mode, messages, loading, error, suggestedCtas, suggestedPrompts, sessionId],
  );

  return <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used inside ChatProvider.');
  return context;
}
