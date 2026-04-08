import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

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
}

const SEO: React.FC<SEOProps> = ({ title, description, faqStructuredData, structuredData }) => {
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
      <title>{title} | Dentech Digital</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Dentech Digital`} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
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
