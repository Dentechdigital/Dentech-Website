import React from 'react';
import { aboutStats } from '../../data/aboutContent';

export default function AboutStatsStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-[#FAFAF9] py-10 dark:border-slate-700/70 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 md:text-left">
          At a glance
        </p>
        <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/55 dark:shadow-lg dark:shadow-black/25 md:p-7">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {aboutStats.map((s, i) => (
              <div
                key={s.label}
                className={[
                  'px-3 py-4 text-center md:px-5 md:py-2 md:text-left',
                  i % 2 === 0 ? 'border-r border-slate-200/90 dark:border-slate-600/60 md:border-r-0' : '',
                  i < 2 ? 'border-b border-slate-200/90 dark:border-slate-600/60 md:border-b-0' : '',
                  i > 0 ? 'md:border-l md:border-slate-200/90 dark:md:border-slate-600/60' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <p className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white md:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
