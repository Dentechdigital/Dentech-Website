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
    <div className="grid grid-cols-2 gap-1 rounded-xl bg-black/15 p-1" role="tablist" aria-label="Chat modes">
      {(['chat', 'faq'] as ChatMode[]).map((tab) => {
        const active = mode === tab;
        const item = config[tab];
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-150 ${
              active
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-white/90 hover:bg-white/10 hover:text-white'
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
