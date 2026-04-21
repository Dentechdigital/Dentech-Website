import React, { useEffect, useRef, useState } from 'react';
import { useChatConfig } from './chat-config';
import type { ChatFaqItem, ChatMessage, ChatMode } from './types';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatTabs from './ChatTabs';
import QuickPrompts from './QuickPrompts';

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
};

/** Collapse a hint when the same sequence of sentences was pasted twice (e.g. "A. B. A. B."). */
function dedupeResponseHintLine(text: string): string {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (normalized.length >= 4 && normalized.length % 2 === 0) {
    const mid = normalized.length / 2;
    if (normalized.slice(0, mid) === normalized.slice(mid)) {
      return normalized.slice(0, mid).trim();
    }
  }
  const segments = normalized.split(/(?<=\.)\s+/).map((s) => s.trim()).filter(Boolean);
  if (segments.length < 2) return normalized;
  for (let len = Math.floor(segments.length / 2); len >= 1; len--) {
    const first = segments.slice(0, len).join('\u0000');
    const second = segments.slice(len, len * 2).join('\u0000');
    if (first === second) {
      return segments.slice(0, len).join(' ');
    }
  }
  return segments.join(' ');
}

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
}: Props) {
  const config = useChatConfig();
  const { LinkComponent } = config;
  const firstCategoryId = config.helpdeskCategories[0]?.id ?? 'pricing';
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [rendered, setRendered] = useState(open);
  const [isExiting, setIsExiting] = useState(false);
  const [helpdeskCategory, setHelpdeskCategory] = useState<string>(firstCategoryId);
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

  const activeHelpdeskCategory =
    config.helpdeskCategories.find((category) => category.id === helpdeskCategory) ?? config.helpdeskCategories[0];
  const filteredFaq = activeHelpdeskCategory
    ? config.faqItems.filter((item) => activeHelpdeskCategory.intents.includes(item.intent)).slice(0, 4)
    : [];

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label={config.dialogAriaLabel}
      aria-hidden={isExiting}
      className={`pointer-events-auto flex max-h-[calc(100dvh-7.5rem)] w-[min(23.5rem,calc(100vw-1rem))] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white pb-3 shadow-[0_24px_60px_rgba(2,6,23,0.34),0_0_0_1px_rgba(2,6,23,0.04)] sm:max-h-[min(80vh,calc(100dvh-7.5rem))] dark:border-slate-700 dark:bg-slate-950 dark:shadow-[0_24px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)] ${
        isExiting ? 'dchat-panel-exit' : 'dchat-panel-enter'
      }`}
    >
      <div className="border-b border-white/10 bg-gradient-to-r from-blue-600 to-indigo-600 pt-2.5 text-white dark:border-white/10 dark:from-blue-700 dark:to-indigo-700">
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2">
            <div className="min-w-0 flex-1">
              <ChatTabs
                surface="brand"
                mode={mode}
                onChange={onModeChange}
                chatLabel={config.tabChatLabel}
                helpdeskLabel={config.tabHelpdeskLabel}
              />
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={onClose}
              className="dchat-close-btn flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/85 transition hover:bg-white/15 hover:text-white"
            >
              <span className="text-[1.125rem] font-normal leading-none" aria-hidden>
                ×
              </span>
            </button>
          </div>
          <div className="mt-3 min-w-0">
            {mode === 'chat' ? (
              config.assistantName && config.assistantAvatarSrc ? (
                <div className="dchat-bubble-enter flex items-start gap-3 text-left">
                  <img
                    src={config.assistantAvatarSrc}
                    alt=""
                    width={44}
                    height={44}
                    title={config.assistantName}
                    className="h-11 w-11 shrink-0 rounded-full border-2 border-white/55 bg-white object-cover shadow-sm"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex min-w-0 flex-1 flex-col items-start">
                    <h2 className="text-sm font-semibold leading-snug text-white sm:text-[15px] [text-shadow:0_1px_2px_rgba(0,0,0,0.22)]">
                      {config.assistantName}
                    </h2>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-100/90">
                      {config.assistantRoleBadge ?? 'AI assistant'}
                    </p>
                    {config.assistantTagline?.trim() ? (
                      <p className="mt-1 text-[12px] leading-snug text-blue-100/95">{config.assistantTagline}</p>
                    ) : null}
                    <p className="mt-1.5 text-[11px] leading-snug text-blue-100/90">
                      <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-300 align-middle" />
                      {config.chatHeaderStatusLine}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="dchat-bubble-enter text-left">
                  <h2 className="text-[13px] font-semibold leading-snug text-white sm:text-sm">
                    {config.chatHeaderTitle}{' '}
                    {config.chatHeaderEmoji ? <span aria-hidden>{config.chatHeaderEmoji}</span> : null}
                  </h2>
                  <p className="mt-1 text-[12px] leading-snug text-blue-100/95">{config.chatHeaderSupportLine}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {config.headerAvatarSrcs.map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt=""
                          aria-hidden
                          width={28}
                          height={28}
                          className="h-7 w-7 rounded-full border-2 border-white/50 bg-white object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                      <span
                        className="grid h-7 w-7 place-items-center rounded-full border-2 border-white/50 bg-white text-sm text-blue-600"
                        aria-hidden
                      >
                        {'\u{1F4AC}'}
                      </span>
                    </div>
                    <span className="text-[11px] leading-snug text-blue-100/90">
                      <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-300 align-middle" />
                      {config.chatHeaderStatusLine}
                    </span>
                  </div>
                </div>
              )
            ) : (
              <p className="text-left text-[13px] font-semibold leading-snug text-white sm:text-sm">{config.faqTabHeader}</p>
            )}
          </div>
        </div>
      </div>

      {mode === 'chat' && config.chatResponseHintLine?.trim() ? (
        <div className="border-b border-slate-100 px-3 py-2 text-center dark:border-slate-800">
          <p className="text-[11px] leading-snug text-slate-500 dark:text-slate-400">
            {dedupeResponseHintLine(config.chatResponseHintLine)}
          </p>
        </div>
      ) : null}

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-3 pt-2">
        {mode === 'faq' ? (
          <div className="dchat-helpdesk-scroll flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain rounded-xl bg-slate-50 px-3 pb-4 pt-2 dark:bg-slate-900/70">
            <p className="mb-2 text-xs font-semibold text-slate-700 dark:text-slate-200">{config.helpdeskIntroTitle}</p>
            <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">{config.helpdeskIntroBody}</p>
            <div className="mb-3 grid grid-cols-2 gap-2">
              {config.helpdeskCategories.map((category) => {
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
                      <LinkComponent
                        key={cta.to + cta.label}
                        to={cta.to}
                        onClick={() => onCtaClick(cta.to)}
                        className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
                      >
                        {cta.label}
                      </LinkComponent>
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

      {mode === 'chat' && prompts.length > 0 && (
        <div className="px-3 pb-1.5 pt-2">
          <QuickPrompts
            prompts={prompts}
            disabled={loading}
            onPromptClick={(prompt) => onSubmit(prompt, 'prompt')}
            sectionLabel={config.quickStartsLabel}
          />
        </div>
      )}

      {mode === 'chat' && (
        <div className="px-3 pb-2 pt-0">
          <ChatInput
            onSubmit={(prompt) => onSubmit(prompt, 'input')}
            disabled={loading}
            compact
            ariaLabel={config.composerAriaLabel}
            placeholder={config.composerPlaceholder}
          />
        </div>
      )}

      <div className="mt-auto border-t border-slate-100 px-3 pb-1 pt-2 dark:border-slate-800">
        {config.poweredByTo ? (
          <LinkComponent
            to={config.poweredByTo}
            onClick={() => onCtaClick(config.poweredByTo!)}
            className="block text-center text-[10px] font-medium text-slate-400 transition hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
          >
            {config.poweredByLabel}
          </LinkComponent>
        ) : (
          <p className="text-center text-[10px] font-medium text-slate-400 dark:text-slate-500">
            {config.poweredByLabel}
          </p>
        )}
      </div>
    </div>
  );
}
