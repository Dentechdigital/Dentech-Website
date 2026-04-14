import React, { useState } from 'react';
import { Paperclip, SendHorizontal, Smile } from 'lucide-react';

type Props = {
  onSubmit: (value: string) => void;
  disabled?: boolean;
  compact?: boolean;
};

export default function ChatInput({ onSubmit, disabled = false, compact = false }: Props) {
  const [value, setValue] = useState('');

  return (
    <form
      className="mt-3 rounded-xl border border-slate-200 bg-white p-2 transition duration-200 focus-within:border-blue-300 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.12)] dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-blue-500"
      onSubmit={(event) => {
        event.preventDefault();
        const trimmed = value.trim();
        if (!trimmed || disabled) return;
        onSubmit(trimmed);
        setValue('');
      }}
    >
      <label htmlFor="chat-input" className="sr-only">
        Ask Dentech chatbot
      </label>
      <div className="flex items-end gap-2">
        <textarea
          id="chat-input"
          rows={compact ? 1 : 2}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              const trimmed = value.trim();
              if (!trimmed || disabled) return;
              onSubmit(trimmed);
              setValue('');
            }
          }}
          placeholder="Compose your message..."
          className="min-h-[2.2rem] flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100"
        />
        <div className="mb-1 flex items-center gap-1 text-slate-400">
          <button type="button" aria-label="Attach file" className="rounded p-1 transition hover:bg-slate-100 dark:hover:bg-slate-800">
            <Paperclip size={15} />
          </button>
          <button type="button" aria-label="Insert emoji" className="rounded p-1 transition hover:bg-slate-100 dark:hover:bg-slate-800">
            <Smile size={15} />
          </button>
          <button
            type="submit"
            aria-label="Send message"
            disabled={disabled || !value.trim()}
            className="rounded-full bg-blue-600 p-2 text-white transition-[background-color,filter] duration-120 ease-out hover:bg-blue-700 hover:brightness-105 active:brightness-[0.96] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <SendHorizontal size={14} />
          </button>
        </div>
      </div>
    </form>
  );
}
