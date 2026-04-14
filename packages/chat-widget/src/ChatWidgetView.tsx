import React, { useEffect, useState } from 'react';
import { useChatConfig } from './chat-config';
import { useChat } from './ChatProvider';
import ChatLauncher from './ChatLauncher';
import ChatPanel from './ChatPanel';
import ChatTeaser from './ChatTeaser';

function playTeaserSound(audioContext?: AudioContext | null) {
  if (typeof window === 'undefined') return;
  const AudioContextCtor =
    window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextCtor) return;
  const context = audioContext ?? new AudioContextCtor();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = 680;
  gain.gain.value = 0.03;
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(context.currentTime + 0.01);
  oscillator.stop(context.currentTime + 0.08);
}

export type ChatWidgetViewProps = {
  /** When this value changes (e.g. pathname + hash), the panel closes. Omit to disable route-driven close. */
  routeKey?: string;
};

export default function ChatWidgetView({ routeKey }: ChatWidgetViewProps) {
  const config = useChatConfig();
  const { mode, setMode, messages, loading, suggestedPrompts, conversionStage, leadScore, sendPrompt } = useChat();
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [canPlaySound, setCanPlaySound] = useState(false);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const teaserSoundPlayedRef = React.useRef(false);
  const teaserDelayMs = config.teaserDelayMs ?? 7000;

  useEffect(() => {
    function armSound() {
      setCanPlaySound(true);
      if (typeof window !== 'undefined' && !audioContextRef.current) {
        const AudioContextCtor =
          window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (AudioContextCtor) {
          audioContextRef.current = new AudioContextCtor();
        }
      }
      void audioContextRef.current?.resume?.();
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
    }, teaserDelayMs);
    return () => window.clearTimeout(timeout);
  }, [teaserDelayMs]);

  useEffect(() => {
    if (!showTeaser || open || !canPlaySound || teaserSoundPlayedRef.current) return;
    teaserSoundPlayedRef.current = true;
    const raf = window.requestAnimationFrame(() => {
      playTeaserSound(audioContextRef.current);
    });
    return () => window.cancelAnimationFrame(raf);
  }, [showTeaser, open, canPlaySound]);

  useEffect(() => {
    if (routeKey === undefined) return;
    setOpen(false);
  }, [routeKey]);

  return (
    <div className="pointer-events-none fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-[60] flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <ChatTeaser
        visible={showTeaser && !open}
        title={config.teaserTitle}
        body={config.teaserBody}
        statusLine={config.teaserStatusLine}
        primaryCta={config.teaserPrimaryCta}
        secondaryCta={config.teaserSecondaryCta}
        footerNote={config.teaserFooterNote}
        miniAvatarSrcs={config.headerAvatarSrcs}
        onPrimaryClick={() => {
          config.onTrack?.('chat_teaser_click', { mode });
          setMode('chat');
          setOpen(true);
          setShowTeaser(false);
        }}
        onSecondaryClick={() => {
          config.onTrack?.('chat_teaser_click', { mode, source: 'helpdesk' });
          setMode('faq');
          setShowTeaser(false);
          setOpen(true);
        }}
        onDismiss={() => setShowTeaser(false)}
      />
      <ChatPanel
        open={open}
        mode={mode}
        onModeChange={setMode}
        onSubmit={async (prompt, source = 'input') => {
          if (!open) setOpen(true);
          if (source === 'prompt') config.onTrack?.('chat_prompt_click', { mode });
          await sendPrompt(prompt, source);
        }}
        prompts={suggestedPrompts}
        loading={loading}
        messages={messages}
        onClose={() => setOpen(false)}
        onCtaClick={(to) => config.onTrack?.('chat_cta_click', { mode, source: to })}
        conversionStage={conversionStage}
        leadScore={leadScore}
      />
      <ChatLauncher
        open={open}
        launcherBadgeSrc={config.launcherBadgeSrc}
        assistantName={config.assistantName}
        onClick={() => {
          const next = !open;
          setOpen(next);
          if (next) config.onTrack?.('chat_open', { mode });
        }}
      />
    </div>
  );
}
