import React, { useCallback, useEffect, useRef, useState } from 'react';
import { timelineMilestones } from '../../data/aboutContent';

export default function AboutStoryTimeline() {
  const [visible, setVisible] = useState<Record<number, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateActiveFromEntries = useCallback((entries: IntersectionObserverEntry[]) => {
    const intersecting = entries.filter((e) => e.isIntersecting);
    if (intersecting.length === 0) return;
    const best = intersecting.reduce((a, b) =>
      a.intersectionRatio >= b.intersectionRatio ? a : b
    );
    const i = Number(best.target.getAttribute('data-i'));
    if (!Number.isNaN(i)) setActiveIndex(i);
  }, []);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = Number(entry.target.getAttribute('data-i'));
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [i]: true }));
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    const activeObs = new IntersectionObserver(updateActiveFromEntries, {
      threshold: [0, 0.1, 0.25, 0.45, 0.65, 0.85, 1],
      rootMargin: '-18% 0px -35% 0px',
    });

    itemRefs.current.forEach((el) => {
      if (el) {
        revealObs.observe(el);
        activeObs.observe(el);
      }
    });

    return () => {
      revealObs.disconnect();
      activeObs.disconnect();
    };
  }, [updateActiveFromEntries]);

  const active = timelineMilestones[activeIndex] ?? timelineMilestones[0];

  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="about-display text-center text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
          Our story
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-300">
          Dentech Digital is a dental and medical marketing agency headquartered in Ottawa, Ontario — shaped by years of
          building products, buying media, and earning trust in competitive markets.
        </p>

        {/* Sticky year rail — mobile-first; static on large screens where sidebar shows years */}
        <div className="relative z-20 mt-10 md:mt-16 md:hidden">
          <div className="sticky top-0 border-b border-slate-200/90 bg-white/90 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
            <div key={active.year} className="about-timeline-sticky-swap">
              <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Our story
              </p>
              <p className="about-display mt-1 text-center text-2xl font-semibold text-blue-600 dark:text-blue-400">
                {active.year}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 md:mt-16">
          {/* Vertical spine — visible on all breakpoints; position matches marker column center */}
          <div
            className="pointer-events-none absolute bottom-8 left-7 top-8 w-px -translate-x-1/2 bg-gradient-to-b from-blue-200 via-blue-400 to-cyan-300 md:bottom-12 md:left-[5.5rem] md:top-12 dark:from-blue-900 dark:via-blue-600 dark:to-cyan-800"
            aria-hidden
          />

          <div className="space-y-14 md:space-y-16">
            {timelineMilestones.map((m, i) => {
              const isVisible = visible[i];
              const isActive = i === activeIndex;
              return (
                <div
                  key={m.year}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-i={i}
                  className={`relative flex gap-5 md:gap-10 motion-reduce:transition-none ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
                  } transition-all duration-700 ease-out`}
                >
                  {/* Marker column — line runs through center */}
                  <div className="relative z-10 flex w-14 shrink-0 flex-col items-center md:w-44 md:pt-1">
                    <div className="relative flex h-14 w-14 items-center justify-center md:h-16 md:w-16">
                      {/* Outer soft halo */}
                      <span
                        className={`absolute inset-0 rounded-full blur-md motion-reduce:blur-0 dark:bg-blue-500/25 ${
                          isActive ? 'bg-blue-500/35 dark:bg-blue-400/35' : 'bg-blue-400/20'
                        } transition-colors duration-500`}
                        aria-hidden
                      />
                      <span
                        className="absolute inset-[2px] rounded-full bg-blue-400/15 ring-2 ring-blue-300/40 dark:bg-blue-500/10 dark:ring-blue-400/30"
                        aria-hidden
                      />
                      {/* Mid ring */}
                      <span
                        className="absolute inset-2 rounded-full border border-blue-300/50 bg-white/40 dark:border-blue-500/40 dark:bg-slate-900/40"
                        aria-hidden
                      />
                      <div
                        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white shadow-lg shadow-blue-600/25 ring-0 motion-reduce:scale-100 dark:border-slate-950 dark:from-blue-400 dark:to-blue-600 dark:shadow-blue-900/40 md:h-11 md:w-11 ${
                          isVisible ? 'scale-100' : 'scale-95'
                        } ${isActive ? 'ring-4 ring-blue-400/35 ring-offset-2 ring-offset-white dark:ring-blue-400/25 dark:ring-offset-slate-950' : ''} transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:ring-0 motion-reduce:ring-offset-0`}
                      >
                        {i + 1}
                      </div>
                    </div>
                    {/* Year beside line on desktop only */}
                    <span className="mt-3 hidden text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 md:block md:text-center">
                      {m.year}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 pt-1 md:pt-0">
                    <div className="rounded-2xl border border-slate-200/90 bg-[#FAFAF9] p-6 shadow-sm shadow-slate-200/40 transition-shadow duration-500 dark:border-slate-600/80 dark:bg-slate-800/75 dark:shadow-black/20 md:shadow-md md:shadow-slate-200/30 dark:md:shadow-black/25">
                      <h3 className="text-xl font-semibold text-blue-950 dark:text-white md:text-[1.35rem]">{m.title}</h3>
                      <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{m.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
