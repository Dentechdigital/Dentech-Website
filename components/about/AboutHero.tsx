import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DynamicDots from '../DynamicDots';

const CARD_DECO_IMG = `${import.meta.env.BASE_URL}about-hero-card-decoration.png`;

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#FAFAF9] pb-20 pt-28 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 md:pb-24 md:pt-32">
      {/* Soft blue wash — light mode only */}
      <div className="pointer-events-none absolute left-0 top-0 h-[min(520px,85vw)] w-[min(520px,90vw)] -translate-x-1/3 -translate-y-1/4 rounded-full bg-blue-50/55 blur-[100px] transition-colors duration-300 dark:hidden" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-50/40 via-transparent to-violet-50/35 dark:from-transparent dark:via-slate-950/0 dark:to-slate-900/40" />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-100 transition-opacity duration-300 dark:opacity-[0.32]"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
        }}
      >
        <DynamicDots />
      </div>

      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gradient-to-tl from-fuchsia-200/45 via-violet-200/25 to-transparent blur-3xl dark:from-fuchsia-600/14 dark:via-violet-600/10 dark:to-transparent md:h-96 md:w-96" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="lg:col-span-7">
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

          {/* Print & Direct Mail card art — same asset, soft mask + theme-friendly blend */}
          <div
            className="relative hidden min-h-[300px] lg:col-span-5 lg:block"
            aria-hidden
          >
            <div
              className="absolute -right-6 top-1/2 z-0 w-[min(118%,440px)] max-w-[520px] -translate-y-1/2 select-none xl:-right-4 xl:w-[min(125%,480px)]"
              style={{
                height: 'min(420px, 52vh)',
                maskImage:
                  'radial-gradient(ellipse 95% 100% at 92% 28%, black 18%, rgba(0,0,0,0.88) 42%, rgba(0,0,0,0.35) 68%, transparent 88%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 95% 100% at 92% 28%, black 18%, rgba(0,0,0,0.88) 42%, rgba(0,0,0,0.35) 68%, transparent 88%)',
              }}
            >
              <img
                src={CARD_DECO_IMG}
                alt=""
                className="h-full w-full object-cover object-[82%_12%] opacity-[0.98] shadow-none dark:object-[80%_10%] dark:opacity-[0.92] dark:brightness-[0.88] dark:contrast-[1.12] dark:saturate-[1.2]"
                loading="eager"
                decoding="async"
              />
              {/* Dark: pull residual white toward slate so it sits on the background */}
              <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-slate-950/55 via-slate-950/15 to-transparent mix-blend-darken dark:block" />
            </div>
            {/* Light: gentle fade into page background on the left edge of the art */}
            <div className="pointer-events-none absolute inset-y-8 left-0 z-[1] w-2/5 bg-gradient-to-r from-[#FAFAF9] via-[#FAFAF9]/35 to-transparent dark:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
