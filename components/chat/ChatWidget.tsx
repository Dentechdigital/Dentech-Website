import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChatProvider, useChat } from './ChatProvider';
import ChatLauncher from './ChatLauncher';
import ChatPanel from './ChatPanel';
import ChatTeaser from './ChatTeaser';
import { trackChatEvent } from './chatbotAnalytics';

function playTeaserSound() {
  if (typeof window === 'undefined') return;
  const AudioContextCtor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextCtor) return;
  const context = new AudioContextCtor();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = 680;
  gain.gain.value = 0.03;
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.08);
}

function ChatWidgetInner() {
  const { mode, setMode, messages, loading, error, suggestedCtas, suggestedPrompts, sendPrompt } = useChat();
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [canPlaySound, setCanPlaySound] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function armSound() {
      setCanPlaySound(true);
      window.removeEventListener('pointerdown', armSound);
      window.removeEventListener('keydown', armSound);
    }
    window.addEventListener('pointerdown', armSound, { once: true });
    window.addEventListener('keydown', armSound, { once: true });
    return () => {
      window.removeEventListener('pointerdown', armSound);
      window.removeEventListener('keydown', armSound);
    };
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShowTeaser(true);
      if (canPlaySound) playTeaserSound();
    }, 7000);
    return () => window.clearTimeout(timeout);
  }, [canPlaySound]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col items-end sm:bottom-6 sm:right-6">
      <ChatTeaser
        visible={showTeaser && !open}
        onClick={() => {
          trackChatEvent('chat_teaser_click', { mode });
          setOpen(true);
          setShowTeaser(false);
        }}
      />
      <ChatPanel
        open={open}
        mode={mode}
        onModeChange={setMode}
        onSubmit={async (prompt, source = 'input') => {
          if (!open) setOpen(true);
          if (source === 'prompt') trackChatEvent('chat_prompt_click', { mode });
          await sendPrompt(prompt, source);
        }}
        prompts={suggestedPrompts}
        loading={loading}
        messages={messages}
        ctas={suggestedCtas}
        error={error}
        onClose={() => setOpen(false)}
        onCtaClick={(to) => trackChatEvent('chat_cta_click', { mode, source: to })}
      />
      <ChatLauncher
        open={open}
        onClick={() => {
          const next = !open;
          setOpen(next);
          if (next) trackChatEvent('chat_open', { mode });
        }}
      />
    </div>
  );
}

export default function ChatWidget() {
  return (
    <ChatProvider>
      <ChatWidgetInner />
    </ChatProvider>
  );
}
