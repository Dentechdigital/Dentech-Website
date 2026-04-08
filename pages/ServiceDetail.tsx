import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
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

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="for-who-heading">
          <h2 id="for-who-heading" className="text-xl font-bold text-blue-950 dark:text-white">
            Who this is for
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">{service.forWho}</p>
        </section>

        <section
          className="border-y border-slate-200/70 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/40"
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
                  className="flex gap-3 rounded-xl border border-slate-100 bg-[#FAFAF9] px-4 py-3 text-slate-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-200"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="process-heading">
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
        </section>

        {service.gallery.length > 0 ? (
          <section className="bg-slate-100/80 py-14 dark:bg-slate-900/60" aria-labelledby="work-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 id="work-heading" className="text-xl font-bold text-blue-950 dark:text-white">
                Sample work & formats
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
                Illustrative examples of the types of deliverables we produce—replace with your branded case assets when
                available.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {service.gallery.map((g) => (
                  <figure key={g.src + g.alt} className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={mediaUrl(g.src)}
                        alt={g.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    {g.caption ? (
                      <figcaption className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">{g.caption}</figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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
            <p className="mx-auto mt-2 max-w-xl text-slate-600 dark:text-slate-300">
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
