import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

type Props = {
  visible: boolean;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
  onDismiss: () => void;
  title: string;
  body: string;
  statusLine: string;
  primaryCta: string;
  secondaryCta: string;
  footerNote: string;
  miniAvatarSrcs: string[];
};

export default function ChatTeaser({
  visible,
  onPrimaryClick,
  onSecondaryClick,
  onDismiss,
  title,
  body,
  statusLine,
  primaryCta,
  secondaryCta,
  footerNote,
  miniAvatarSrcs,
}: Props) {
  const [rendered, setRendered] = useState(visible);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (visible) {
      setRendered(true);
      setIsExiting(false);
      return;
    }
    if (!rendered) return;
    setIsExiting(true);
    const timeout = window.setTimeout(() => {
      setRendered(false);
      setIsExiting(false);
    }, 220);
    return () => window.clearTimeout(timeout);
  }, [visible, rendered]);

  if (!rendered) return null;

  return (
    <aside
      className={`pointer-events-auto mb-3 w-[min(19rem,calc(100vw-1rem))] rounded-2xl border border-slate-200 bg-white p-3 text-left shadow-[0_16px_38px_rgba(2,6,23,0.18)] dark:border-slate-700 dark:bg-slate-900 ${
        isExiting ? 'dchat-teaser-exit' : 'dchat-teaser-enter'
      }`}
      aria-hidden={isExiting}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1 pr-1">
          <p className="text-[13px] font-semibold leading-snug text-slate-900 dark:text-white">{title}</p>
          <p className="mt-1 text-[12px] leading-snug text-slate-600 dark:text-slate-300">{body}</p>
        </div>
        <button
          type="button"
          aria-label="Dismiss teaser"
          className="dchat-close-btn flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white sm:h-9 sm:w-9 sm:min-h-0 sm:min-w-0 sm:rounded-lg"
          onClick={onDismiss}
        >
          <span className="text-[1.5rem] font-normal leading-none sm:text-[1.125rem]" aria-hidden>
            ×
          </span>
        </button>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <div className="flex -space-x-2">
          {miniAvatarSrcs.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden
              width={24}
              height={24}
              className="h-6 w-6 rounded-full border border-white object-cover dark:border-slate-800"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
        <span className="text-[11px] leading-snug text-slate-500 dark:text-slate-400">{statusLine}</span>
      </div>

      <div className="mt-3 space-y-2">
        <button
          type="button"
          onClick={onPrimaryClick}
          className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-sm font-semibold text-white transition-[filter,background] duration-120 ease-out hover:from-blue-700 hover:to-indigo-700 hover:brightness-105 active:brightness-[0.96]"
        >
          {primaryCta}
        </button>
        <button
          type="button"
          onClick={onSecondaryClick}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition-[background-color] duration-120 ease-out hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:active:bg-slate-600"
        >
          <Search size={14} />
          {secondaryCta}
        </button>
      </div>
      <p className="mt-2 text-center text-[10px] text-slate-400">{footerNote}</p>
    </aside>
  );
}
