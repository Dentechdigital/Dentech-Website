import React from 'react';
import { aboutStats } from '../../data/aboutContent';

export default function AboutStatsStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-10 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {aboutStats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white md:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
