import React, { useEffect, useState } from 'react';
import { aboutStats } from '../../data/aboutContent';

/**
 * Infinite one-line marquee on /about (under the hero).
 * If you see a static grid instead: your OS has “Reduce motion” on
 * (macOS: Accessibility → Display → Reduce motion). The animated strip is not commented out.
 */
function MarqueeSegment() {
  return (
    <div className="flex shrink-0 flex-nowrap items-center">
      {aboutStats.map((s) => (
        <div
          key={s.label}
          className="flex shrink-0 items-baseline gap-3 whitespace-nowrap px-8 sm:px-10 md:px-14"
        >
          <span className="whitespace-nowrap text-2xl font-bold tracking-tight text-blue-950 dark:text-white md:text-3xl">
            {s.value}
          </span>
          <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {s.label}
          </span>
          <span className="shrink-0 select-none text-slate-300 dark:text-slate-600" aria-hidden>
            |
          </span>
        </div>
      ))}
    </div>
  );
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function AboutStatsStrip() {
  const [reduceMotion, setReduceMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (reduceMotion) {
    return (
      <section className="border-y border-slate-200/80 bg-white py-10 dark:border-slate-700/70 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {aboutStats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-slate-200/80 bg-white py-6 dark:border-slate-700/70 dark:bg-slate-950 md:py-7">
      <div
        className="w-full overflow-x-hidden overflow-y-visible [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        aria-label="Company highlights"
      >
        <div className="dentech-about-marquee-track">
          <MarqueeSegment />
          <MarqueeSegment />
        </div>
      </div>
    </section>
  );
}
