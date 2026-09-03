import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeroAboutStyle from '../components/PageHeroAboutStyle';
import GrowthPackages from '../components/GrowthPackages';
import FaqAccordion from '../components/FaqAccordion';
import { SectionGradientEmphasis } from '../components/SectionGradientEmphasis';
import { packagesFaq, packagesHowItWorks } from '../data/packagesContent';

export default function Packages() {
  return (
    <>
      <SEO
        title="Dental Marketing Packages | Ontario & Quebec"
        description="Three dental growth packages for Ontario and Quebec clinics: Core Patient Engine, Brand Dominance, and Practice Expansion—scoped on a strategy call."
        faqStructuredData={[...packagesFaq]}
      />

      <div className="min-h-screen bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
        <PageHeroAboutStyle
          badge="Packages · Ontario & Quebec"
          title={
            <>
              Growth packages built to fill <SectionGradientEmphasis>chairs</SectionGradientEmphasis>
            </>
          }
          description="Three clinic-stage systems—not a public price list. Compare Core, Brand Dominance, and Expansion, then we scope channels, the Dentech portal, and kickoff on a strategy call."
          primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
          secondaryCta={{ to: '/services', label: 'See services' }}
        />

        <section className="border-b border-slate-200/60 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/35 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-4xl">
              How we <SectionGradientEmphasis>scope a package</SectionGradientEmphasis>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-slate-300">
              Same process for a single Ottawa clinic or a multi-location group—written scope before anything is binding.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {packagesHowItWorks.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-200/90 bg-[#FAFAF9] p-6 dark:border-slate-700 dark:bg-slate-800/60"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                    {item.step}
                  </p>
                  <h3 className="mt-2 font-semibold text-blue-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GrowthPackages compactIntro />

        <FaqAccordion
          idPrefix="packages"
          heading={
            <>
              Packages <SectionGradientEmphasis>FAQs</SectionGradientEmphasis>
            </>
          }
          subheading="How tiers, retainers, and quotes work for Ontario and Quebec clinics."
          items={[...packagesFaq]}
        />

        <section className="border-t border-slate-200/80 bg-white py-14 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg font-medium text-blue-950 dark:text-white">Ready to match a tier to your market?</p>
            <p className="mx-auto mt-2 max-w-xl text-slate-600 dark:text-slate-300">
              Share catchment, capacity, and the procedures you want to grow. We’ll recommend a tier and a practical first 90 days.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Book a strategy call
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
