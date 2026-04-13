import React from 'react';

type Props = {
  open: boolean;
  onClick: () => void;
};

export default function ChatLauncher({ open, onClick }: Props) {
  return (
    <button
      type="button"
      aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
      onClick={onClick}
      className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-[1.03] hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
    >
      <span className="text-lg font-semibold">{open ? '×' : 'AI'}</span>
    </button>
  );
}
