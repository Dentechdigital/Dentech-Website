import React from 'react';

type Props = {
  open: boolean;
  onClick: () => void;
};

export default function ChatLauncher({ open, onClick }: Props) {
  return (
    <button
      type="button"
      aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
      onClick={onClick}
      className="pointer-events-auto group relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_12px_32px_rgba(37,99,235,0.35)] transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
    >
      <img
        src="/avatar.webp"
        alt=""
        aria-hidden
        width={56}
        height={56}
        className={`h-full w-full object-cover transition duration-300 ${open ? 'scale-105 opacity-80' : 'scale-100 opacity-95 group-hover:opacity-100'}`}
        loading="lazy"
        decoding="async"
      />
      <span className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full border border-white bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.2)]" />
      {open && (
        <span className="absolute inset-0 grid place-items-center bg-slate-950/35 text-xl font-medium text-white backdrop-blur-[1px]">
          ×
        </span>
      )}
    </button>
  );
}
