import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AboutLiveMarquee() {
  const trelloImgLight = `${import.meta.env.BASE_URL}about/trello-workboard-light.png`;
  const trelloImgDark = `${import.meta.env.BASE_URL}about/trello-workboard.png`;
  const fadeMask = 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 100%)';

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
        <div className="relative mt-10">
          <div className="relative h-56 overflow-hidden sm:h-64 lg:h-72">
            <img
              src={trelloImgLight}
              alt="Work in progress board (light)"
              className="h-full w-full object-cover object-top dark:hidden"
              style={{ WebkitMaskImage: fadeMask, maskImage: fadeMask }}
              loading="lazy"
              decoding="async"
            />
            <img
              src={trelloImgDark}
              alt="Work in progress board (dark)"
              className="hidden h-full w-full object-cover object-top dark:block"
              style={{ WebkitMaskImage: fadeMask, maskImage: fadeMask }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

