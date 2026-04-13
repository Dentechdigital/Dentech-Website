import React, { useState } from 'react';

type Props = {
  onSubmit: (value: string) => void;
  disabled?: boolean;
};

export default function ChatInput({ onSubmit, disabled = false }: Props) {
  const [value, setValue] = useState('');

  return (
    <form
      className="mt-3 flex items-end gap-2"
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
      <textarea
        id="chat-input"
        rows={2}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Tell me your clinic goal (more bookings, better ROI, faster growth)..."
        className="min-h-[2.75rem] flex-1 resize-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-500 dark:focus:ring-blue-900/30"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Send
      </button>
    </form>
  );
}
