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
  faq: BlogFaqItem[];
  bodyMarkdown: string;
  keyTakeaways: string[];
  /** Optional card teaser; defaults to metaDescription */
  excerpt?: string;
};
