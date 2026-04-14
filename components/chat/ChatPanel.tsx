import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CHATBOT_FAQ } from '../../data/chatbotFaq';
import type { ChatConversionStage, ChatFaqItem, ChatIntent, ChatMessage, ChatMode } from '../../types/chatbot';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatTabs from './ChatTabs';
import QuickPrompts from './QuickPrompts';

type HelpdeskCategory = 'pricing' | 'services' | 'timeline' | 'getting-started';

const HELPDESK_CATEGORIES: Array<{
  id: HelpdeskCategory;
  label: string;
  intents: ChatIntent[];
}> = [
  { id: 'pricing', label: 'Pricing', intents: ['pricing'] },
  { id: 'services', label: 'Services', intents: ['services'] },
  { id: 'timeline', label: 'Timeline', intents: ['timeline'] },
  { id: 'getting-started', label: 'Getting started', intents: ['booking'] },
];

const HEADER_AVATARS = ['/mohammed-dahman.webp', '/team/balfoul.webp', '/team/omayma-r.webp'];

type Props = {
  open: boolean;
  mode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
  onSubmit: (prompt: string, source?: string) => void;
  prompts: string[];
  loading: boolean;
  messages: ChatMessage[];
  onClose: () => void;
  onCtaClick: (to: string) => void;
  conversionStage: ChatConversionStage;
  leadScore: number;
};

function getFocusable(container: HTMLDivElement | null) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((node) => !node.hasAttribute('disabled'));
}

export default function ChatPanel({
  open,
  mode,
  onModeChange,
  onSubmit,
  prompts,
  loading,
  messages,
  onClose,
  onCtaClick,
  conversionStage,
  leadScore,
}: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [rendered, setRendered] = useState(open);
  const [isExiting, setIsExiting] = useState(false);
  const [helpdeskCategory, setHelpdeskCategory] = useState<HelpdeskCategory>('pricing');
  const [helpdeskScreen, setHelpdeskScreen] = useState<'questions' | 'answer'>('questions');
  const [selectedHelpdeskItem, setSelectedHelpdeskItem] = useState<ChatFaqItem | null>(null);

  useEffect(() => {
    if (open) {
      setRendered(true);
      setIsExiting(false);
      return;
    }
    if (!rendered) return;
    setIsExiting(true);
    const timeout = window.setTimeout(() => {
      setRendered(false);
      setIsExiting(false);
    }, 260);
    return () => window.clearTimeout(timeout);
  }, [open, rendered]);

  useEffect(() => {
    if (!open) return;
    const first = getFocusable(panelRef.current)[0];
    first?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key !== 'Tab') return;
      const focusables = getFocusable(panelRef.current);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (mode !== 'faq') return;
    setHelpdeskScreen('questions');
    setSelectedHelpdeskItem(null);
  }, [mode, helpdeskCategory]);

  if (!rendered) return null;

  const stageLabel =
    mode === 'faq'
      ? 'Helpdesk mode'
      : conversionStage === 'ready'
      ? 'Ready to book'
      : conversionStage === 'evaluate'
        ? 'Comparing options'
        : 'Discovery';
  const stageTone =
    conversionStage === 'ready'
      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300'
      : conversionStage === 'evaluate'
        ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300'
        : 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300';
  const activeHelpdeskCategory = HELPDESK_CATEGORIES.find((category) => category.id === helpdeskCategory) ?? HELPDESK_CATEGORIES[0];
  const filteredFaq = CHATBOT_FAQ.filter((item) => activeHelpdeskCategory.intents.includes(item.intent)).slice(0, 4);

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Dentech chatbot assistant"
      aria-hidden={isExiting}
      className={`pointer-events-auto mb-3 flex max-h-[calc(100dvh-7.5rem)] w-[min(23.5rem,calc(100vw-1rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white pb-3 shadow-[0_22px_52px_rgba(2,6,23,0.28)] sm:max-h-[min(80vh,calc(100dvh-7.5rem))] dark:border-slate-700 dark:bg-slate-950 ${
        isExiting ? 'dchat-panel-exit' : 'dchat-panel-enter'
      }`}
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-3 pb-3 pt-2.5 text-white">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1 pr-1">
            <ChatTabs mode={mode} onChange={onModeChange} />
            {mode === 'chat' ? (
              <div className="dchat-bubble-enter mt-3 text-left">
                <h2 className="text-[13px] font-semibold leading-snug text-white sm:text-sm">
                  Talk with Dentech Team! <span aria-hidden>🙂</span>
                </h2>
                <p className="mt-1 text-[12px] leading-snug text-blue-100/95">
                  Dentech support is online and can guide your next growth step.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {HEADER_AVATARS.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        aria-hidden
                        width={28}
                        height={28}
                        className={`h-7 w-7 rounded-full border-2 border-white/50 bg-white object-cover${
                          src.includes('/team/') ? ' dchat-header-team-avatar' : ''
                        }`}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                    <span
                      className="grid h-7 w-7 place-items-center rounded-full border-2 border-white/50 bg-white text-sm text-blue-600"
                      aria-hidden
                    >
                      💬
                    </span>
                  </div>
                  <span className="text-[11px] leading-snug text-blue-100/90">
                    <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-300 align-middle" />
                    Team replies under 1 hour
                  </span>
                </div>
              </div>
            ) : (
              <p className="mt-3 text-left text-[13px] font-semibold leading-snug text-white sm:text-sm">Popular questions</p>
            )}
          </div>
          <button
            type="button"
            aria-label="Close chat"
            onClick={onClose}
            className="dchat-close-btn flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/85 transition hover:bg-white/15 hover:text-white"
          >
            <span className="text-[1.125rem] font-light leading-none" aria-hidden>
              ×
            </span>
          </button>
        </div>
      </div>

      {mode === 'chat' && (
        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-1.5 dark:border-slate-800">
          <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${stageTone}`}>{stageLabel}</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">{leadScore >= 8 ? 'High intent' : 'Guided flow'}</span>
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-hidden px-3 pt-2">
        {mode === 'faq' ? (
          <div className="dchat-helpdesk-scroll flex h-full min-h-0 flex-col overflow-y-auto overscroll-y-contain rounded-xl bg-slate-50 px-3 pb-4 pt-2 dark:bg-slate-900/70">
            <p className="mb-2 text-xs font-semibold text-slate-700 dark:text-slate-200">Helpdesk quick answers</p>
            <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
              Pick a category, then open a question. Use the Chat tab for a live conversation.
            </p>
            <div className="mb-3 grid grid-cols-2 gap-2">
              {HELPDESK_CATEGORIES.map((category) => {
                const isActive = category.id === helpdeskCategory;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setHelpdeskCategory(category.id);
                      setHelpdeskScreen('questions');
                      setSelectedHelpdeskItem(null);
                    }}
                    className={`rounded-md px-2 py-1.5 text-xs font-semibold transition ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
            {helpdeskScreen === 'questions' && (
              <div className="dchat-helpdesk-pane space-y-2">
                {filteredFaq.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedHelpdeskItem(item);
                      setHelpdeskScreen('answer');
                    }}
                    className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-left text-xs font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-blue-700 dark:hover:bg-blue-950/20"
                  >
                    <span className="pr-2">{item.question}</span>
                    <span className="shrink-0 text-slate-400">›</span>
                  </button>
                ))}
              </div>
            )}
            {helpdeskScreen === 'answer' && selectedHelpdeskItem && (
              <div className="dchat-helpdesk-pane rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setHelpdeskScreen('questions');
                    setSelectedHelpdeskItem(null);
                  }}
                  className="mb-3 inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
                >
                  <span aria-hidden>←</span>
                  Back to questions
                </button>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{selectedHelpdeskItem.question}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{selectedHelpdeskItem.answer}</p>
                <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-600">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Next steps
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedHelpdeskItem.ctas.map((cta) => (
                      <Link
                        key={cta.to + cta.label}
                        to={cta.to}
                        onClick={() => onCtaClick(cta.to)}
                        className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
                      >
                        {cta.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <ChatMessages messages={messages} loading={loading} />
        )}
      </div>

      {mode === 'chat' && (
        <div className="px-3 pb-1.5 pt-2">
          <QuickPrompts prompts={prompts} disabled={loading} onPromptClick={(prompt) => onSubmit(prompt, 'prompt')} />
        </div>
      )}

      {mode === 'chat' && (
        <div className="px-3 pb-2 pt-0">
          <ChatInput onSubmit={(prompt) => onSubmit(prompt, 'input')} disabled={loading} compact />
        </div>
      )}

      {/* Chat mode intentionally keeps only conversation + composer UI */}
    </div>
  );
}
