import React from 'react';
import { CheckCircle2, Target } from 'lucide-react';
import { differentiators, whoWeServe } from '../../data/aboutContent';

export default function AboutWhoWeServe() {
  return (
    <section className="bg-[#F5F7FB] py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-slate-800 dark:text-blue-300">
              <Target className="h-3.5 w-3.5" />
              Who we serve
            </div>
            <h2 className="about-display mt-4 text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
              Built for practices that want clarity, not chaos
            </h2>
            <ul className="mt-8 space-y-4">
              {whoWeServe.map((line) => (
                <li key={line} className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              We work in <strong className="text-slate-800 dark:text-slate-200">English and French</strong> for Canadian
              markets — remote delivery with an Ottawa headquarters you can visit.
            </p>
          </div>

          <div className="rounded-3xl border border-white/80 bg-white/90 p-8 shadow-xl shadow-blue-100/30 dark:border-slate-600/80 dark:bg-slate-800/85 dark:shadow-lg dark:shadow-black/20">
            <h3 className="text-lg font-semibold text-blue-950 dark:text-white">What sets us apart</h3>
            <ul className="mt-6 space-y-4">
              {differentiators.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm leading-relaxed text-slate-700 dark:border-slate-600/90 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
