import type { ChatFaqItem } from './types';

/**
 * Match user text to an FAQ item (used by Netlify function and chat widget).
 * Supports short prompts (e.g. "pricing") and long natural questions.
 */
export function findFaqMatchForPrompt(prompt: string, faqs: ChatFaqItem[]): ChatFaqItem | null {
  const normalized = prompt.toLowerCase().trim();
  if (!normalized) return null;

  return (
    faqs.find((faq) =>
      [faq.question, ...faq.prompts].some((seed) => {
        const s = seed.toLowerCase();
        const prefix = s.slice(0, 14);
        if (prefix.length >= 4 && normalized.includes(prefix)) return true;
        if (normalized.length >= 2 && normalized.length <= 80 && s.includes(normalized)) return true;
        const words = normalized.split(/\s+/).filter((w) => w.length >= 4);
        if (words.some((w) => s.includes(w))) return true;
        return false;
      }),
    ) ?? null
  );
}
