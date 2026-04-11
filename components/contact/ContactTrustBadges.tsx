import React from 'react';
import { BadgeCheck, Clock, MapPin, Shield } from 'lucide-react';

const badges: { Icon: typeof Clock; label: string }[] = [
  { Icon: Clock, label: 'Reply within one business day' },
  { Icon: Shield, label: 'You own accounts & assets' },
  { Icon: MapPin, label: 'Ottawa · Canada-wide' },
  { Icon: BadgeCheck, label: 'Dental & DSO specialists' },
];

export default function ContactTrustBadges() {
  return (
    <section
      className="border-b border-slate-200/80 bg-white py-5 dark:border-slate-800 dark:bg-slate-950"
      aria-label="Trust signals"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 md:justify-between md:gap-x-4">
          {badges.map(({ Icon, label }) => (
            <li key={label} className="flex max-w-[200px] items-center gap-2.5 sm:max-w-none">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white dark:bg-blue-500">
                <Icon className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
              </span>
              <span className="text-xs font-medium leading-tight text-slate-700 dark:text-slate-300 sm:text-[13px]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
