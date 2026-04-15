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

function SectionHeader({
  id,
  kicker,
  title,
  description,
  align = 'left',
}: {
  id: string;
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  const wrap = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl';
  return (
    <div className={`mb-10 md:mb-14 ${wrap}`}>
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{kicker}</p>
      ) : null}
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
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

      <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-slate-950">
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

        <main>
          <section className="border-b border-slate-100 py-16 dark:border-slate-800 md:py-24" aria-labelledby="overview-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div
                className={
                  service.spotlight
                    ? 'grid items-start gap-12 lg:grid-cols-12 lg:gap-16'
                    : 'grid items-start gap-12'
                }
              >
                <div className={service.spotlight ? 'lg:col-span-7' : 'max-w-3xl'}>
                  <SectionHeader id="overview-heading" kicker="At a glance" title="Overview" />
                  <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                    {service.overview}
                  </p>
                </div>
                {service.spotlight ? (
                  <div className="lg:col-span-5" aria-label="Service snapshot">
                    <ServiceSpotlight data={service.spotlight} />
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          <section
            className="border-b border-slate-100 bg-slate-50/80 py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-24"
            aria-labelledby="what-it-is-heading"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeader id="what-it-is-heading" kicker="Definition" title="What this is" />
              <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                {service.whatItIs}
              </p>
            </div>
          </section>

          <section className="border-b border-slate-100 py-16 dark:border-slate-800 md:py-24" aria-labelledby="why-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeader
                id="why-heading"
                kicker={service.whySectionKicker ?? 'Why it matters'}
                title={service.whySectionTitle}
                description={
                  service.whySectionSubheading ??
                  'Symptoms, risk, and opportunity we hear from growth-focused teams.'
                }
              />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {service.whyItMatters.map((line, i) => (
                  <div
                    key={line}
                    className="rounded-2xl bg-slate-50/90 p-6 ring-1 ring-slate-900/[0.04] dark:bg-slate-900/50 dark:ring-white/[0.06]"
                  >
                    <span className="font-mono text-xs tabular-nums text-slate-400 dark:text-slate-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-[15px]">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-100 py-16 dark:border-slate-800 md:py-24" aria-labelledby="for-who-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-xl dark:bg-slate-950 sm:px-12 sm:py-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/90">Fit</p>
                <h2 id="for-who-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Who this is for
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">{service.forWho}</p>
              </div>
            </div>
          </section>

          {service.prerequisites && service.prerequisites.length > 0 ? (
            <section
              className="border-b border-slate-100 bg-slate-50/80 py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-24"
              aria-labelledby="prereq-heading"
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionHeader
                  id="prereq-heading"
                  kicker="Readiness"
                  title="Before we start"
                  description="Practical items so the program launches cleanly—nothing here is about selling extras you do not need."
                />
                <ul className="mt-2 flex flex-wrap gap-2">
                  {service.prerequisites.map((line) => (
                    <li
                      key={line}
                      className="inline-flex max-w-full items-start gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-900/[0.06] dark:bg-slate-800 dark:text-slate-200 dark:ring-white/[0.08]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" strokeWidth={2} />
                      <span className="leading-snug">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          <section
            className={`border-b border-slate-100 py-16 dark:border-slate-800 md:py-24 ${
              service.prerequisites?.length ? 'bg-white dark:bg-slate-950' : 'bg-slate-50/80 dark:bg-slate-900/40'
            }`}
            aria-labelledby="included-heading"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeader
                id="included-heading"
                kicker="Deliverables"
                title="What&rsquo;s included"
                description="Concrete outputs you can expect from an engagement shaped around your market."
              />
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl bg-white p-4 text-sm leading-snug text-slate-700 shadow-sm ring-1 ring-slate-900/[0.05] dark:bg-slate-900/60 dark:text-slate-200 dark:ring-white/[0.08]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" strokeWidth={2.5} aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-b border-slate-100 bg-slate-50/80 py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-24" aria-labelledby="process-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeader
                id="process-heading"
                kicker="Process"
                title="How we work with you"
                description="Three beats—discovery, build, and iteration—so expectations stay clear."
                align="center"
              />
              <ol className="mt-4 grid gap-6 md:grid-cols-3">
                {service.processSteps.map((step, i) => (
                  <li
                    key={step.title}
                    className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/[0.05] transition hover:shadow-md dark:bg-slate-900/60 dark:ring-white/[0.08]"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white dark:bg-blue-500">
                      {i + 1}
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-b border-slate-100 py-16 dark:border-slate-800 md:py-24" aria-labelledby="technical-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeader
                id="technical-heading"
                kicker="Depth"
                title="Under the hood"
                description="Technical detail in plain language—so you know what we are doing and why it matters for patients and platforms."
                align="center"
              />
              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                {service.technicalDeepDive.map((block) => (
                  <div
                    key={block.heading}
                    className="rounded-2xl bg-slate-50/90 p-6 ring-1 ring-slate-900/[0.04] dark:bg-slate-900/50 dark:ring-white/[0.06] sm:p-8"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{block.heading}</h3>
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

          <section className="border-b border-slate-100 bg-slate-50/80 py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-24" aria-labelledby="mistakes-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/[0.06] dark:bg-slate-800 dark:ring-white/[0.08]">
                  <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" strokeWidth={2} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <SectionHeader
                    id="mistakes-heading"
                    title="Common pitfalls we help you avoid"
                    description="Patterns we see across dental markets—so you can sidestep them early."
                  />
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.commonMistakes.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3 rounded-2xl border-l-4 border-amber-400 bg-white py-3 pl-4 pr-4 text-sm leading-relaxed text-slate-700 shadow-sm dark:border-amber-500 dark:bg-slate-900/60 dark:text-slate-200"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-100 py-16 dark:border-slate-800 md:py-24" aria-labelledby="outcomes-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeader
                id="outcomes-heading"
                kicker="Outcomes"
                title="What success looks like"
                description="Plain-language signals we work toward—your market and capacity shape how quickly each shows up."
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.outcomes.map((line) => (
                  <li
                    key={line}
                    className="flex gap-4 rounded-2xl bg-slate-50/90 p-5 ring-1 ring-slate-900/[0.04] dark:bg-slate-900/50 dark:ring-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-500">
                      <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                    </span>
                    <span className="pt-1 text-sm font-medium leading-snug text-slate-800 dark:text-slate-100">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-b border-slate-100 bg-slate-50/80 py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-24" aria-labelledby="metrics-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeader
                id="metrics-heading"
                kicker="Measurement"
                title="What we measure with you"
                description="Leading and lagging indicators agreed upfront—so progress is visible without hype."
              />
              <ul className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/[0.05] dark:divide-slate-700 dark:bg-slate-900/60 dark:ring-white/[0.08]">
                {service.metricsWeWatch.map((line, i) => (
                  <li key={line} className="flex gap-4 px-5 py-4 text-sm text-slate-700 dark:text-slate-200">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {i + 1}
                    </span>
                    <span className="pt-1 leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
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

          <section className="py-16 dark:border-slate-800 md:py-24" aria-labelledby="related-heading">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <SectionHeader id="related-heading" kicker="Next steps" title="Related services" />
              <div className="mt-2 grid gap-4 md:grid-cols-2">
                {related.map((s, i) => (
                  <Link
                    key={s.slug}
                    to={servicePath(s.slug)}
                    className="group flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/[0.05] transition hover:shadow-md dark:bg-slate-900/60 dark:ring-white/[0.08] md:min-h-[160px]"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        {i === 0 ? 'Often paired first' : 'Also consider'}
                      </p>
                      <span className="mt-3 block text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {s.title}
                      </span>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      View
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
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
            maxWidthClass="max-w-6xl"
          />

          <section className="border-t border-slate-100 bg-slate-50/80 py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-20">
            <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
              <p className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                Ready to talk specifics?
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
                Tell us about your market, services, and goals—we&rsquo;ll map a practical next step.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ServiceDetail;
