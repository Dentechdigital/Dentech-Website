import React from 'react';
import { aboutStats } from '../../data/aboutContent';

type SegmentId = 'a' | 'b';

/** One horizontal copy of the stats row (two copies in the parent for seamless infinite scroll). */
function MarqueeSegment({ segmentId, ariaHidden }: { segmentId: SegmentId; ariaHidden?: boolean }) {
  return (
    <div
      className="about-trust-marquee-seg inline-flex shrink-0 flex-row flex-nowrap items-stretch"
      aria-hidden={ariaHidden}
    >
      {aboutStats.map((s) => (
        <div
          key={`${segmentId}-${s.label}`}
          className="flex shrink-0 flex-col items-center justify-center gap-1.5 whitespace-nowrap border-r border-slate-200/60 px-10 py-1 last:border-r-0 dark:border-slate-700/80 sm:px-12 md:px-14"
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
      <div className="about-trust-marquee-viewport" aria-label="Company highlights">
        <div className="about-trust-marquee-track">
          <MarqueeSegment segmentId="a" />
          <MarqueeSegment segmentId="b" ariaHidden />
        </div>
      </div>
    </section>
  );
}
