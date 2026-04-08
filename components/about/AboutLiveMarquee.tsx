import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AboutLiveMarquee() {
  const trelloImgLight = `${import.meta.env.BASE_URL}about/trello-light.png`;
  const trelloImgDark = `${import.meta.env.BASE_URL}about/trello-dark.png`;

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

        {/* Image preview: full width + bottom fade into next section */}
        <div className="relative -mt-10 left-1/2 right-1/2 -mx-[50vw] w-screen">
          <div className="relative overflow-hidden">
            <img
              src={trelloImgLight}
              alt="Work in progress board (light)"
              className="w-full dark:hidden"
              loading="lazy"
              decoding="async"
            />
            <img
              src={trelloImgDark}
              alt="Work in progress board (dark)"
              className="hidden w-full dark:block"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-44 bg-gradient-to-b from-transparent via-[#FAFAF9]/70 to-[#FAFAF9] sm:block dark:via-slate-950/70 dark:to-slate-950 lg:h-[22.5rem] lg:via-[#FAFAF9]/90 dark:lg:via-slate-950/90" />
          </div>
        </div>
      </div>
    </section>
  );
}

