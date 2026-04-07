import React from 'react';
import { capabilityCards } from '../../data/aboutContent';

export default function AboutCapabilitiesBento() {
  return (
    <section className="bg-[#F5F7FB] py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="about-display text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
          Full-funnel capabilities
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          From the trade show booth to the TikTok campaign — one partner who understands how each piece connects. We
          collaborate with dental business leaders and industry experts so strategy stays current.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilityCards.map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-slate-600 ${c.span}`}
            >
              <h3 className="text-lg font-semibold text-blue-950 dark:text-white">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
