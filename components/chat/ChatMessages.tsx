import React, { useEffect, useRef } from 'react';
import type { ChatMessage } from '../../types/chatbot';

type Props = {
  messages: ChatMessage[];
  loading: boolean;
};

export default function ChatMessages({ messages, loading }: Props) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div className="h-full min-h-[14rem] overflow-y-auto rounded-xl bg-slate-50 px-3 py-2.5 dark:bg-slate-900/70">
      <div className="mb-2 text-center text-[10px] font-medium uppercase tracking-wide text-slate-400">Today</div>
      <div className="space-y-2.5">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[84%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed shadow-sm ${
                message.role === 'user'
                  ? 'rounded-br-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : 'rounded-bl-md bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100'
              } dchat-bubble-enter`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-white px-3 py-2 text-sm text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300">
              <span className="inline-flex items-center gap-1">
                <span className="dchat-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span className="dchat-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span className="dchat-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
              </span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
}
