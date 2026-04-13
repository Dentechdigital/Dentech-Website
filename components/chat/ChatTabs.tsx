import React from 'react';
import type { ChatMode } from '../../types/chatbot';

type Props = {
  mode: ChatMode;
  onChange: (mode: ChatMode) => void;
};

export default function ChatTabs({ mode, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 rounded-xl bg-slate-100 p-1 dark:bg-slate-800" role="tablist" aria-label="Chat modes">
      {(['faq', 'chat'] as ChatMode[]).map((tab) => {
        const active = mode === tab;
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
              active
                ? 'bg-white text-blue-700 shadow-sm dark:bg-slate-700 dark:text-blue-300'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
            onClick={() => onChange(tab)}
          >
            {tab === 'faq' ? 'Quick Answers' : 'Live Chat'}
          </button>
        );
      })}
    </div>
  );
}
