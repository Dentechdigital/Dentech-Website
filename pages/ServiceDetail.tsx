import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
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

/** Narrow reading column for long-form service copy */
const article = 'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8';

/** Section divider + vertical rhythm */
function TextSection({
  id,
  kicker,
  title,
  lead,
  children,
}: {
  id: string;
  kicker?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-slate-200/80 py-12 dark:border-slate-800 md:py-14" aria-labelledby={id}>
      <div className={article}>
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{kicker}</p>
        ) : null}
        <h2 id={id} className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
        {lead ? (
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">{lead}</p>
        ) : null}
        <div className={lead ? 'mt-6' : 'mt-5'}>{children}</div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-slate-700 marker:text-blue-600 dark:text-slate-300 dark:marker:text-blue-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
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

        <main className="bg-white pb-4 dark:bg-slate-950">
          <TextSection id="overview-heading" kicker="At a glance" title="Overview">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">{service.overview}</p>
            {service.spotlight ? (
              <div className="mt-10 border-t border-slate-200/80 pt-10 dark:border-slate-800" aria-label="Service snapshot">
                <ServiceSpotlight data={service.spotlight} plain />
              </div>
            ) : null}
          </TextSection>

          <TextSection id="what-it-is-heading" kicker="Definition" title="What this is">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">{service.whatItIs}</p>
          </TextSection>

          <TextSection
            id="why-heading"
            kicker={service.whySectionKicker ?? 'Why it matters'}
            title={service.whySectionTitle}
            lead={
              service.whySectionSubheading ??
              'Symptoms, risk, and opportunity we hear from growth-focused teams.'
            }
          >
            <BulletList items={service.whyItMatters} />
          </TextSection>

          <TextSection id="for-who-heading" kicker="Fit" title="Who this is for">
            <div className="rounded-lg border border-slate-200/90 bg-slate-50/60 p-6 dark:border-slate-700 dark:bg-slate-900/40">
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">{service.forWho}</p>
            </div>
          </TextSection>

          {service.prerequisites && service.prerequisites.length > 0 ? (
            <TextSection
              id="prereq-heading"
              kicker="Readiness"
              title="Before we start"
              lead="Practical items so the program launches cleanly—nothing here is about selling extras you do not need."
            >
              <BulletList items={service.prerequisites} />
            </TextSection>
          ) : null}

          <TextSection
            id="included-heading"
            kicker="Deliverables"
            title="What&rsquo;s included"
            lead="Concrete outputs you can expect from an engagement shaped around your market."
          >
            <BulletList items={service.included} />
          </TextSection>

          <TextSection
            id="process-heading"
            kicker="Process"
            title="How we work with you"
            lead="Three beats—discovery, build, and iteration—so expectations stay clear."
          >
            <ol className="list-decimal space-y-6 pl-5 text-base leading-relaxed text-slate-700 marker:font-semibold dark:text-slate-300">
              {service.processSteps.map((step) => (
                <li key={step.title} className="pl-2">
                  <span className="font-semibold text-slate-900 dark:text-white">{step.title}</span>
                  <p className="mt-2 font-normal text-slate-600 dark:text-slate-400">{step.body}</p>
                </li>
              ))}
            </ol>
          </TextSection>

          <TextSection
            id="technical-heading"
            kicker="Depth"
            title="Under the hood"
            lead="Technical detail in plain language—so you know what we are doing and why it matters for patients and platforms."
          >
            <div className="space-y-10">
              {service.technicalDeepDive.map((block) => (
                <div key={block.heading}>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{block.heading}</h3>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {block.paragraphs.map((p, i) => (
                      <p key={`${block.heading}-${i}`}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TextSection>

          <TextSection
            id="mistakes-heading"
            title="Common pitfalls we help you avoid"
            lead="Patterns we see across dental markets—so you can sidestep them early."
          >
            <BulletList items={service.commonMistakes} />
          </TextSection>

          <TextSection
            id="outcomes-heading"
            kicker="Outcomes"
            title="What success looks like"
            lead="Plain-language signals we work toward—your market and capacity shape how quickly each shows up."
          >
            <ul className="space-y-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {service.outcomes.map((line) => (
                <li key={line} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" strokeWidth={2} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </TextSection>

          <TextSection
            id="metrics-heading"
            kicker="Measurement"
            title="What we measure with you"
            lead="Leading and lagging indicators agreed upfront—so progress is visible without hype."
          >
            <ol className="list-decimal space-y-3 pl-5 text-base leading-relaxed text-slate-700 marker:font-semibold dark:text-slate-300">
              {service.metricsWeWatch.map((line) => (
                <li key={line} className="pl-1">
                  {line}
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-slate-600 dark:text-slate-400">
              <Link to="/contact" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">
                Book a strategy call
              </Link>
              {' · '}
              <Link to="/services" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">
                Browse all services
              </Link>
            </p>
          </TextSection>

          <section className="border-t border-slate-200/80 py-12 dark:border-slate-800 md:py-14" aria-labelledby="related-heading">
            <div className={article}>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Next steps</p>
              <h2 id="related-heading" className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Related services
              </h2>
              <ul className="mt-6 space-y-3">
                {related.map((s, i) => (
                  <li key={s.slug}>
                    <Link
                      to={servicePath(s.slug)}
                      className="group inline-flex items-center gap-2 text-base font-medium text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
                        {i === 0 ? 'Often paired · ' : 'Also consider · '}
                      </span>
                      {s.title}
                      <ArrowRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
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

          <section className="border-t border-slate-200/80 bg-slate-50/80 py-14 dark:border-slate-800 dark:bg-slate-900/40 md:py-16">
            <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
              <p className="text-xl font-bold tracking-tight text-slate-900 dark:text-white md:text-2xl">
                Ready to talk specifics?
              </p>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Tell us about your market, services, and goals—we&rsquo;ll map a practical next step.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
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
