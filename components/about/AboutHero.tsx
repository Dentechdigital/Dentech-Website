import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative min-h-[min(520px,78vh)] overflow-hidden bg-gradient-to-br from-[#FAFAF9] via-sky-50/50 to-blue-50/70 pb-16 pt-28 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/35 md:min-h-[min(560px,72vh)] md:pb-20 md:pt-32">
      {/* Base wash — fills width so right side is not flat white */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/25 to-sky-100/45 dark:via-blue-950/20 dark:to-slate-800/40" />

      <div className="pointer-events-none absolute -right-16 top-[-10%] h-[min(100vw,520px)] w-[min(100vw,520px)] rounded-full bg-blue-300/45 blur-[100px] dark:bg-blue-500/25 dark:blur-[120px] md:-right-8 md:top-[-5%]" />
      <div className="pointer-events-none absolute -left-24 bottom-[-15%] h-[min(90vw,480px)] w-[min(90vw,480px)] rounded-full bg-cyan-200/50 blur-[100px] dark:bg-cyan-500/18 dark:blur-[120px]" />
      <div className="pointer-events-none absolute right-[15%] top-[35%] h-72 w-72 rounded-full bg-indigo-200/30 blur-[90px] dark:bg-indigo-500/12 md:h-96 md:w-96" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
          <Sparkles className="h-4 w-4" />
          <span>Since 2017 · Ottawa, Canada</span>
        </div>

        <h1 className="about-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-blue-950 dark:text-white md:text-5xl lg:text-6xl">
          The dental growth partner behind your website, ads, and patient experience.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          If your team is stretched thin between the front desk and Facebook, you need a senior crew that treats
          marketing like a system — not a checklist. Dentech Digital is a small, experienced team based in Ottawa,
          helping dental and medical practices across Canada launch, scale, and prove ROI since 2017.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-xl"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:border-blue-500/50 dark:hover:text-blue-300"
          >
            View case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
