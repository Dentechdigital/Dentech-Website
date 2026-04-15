import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Check, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeroAboutStyle from '../components/PageHeroAboutStyle';
import FaqAccordion from '../components/FaqAccordion';
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
          fullWidthCopy
          afterDescription={
            <ul className="flex w-full max-w-none flex-col gap-3 sm:gap-2">
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

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="text-xl font-bold text-blue-950 dark:text-white">
            Overview
          </h2>
          <p className="mt-4 w-full max-w-none text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {service.overview}
          </p>
        </section>

        <section
          className="border-y border-slate-200/70 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/40"
          aria-labelledby="what-it-is-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="what-it-is-heading" className="text-xl font-bold text-blue-950 dark:text-white">
              What this is
            </h2>
            <p className="mt-4 w-full max-w-none text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {service.whatItIs}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="why-heading">
          <h2 id="why-heading" className="text-xl font-bold text-blue-950 dark:text-white">
            Why practices invest in this
          </h2>
          <ul className="mt-6 grid w-full max-w-none gap-4 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4">
            {service.whyItMatters.map((line) => (
              <li key={line} className="flex gap-3 text-slate-600 dark:text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="border-y border-slate-200/70 bg-[#FAFAF9] py-14 dark:border-slate-800 dark:bg-slate-950/50"
          aria-labelledby="for-who-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="for-who-heading" className="text-xl font-bold text-blue-950 dark:text-white">
              Who this is for
            </h2>
            <p className="mt-3 w-full max-w-none text-slate-600 dark:text-slate-300">{service.forWho}</p>
          </div>
        </section>

        {service.prerequisites && service.prerequisites.length > 0 ? (
          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="prereq-heading">
            <h2 id="prereq-heading" className="text-xl font-bold text-blue-950 dark:text-white">
              Before we start
            </h2>
            <p className="mt-2 w-full max-w-none text-sm text-slate-500 dark:text-slate-400">
              Practical readiness items so the program launches cleanly—nothing here is about selling you extras you do not need.
            </p>
            <ul className="mt-6 grid w-full max-w-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.prerequisites.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" strokeWidth={2} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section
          className="border-y border-slate-200/70 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/35"
          aria-labelledby="included-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="included-heading" className="text-xl font-bold text-blue-950 dark:text-white">
              What&rsquo;s included
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-100 bg-[#FAFAF9] px-4 py-3 text-slate-700 dark:border-slate-700 dark:bg-slate-800/40 dark:text-slate-200"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="border-y border-slate-200/70 bg-[#FAFAF9] py-14 dark:border-slate-800 dark:bg-slate-950/50"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="process-heading" className="text-xl font-bold text-blue-950 dark:text-white">
              How we work with you
            </h2>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {service.processSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="relative rounded-2xl border border-slate-200/90 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/60"
                >
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-blue-950 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="technical-heading">
          <h2 id="technical-heading" className="text-xl font-bold text-blue-950 dark:text-white">
            Under the hood
          </h2>
          <p className="mt-2 w-full max-w-none text-sm text-slate-500 dark:text-slate-400">
            Technical detail in plain language—so you know what we are doing and why it matters for patients and platforms.
          </p>
          <div className="mt-10 grid w-full max-w-none gap-10 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-12">
            {service.technicalDeepDive.map((block) => (
              <div key={block.heading} className="min-w-0">
                <h3 className="text-lg font-semibold text-blue-950 dark:text-white">{block.heading}</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {block.paragraphs.map((p, i) => (
                    <p key={`${block.heading}-${i}`}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="border-y border-slate-200/70 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/40"
          aria-labelledby="mistakes-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="mistakes-heading" className="text-xl font-bold text-blue-950 dark:text-white">
              Common pitfalls we help you avoid
            </h2>
            <ul className="mt-6 grid w-full max-w-none gap-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
              {service.commonMistakes.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <AlertTriangle
                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-slate-100/80 py-14 dark:bg-slate-900/60" aria-labelledby="outcomes-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="outcomes-heading" className="text-xl font-bold text-blue-950 dark:text-white">
              What success looks like
            </h2>
            <p className="mt-2 w-full max-w-none text-sm text-slate-600 dark:text-slate-400">
              Plain-language signals we work toward—your market and capacity shape how quickly each shows up.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.outcomes.map((line) => (
                <li
                  key={line}
                  className="rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="metrics-heading">
          <h2 id="metrics-heading" className="text-xl font-bold text-blue-950 dark:text-white">
            What we measure with you
          </h2>
          <p className="mt-2 w-full max-w-none text-sm text-slate-500 dark:text-slate-400">
            Leading and lagging indicators agreed upfront—so progress is visible without hype.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.metricsWeWatch.map((line) => (
              <li
                key={line}
                className="flex gap-3 rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" strokeWidth={2} />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Book a strategy call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-bold text-blue-950 dark:text-white">
            Related services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={servicePath(s.slug)}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-blue-500/40"
              >
                <span className="font-semibold text-blue-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {s.title}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </Link>
            ))}
          </div>
        </section>

        <FaqAccordion
          idPrefix={`svc-${service.slug}`}
          heading="Frequently asked questions"
          subheading={`Common questions about ${service.title.toLowerCase()} for dental practices.`}
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
