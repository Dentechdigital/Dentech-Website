import React from 'react';
import { Star } from 'lucide-react';

/**
 * Text-only social proof (no video): reinforces testimonials section.
 */
export default function HomeReviewsHighlight() {
  return (
    <section className="border-y border-slate-200/70 bg-white py-12 dark:border-slate-800 dark:bg-slate-950 md:py-14" aria-label="Client satisfaction">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <div className="flex items-center gap-1 text-amber-500" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-current" strokeWidth={0} />
          ))}
        </div>
        <p className="mt-4 text-lg font-semibold text-blue-950 dark:text-white md:text-xl">Five-star feedback from teams we work with</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
          Practice owners and managers describe us as proactive, clear, and focused on real growth—see the full quotes in
          the stories below.
        </p>
      </div>
    </section>
  );
}
