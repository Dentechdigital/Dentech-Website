import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DynamicDots from '../DynamicDots';

const aboutHeroBgUrl = `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}hero-background.png`;

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#FAFAF9] pb-20 pt-28 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 md:pb-24 md:pt-32">
      {/* Plum / dark panel artwork (full bleed) */}
      <img
        src={aboutHeroBgUrl}
        alt=""
        className="pointer-events-none absolute inset-0 z-0 h-full w-full min-h-[420px] object-cover object-[72%_center] sm:object-right"
        decoding="async"
        fetchPriority="low"
      />
      {/* Readability behind left-aligned copy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] dark:hidden"
        style={{
          background:
            'linear-gradient(to right, #FAFAF9 0%, #FAFAF9 22%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.25) 52%, transparent 60%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden dark:block"
        style={{
          background:
            'linear-gradient(to right, rgb(2 6 23) 0%, rgb(2 6 23) 20%, rgba(2,6,23,0.88) 36%, rgba(2,6,23,0.28) 50%, transparent 58%, transparent 100%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-50 transition-opacity duration-300 dark:opacity-[0.22]"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
        }}
      >
        <DynamicDots />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-2/3 lg:max-w-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-gray-500 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-400">
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500 animate-pulse" />
            <span>Since 2017 · Ottawa, Canada</span>
          </div>

          <div className="mt-8 border-l-2 border-blue-500/35 pl-6 dark:border-blue-400/30 md:pl-8">
            <h1 className="about-display text-4xl font-semibold leading-[1.08] tracking-tight text-blue-950 dark:text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
              The dental growth partner behind your website, ads, and patient experience.
            </h1>
          </div>

          <p className="mt-6 max-w-none text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            If your team is stretched thin between the front desk and Facebook, you need a senior crew that treats
            marketing like a system — not a checklist. Dentech Digital is a small, experienced team based in Ottawa,
            helping dental and medical practices across Canada launch, scale, and prove ROI since 2017.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-xl dark:shadow-blue-900/40"
            >
              Book a strategy call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-500/60 dark:bg-slate-800/90 dark:text-slate-100 dark:backdrop-blur-md dark:hover:border-blue-400/50 dark:hover:bg-slate-700/90 dark:hover:text-blue-200"
            >
              View case studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
