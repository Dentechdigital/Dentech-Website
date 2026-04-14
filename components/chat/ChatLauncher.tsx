import React from 'react';
import { MessageCircle } from 'lucide-react';

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
      className={`pointer-events-auto group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-[0_14px_30px_rgba(37,99,235,0.45)] transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
        open ? '' : 'dchat-fab-idle'
      }`}
    >
      <MessageCircle size={22} className={`transition ${open ? 'opacity-0' : 'opacity-100'}`} />
      <img
        src="/avatar-80w.webp"
        alt=""
        aria-hidden
        width={20}
        height={20}
        className="absolute -right-0.5 -top-0.5 h-5 w-5 rounded-full border-2 border-white object-cover"
        loading="lazy"
        decoding="async"
      />
      {open && (
        <span className="absolute inset-0 grid place-items-center text-xl font-medium text-white">
          ×
        </span>
      )}
    </button>
  );
}
