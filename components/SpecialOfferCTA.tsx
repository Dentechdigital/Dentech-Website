import React from 'react';
import { ArrowRight, Gift, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionGradientEmphasis } from './SectionGradientEmphasis';

export default function SpecialOfferCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-indigo-50/90 to-emerald-100/50 dark:from-blue-950/40 dark:via-slate-950 dark:to-emerald-950/25" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-blue-400/35 blur-3xl dark:bg-blue-500/25" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-teal-300/30 blur-3xl dark:bg-teal-500/15" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-600/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-3 lg:px-4">
        <div className="grid overflow-hidden rounded-[2rem] border-2 border-blue-200/90 bg-white shadow-[0_28px_80px_-12px_rgba(37,99,235,0.22),0_0_0_1px_rgba(255,255,255,0.6)_inset] ring-4 ring-blue-500/10 dark:border-blue-500/35 dark:bg-slate-950 dark:shadow-[0_28px_80px_-12px_rgba(37,99,235,0.35)] dark:ring-blue-400/15 lg:grid-cols-[1.02fr_0.98fr]">
          <div
            aria-hidden
            className="col-span-full h-1.5 bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500"
          />
          <div className="col-span-full border-b border-blue-100/80 bg-gradient-to-r from-blue-50/90 via-white to-emerald-50/40 px-3.5 py-7 sm:px-5 sm:py-9 dark:border-blue-500/15 dark:from-blue-950/50 dark:via-slate-950 dark:to-emerald-950/20 lg:col-span-1 lg:border-b-0 lg:border-r lg:px-6 lg:py-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/80 bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-blue-800 shadow-md shadow-blue-600/10 dark:border-blue-400/40 dark:from-blue-600/30 dark:to-teal-600/25 dark:text-blue-100">
              <Gift className="h-4 w-4 text-blue-600 dark:text-cyan-200" />
              <span>Limited Time Offer</span>
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              <span className="block">Get a Premium Practice</span>
              <span className="block">
                <SectionGradientEmphasis>Website for FREE</SectionGradientEmphasis>
              </span>
            </h2>

            <p className="mb-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Sign a 6-month growth marketing contract and our team will design and launch a custom, high-converting website for your clinic at zero build cost.
            </p>

            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200/90 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-sm dark:border-emerald-500/30 dark:from-emerald-900/40 dark:to-teal-900/30 dark:text-emerald-100">
              Full Website Design Value: $3,000+
            </div>

            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {[
                'Custom UI/UX Design',
                'SEO- & GEO-friendly site structure',
                'Mobile-First & Lightning Fast',
                'Integrated Appointment Booking',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white/90 px-3.5 py-3 text-sm text-slate-700 shadow-sm dark:border-blue-500/25 dark:bg-slate-900/80 dark:text-slate-200"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600 dark:text-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/35 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-teal-700 sm:w-auto dark:from-blue-500 dark:to-teal-600 dark:hover:from-blue-400 dark:hover:to-teal-500"
              >
                <span>Claim Your Free Website</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">No commitment required to chat.</span>
            </div>
          </div>

          <div className="relative flex min-h-[350px] items-end justify-center bg-gradient-to-br from-blue-100/90 via-cyan-50/80 to-emerald-50/70 px-1 pt-7 sm:px-2 sm:pt-9 lg:min-h-[430px] lg:px-2 lg:pt-12 dark:from-blue-950/50 dark:via-slate-900/40 dark:to-emerald-950/30">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-200/50 via-teal-100/30 to-transparent dark:from-blue-600/20 dark:via-teal-900/10" />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70 dark:opacity-45"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(13,148,136,0.22) 1.2px, transparent 1.2px), radial-gradient(circle, rgba(37,99,235,0.2) 1.2px, transparent 1.2px)',
                backgroundSize: '20px 20px, 18px 18px',
                backgroundPosition: '0 0, 10px 10px',
                maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-100/50 via-transparent to-transparent dark:from-emerald-950/40" />
            <img
              src="/free-offer-mockup.webp"
              alt="Dental clinic website mockup on desktop and mobile"
              className="relative z-10 m-0 -mb-6 block w-full max-w-[50rem] object-contain object-bottom p-0 drop-shadow-[0_24px_40px_rgba(15,23,42,0.16)] lg:-mb-8 lg:max-w-[56rem]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
