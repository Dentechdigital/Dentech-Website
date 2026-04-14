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

/** Too generic for word-overlap matching — e.g. "what" must not match every "What …" seed. */
const FAQ_WORD_STOP = new Set([
  'what',
  'when',
  'where',
  'which',
  'who',
  'whom',
  'whose',
  'that',
  'this',
  'these',
  'those',
  'with',
  'from',
  'have',
  'has',
  'had',
  'does',
  'did',
  'your',
  'you',
  'are',
  'was',
  'were',
  'their',
  'there',
  'here',
  'about',
  'into',
  'after',
  'before',
  'during',
  'while',
  'also',
  'most',
  'some',
  'such',
  'than',
  'then',
  'them',
  'very',
  'just',
  'only',
  'both',
  'each',
  'will',
  'would',
  'could',
  'should',
  'been',
  'being',
  'over',
  'more',
  'other',
  'any',
  'all',
  'work',
  'much',
  'many',
  'like',
  'make',
  'take',
  'give',
  'come',
  'look',
  'find',
  'keep',
  'want',
  'know',
  'help',
  'need',
]);

function normalizePromptText(raw: string): string {
  return raw
    .toLowerCase()
    .trim()
    .replace(/[!?.]+$/g, '')
    .trim();
}

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

function seedTexts(faq: ChatFaqItem): string[] {
  return [faq.question, ...faq.prompts];
}

/**
 * Match user text to an FAQ item (used by Netlify function and chat widget).
 * Supports short prompts (e.g. "pricing") and long natural questions.
 */
export function findFaqMatchForPrompt(prompt: string, faqs: ChatFaqItem[]): ChatFaqItem | null {
  const normalized = normalizePromptText(prompt);
  if (!normalized) return null;
  if (isSmallTalkOnly(normalized)) return null;

  const exact = faqs.find((faq) =>
    seedTexts(faq).some((seed) => normalizePromptText(seed) === normalized),
  );
  if (exact) return exact;

  return (
    faqs.find((faq) =>
      seedTexts(faq).some((seed) => {
        const s = seed.toLowerCase();
        const prefix = s.slice(0, 14);
        if (prefix.length >= 4 && normalized.includes(prefix)) return true;
        if (normalized.length >= 4 && normalized.length <= 80 && s.includes(normalized)) return true;
        const words = normalized
          .split(/\s+/)
          .map((w) => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''))
          .filter((w) => w.length >= 4 && !FAQ_WORD_STOP.has(w.toLowerCase()));
        if (words.some((w) => s.includes(w))) return true;
        return false;
      }),
    ) ?? null
  );
}
