import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import PageHeroAboutStyle from '../components/PageHeroAboutStyle';

const CaseStudies: React.FC = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <style>{`
        .about-display { font-family: 'Fraunces', Georgia, 'Times New Roman', serif; }
      `}</style>

      <SEO title="Case Studies" description="Read our success stories and see how we've helped other clients." />

      <div className="min-h-screen bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
        <PageHeroAboutStyle
          badge="Proof · Outcomes"
          title="Case studies"
          description="Discover how we have transformed businesses across various industries. Real results, real growth."
          primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
          secondaryCta={{ to: '/services', label: 'View services' }}
        />

        <section className="border-t border-slate-200/70 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/35">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="max-w-3xl text-slate-600 dark:text-slate-300">
              Case study content will appear here as we publish detailed write-ups.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;
