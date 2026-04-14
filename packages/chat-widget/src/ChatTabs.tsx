import React from 'react';
import { MessageCircle, Search } from 'lucide-react';
import type { ChatMode } from './types';

type Props = {
  mode: ChatMode;
  onChange: (mode: ChatMode) => void;
  chatLabel: string;
  helpdeskLabel: string;
  /** `brand` = translucent track on blue gradient header; `neutral` = light gray track */
  surface?: 'neutral' | 'brand';
};

export default function ChatTabs({ mode, onChange, chatLabel, helpdeskLabel, surface = 'neutral' }: Props) {
  const tabs: Record<ChatMode, { label: string; icon: React.ReactNode }> = {
    chat: { label: chatLabel, icon: <MessageCircle size={12} /> },
    faq: { label: helpdeskLabel, icon: <Search size={12} /> },
  };

  const track =
    surface === 'brand'
      ? 'bg-black/20'
      : 'bg-slate-200/90 dark:bg-slate-800/90';

  return (
    <div className={`grid w-full grid-cols-2 gap-1 rounded-xl p-1 ${track}`} role="tablist" aria-label="Chat modes">
      {(['chat', 'faq'] as ChatMode[]).map((tab) => {
        const active = mode === tab;
        const item = tabs[tab];
        const activeCls =
          surface === 'brand'
            ? 'bg-white text-blue-700 shadow-sm'
            : 'bg-white text-blue-700 shadow-sm dark:bg-slate-700 dark:text-white';
        const inactiveCls =
          surface === 'brand'
            ? 'text-white/90 hover:bg-white/10 hover:text-white'
            : 'text-slate-600 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/80 dark:hover:text-white';
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-150 ${
              active ? activeCls : inactiveCls
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
