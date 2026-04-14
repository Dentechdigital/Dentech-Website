import React from 'react';

type Props = {
  prompts: string[];
  onPromptClick: (prompt: string) => void;
  disabled?: boolean;
};

export default function QuickPrompts({ prompts, onPromptClick, disabled = false }: Props) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
        Quick starts
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {prompts.slice(0, 6).map((prompt) => (
          <button
            key={prompt}
            type="button"
            disabled={disabled}
            onClick={() => onPromptClick(prompt)}
            className="dchat-bubble-enter shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-800 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-200"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
