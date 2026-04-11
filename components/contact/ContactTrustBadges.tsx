import React from 'react';
import { BadgeCheck, Clock, MapPin, Shield } from 'lucide-react';

const badges: { Icon: typeof Clock; label: string }[] = [
  { Icon: Clock, label: 'Reply within one business day' },
  { Icon: Shield, label: 'You own accounts, assets & data' },
  { Icon: MapPin, label: 'Ottawa-based · Canada-wide clients' },
  { Icon: BadgeCheck, label: 'Dental & DSO marketing specialists' },
];

export default function ContactTrustBadges() {
  return (
    <section
      className="border-b border-slate-200/80 bg-white/90 py-8 dark:border-slate-800 dark:bg-slate-900/60"
      aria-label="Why teams trust Dentech"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Why practices reach out with confidence
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
          {badges.map(({ Icon, label }) => (
            <li
              key={label}
              className="inline-flex max-w-[min(100%,280px)] items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-[#FAFAF9] px-4 py-2.5 text-left shadow-sm dark:border-slate-600/80 dark:bg-slate-800/80 sm:max-w-none"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
                <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
              </span>
              <span className="text-sm font-semibold leading-snug text-blue-950 dark:text-slate-100">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
