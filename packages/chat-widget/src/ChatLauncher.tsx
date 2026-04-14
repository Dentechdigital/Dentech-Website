import React from 'react';
import { X } from 'lucide-react';

type Props = {
  open: boolean;
  onClick: () => void;
  /** Full-bleed circular avatar image for the launcher (e.g. Maya). */
  launcherBadgeSrc: string;
  /** Used for accessible labels (e.g. “Open chat with Maya”). */
  assistantName?: string;
};

export default function ChatLauncher({ open, onClick, launcherBadgeSrc, assistantName }: Props) {
  const label = assistantName ?? 'assistant';
  return (
    <button
      type="button"
      aria-label={open ? `Close chat with ${label}` : `Open chat with ${label}`}
      onClick={onClick}
      className={`pointer-events-auto relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-slate-100 shadow-[0_10px_32px_rgba(37,99,235,0.42)] transition duration-300 ease-out hover:scale-[1.06] hover:shadow-[0_14px_40px_rgba(37,99,235,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:border-slate-800 dark:bg-slate-800 dark:shadow-[0_10px_32px_rgba(15,23,42,0.65)] ${
        open ? 'scale-[1.02] ring-2 ring-blue-500/45 ring-offset-2 ring-offset-white dark:ring-offset-slate-950' : 'dchat-fab-idle'
      }`}
    >
      <img
        src={launcherBadgeSrc}
        alt=""
        width={56}
        height={56}
        className={`h-full w-full object-cover transition duration-300 ease-out ${open ? 'scale-95 brightness-[0.88]' : 'scale-100 brightness-100'}`}
        loading="lazy"
        decoding="async"
      />
      {!open && (
        <span
          className="pointer-events-none absolute bottom-0.5 right-0.5 z-10 h-3.5 w-3.5 rounded-full border-[2.5px] border-white bg-emerald-500 shadow-[0_0_0_1px_rgba(16,185,129,0.35)] dark:border-slate-900"
          aria-hidden />
      )}
      {open && (
        <span
          className="absolute inset-0 grid place-items-center bg-gradient-to-t from-slate-900/55 to-slate-900/25 text-white backdrop-blur-[2px]"
          aria-hidden
        >
          <X className="h-7 w-7 drop-shadow-md" strokeWidth={2.25} />
        </span>
      )}
    </button>
  );
}
