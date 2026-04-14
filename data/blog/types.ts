export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  /** ISO date YYYY-MM-DD */
  publishedAt: string;
  /** Page H1 */
  title: string;
  /** Passed to SEO title (suffix added in SEO component) */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroImageAlt: string;
  /** Full-bleed hero on post detail (public path). */
  heroImageSrc?: string;
  /** Optional Tailwind classes for hero image positioning. */
  heroImageClassName?: string;
  /** Thumbnail on blog index cards. */
  cardImageSrc?: string;
  faq: BlogFaqItem[];
  bodyMarkdown: string;
  keyTakeaways: string[];
  /** Optional card teaser; defaults to metaDescription */
  excerpt?: string;
};
