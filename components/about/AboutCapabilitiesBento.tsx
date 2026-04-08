import React from 'react';
import { Layers, MonitorSmartphone, UsersRound, Target, TrendingUp } from 'lucide-react';
import { capabilityCards, type CapabilityVisualKey } from '../../data/aboutContent';

const capabilityIcons: Record<CapabilityVisualKey, typeof Layers> = {
  brand: Layers,
  web: MonitorSmartphone,
  social: UsersRound,
  paid: Target,
};

export default function AboutCapabilitiesBento() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] py-20 dark:bg-slate-950">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-600/15" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-teal-200/35 blur-3xl dark:bg-teal-600/12" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700 shadow-sm dark:border-blue-500/30 dark:bg-slate-800/90 dark:text-blue-300">
            <TrendingUp className="h-3.5 w-3.5" />
            Full-funnel
          </div>
          <h2 className="about-display mt-4 text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
            Capabilities across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-600 dark:from-blue-400 dark:via-teal-400 dark:to-emerald-400">
              every touchpoint
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            From the trade show booth to the paid social campaign — one partner who knows how each layer connects. We
            work with dental leaders and industry specialists so strategy stays current.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {capabilityCards.map((c) => {
            const Icon = capabilityIcons[c.visual.key];
            return (
              <div
                key={c.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/90 dark:hover:border-slate-600"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${c.visual.topBar}`}
                  aria-hidden
                />

                <div
                  className="pointer-events-none absolute right-0 top-0 h-56 w-56 opacity-[0.12] transition-opacity duration-700 group-hover:opacity-[0.22] dark:opacity-[0.18] dark:group-hover:opacity-30"
                  style={{
                    maskImage: 'radial-gradient(circle at top right, black, transparent 72%)',
                    WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 72%)',
                  }}
                >
                  <img
                    src={c.visual.bgImage}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="relative z-10 flex flex-grow flex-col p-6 pt-8 md:p-7">
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.visual.iconGradient} shadow-lg shadow-slate-900/10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 dark:shadow-black/30`}
                  >
                    <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-950 dark:text-white md:text-xl">{c.title}</h3>
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {c.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
