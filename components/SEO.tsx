import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_ORIGIN } from '../data/aboutContent';
import { DEFAULT_OG_IMAGE } from '../data/seoDefaults';

export type FaqStructuredItem = {
  question: string;
  answer: string;
};

interface SEOProps {
  title: string;
  description: string;
  faqStructuredData?: FaqStructuredItem[];
  /** Additional JSON-LD object (e.g. @graph for Organization + WebPage on About). */
  structuredData?: Record<string, unknown> | null;
  /** Optional override for canonical URL. */
  canonicalUrl?: string;
  /** Absolute or site-root image for Open Graph / Twitter. */
  ogImage?: string;
  /** Soft-404 and utility pages should not be indexed. */
  noIndex?: boolean;
}

function documentTitle(pageTitle: string): string {
  const trimmed = pageTitle.trim();
  if (/dentech digital/i.test(trimmed)) return trimmed;
  return `${trimmed} | Dentech Digital`;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  faqStructuredData,
  structuredData,
  canonicalUrl,
  ogImage,
  noIndex = false,
}) => {
  const location = useLocation();
  const canonical = canonicalUrl ?? `${SITE_ORIGIN}${location.pathname}`;
  const fullTitle = documentTitle(title);
  const shareImage = ogImage ?? DEFAULT_OG_IMAGE;

  const faqJsonLd = useMemo(() => {
    if (!faqStructuredData?.length) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqStructuredData.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }, [faqStructuredData]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <link rel="canonical" href={canonical} />
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Dentech Digital" />
      <meta property="og:image" content={shareImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      ) : null}
    </Helmet>
  );
};

export default SEO;
