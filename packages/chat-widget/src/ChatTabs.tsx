import React from 'react';
import { MessageCircle, Search } from 'lucide-react';
import type { ChatMode } from './types';

type Props = {
  mode: ChatMode;
  onChange: (mode: ChatMode) => void;
  chatLabel: string;
  helpdeskLabel: string;
};

export default function ChatTabs({ mode, onChange, chatLabel, helpdeskLabel }: Props) {
  const tabs: Record<ChatMode, { label: string; icon: React.ReactNode }> = {
    chat: { label: chatLabel, icon: <MessageCircle size={12} /> },
    faq: { label: helpdeskLabel, icon: <Search size={12} /> },
  };

  return (
    <div
      className="grid w-full grid-cols-2 gap-1 rounded-xl bg-slate-200/90 p-1 dark:bg-slate-800/90"
      role="tablist"
      aria-label="Chat modes"
    >
      {(['chat', 'faq'] as ChatMode[]).map((tab) => {
        const active = mode === tab;
        const item = tabs[tab];
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-150 ${
              active
                ? 'bg-white text-blue-700 shadow-sm dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/80 dark:hover:text-white'
            }`}
            onClick={() => onChange(tab)}
          >
            <span className="inline-flex items-center gap-1.5">
              {item.icon}
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
