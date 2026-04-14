import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { useChatConfig } from './chat-config';
import type { ChatMessage } from './types';

const NEAR_BOTTOM_PX = 72;

type Props = {
  messages: ChatMessage[];
  loading: boolean;
};

export default function ChatMessages({ messages, loading }: Props) {
  const config = useChatConfig();
  const assistantLabel = config.assistantName;
  const assistantAvatarSrc = config.assistantAvatarSrc;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);
  /** Only updated from onScroll — not after layout grows, or we falsely think the user scrolled up. */
  const stickToBottomRef = useRef(true);
  const prevMessageCountRef = useRef(messages.length);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const distance = el.scrollHeight - el.scrollTop - el.clientHeight;
    stickToBottomRef.current = distance <= NEAR_BOTTOM_PX;
  }, []);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const count = messages.length;
    const last = messages[count - 1];
    const userJustSent = count > prevMessageCountRef.current && last?.role === 'user';
    prevMessageCountRef.current = count;

    if (userJustSent) {
      stickToBottomRef.current = true;
    }

    if (stickToBottomRef.current) {
      endRef.current?.scrollIntoView({ block: 'end', behavior: loading ? 'auto' : 'smooth' });
    }
  }, [messages, loading]);

  const typingLabel = assistantLabel ?? 'Assistant';

  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className="dchat-helpdesk-scroll min-h-0 flex-1 overflow-y-auto overscroll-y-contain rounded-xl bg-slate-50 px-3 py-2.5 dark:bg-slate-900/70"
    >
      <div className="mb-2 text-center text-[10px] font-medium uppercase tracking-wide text-slate-400">Today</div>
      <div className="space-y-3">
        {messages.map((message) =>
          message.role === 'user' ? (
            <div key={message.id} className="flex justify-end">
              <div className="dchat-bubble-enter max-w-[84%] rounded-2xl rounded-br-md bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-[13px] leading-relaxed text-white shadow-sm">
                {message.text}
              </div>
            </div>
          ) : (
            <div key={message.id} className="flex items-end justify-start gap-2">
              {assistantAvatarSrc ? (
                <img
                  src={assistantAvatarSrc}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 shrink-0 rounded-full border border-slate-200/90 bg-white object-cover shadow-sm dark:border-slate-600 dark:bg-slate-800"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className="h-9 w-9 shrink-0 rounded-full border border-slate-200 bg-slate-200 dark:border-slate-600 dark:bg-slate-700" aria-hidden />
              )}
              <div className="min-w-0 max-w-[calc(100%-2.75rem)] flex-1 sm:max-w-[min(84%,18rem)]">
                {assistantLabel ? (
                  <p className="mb-0.5 text-[11px] font-semibold leading-none text-blue-600 dark:text-blue-400">{assistantLabel}</p>
                ) : null}
                <div className="dchat-bubble-enter rounded-2xl rounded-bl-md bg-white px-3 py-2 text-[13px] leading-relaxed text-slate-800 shadow-sm dark:bg-slate-800 dark:text-slate-100">
                  {message.text}
                </div>
              </div>
            </div>
          ),
        )}
        {loading && (
          <div className="flex items-end justify-start gap-2">
            {assistantAvatarSrc ? (
              <img
                src={assistantAvatarSrc}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-full border border-slate-200/90 bg-white object-cover opacity-80 shadow-sm dark:border-slate-600 dark:bg-slate-800"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="h-9 w-9 shrink-0 rounded-full border border-slate-200 bg-slate-200 dark:border-slate-600 dark:bg-slate-700" aria-hidden />
            )}
            <div className="min-w-0 max-w-[calc(100%-2.75rem)] flex-1 sm:max-w-[min(84%,18rem)]">
              {assistantLabel ? (
                <p className="mb-0.5 text-[11px] font-semibold leading-none text-blue-600 dark:text-blue-400">{assistantLabel}</p>
              ) : null}
              <div className="dchat-typing-bubble dchat-bubble-enter rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm dark:bg-slate-800">
                <span className="sr-only">{typingLabel} is typing</span>
                <span className="inline-flex items-center gap-1.5" aria-hidden>
                  <span className="dchat-dot h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <span className="dchat-dot h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <span className="dchat-dot h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500" />
                </span>
              </div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
}
