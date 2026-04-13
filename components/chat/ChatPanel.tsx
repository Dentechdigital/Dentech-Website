import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { ChatMessage, ChatMode, SuggestedCta } from '../../types/chatbot';
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
}: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);

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

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-label="Dentech chatbot assistant"
      className="pointer-events-auto mb-3 flex max-h-[78vh] w-[min(23rem,calc(100vw-1rem))] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-[0_20px_45px_rgba(2,6,23,0.22)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/95"
    >
      <div className="mb-2 flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 px-2.5 py-2 dark:from-slate-900 dark:to-slate-800">
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Dentech Assistant</h2>
          <p className="text-[11px] text-slate-600 dark:text-slate-300">Fast answers for growth decisions</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg px-2 py-1 text-xs text-slate-500 transition hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          Close
        </button>
      </div>

      <ChatTabs mode={mode} onChange={onModeChange} />
      <div className="mt-3 min-h-0 flex-1">
        <ChatMessages messages={messages} loading={loading} />
      </div>

      <div className="mt-3">
        <QuickPrompts prompts={prompts} disabled={loading} onPromptClick={(prompt) => onSubmit(prompt, 'prompt')} />
      </div>

      {error && (
        <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </p>
      )}

      <ChatInput onSubmit={(prompt) => onSubmit(prompt, 'input')} disabled={loading} />

      <div className="mt-3 flex flex-wrap gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
        {ctas.map((cta) => (
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
    </div>
  );
}
