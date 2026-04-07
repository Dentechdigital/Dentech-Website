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
}

const SEO: React.FC<SEOProps> = ({ title, description, faqStructuredData }) => {
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
      <title>{title} | Our Agency</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Our Agency`} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
    </Helmet>
  );
};

export default SEO;
