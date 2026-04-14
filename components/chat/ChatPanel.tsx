import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { ChatConversionStage, ChatMessage, ChatMode, SuggestedCta } from '../../types/chatbot';
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
  ctas: SuggestedCta[];
  error: string | null;
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
  ctas,
  error,
  onClose,
  onCtaClick,
  conversionStage,
  leadScore,
}: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [rendered, setRendered] = useState(open);
  const [isExiting, setIsExiting] = useState(false);

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

  if (!rendered) return null;

  const stageLabel =
    conversionStage === 'ready'
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
  const primaryCta = ctas[0];
  const secondaryCtas = ctas.slice(1);

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Dentech chatbot assistant"
      aria-hidden={isExiting}
      className={`pointer-events-auto mb-3 flex max-h-[calc(100dvh-7.5rem)] w-[min(23.5rem,calc(100vw-1rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_52px_rgba(2,6,23,0.28)] sm:max-h-[min(80vh,calc(100dvh-7.5rem))] dark:border-slate-700 dark:bg-slate-950 ${
        isExiting ? 'dchat-panel-exit' : 'dchat-panel-enter'
      }`}
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-3 pb-3 pt-2.5 text-white">
        <div className="flex items-start justify-between">
          <div className="dchat-bubble-enter flex items-start gap-2">
            <img
              src="/avatar.webp"
              alt=""
              aria-hidden
              width={36}
              height={36}
              className="h-9 w-9 rounded-full border border-white/40 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h2 className="text-sm font-semibold">Talk with Dentech</h2>
              <p className="text-[11px] text-blue-100">Team replies under 1 hour</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-1.5 py-1 text-xs text-blue-100 transition hover:bg-white/15 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="mt-2">
          <ChatTabs mode={mode} onChange={onModeChange} />
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-slate-100 px-3 py-1.5 dark:border-slate-800">
        <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${stageTone}`}>{stageLabel}</span>
        <span className="text-[10px] text-slate-400 dark:text-slate-500">{leadScore >= 8 ? 'High intent' : 'Guided flow'}</span>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden px-3 pt-2">
        <ChatMessages messages={messages} loading={loading} />
      </div>

      <div className="px-3 pt-1.5">
        <QuickPrompts prompts={prompts} disabled={loading} onPromptClick={(prompt) => onSubmit(prompt, 'prompt')} />
      </div>

      {error && (
        <p className="mx-3 mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </p>
      )}

      <div className="px-3 pt-1">
        <ChatInput onSubmit={(prompt) => onSubmit(prompt, 'input')} disabled={loading} compact />
      </div>

      <div className="mx-3 mt-2 border-t border-slate-200 pb-3 pt-2 dark:border-slate-800">
        {primaryCta && (
          <Link
            to={primaryCta.to}
            onClick={() => onCtaClick(primaryCta.to)}
            className={`block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-center text-xs font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 ${
              conversionStage === 'ready' ? 'dchat-cta-ready' : ''
            }`}
          >
            {primaryCta.label}
          </Link>
        )}
        {secondaryCtas.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {secondaryCtas.map((cta) => (
              <Link
                key={cta.to + cta.label}
                to={cta.to}
                onClick={() => onCtaClick(cta.to)}
                className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-800 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
