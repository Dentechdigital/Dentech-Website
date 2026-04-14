import React, { createContext, useContext, useMemo, useState } from 'react';
import { CHATBOT_FAQ } from '../../data/chatbotFaq';
import { CHATBOT_QUALIFICATION_PROMPTS, CHATBOT_STARTER_PROMPTS } from '../../data/chatbotPrompts';
import type {
  ChatCompletionResponse,
  ChatConversionStage,
  ChatMessage,
  ChatMode,
  SuggestedCta,
} from '../../types/chatbot';
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
  conversionStage: ChatConversionStage;
  leadScore: number;
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

function estimateLeadScore(prompt: string) {
  const text = prompt.toLowerCase();
  let score = 0;
  if (/(price|pricing|cost|budget|retainer)/.test(text)) score += 2;
  if (/(book|call|meeting|consult|strategy)/.test(text)) score += 3;
  if (/(this week|asap|urgent|now|immediately)/.test(text)) score += 2;
  if (/(single clinic|multi|group|locations|ottawa|canada)/.test(text)) score += 1;
  if (/(roi|bookings|patients|acquisition|growth)/.test(text)) score += 2;
  return score;
}

function stageFromScore(score: number): ChatConversionStage {
  if (score >= 8) return 'ready';
  if (score >= 4) return 'evaluate';
  return 'explore';
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
  const [leadScore, setLeadScore] = useState(0);
  const [conversionStage, setConversionStage] = useState<ChatConversionStage>('explore');
  const [ctaNudgeShown, setCtaNudgeShown] = useState(false);
  const sessionId = useMemo(() => ensureSessionId(), []);

  const sendPrompt = async (text: string, source = 'input') => {
    const prompt = text.trim();
    if (!prompt || loading) return;
    const nextScore = leadScore + estimateLeadScore(prompt);
    const nextStage = stageFromScore(nextScore);
    setLeadScore(nextScore);
    setConversionStage(nextStage);

    const userMessage = makeMessage('user', prompt);
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);
    trackChatEvent('chat_send', { mode, source });

    try {
      let result: ChatCompletionResponse | null = null;
      if (mode === 'faq') {
        result = resolveLocalFaq(prompt);
        if (!result) {
          result = {
            reply:
              'I can help with approved quick answers only in Helpdesk mode. Try pricing, services, timeline, or getting started.',
            intent: 'general',
            confidence: 0.82,
            suggestedCtas: [{ label: 'Contact Dentech', to: '/contact' }],
            suggestedPrompts: CHATBOT_STARTER_PROMPTS,
            safetyFlags: ['fallback_response'],
          };
        }
      } else {
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
      const baseCtas = result.suggestedCtas.length ? result.suggestedCtas : [{ label: 'Contact Dentech', to: '/contact' }];
      const ctas =
        nextStage === 'ready'
          ? [
              { label: 'Book Your Strategy Call', to: '/contact' },
              ...baseCtas.filter((cta) => cta.to !== '/contact'),
            ].slice(0, 3)
          : baseCtas.slice(0, 3);
      setSuggestedCtas(ctas);

      const prompts =
        nextStage === 'explore'
          ? [...result.suggestedPrompts, ...CHATBOT_QUALIFICATION_PROMPTS].slice(0, 6)
          : result.suggestedPrompts.slice(0, 6);
      setSuggestedPrompts(prompts.length ? prompts : CHATBOT_STARTER_PROMPTS);

      if (nextStage === 'ready' && !ctaNudgeShown) {
        setMessages((prev) => [
          ...prev,
          makeMessage(
            'assistant',
            'You look close to decision stage. If you want, use "Book Your Strategy Call" and we can map your first 90-day plan.',
          ),
        ]);
        setCtaNudgeShown(true);
      }
    } catch {
      const fallback = resolveLocalFaq(prompt);
      if (fallback) {
        setError(null);
        setMessages((prev) => [...prev, makeMessage('assistant', fallback.reply)]);
        setSuggestedCtas(fallback.suggestedCtas.length ? fallback.suggestedCtas : [{ label: 'Contact Dentech', to: '/contact' }]);
        setSuggestedPrompts(fallback.suggestedPrompts.length ? fallback.suggestedPrompts : CHATBOT_STARTER_PROMPTS);
      } else {
        setError(null);
        setMessages((prev) => [
          ...prev,
          makeMessage(
            'assistant',
            'The live assistant is temporarily unavailable. You can continue with Contact, Pricing, or Services right now.',
          ),
        ]);
      }
      trackChatEvent('chat_error', { mode, source, retryable: true });
    } finally {
      setLoading(false);
    }
  };

  const contextValue = useMemo(
    () => ({
      mode,
      setMode,
      messages,
      loading,
      error,
      suggestedCtas,
      suggestedPrompts,
      conversionStage,
      leadScore,
      sendPrompt,
      sessionId,
    }),
    [mode, messages, loading, error, suggestedCtas, suggestedPrompts, conversionStage, leadScore, sessionId],
  );

  return <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used inside ChatProvider.');
  return context;
}
