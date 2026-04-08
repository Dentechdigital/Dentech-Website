import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AboutLiveMarquee() {
  const trelloImg = `${import.meta.env.BASE_URL}about/trello-workboard.png`;

  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] py-14 dark:bg-slate-950">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-600/12" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl dark:bg-cyan-600/12" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            Real people, real delivery
          </div>
          <h2 className="about-display mt-4 text-2xl font-semibold tracking-tight text-blue-950 dark:text-white sm:text-3xl">
            A live view of the team behind the work
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            Strategy, creative, media, and engineering — working as one partner. Reach anyone through the shared inbox
            when you need a fast answer.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/50 sm:p-8">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm dark:border-slate-700/70 dark:bg-slate-950">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-50/40 via-transparent to-cyan-50/40 dark:from-blue-500/10 dark:to-cyan-500/10" />
            <img
              src={trelloImg}
              alt="Work in progress board (Trello)"
              className="relative z-10 h-auto w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 px-6">
            {['Weekly planning', 'Creative review', 'Campaign QA', 'Landing page fixes', 'Reporting cadence'].map((t) => (
              <span
                key={t}
                className="about-live-chip rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

