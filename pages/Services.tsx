import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeroAboutStyle from '../components/PageHeroAboutStyle';
import ServicesComponent from '../components/Services';
import FaqAccordion from '../components/FaqAccordion';
import { SectionGradientEmphasis } from '../components/SectionGradientEmphasis';
import { buildServicesHubJsonLd, servicesHub, servicesHubFaq } from '../data/servicesContent';

const ServicesPage: React.FC = () => {
  const structuredData = buildServicesHubJsonLd();

  return (
    <>
      <SEO
        title={servicesHub.metaTitle}
        description={servicesHub.metaDescription}
        faqStructuredData={servicesHubFaq}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
        <PageHeroAboutStyle
          badge="Services · Canada-wide"
          title={
            <>
              Dental marketing services built for <SectionGradientEmphasis>Canadian practices</SectionGradientEmphasis>
            </>
          }
          description={servicesHub.intro}
          primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
          secondaryCta={{ to: '/about', label: 'How we work' }}
        />

        <section className="border-b border-slate-200/60 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/35" aria-labelledby="funnel-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="funnel-heading"
              className="text-center text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl"
            >
              Why work with Dentech across the full funnel
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {servicesHub.funnelPitch.map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-slate-200/90 bg-[#FAFAF9] p-6 dark:border-slate-700 dark:bg-slate-800/60"
                >
                  <h3 className="font-semibold text-blue-950 dark:text-white">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesComponent showSectionHeader={false} />

        <FaqAccordion
          idPrefix="services-hub"
          heading={
            <>
              Services <SectionGradientEmphasis>FAQs</SectionGradientEmphasis>
            </>
          }
          subheading="General questions about working with us across SEO, GEO, paid media, web, content, print, and AI."
          items={servicesHubFaq}
        />

        <section className="border-t border-slate-200/80 bg-white py-14 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg font-medium text-blue-950 dark:text-white">Not sure where to start?</p>
            <p className="mx-auto mt-2 max-w-xl text-slate-600 dark:text-slate-300">
              Tell us about your market and capacity—we&rsquo;ll recommend a practical sequence, whether you need one channel
              or the full stack.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
