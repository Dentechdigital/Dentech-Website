import React from 'react';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredCaseStudy = {
  clinic: 'The Smile Doctors',
  href: '/case-studies#smile-doctors',
  image: '/case-studies/smile-doctors-proof.png',
  title: '1300+ New Bookings in Under 12 Months',
  summary:
    'We built a custom Webflow website and now run full website management, SEO, AI ranking optimization, Meta PPC, social media management, and content creation. They are crushing it and everyone in town is talking about them.',
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

        <div className="mx-auto max-w-3xl">
          <Link
            to={featuredCaseStudy.href}
            className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 z-10 bg-blue-900/20 transition-colors duration-500 group-hover:bg-transparent" />
              <img
                src={featuredCaseStudy.image}
                alt={featuredCaseStudy.clinic}
                className="h-full w-full -translate-y-2 transform object-cover object-bottom transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute left-4 top-4 z-20">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-950 shadow-sm backdrop-blur-sm dark:bg-slate-950/90 dark:text-white">
                  {featuredCaseStudy.clinic}
                </span>
              </div>
            </div>

            <div className="flex flex-grow flex-col p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {featuredCaseStudy.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-6 text-2xl font-bold text-blue-950 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {featuredCaseStudy.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{featuredCaseStudy.summary}</p>

              <div className="mt-auto grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 dark:border-slate-700">
                {featuredCaseStudy.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="mb-1 flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <metric.icon className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">{metric.label}</span>
                    </div>
                    <span className={`text-2xl font-bold ${metric.valueClass}`}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
