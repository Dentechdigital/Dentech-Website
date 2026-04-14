import type { ChatFaqItem } from './types';

/** Tokens that alone (or combined only with each other) should not trigger an FAQ match — avoids "hi" matching "this"/"high". */
const SMALL_TALK_TOKENS = new Set([
  'hi',
  'hey',
  'hello',
  'yo',
  'sup',
  'hiya',
  'thanks',
  'thank',
  'you',
  'ok',
  'okay',
  'yes',
  'no',
  'bye',
  'goodbye',
  'morning',
  'afternoon',
  'evening',
  'good',
  'there',
  'everyone',
  'maya',
  'team',
  'all',
]);

function isSmallTalkOnly(normalized: string): boolean {
  const cleaned = normalized.replace(/[!?.]+$/g, '').trim();
  if (!cleaned) return true;
  const tokens = cleaned
    .split(/\s+/)
    .map((w) => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''))
    .filter(Boolean);
  if (tokens.length === 0) return true;
  return tokens.every((t) => SMALL_TALK_TOKENS.has(t.toLowerCase()));
}

/**
 * Match user text to an FAQ item (used by Netlify function and chat widget).
 * Supports short prompts (e.g. "pricing") and long natural questions.
 */
export function findFaqMatchForPrompt(prompt: string, faqs: ChatFaqItem[]): ChatFaqItem | null {
  const normalized = prompt.toLowerCase().trim();
  if (!normalized) return null;
  if (isSmallTalkOnly(normalized)) return null;

  return (
    faqs.find((faq) =>
      [faq.question, ...faq.prompts].some((seed) => {
        const s = seed.toLowerCase();
        const prefix = s.slice(0, 14);
        if (prefix.length >= 4 && normalized.includes(prefix)) return true;
        // Require length ≥4 so "hi" does not match inside "this", "high", etc.
        if (normalized.length >= 4 && normalized.length <= 80 && s.includes(normalized)) return true;
        const words = normalized.split(/\s+/).filter((w) => w.length >= 4);
        if (words.some((w) => s.includes(w))) return true;
        return false;
      }),
    ) ?? null
  );
}
