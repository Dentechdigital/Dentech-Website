import React from 'react';
import { HeartHandshake, Lightbulb } from 'lucide-react';

export default function AboutPhilosophy() {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
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
            We have walked alongside dozens of businesses in Ottawa, across Canada, and internationally — often as the
            &quot;local marketing person&quot; who connects signs, creative, web, email, social, and paid channels. Our
            success is conditioned on the success of our clients and partners: we celebrate when your chairs fill and
            your cost-per-lead drops.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-amber-200/80 bg-amber-50/60 p-6 dark:border-amber-500/25 dark:bg-amber-500/10 md:p-8">
          <div className="flex gap-4">
            <Lightbulb className="h-8 w-8 shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <h3 className="font-semibold text-amber-950 dark:text-amber-100">Original content on social</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-900/90 dark:text-amber-200/90">
                We use AI carefully for operations and custom tools — but on social, we prioritize original,
                human-crafted content that sounds like your practice, not a generic bot. Authenticity builds trust with
                patients and platforms alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
