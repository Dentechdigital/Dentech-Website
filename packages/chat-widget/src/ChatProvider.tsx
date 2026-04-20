import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import { useChatConfig } from './chat-config';
import type {
  ChatCompletionResponse,
  ChatConversionStage,
  ChatMessage,
  ChatMode,
  SuggestedCta,
} from './types';

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

function ensureSessionId(key: string) {
  if (typeof window === 'undefined') return 'server-session';
  const existing = window.sessionStorage.getItem(key);
  if (existing) return existing;
  const newSession = `chat_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
  window.sessionStorage.setItem(key, newSession);
  return newSession;
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

function makeMessage(role: ChatMessage['role'], text: string): ChatMessage {
  return {
    id: `${role}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
    createdAt: Date.now(),
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
  const config = useChatConfig();
  const [mode, setMode] = useState<ChatMode>('chat');
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    makeMessage('assistant', config.welcomeMessage),
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestedCtas, setSuggestedCtas] = useState<SuggestedCta[]>([config.defaultContactCta]);
  const quickStartsOn = config.showQuickStarts !== false;
  const [suggestedPrompts, setSuggestedPrompts] = useState<string[]>(() =>
    quickStartsOn ? config.starterPrompts : [],
  );
  const [leadScore, setLeadScore] = useState(0);
  const [conversionStage, setConversionStage] = useState<ChatConversionStage>('explore');
  const [ctaNudgeShown, setCtaNudgeShown] = useState(false);
  const sessionId = useMemo(() => ensureSessionId(config.sessionStorageKey), [config.sessionStorageKey]);

  useEffect(() => {
    config.onConversationUpdate?.({
      sessionId,
      mode,
      pagePath: config.getPageContext(),
      messages: messages.map(({ role, text, createdAt }) => ({ role, text, createdAt })),
    });
  }, [messages, mode, sessionId, config]);

  const sendPrompt = async (text: string, source = 'input') => {
    const prompt = text.trim();
    if (!prompt || loading) return;
    const allowQuick = config.showQuickStarts !== false;
    const nextScore = leadScore + estimateLeadScore(prompt);
    const nextStage = stageFromScore(nextScore);
    setLeadScore(nextScore);
    setConversionStage(nextStage);

    const userMessage = makeMessage('user', prompt);
    flushSync(() => {
      setMessages((prev) => [...prev, userMessage]);
      setLoading(true);
      setError(null);
    });
    const startedAt = Date.now();
    config.onTrack?.('chat_send', {
      mode,
      source,
      sessionId,
      message: prompt,
      pagePath: config.getPageContext(),
    });

    const motionReduce =
      typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const leadInMs = motionReduce ? 0 : (config.assistantTypingLeadInMs ?? 450);
    const minTypingTotalMs = motionReduce ? 0 : (config.assistantReplyMinDelayMs ?? 2800);

    await sleep(leadInMs);

    const waitUntilMinTypingShown = async () => {
      const elapsed = Date.now() - startedAt;
      await sleep(Math.max(0, minTypingTotalMs - elapsed));
    };

    try {
      if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        throw new Error(config.offlineErrorMessage);
      }
      const result = await config.sendChatCompletion({
        sessionId,
        mode,
        locale: config.locale,
        pageContext: config.getPageContext(),
        messages: [...messages, userMessage].slice(-10),
      });

      await waitUntilMinTypingShown();
      setMessages((prev) => [...prev, makeMessage('assistant', result!.reply)]);
      const defaultCta = config.defaultContactCta;
      const baseCtas = result!.suggestedCtas.length ? result!.suggestedCtas : [defaultCta];
      const isExistingClient = result!.intent === 'existing-client';
      const ctas =
        nextStage === 'ready' && !isExistingClient
          ? [
              config.bookStrategyCallCta,
              ...baseCtas.filter((cta) => cta.to !== defaultCta.to),
            ].slice(0, 3)
          : baseCtas.slice(0, 3);
      setSuggestedCtas(ctas);

      if (allowQuick) {
        const prompts =
          nextStage === 'explore'
            ? [...result!.suggestedPrompts, ...config.qualificationPrompts].slice(0, 6)
            : result!.suggestedPrompts.slice(0, 6);
        setSuggestedPrompts(prompts.length ? prompts : config.starterPrompts);
      } else {
        setSuggestedPrompts([]);
      }

      if (nextStage === 'ready' && !ctaNudgeShown && !isExistingClient) {
        setMessages((prev) => [...prev, makeMessage('assistant', config.ctaNudgeMessage)]);
        setCtaNudgeShown(true);
      }
    } catch {
      await waitUntilMinTypingShown();
      setError(null);
      setMessages((prev) => [...prev, makeMessage('assistant', config.liveAssistantUnavailableMessage)]);
      if (!allowQuick) setSuggestedPrompts([]);
      config.onTrack?.('chat_error', { mode, source, retryable: true });
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
