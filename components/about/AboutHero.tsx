import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import AboutHeroSphere from './AboutHeroSphere';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] pb-16 pt-28 dark:bg-slate-900 md:pb-20 md:pt-32 lg:pb-24 lg:pt-36">
      <style>{`
        .about-hero-deco-mask {
          -webkit-mask-image: radial-gradient(ellipse 95% 85% at 72% 48%, black 35%, transparent 78%);
          mask-image: radial-gradient(ellipse 95% 85% at 72% 48%, black 35%, transparent 78%);
        }
        @media (min-width: 1024px) {
          .about-hero-deco-mask {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 22%, rgba(0,0,0,0.75) 42%, black 100%);
            mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 22%, rgba(0,0,0,0.75) 42%, black 100%);
          }
        }
      `}</style>

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10 md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-600/12 md:h-72 md:w-72" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-6 xl:gap-12">
          <div className="relative z-20 max-w-2xl lg:max-w-none">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              <span>Since 2017 · Ottawa, Canada</span>
            </div>

            <h1 className="about-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-blue-950 dark:text-white md:text-5xl lg:text-[2.65rem] xl:text-6xl">
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

          <div className="about-hero-deco-mask relative mx-auto w-full max-w-[420px] sm:max-w-[500px] lg:mx-0 lg:max-w-none lg:justify-self-end">
            {/* Explicit height fixes canvas parent 0×0 (h-full + aspect-ratio was unreliable) */}
            <div className="relative isolate h-[280px] w-full sm:h-[320px] lg:h-[400px] xl:h-[440px]">
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-slate-200/50 via-blue-100/25 to-cyan-100/35 blur-2xl dark:from-slate-700/20 dark:via-blue-900/15 dark:to-cyan-900/10" />
              <div className="pointer-events-none absolute inset-[10%] rounded-[45%] bg-gradient-to-tl from-white/60 via-sky-50/20 to-transparent dark:from-slate-600/8 dark:via-blue-950/10 dark:to-transparent" />
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-slate-200/40 bg-gradient-to-b from-white/40 to-slate-50/30 dark:border-slate-600/30 dark:from-slate-800/30 dark:to-slate-900/40 lg:rounded-[2.5rem]">
                <AboutHeroSphere />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
