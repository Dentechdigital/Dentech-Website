import React from 'react';
import { ArrowRight, Gift, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecialOfferCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900/35" />
      <div className="pointer-events-none absolute -top-28 left-1/4 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/12" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-500/12" />

      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-3 lg:px-4">
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/95 shadow-[0_30px_90px_rgba(30,64,175,0.14)] dark:border-slate-800/80 dark:bg-slate-950 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="px-3.5 py-7 sm:px-5 sm:py-9 lg:px-6 lg:py-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-blue-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-blue-100">
              <Gift className="h-4 w-4" />
              <span>Limited Time Offer</span>
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              <span className="block">Get a Premium Practice</span>
              <span className="block">
                Website <span className="text-blue-600 dark:text-blue-300">for FREE</span>
              </span>
            </h2>

            <p className="mb-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Sign a 6-month growth marketing contract and our team will design and launch a custom, high-converting website for your clinic at zero build cost.
            </p>

            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-300">
              Full Website Design Value: $3,000+
            </div>

            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {[
                'Custom UI/UX Design',
                'SEO-Optimized Architecture',
                'Mobile-First & Lightning Fast',
                'Integrated Appointment Booking',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                <span>Claim Your Free Website</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">No commitment required to chat.</span>
            </div>
          </div>

          <div className="relative flex min-h-[350px] items-end justify-center bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-transparent px-1 pt-7 sm:px-2 sm:pt-9 lg:min-h-[430px] lg:px-2 lg:pt-12 dark:from-slate-900/30 dark:via-slate-950/10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-blue-100/70 via-blue-50/40 to-transparent dark:from-slate-900/45 dark:via-slate-950/10" />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-36 opacity-60 dark:opacity-35"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.28) 1.2px, transparent 1.2px)',
                backgroundSize: '18px 18px',
                maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-blue-100/40 to-transparent dark:from-slate-950/55" />
            <img
              src="/free-offer-mockup.png"
              alt="Dental clinic website mockup on desktop and mobile"
              className="relative z-10 m-0 -mb-6 block w-full max-w-[50rem] object-contain object-bottom p-0 drop-shadow-[0_24px_40px_rgba(15,23,42,0.16)] lg:-mb-8 lg:max-w-[56rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
