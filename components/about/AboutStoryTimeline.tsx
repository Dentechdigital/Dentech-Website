import React, { useEffect, useRef, useState } from 'react';
import { timelineMilestones } from '../../data/aboutContent';

/** Viewport Y (px) used to pick which milestone is "current" — below sticky header on mobile. */
function getFocusY(stickyBottom: number) {
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  const belowSticky = stickyBottom + 24;
  return belowSticky + (vh - belowSticky) * 0.35;
}

export default function AboutStoryTimeline() {
  const [visible, setVisible] = useState<Record<number, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stickyRailRef = useRef<HTMLDivElement | null>(null);

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
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    itemRefs.current.forEach((el) => {
      if (el) revealObs.observe(el);
    });

    return () => revealObs.disconnect();
  }, []);

  useEffect(() => {
    const pickActive = () => {
      const stickyBottom = stickyRailRef.current?.getBoundingClientRect().bottom ?? 0;
      const focusY = getFocusY(stickyBottom);

      let bestI = 0;
      let bestDist = Infinity;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.bottom < stickyBottom + 40 || r.top > window.innerHeight + 80) return;

        const anchorY = r.top + Math.min(r.height * 0.35, 120);
        const dist = Math.abs(anchorY - focusY);
        if (dist < bestDist) {
          bestDist = dist;
          bestI = i;
        }
      });

      setActiveIndex(bestI);
    };

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(pickActive);
    });
    window.addEventListener('scroll', pickActive, { passive: true });
    window.addEventListener('resize', pickActive, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', pickActive);
      window.removeEventListener('resize', pickActive);
    };
  }, []);

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

        {/* Sticky year — mobile only; ref used to position scroll focus below bar */}
        <div ref={stickyRailRef} className="relative z-20 mt-10 md:mt-16 md:hidden">
          <div className="sticky top-0 border-b border-slate-200/90 bg-white/95 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
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
          {/* Spine: always centered on marker column (w-14 = 56px → center 28px = left-7) */}
          <div
            className="pointer-events-none absolute bottom-8 left-7 top-8 w-px -translate-x-1/2 bg-gradient-to-b from-blue-200 via-blue-400 to-cyan-300 md:bottom-12 md:top-12 dark:from-blue-900 dark:via-blue-600 dark:to-cyan-800"
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
                  className={`relative flex gap-5 motion-reduce:transition-none md:gap-8 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
                  } transition-all duration-700 ease-out`}
                >
                  {/* Marker on line — fixed width; year on desktop is separate column (not on the line) */}
                  <div className="relative z-10 flex w-14 shrink-0 flex-col items-center md:pt-1">
                    <div className="relative flex h-14 w-14 items-center justify-center md:h-16 md:w-16">
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
                  </div>

                  {/* Desktop: year beside marker column, left-aligned — clear of vertical spine */}
                  <div className="hidden min-w-0 shrink-0 pt-2 md:block md:w-[7.5rem] md:pt-3 lg:w-32">
                    <span className="block text-sm font-bold uppercase leading-snug tracking-wider text-blue-700 dark:text-blue-300">
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
