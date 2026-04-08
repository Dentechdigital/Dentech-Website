import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DynamicDots from '../DynamicDots';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#FAFAF9] pb-20 pt-28 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 md:pb-24 md:pt-32">
      {/* Soft blue wash — light mode only (avoids a bright patch top-left in dark) */}
      <div className="pointer-events-none absolute left-0 top-0 h-[min(520px,85vw)] w-[min(520px,90vw)] -translate-x-1/3 -translate-y-1/4 rounded-full bg-blue-50/55 blur-[100px] transition-colors duration-300 dark:hidden" />

      {/* Rose → violet tint; in dark, only a faint cool depth toward the bottom — no wash in the top-left */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-50/40 via-transparent to-violet-50/35 dark:from-transparent dark:via-slate-950/0 dark:to-slate-900/40" />

      {/* Same animated dot field as home; mask shifted toward upper-left for a distinct About look */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-100 transition-opacity duration-300 dark:opacity-[0.32]"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
        }}
      >
        <DynamicDots />
      </div>

      {/* Single accent glow — bottom right */}
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gradient-to-tl from-fuchsia-200/45 via-violet-200/25 to-transparent blur-3xl dark:from-fuchsia-600/14 dark:via-violet-600/10 dark:to-transparent md:h-96 md:w-96" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-7">
            {/* Badge aligned with home hero pattern */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-gray-500 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-400">
              <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500 animate-pulse" />
              <span>Since 2017 · Ottawa, Canada</span>
            </div>

            <div className="mt-8 max-w-3xl border-l-2 border-blue-500/35 pl-6 dark:border-blue-400/30 md:pl-8">
              <h1 className="about-display text-4xl font-semibold leading-[1.08] tracking-tight text-blue-950 dark:text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
                The dental growth partner behind your website, ads, and patient experience.
              </h1>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
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

          {/* Right column: abstract decoration (lg+) */}
          <div
            className="relative mx-auto hidden h-[min(380px,42vw)] w-full max-w-sm lg:col-span-5 lg:mx-0 lg:block lg:max-w-none lg:justify-self-end"
            aria-hidden
          >
            <svg
              viewBox="0 0 360 400"
              className="h-full w-full max-h-[400px] text-blue-600 dark:text-blue-500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="aboutHeroStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.28" />
                </linearGradient>
                <linearGradient id="aboutHeroFill" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="aboutHeroArc" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle
                cx="198"
                cy="202"
                r="138"
                stroke="url(#aboutHeroStroke)"
                strokeWidth="1.25"
                className="dark:[stroke-opacity:0.9]"
              />
              <circle
                cx="198"
                cy="202"
                r="98"
                stroke="currentColor"
                strokeOpacity="0.14"
                strokeWidth="1"
                strokeDasharray="6 10"
                className="dark:stroke-opacity-[0.22]"
              />
              <path
                d="M 48 120 Q 120 88 198 108 T 318 96"
                stroke="url(#aboutHeroArc)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <rect
                x="52"
                y="248"
                width="76"
                height="76"
                rx="18"
                fill="url(#aboutHeroFill)"
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="1"
                className="dark:stroke-opacity-[0.28]"
                transform="rotate(-8 90 286)"
              />
              <rect
                x="238"
                y="72"
                width="64"
                height="64"
                rx="14"
                fill="white"
                fillOpacity="0.55"
                stroke="currentColor"
                strokeOpacity="0.12"
                strokeWidth="1"
                className="dark:fill-slate-800/50 dark:stroke-opacity-[0.25]"
                transform="rotate(12 270 104)"
              />
              <circle cx="268" cy="288" r="6" fill="currentColor" fillOpacity="0.35" className="dark:fill-opacity-[0.45]" />
              <circle cx="118" cy="168" r="4" fill="#06b6d4" fillOpacity="0.45" />
              <circle cx="312" cy="200" r="3.5" fill="currentColor" fillOpacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
