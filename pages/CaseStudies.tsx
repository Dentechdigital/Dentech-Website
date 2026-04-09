import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
  caseStudiesToc,
  caseStudiesTrustLogos,
  caseStudiesWorkGallery,
  dwincRed3CaseStudy,
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
          badge="Proof · Outcomes"
          title="Case studies built for decisions"
          description="Two long-form examples—one dental group scaling bookings past 1300 in year one, and one non-clinical B2B leader winning organic and AI visibility without ad spend—plus the systems, creative, and print that connect it all."
          primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
          secondaryCta={{ to: '/services', label: 'View services' }}
        />

        {/* Mobile / small tablet: jump links */}
        <div className="border-b border-slate-200/70 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900/35 lg:hidden">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Jump to</p>
          <div className="flex flex-wrap gap-2">
            {caseStudiesToc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border border-slate-200 bg-[#FAFAF9] px-3 py-1.5 text-xs font-semibold text-blue-950 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-start lg:gap-12">
            <div className="min-w-0 flex-1">
              {/* Proof at a glance */}
              <section
                id="proof"
                className="scroll-mt-28 border-t border-slate-200/70 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/35 md:py-16"
                aria-labelledby="proof-heading"
              >
                <div className="max-w-3xl">
                  <h2
                    id="proof-heading"
                    className="about-display text-2xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-3xl"
                  >
                    Proof at a glance
                  </h2>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    Numbers we can stand behind, paired with the full-stack delivery model that makes outcomes repeatable—not lucky.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {caseStudiesScopeBadges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-slate-200/90 bg-[#FAFAF9] px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {caseStudiesProofAtGlance.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-slate-200/90 bg-[#FAFAF9] p-6 dark:border-slate-700 dark:bg-slate-800/60"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{s.label}</p>
                      <p className="about-display mt-2 text-3xl font-semibold text-blue-950 dark:text-white md:text-4xl">{s.value}</p>
                      {s.sublabel ? (
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.sublabel}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>

              <CaseStudyLongSection study={smileDoctorsCaseStudy} imageSide="right" />
              <CaseStudyLongSection study={dwincRed3CaseStudy} imageSide="left" />

              <CaseStudiesWorkGallery items={caseStudiesWorkGallery} />

              {/* Trust - logos only (text badges until assets supplied) */}
              <section
                id="trust"
                className="scroll-mt-28 border-t border-slate-200/70 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/35 md:py-20"
                aria-labelledby="trust-heading"
              >
                <h2
                  id="trust-heading"
                  className="about-display text-2xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-3xl"
                >
                  Brands we support
                </h2>
                <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                  Logo-first strip (no quoted reviews on this version). Replace with monochrome SVG marks when you have final brand approvals.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  {caseStudiesTrustLogos.map((logo) =>
                    logo.src ? (
                      <div
                        key={logo.name}
                        className="flex h-14 items-center justify-center rounded-xl border border-slate-200/90 bg-[#FAFAF9] px-5 dark:border-slate-700 dark:bg-slate-800/60"
                      >
                        <img src={logo.src} alt="" className="max-h-8 w-auto opacity-80 dark:opacity-90" />
                      </div>
                    ) : (
                      <div
                        key={logo.name}
                        className="flex h-14 items-center rounded-xl border border-slate-200/90 bg-[#FAFAF9] px-5 dark:border-slate-700 dark:bg-slate-800/60"
                      >
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{logo.name}</span>
                      </div>
                    )
                  )}
                </div>
              </section>

              <div id="faq" className="scroll-mt-28">
                <FaqAccordion
                  idPrefix="case-studies-faq"
                  heading="Questions teams ask before committing"
                  subheading="Measurement, scope, timelines, and what we need from you."
                  items={caseStudiesFaq}
                  className="border-t border-slate-200/70 !bg-[#FAFAF9] py-16 dark:border-slate-800 dark:!bg-slate-950 md:py-20"
                />
              </div>

              <section
                id="cta"
                className="scroll-mt-28 border-t border-slate-200/80 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-20"
                aria-labelledby="cta-heading"
              >
                <div className="mx-auto max-w-3xl text-center">
                  <h2 id="cta-heading" className="about-display text-2xl font-semibold text-blue-950 dark:text-white md:text-3xl">
                    Want a similar outcome?
                  </h2>
                  <p className="mt-4 text-slate-600 dark:text-slate-300">
                    Send your market, capacity, and goals—we will return a practical sequencing plan (one channel or the full stack).
                  </p>
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
              </section>
            </div>

            {/* Sticky TOC — large screens */}
            <aside className="hidden w-48 shrink-0 lg:block xl:w-52">
              <nav
                className="sticky top-28 space-y-1 rounded-2xl border border-slate-200/90 bg-white/90 p-4 text-sm shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
                aria-label="On this page"
              >
                <p className="mb-3 px-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  On this page
                </p>
                {caseStudiesToc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded-lg px-2 py-2 text-slate-600 transition hover:bg-blue-50 hover:text-blue-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
