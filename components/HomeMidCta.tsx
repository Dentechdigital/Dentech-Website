import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionGradientEmphasis } from './SectionGradientEmphasis';

export default function HomeMidCta() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 py-16 text-white md:py-20" aria-label="Get started">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Ready for a <SectionGradientEmphasis>clearer growth plan</SectionGradientEmphasis>?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
          Share your goals and constraints—we will map what to fix first and how channels should work together for your
          market.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-950 shadow-lg transition hover:bg-blue-50 sm:w-auto"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
          >
            Explore case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
