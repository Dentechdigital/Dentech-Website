import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Check, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeroAboutStyle from '../components/PageHeroAboutStyle';
import FaqAccordion from '../components/FaqAccordion';
import ServiceSpotlight from '../components/ServiceSpotlight';
import {
  buildServiceDetailStructuredData,
  getServiceBySlug,
  serviceHeroCollagePublicPath,
  servicePath,
  servicesBySlug,
} from '../data/servicesContent';

function mediaUrl(src: string): string {
  if (src.startsWith('http')) return src;
  const base = import.meta.env.BASE_URL;
  return `${base}${src.replace(/^\//, '')}`;
}

const ServiceDetail: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getServiceBySlug(serviceSlug);

  if (!serviceSlug) {
    return <Navigate to="/services" replace />;
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] px-4 pb-24 pt-28 dark:bg-slate-950">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold text-blue-950 dark:text-white">Service not found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">This URL does not match any of our services.</p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const structuredData = buildServiceDetailStructuredData(service);
  const related = service.relatedSlugs
    .map((slug) => servicesBySlug[slug])
    .filter(Boolean) as typeof service[];

  const heroCollageRel = serviceHeroCollagePublicPath(service.slug);
  const heroCollageUrl = heroCollageRel ? mediaUrl(heroCollageRel) : undefined;
  const serviceHeroImageClass =
    'object-cover object-[28%_center] sm:object-[32%_center] lg:object-[36%_center]';

  const techTopAccents = [
    'border-t-blue-500',
    'border-t-teal-500',
    'border-t-indigo-500',
    'border-t-violet-500',
  ] as const;

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        faqStructuredData={service.faq}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
        <PageHeroAboutStyle
          badge="Dental marketing service"
          title={service.h1}
          description={service.heroTagline}
          heroImageSrc={heroCollageUrl}
          heroImageClassName={heroCollageUrl ? serviceHeroImageClass : undefined}
          afterDescription={
            <ul className="flex max-w-3xl flex-col gap-3 sm:gap-2">
              {service.heroBullets.map((b) => (
                <li key={b} className="flex gap-3 text-slate-700 dark:text-slate-200">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" strokeWidth={2} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          }
          primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
          secondaryCta={{ to: '/services', label: 'All services' }}
          breadcrumb={
            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 opacity-50" aria-hidden />
              <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">
                Services
              </Link>
              <ChevronRight className="h-4 w-4 opacity-50" aria-hidden />
              <span className="font-medium text-blue-950 dark:text-white">{service.title}</span>
            </nav>
          }
        />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="overview-heading">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50/90 p-8 shadow-md dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 md:p-10">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-blue-500 via-teal-500 to-emerald-500"
              aria-hidden
            />
            <div className="pl-5 md:pl-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">At a glance</p>
              <h2 id="overview-heading" className="mt-2 text-2xl font-bold tracking-tight text-blue-950 dark:text-white md:text-3xl">
                Overview
              </h2>
              <p className="mt-5 w-full max-w-none text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {service.overview}
              </p>
            </div>
          </div>
        </section>

        {service.spotlight ? (
          <section
            className="mx-auto max-w-7xl px-4 pb-2 pt-0 sm:px-6 sm:pb-4 lg:px-8"
            aria-labelledby="spotlight-heading"
          >
            <h2 id="spotlight-heading" className="sr-only">
              Service snapshot
            </h2>
            <ServiceSpotlight data={service.spotlight} />
          </section>
        ) : null}

        <section
          className="relative py-14 dark:border-slate-800 sm:py-16"
          aria-labelledby="what-it-is-heading"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <h2 id="what-it-is-heading" className="text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
                  What this is
                </h2>
                <p className="mt-5 w-full max-w-none text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.whatItIs}
                </p>
              </div>
              <aside className="lg:col-span-4 lg:pt-1">
                <div className="rounded-2xl border border-dashed border-blue-200/90 bg-blue-50/50 p-6 dark:border-blue-500/35 dark:bg-blue-950/25">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-blue-300">
                    How this page is organized
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    We move from plain definitions to reasons, deliverables, technical detail, and measurement—so you can skim
                    headings or read end-to-end.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8" aria-labelledby="why-heading">
          <div className="rounded-3xl border border-slate-200/80 bg-white px-6 py-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/50 sm:px-8 sm:py-10">
            <h2 id="why-heading" className="text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
              Why practices invest in this
            </h2>
            <ol className="mt-8 w-full max-w-none space-y-0 divide-y divide-slate-100 dark:divide-slate-700/80">
              {service.whyItMatters.map((line, i) => (
                <li key={line} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-sm font-bold text-blue-700 dark:bg-slate-800 dark:text-blue-300"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="pt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    {line}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-12 sm:py-16" aria-labelledby="for-who-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 px-8 py-10 text-white shadow-xl sm:px-12 sm:py-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200/90">Fit</p>
              <h2 id="for-who-heading" className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                Who this is for
              </h2>
              <p className="mt-5 max-w-none text-base leading-relaxed text-slate-200 md:text-lg">{service.forWho}</p>
            </div>
          </div>
        </section>

        {service.prerequisites && service.prerequisites.length > 0 ? (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8" aria-labelledby="prereq-heading">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 id="prereq-heading" className="text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
                  Before we start
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                  Practical readiness items so the program launches cleanly—nothing here is about selling you extras you do not
                  need.
                </p>
              </div>
            </div>
            <ul className="mt-8 flex w-full max-w-none flex-wrap gap-2 sm:gap-3">
              {service.prerequisites.map((line) => (
                <li
                  key={line}
                  className="inline-flex max-w-full items-start gap-2 rounded-full border border-teal-200/90 bg-teal-50/80 px-4 py-2.5 text-sm text-teal-950 shadow-sm dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-100"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" strokeWidth={2} />
                  <span className="leading-snug">{line}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="border-y border-slate-200/70 bg-[#FAFAF9] py-14 dark:border-slate-800 dark:bg-slate-950/40 sm:py-16" aria-labelledby="included-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="included-heading" className="text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
              What&rsquo;s included
            </h2>
            <ul className="mt-8 columns-1 gap-4 sm:columns-2 sm:gap-x-5 lg:columns-3">
              {service.included.map((item, idx) => (
                <li
                  key={item}
                  className={`mb-4 flex break-inside-avoid gap-2 rounded-2xl border px-4 py-3.5 text-sm leading-snug text-slate-800 dark:text-slate-100 ${
                    idx % 3 === 0
                      ? 'border-blue-200/80 bg-white shadow-sm dark:border-blue-900/50 dark:bg-slate-900/80'
                      : idx % 3 === 1
                        ? 'border-slate-200/90 bg-white/90 dark:border-slate-600 dark:bg-slate-800/50'
                        : 'border-emerald-200/70 bg-emerald-50/40 dark:border-emerald-900/40 dark:bg-emerald-950/20'
                  }`}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" strokeWidth={2.5} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="process-heading">
          <h2 id="process-heading" className="text-center text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
            How we work with you
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500 dark:text-slate-400">
            Three beats—discovery, build, and iteration—so expectations stay clear.
          </p>
          <ol className="mt-10 flex flex-col gap-4 md:flex-row md:gap-0 md:rounded-3xl md:border md:border-slate-200 md:shadow-sm dark:md:border-slate-700">
            {service.processSteps.map((step, i) => (
              <li
                key={step.title}
                className={`relative flex-1 rounded-3xl border border-slate-200/90 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/70 md:rounded-none md:border-0 md:px-8 md:py-8 ${
                  i > 0 ? 'md:border-l md:border-slate-200 dark:md:border-slate-700' : ''
                } ${i === 0 ? 'md:rounded-l-3xl' : ''} ${i === service.processSteps.length - 1 ? 'md:rounded-r-3xl' : ''}`}
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 text-sm font-bold text-white shadow-md">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-blue-950 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-slate-100/70 py-14 dark:bg-slate-900/50 sm:py-16" aria-labelledby="technical-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="technical-heading" className="text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
                Under the hood
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Technical detail in plain language—so you know what we are doing and why it matters for patients and platforms.
              </p>
            </div>
            <div className="mt-12 grid w-full max-w-none gap-6 lg:grid-cols-2">
              {service.technicalDeepDive.map((block, idx) => (
                <div
                  key={block.heading}
                  className={`min-w-0 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/60 ${techTopAccents[idx % techTopAccents.length]} border-t-4 pt-5`}
                >
                  <h3 className="text-lg font-semibold text-blue-950 dark:text-white">{block.heading}</h3>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {block.paragraphs.map((p, i) => (
                      <p key={`${block.heading}-${i}`}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="mistakes-heading">
          <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-b from-amber-50/90 to-orange-50/40 p-8 dark:border-amber-900/40 dark:from-amber-950/30 dark:to-slate-900/60 sm:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-900/50">
                <AlertTriangle className="h-6 w-6 text-amber-700 dark:text-amber-400" strokeWidth={2} aria-hidden />
              </div>
              <div>
                <h2 id="mistakes-heading" className="text-xl font-bold text-amber-950 dark:text-amber-100 md:text-2xl">
                  Common pitfalls we help you avoid
                </h2>
                <p className="mt-1 text-sm text-amber-900/80 dark:text-amber-200/80">
                  Patterns we see across dental markets—so you can sidestep them early.
                </p>
              </div>
            </div>
            <ul className="mt-8 grid w-full max-w-none gap-4 sm:grid-cols-2">
              {service.commonMistakes.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-2xl border border-amber-200/60 bg-white/80 px-4 py-3 text-sm leading-relaxed text-amber-950/95 dark:border-amber-800/40 dark:bg-slate-950/40 dark:text-amber-50/90"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 dark:border-slate-800 sm:py-16" aria-labelledby="outcomes-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="outcomes-heading" className="text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
              What success looks like
            </h2>
            <p className="mt-2 w-full max-w-none text-sm text-slate-600 dark:text-slate-400">
              Plain-language signals we work toward—your market and capacity shape how quickly each shows up.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.outcomes.map((line) => (
                <li
                  key={line}
                  className="flex gap-4 rounded-2xl border border-emerald-200/70 bg-emerald-50/35 px-5 py-4 text-sm font-medium leading-snug text-emerald-950 dark:border-emerald-900/50 dark:bg-emerald-950/25 dark:text-emerald-100"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-500">
                    <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="pt-0.5">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/30 sm:py-16" aria-labelledby="metrics-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="metrics-heading" className="text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
              What we measure with you
            </h2>
            <p className="mt-2 w-full max-w-none text-sm text-slate-500 dark:text-slate-400">
              Leading and lagging indicators agreed upfront—so progress is visible without hype.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 bg-[#FAFAF9] dark:border-slate-700 dark:bg-slate-950/50">
              <ul className="divide-y divide-slate-200/90 dark:divide-slate-700/90">
                {service.metricsWeWatch.map((line, i) => (
                  <li
                    key={line}
                    className={`flex gap-4 px-5 py-4 text-sm text-slate-700 dark:text-slate-200 ${
                      i % 2 === 0 ? 'bg-white/80 dark:bg-slate-900/30' : 'bg-transparent'
                    }`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                      {i + 1}
                    </span>
                    <span className="pt-1 leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold text-slate-600 underline-offset-4 hover:text-blue-600 hover:underline dark:text-slate-400 dark:hover:text-blue-400"
              >
                Browse all services
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
            Related services
          </h2>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-stretch">
            {related.map((s, i) => (
              <Link
                key={s.slug}
                to={servicePath(s.slug)}
                className={`group relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl border p-6 transition hover:shadow-lg md:min-h-[140px] md:p-8 ${
                  i === 0
                    ? 'border-blue-200/90 bg-gradient-to-br from-blue-50 to-white dark:border-blue-800/50 dark:from-blue-950/40 dark:to-slate-900'
                    : 'border-slate-200/90 bg-white dark:border-slate-700 dark:bg-slate-800/60'
                }`}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {i === 0 ? 'Often paired first' : 'Also consider'}
                  </p>
                  <span className="mt-2 block text-lg font-bold text-blue-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {s.title}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  View
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <FaqAccordion
          idPrefix={`svc-${service.slug}`}
          heading={service.faqSectionTitle ?? 'Frequently asked questions'}
          subheading={
            service.faqSectionSubheading ??
            `Common questions about ${service.title.toLowerCase()} for dental practices.`
          }
          items={service.faq}
        />

        <section className="border-t border-slate-200/80 bg-white py-14 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg font-medium text-blue-950 dark:text-white">Ready to talk specifics?</p>
            <p className="mx-auto mt-2 w-full max-w-3xl text-slate-600 dark:text-slate-300">
              Tell us about your market, services, and goals—we&rsquo;ll map a practical next step.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;
