import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeroAboutStyle from '../components/PageHeroAboutStyle';
import FaqAccordion from '../components/FaqAccordion';
import CaseStudyLongSection from '../components/case-studies/CaseStudyLongSection';
import CaseStudiesWorkGallery from '../components/case-studies/CaseStudiesWorkGallery';
import {
  buildCaseStudiesPageJsonLd,
  caseStudiesFaq,
  caseStudiesPageMeta,
  caseStudiesProofAtGlance,
  caseStudiesScopeBadges,
  caseStudiesTrustLogos,
  caseStudiesWorkGallery,
  smileDoctorsCaseStudy,
} from '../data/caseStudiesContent';

const CaseStudies: React.FC = () => {
  const structuredData = buildCaseStudiesPageJsonLd();

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

      <SEO
        title={caseStudiesPageMeta.title}
        description={caseStudiesPageMeta.description}
        faqStructuredData={caseStudiesFaq}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
        <PageHeroAboutStyle
          badge="Case study · Dental group"
          title="How The Smile Doctors passed 1300 new bookings in year one"
          description="A full-funnel partnership: custom website, SEO & GEO, Google and Meta ads, social and original content, plus signage, wraps, and print—measured against real booked patients, not vanity metrics."
          primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
          secondaryCta={{ to: '/services', label: 'View services' }}
        />

        <section id="proof" className="border-t border-slate-200/70 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/35 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
                  <Sparkles className="h-4 w-4" />
                  How we win
                </p>
                <h2 className="about-display mt-5 text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
                  Outcomes come from alignment—not one tactic
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  One operating system: tight positioning, clean measurement, fast creative iteration, and a single team owning web, discovery, demand capture, and on-location brand presence.
                </p>
                <ul className="mt-8 space-y-3">
                  {caseStudiesScopeBadges.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                      <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  {caseStudiesProofAtGlance.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-b from-white to-[#FAFAF9] p-7 shadow-sm dark:border-slate-700 dark:from-slate-900/60 dark:to-slate-900/20"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{s.label}</p>
                      <p className="about-display mt-3 text-4xl font-semibold tracking-tight text-blue-950 dark:text-white">{s.value}</p>
                      {s.sublabel ? <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{s.sublabel}</p> : null}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[2rem] border border-slate-200/80 bg-[#FAFAF9] p-6 dark:border-slate-700 dark:bg-slate-800/50">
                  <p className="text-sm font-semibold text-blue-950 dark:text-white">Read the full breakdown</p>
                  <div className="mt-4">
                    <a
                      href="#smile-doctors"
                      className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:text-blue-700 dark:bg-slate-900 dark:text-slate-100"
                    >
                      Go to case study
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CaseStudyLongSection study={smileDoctorsCaseStudy} showSideImage={false} tone="tinted" />

        <CaseStudiesWorkGallery items={caseStudiesWorkGallery} />

        <section id="trust" className="border-t border-slate-200/70 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/35 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Trust</p>
              <h2 className="about-display mt-2 text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
                Long-term operators choose one partner
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Logos only for now. When you are ready, we’ll swap in approved monochrome marks.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudiesTrustLogos.map((logo) =>
                logo.src ? (
                  <div
                    key={logo.name}
                    className="flex h-16 items-center justify-center rounded-3xl border border-slate-200/80 bg-[#FAFAF9] px-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50"
                  >
                    <img src={logo.src} alt="" className="max-h-9 w-auto opacity-80 dark:opacity-90" />
                  </div>
                ) : (
                  <div
                    key={logo.name}
                    className="flex h-16 items-center rounded-3xl border border-slate-200/80 bg-[#FAFAF9] px-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50"
                  >
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{logo.name}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-slate-200/70 bg-[#FAFAF9] dark:border-slate-800 dark:bg-slate-950">
          <FaqAccordion
            idPrefix="case-studies-faq"
            heading="Questions teams ask before committing"
            subheading="Measurement, scope, timelines, and what we need from you."
            items={caseStudiesFaq}
            className="!bg-transparent"
          />
        </section>

        <section id="cta" className="border-t border-slate-200/80 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 rounded-[2.25rem] border border-slate-200/80 bg-gradient-to-br from-[#FAFAF9] to-white p-10 shadow-sm dark:border-slate-700 dark:from-slate-900/60 dark:to-slate-900/20 md:p-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="about-display text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
                  Want a similar outcome?
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                  Tell us your market, capacity, and goals. We’ll map a practical sequence and what “winning” should look like within 90 days.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
                >
                  Book a strategy call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-blue-400/50"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;
