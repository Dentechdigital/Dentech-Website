import React from 'react';
import { Map, Target, MonitorSmartphone, Aperture, MailOpen, Cpu, ArrowRight, TrendingUp, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type ServiceIconKey, servicesOrdered, servicePath } from '../data/servicesContent';

const iconByKey: Record<ServiceIconKey, LucideIcon> = {
  map: Map,
  target: Target,
  monitor: MonitorSmartphone,
  aperture: Aperture,
  mail: MailOpen,
  cpu: Cpu,
};

export type ServicesProps = {
  /** When false, hides badge + H2 + intro (e.g. services hub page supplies its own hero). */
  showSectionHeader?: boolean;
};

export default function Services({ showSectionHeader = true }: ServicesProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] py-24 transition-colors duration-300 dark:bg-slate-950">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-slate-700" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-50 opacity-50 blur-3xl dark:bg-blue-900/20" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald-50 opacity-50 blur-3xl dark:bg-emerald-900/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showSectionHeader ? (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
              <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                Our Services
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950 transition-colors duration-300 dark:text-white md:text-5xl">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-blue-600 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                grow your practice
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-300">
              We focus on dental marketing only. Strategy, creative, media, and web execution are aligned to one goal:
              generate more qualified patient demand and stronger booking consistency.
            </p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {servicesOrdered.map((service) => {
            const Icon = iconByKey[service.iconKey];
            const to = servicePath(service.slug);
            return (
              <Link
                to={to}
                key={service.slug}
                id={service.slug === 'ai-automation' ? 'ai' : undefined}
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 scroll-mt-24"
              >
                <div
                  className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-10 transition-opacity duration-700 group-hover:opacity-30 dark:opacity-20 dark:group-hover:opacity-40"
                  style={{
                    maskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
                  }}
                >
                  <img
                    src={service.cardBgImage}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="relative z-10 flex flex-grow flex-col">
                  <div
                    className={`mb-6 flex h-14 w-14 transform items-center justify-center rounded-2xl bg-gradient-to-br ${service.iconGradient} shadow-md transition-all duration-500 group-hover:rotate-3 group-hover:scale-110`}
                  >
                    <Icon className={`h-7 w-7 ${service.iconColor}`} strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-blue-950 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {service.title}
                  </h3>

                  <p className="mb-8 flex-grow text-base leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-300">
                    {service.shortDescription}
                  </p>

                  <div className="mt-auto flex items-center gap-2 border-t border-gray-50 pt-4 text-sm font-semibold text-gray-400 transition-colors duration-300 group-hover:text-blue-600 dark:border-slate-700/50 dark:text-gray-500 dark:group-hover:text-blue-400">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
