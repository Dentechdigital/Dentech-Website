import React from 'react';
import { HeartHandshake, Lightbulb } from 'lucide-react';

export default function AboutPhilosophy() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300">
            <HeartHandshake className="h-3.5 w-3.5" />
            Philosophy
          </div>
          <h2 className="about-display mt-4 text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
            Your outcomes are our report card
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            We act as your full-stack marketing partner — brand and print, web, email, social media, and paid media — for
            practices in Ottawa, across Canada, and with select international clients. Your results define ours: we plan
            and optimize around booked care, production, and sustainable cost-per-lead, not activity for its own sake.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-amber-200/80 bg-amber-50/60 p-6 dark:border-amber-400/35 dark:bg-amber-950/45 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <Lightbulb className="mx-auto h-8 w-8 shrink-0 text-amber-600 sm:mx-0 dark:text-amber-400" />
            <div className="min-w-0 text-center sm:text-left">
              <h3 className="about-display text-lg font-semibold text-amber-950 dark:text-amber-100 md:text-xl">
                Social media content in your practice&apos;s voice
              </h3>
              <p className="mt-3 text-base leading-relaxed text-amber-900/90 dark:text-amber-200/90">
                We use AI where it speeds up operations and powers custom tools. For the social media channels your
                patients and families actually scroll, we prioritize clear, original posts and creative that reflect
                your team and your standards — not generic filler that could be any clinic. That consistency builds trust
                with people and holds up better with the platforms over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
