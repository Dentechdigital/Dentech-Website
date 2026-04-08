import React from 'react';
import { Sparkles } from 'lucide-react';
import { aboutTeamMembers } from '../../data/aboutContent';

function photoUrl(path: string | null) {
  if (!path) return '';
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

function initials(name: string) {
  const parts = name.replace(/\./g, '').split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export default function AboutLiveMarquee() {
  const people = aboutTeamMembers;
  const track = [...people, ...people];

  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] py-14 dark:bg-slate-950">
      <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-600/12" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl dark:bg-cyan-600/12" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            Real people, real delivery
          </div>
          <h2 className="about-display mt-4 text-2xl font-semibold tracking-tight text-blue-950 dark:text-white sm:text-3xl">
            A live view of the team behind the work
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            Strategy, creative, media, and engineering — working as one partner. Reach anyone through the shared inbox
            when you need a fast answer.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200/80 bg-white/70 py-6 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/50">
          <div className="about-marquee-mask">
            <div className="about-marquee-track">
              {track.map((m, idx) => (
                <div key={`${m.nameDisplay}-${idx}`} className="about-marquee-item">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-white shadow-sm dark:ring-slate-950">
                    {m.photo ? (
                      <img
                        src={photoUrl(m.photo)}
                        alt={m.nameDisplay}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-xs font-bold text-white">
                        {initials(m.nameDisplay)}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-blue-950 dark:text-white">{m.nameDisplay}</p>
                    <p className="truncate text-xs text-slate-600 dark:text-slate-400">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 px-6">
            {['Weekly planning', 'Creative review', 'Campaign QA', 'Landing page fixes', 'Reporting cadence'].map((t) => (
              <span
                key={t}
                className="about-live-chip rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

