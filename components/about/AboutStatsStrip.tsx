import React, { useEffect, useState } from 'react';
import { aboutStats } from '../../data/aboutContent';

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

export default function AboutStatsStrip() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
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
      <style>{`
        @keyframes about-stats-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .about-stats-marquee-track {
          display: flex;
          width: max-content;
          flex-wrap: nowrap;
          animation: about-stats-marquee 38s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div
        className="w-full overflow-x-hidden overflow-y-visible [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        aria-label="Company highlights"
      >
        {/* Webflow-style: two identical rows; -50% shift = seamless loop */}
        <div className="about-stats-marquee-track">
          <MarqueeSegment />
          <MarqueeSegment />
        </div>
      </div>
    </section>
  );
}
