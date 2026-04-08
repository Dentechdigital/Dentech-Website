import React, { useEffect, useMemo, useState } from 'react';
import { aboutStats } from '../../data/aboutContent';

export default function AboutStatsStrip() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const loopItems = useMemo(() => [...aboutStats, ...aboutStats], []);

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
    <section className="border-y border-slate-200/80 bg-white py-8 dark:border-slate-700/70 dark:bg-slate-950">
      <style>{`
        @keyframes about-stats-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .about-stats-marquee-track {
          display: flex;
          width: max-content;
          animation: about-stats-marquee 48s linear infinite;
        }
      `}</style>

      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]"
        aria-label="Company highlights"
      >
        <div className="about-stats-marquee-track">
          {loopItems.map((s, i) => (
            <div
              key={`${s.label}-${i}`}
              className="flex shrink-0 items-baseline gap-3 px-8 sm:px-10 md:px-12"
            >
              <span className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white md:text-3xl">{s.value}</span>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{s.label}</span>
              <span className="select-none text-slate-300 dark:text-slate-600" aria-hidden>
                |
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
