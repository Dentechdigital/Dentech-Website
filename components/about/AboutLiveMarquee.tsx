import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AboutLiveMarquee() {
  const trelloImgLight = `${import.meta.env.BASE_URL}about/trello-workboard-light.png`;
  const trelloImgDark = `${import.meta.env.BASE_URL}about/trello-workboard.png`;

  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] pb-0 pt-14 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            Real people, real delivery
          </div>
          <h2 className="about-display mt-4 text-2xl font-semibold tracking-tight text-blue-950 dark:text-white sm:text-3xl">
            A live view of the team behind the work
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            Strategy, creative, media, and engineering — working as one partner. Reach anyone through the shared inbox
            when you need a fast answer.
          </p>
        </div>

        {/* Image preview: top-half crop + soft fade at bottom */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative h-64 overflow-hidden rounded-t-3xl sm:h-72 lg:h-80">
            <img
              src={trelloImgLight}
              alt="Work in progress board (light)"
              className="h-full w-full object-cover object-top dark:hidden"
              loading="lazy"
              decoding="async"
            />
            <img
              src={trelloImgDark}
              alt="Work in progress board (dark)"
              className="hidden h-full w-full object-cover object-top dark:block"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#FAFAF9] dark:to-slate-950" />
          </div>
        </div>
      </div>
    </section>
  );
}

