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
    <div className="grid grid-cols-2 rounded-xl bg-black/10 p-1 backdrop-blur-sm" role="tablist" aria-label="Chat modes">
      {(['chat', 'faq'] as ChatMode[]).map((tab) => {
        const active = mode === tab;
        const item = config[tab];
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
              active
                ? 'bg-white/16 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]'
                : 'text-blue-100/90 hover:text-white'
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
