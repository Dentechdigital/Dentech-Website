import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] pb-16 pt-28 dark:bg-slate-900 md:pb-20 md:pt-32">
      {/* Soft wash — same family as Services cards 5 (rose→pink) & 6 (violet→fuchsia), kept subtle */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-violet-50/45 dark:from-rose-950/15 dark:via-transparent dark:to-violet-950/20" />

      {/* Card 5–style glow: rose → pink (top right, like icon from-rose-500 to-pink-400) */}
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-gradient-to-br from-rose-200/45 to-pink-200/40 blur-3xl dark:from-rose-600/12 dark:to-pink-600/10" />
      {/* Card 6–style glow: violet → fuchsia (bottom left, like icon from-violet-500 to-fuchsia-400) */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-200/40 to-fuchsia-200/35 blur-3xl dark:from-violet-600/12 dark:to-fuchsia-600/10" />
      {/* Bridge: very light mix toward center-right so the band isn’t empty */}
      <div className="pointer-events-none absolute right-[5%] top-[30%] h-64 w-64 rounded-full bg-gradient-to-br from-pink-100/25 to-violet-100/30 blur-3xl dark:from-pink-900/8 dark:to-violet-900/10 md:h-80 md:w-80" />

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
