import { SITE_ORIGIN } from './aboutContent';
import type { BlogPost } from './blog/types';

export function blogPostPath(slug: string): string {
  return `/blog/${slug}`;
}

export function buildBlogArticleJsonLd(post: BlogPost): Record<string, unknown> {
  const url = `${SITE_ORIGIN}${blogPostPath(post.slug)}`;
  const published = post.publishedAt;

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_ORIGIN}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const blogPosting = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: post.heroUnsplashUrl,
    datePublished: published,
    dateModified: published,
    author: {
      '@type': 'Organization',
      name: 'Dentech Digital',
      url: SITE_ORIGIN,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dentech Digital',
      url: SITE_ORIGIN,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumb, blogPosting],
  };
}

export const blogIndexMeta = {
  metaTitle: 'Dental marketing insights for Canadian clinics',
  metaDescription:
    'Practical guides on local SEO, GEO, paid media, websites, and growth for dental practices in Ottawa and across Canada—from Dentech Digital.',
} as const;
