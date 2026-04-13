import React from 'react';

type Props = {
  visible: boolean;
  onClick: () => void;
};

export default function ChatTeaser({ visible, onClick }: Props) {
  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      className="pointer-events-auto mb-3 max-w-[17rem] rounded-2xl border border-blue-200/70 bg-white/95 px-4 py-3 text-left text-sm text-slate-700 shadow-[0_14px_36px_rgba(15,23,42,0.18)] backdrop-blur-sm transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-200"
      aria-label="Open chat teaser"
    >
      <p className="font-semibold text-slate-900 dark:text-white">Need help choosing the best growth plan?</p>
      <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
        Ask instantly about pricing, services, and next steps.
      </p>
    </button>
  );
}
