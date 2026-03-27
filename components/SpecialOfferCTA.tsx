import React from 'react';
import { ArrowRight, Gift, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecialOfferCTA() {
  return (
    <section className="relative overflow-hidden pt-20 pb-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/80 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950/60" />
      <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid overflow-hidden rounded-[2rem] border border-blue-100/80 bg-white/90 shadow-[0_25px_80px_rgba(30,64,175,0.16)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/85 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-8 md:p-10 lg:p-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200">
              <Gift className="w-4 h-4" />
              <span>Limited Time Offer</span>
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl dark:text-white">
              Get a Premium Practice Website <span className="block text-blue-600 dark:text-blue-300">for FREE</span>
            </h2>

            <p className="mb-7 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
              Sign a 6-month growth marketing contract and our team will design and launch a high-converting custom website for your clinic at zero build cost.
            </p>

            <ul className="mb-8 grid gap-3 sm:grid-cols-2">
              {[
                'Custom UI/UX Design (Value $5,000+)',
                'SEO-Optimized Architecture',
                'Mobile-First & Lightning Fast',
                'Integrated Appointment Booking',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200/70 bg-slate-50/70 px-3 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
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
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                No commitment required to chat.
              </span>
            </div>
          </div>

          <div className="relative min-h-[360px] bg-gradient-to-b from-blue-50/70 via-transparent to-transparent px-4 pt-6 sm:px-8 sm:pt-8 lg:min-h-[390px] lg:px-10 dark:from-blue-950/30">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-100/40 to-transparent dark:from-blue-950/30" />
            <div className="relative flex h-full items-end justify-center">
              <img
                src="/free-offer-mockup.png"
                alt="Dental clinic website mockup on desktop and mobile"
                className="m-0 -mb-6 block w-full max-w-2xl object-contain object-bottom p-0 drop-shadow-[0_-2px_1px_rgba(148,163,184,0.1)] lg:-mb-8 lg:max-w-[42rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
