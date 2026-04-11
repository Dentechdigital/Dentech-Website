import React from 'react';
import { BadgeCheck, Clock, MapPin, Shield } from 'lucide-react';

const badges: { Icon: typeof Clock; label: string; accent: string }[] = [
  { Icon: Clock, label: 'Reply within one business day', accent: 'Speed' },
  { Icon: Shield, label: 'You own accounts, assets & data', accent: 'Ownership' },
  { Icon: MapPin, label: 'Ottawa-based · Canada-wide clients', accent: 'Local roots' },
  { Icon: BadgeCheck, label: 'Dental & DSO marketing specialists', accent: 'Focus' },
];

export default function ContactTrustBadges() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200/70 py-14 dark:border-slate-800/80 md:py-20"
      aria-label="Why teams trust Dentech"
    >
      {/* Ambient layers */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#FAFAF9] dark:bg-slate-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-400/15 blur-[100px] dark:bg-blue-600/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[360px] w-[360px] rounded-full bg-cyan-400/12 blur-[90px] dark:bg-cyan-500/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top accent rail */}
        <div className="mb-10 flex justify-center md:mb-14">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent dark:via-cyan-400" />
        </div>

        <div className="mx-auto max-w-3xl text-center md:max-w-4xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-600/90 dark:text-blue-400/90">
            Trust signals
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-3xl lg:text-[2rem] lg:leading-snug">
            Reach out knowing we&apos;re{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400">
              built for dental growth
            </span>
            —not generic marketing noise.
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {badges.map(({ Icon, label, accent }, index) => (
            <li
              key={label}
              className={`group relative list-none ${index % 2 === 1 ? 'xl:translate-y-6' : 'xl:translate-y-0'} transition-transform duration-500`}
            >
              {/* Gradient frame */}
              <div className="relative rounded-[1.35rem] bg-gradient-to-br from-blue-500/25 via-cyan-500/15 to-transparent p-[1px] shadow-lg shadow-blue-900/5 dark:from-blue-400/20 dark:via-cyan-500/10 dark:shadow-black/40">
                <div className="relative h-full overflow-hidden rounded-[1.3rem] bg-white/85 px-5 py-5 backdrop-blur-md transition-all duration-300 group-hover:bg-white/95 dark:bg-slate-900/75 dark:group-hover:bg-slate-900/90">
                  {/* Sheen on hover */}
                  <div className="pointer-events-none absolute -inset-px rounded-[1.3rem] bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5" />

                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/25 transition duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/30 dark:shadow-blue-900/40">
                        <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                      </div>
                      <span className="rounded-full border border-blue-200/80 bg-blue-50/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200">
                        {accent}
                      </span>
                    </div>
                    <p className="text-[15px] font-semibold leading-snug text-blue-950 dark:text-slate-100 md:text-base">
                      {label}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
