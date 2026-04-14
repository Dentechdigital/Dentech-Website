import React from 'react';
import { MessageCircle, Search } from 'lucide-react';
import type { ChatMode } from '../../types/chatbot';

type Props = {
  mode: ChatMode;
  onChange: (mode: ChatMode) => void;
};

export default function ChatTabs({ mode, onChange }: Props) {
  const config: Record<ChatMode, { label: string; icon: React.ReactNode }> = {
    chat: { label: 'Chat', icon: <MessageCircle size={12} /> },
    faq: { label: 'Helpdesk', icon: <Search size={12} /> },
  };

  return (
    <div className="grid grid-cols-2 rounded-lg bg-white/20 p-1 backdrop-blur-sm dark:bg-slate-800/60" role="tablist" aria-label="Chat modes">
      {(['faq', 'chat'] as ChatMode[]).map((tab) => {
        const active = mode === tab;
        const item = config[tab];
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              active
                ? 'bg-white text-blue-700 shadow-sm dark:bg-slate-100 dark:text-blue-700'
                : 'text-blue-100/90 hover:text-white dark:text-slate-300 dark:hover:text-white'
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
