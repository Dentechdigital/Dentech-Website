import React from 'react';
import { aboutStats } from '../../data/aboutContent';

/** One Webflow-style marquee segment (duplicated for seamless loop). */
function MarqueeSegment() {
  return (
    <div className="flex shrink-0 flex-nowrap items-stretch">
      {aboutStats.map((s) => (
        <div
          key={s.label}
          className="flex shrink-0 flex-col items-center gap-1.5 whitespace-nowrap border-r border-slate-200/60 px-10 py-1 last:border-r-0 dark:border-slate-700/80 sm:px-12 md:px-14"
        >
          <span className="text-2xl font-bold leading-tight tracking-tight text-blue-950 dark:text-white md:text-3xl">
            {s.value}
          </span>
          <span className="whitespace-nowrap text-center text-[10px] font-semibold uppercase leading-snug tracking-wider text-slate-500 dark:text-slate-400 sm:text-xs">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AboutStatsStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-7 dark:border-slate-700/70 dark:bg-slate-950 md:py-8">
      <style>{`
        @keyframes about-trust-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .about-trust-marquee-track {
          display: flex;
          width: max-content;
          flex-wrap: nowrap;
          animation: about-trust-marquee 36s linear infinite;
          will-change: transform;
        }
        .about-trust-marquee-viewport {
          width: 100%;
          overflow: hidden;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .about-trust-marquee-viewport::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div
        className="about-trust-marquee-viewport [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
        aria-label="Company highlights"
      >
        <div className="about-trust-marquee-track">
          <MarqueeSegment />
          <MarqueeSegment />
        </div>
      </div>
    </section>
  );
}
