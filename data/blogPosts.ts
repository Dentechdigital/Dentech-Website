import type { BlogPost } from './blog/types';
import {
  postGeoAiDiscovery,
  postGoogleAdsVsMeta,
  postLocalSeoCanada,
} from './blog/articles/articles-01-03';
import {
  postMultiLocation,
  postPrivacyMarketing,
  postReputationReviews,
  postWebsiteConversion,
} from './blog/articles/articles-04-07';
import {
  postAnalyticsAttribution,
  postContentStrategy,
  postMarketingCalendar,
} from './blog/articles/articles-08-10';
import { postCallAnswerTraining, postHiringMarketingAgency } from './blog/articles/articles-11-12';

const all: BlogPost[] = [
  postLocalSeoCanada,
  postGeoAiDiscovery,
  postGoogleAdsVsMeta,
  postWebsiteConversion,
  postMultiLocation,
  postReputationReviews,
  postPrivacyMarketing,
  postContentStrategy,
  postAnalyticsAttribution,
  postMarketingCalendar,
  postCallAnswerTraining,
  postHiringMarketingAgency,
];

/** Sorted newest first */
export const blogPosts: BlogPost[] = [...all].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

const bySlug: Record<string, BlogPost> = {};
for (const p of all) {
  bySlug[p.slug] = p;
}

export function getBlogPostBySlug(slug: string | undefined): BlogPost | null {
  if (!slug) return null;
  return bySlug[slug] ?? null;
}

export function getAllBlogPostsSorted(): BlogPost[] {
  return blogPosts;
}
