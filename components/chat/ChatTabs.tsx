import React from 'react';
import type { ChatMode } from '../../types/chatbot';

type Props = {
  mode: ChatMode;
  onChange: (mode: ChatMode) => void;
};

export default function ChatTabs({ mode, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 rounded-lg bg-white/20 p-1 backdrop-blur-sm dark:bg-slate-800/60" role="tablist" aria-label="Chat modes">
      {(['faq', 'chat'] as ChatMode[]).map((tab) => {
        const active = mode === tab;
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
            {tab === 'faq' ? 'Quick Answers' : 'Strategy Chat'}
          </button>
        );
      })}
    </div>
  );
}
