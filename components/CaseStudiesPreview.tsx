import React from 'react';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredCaseStudy = {
  clinic: 'The Smile Doctors',
  href: '/case-studies',
  image: '/case-studies/smile-doctors-proof.webp',
  title: '1300+ Confirmed Bookings in Under 12 Months',
  summary:
    'We deployed an integrated growth system across website management, SEO/GEO, Meta PPC, social media, and original content, with reporting tied to qualified booking outcomes.',
  metrics: [
    { label: 'New Bookings', value: '1300+', icon: Users, valueClass: 'text-emerald-600 dark:text-emerald-400' },
    { label: 'Growth Window', value: '< 12 mo', icon: TrendingUp, valueClass: 'text-emerald-600 dark:text-emerald-400' },
  ],
  tags: ['Webflow Website', 'SEO', 'AI Ranking', 'Meta Ads', 'Social Media', 'Content Creation'],
};

export default function CaseStudiesPreview() {
  return (
    <section className="bg-[#FAFAF9] py-24 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl">
              Real results for <br className="hidden md:block" />
              <span className="text-blue-600 dark:text-blue-400">real businesses.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Featured case study: patient growth with a full-stack marketing system.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-6 py-3 font-semibold text-blue-950 shadow-sm transition-colors hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            View case study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Link
          to={featuredCaseStudy.href}
          className="group flex flex-col overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white shadow-[0_20px_60px_-28px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200/60 hover:shadow-[0_28px_80px_-24px_rgba(37,99,235,0.2)] dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-black/40 dark:hover:border-blue-500/30 lg:flex-row lg:items-stretch"
        >
          {/* Visual — full width on mobile, left column on lg */}
          <div className="relative isolate h-56 w-full shrink-0 overflow-hidden sm:h-64 lg:h-auto lg:min-h-[min(100%,22rem)] lg:w-[min(44%,28rem)] xl:w-[min(42%,32rem)]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/50 via-blue-950/10 to-transparent transition-opacity duration-500 group-hover:opacity-70 dark:from-slate-950/70 lg:bg-gradient-to-r lg:from-transparent lg:via-blue-950/15 lg:to-blue-950/25" />
            <img
              src={`${import.meta.env.BASE_URL}${featuredCaseStudy.image.replace(/^\//, '')}`}
              alt={featuredCaseStudy.clinic}
              className="h-full w-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.04] lg:object-[28%_center]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute left-4 top-4 z-20 lg:left-5 lg:top-5">
              <span className="rounded-full bg-slate-950/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm ring-1 ring-white/10 dark:bg-white/95 dark:text-blue-950 dark:ring-0">
                {featuredCaseStudy.clinic}
              </span>
            </div>
          </div>

          {/* Copy + metrics */}
          <div className="flex min-w-0 flex-1 flex-col justify-center p-8 lg:p-10 xl:p-12">
            <div className="mb-5 flex flex-wrap gap-2">
              {featuredCaseStudy.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-blue-200/80 bg-blue-50/90 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:border-blue-500/25 dark:bg-blue-500/10 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-4 text-2xl font-bold leading-tight text-blue-950 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 md:text-3xl">
              {featuredCaseStudy.title}
            </h3>

            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
              {featuredCaseStudy.summary}
            </p>

            <div className="mt-auto grid grid-cols-2 gap-6 border-t border-gray-100 pt-6 dark:border-slate-700/80 sm:gap-8">
              {featuredCaseStudy.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <div className="mb-1.5 flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                    <metric.icon className="h-4 w-4 shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{metric.label}</span>
                  </div>
                  <span className={`text-2xl font-bold tracking-tight md:text-3xl ${metric.valueClass}`}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
