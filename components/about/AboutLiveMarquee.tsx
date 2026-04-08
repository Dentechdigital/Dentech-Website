import React from 'react';
import { Folder, Sparkles, Users } from 'lucide-react';

export default function AboutLiveMarquee() {
  const trelloImgLight = `${import.meta.env.BASE_URL}about/trello-workboard-light.png`;
  const trelloImgDark = `${import.meta.env.BASE_URL}about/trello-workboard.png`;
  const avatars = [
    { src: `${import.meta.env.BASE_URL}team/dahman-m.png`, alt: 'Dahman M.' },
    { src: `${import.meta.env.BASE_URL}team/balfoul.png`, alt: 'Balfoul M.' },
    { src: `${import.meta.env.BASE_URL}team/omayma-r.png`, alt: 'Omayma R.' },
    { src: `${import.meta.env.BASE_URL}team/zak-a.png`, alt: 'Zak A.' },
  ];

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

        <div className="mt-10 rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-900/50 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            {/* Left: WIP preview */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200">
                  <Users className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  Work in progress
                </div>
                <div className="flex -space-x-2">
                  {avatars.map((a) => (
                    <img
                      key={a.alt}
                      src={a.src}
                      alt={a.alt}
                      className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm dark:border-slate-950"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>

              <div className="relative mt-4 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm dark:border-slate-700/70 dark:bg-slate-950">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-50/35 via-transparent to-cyan-50/35 dark:from-blue-500/10 dark:to-cyan-500/10" />
                {/* Crop + keep sharp (avoid over-scaling / blur) */}
                <div className="relative z-10 aspect-[16/9] overflow-hidden">
                  <img
                    src={trelloImgLight}
                    alt="Work in progress board (Trello, light)"
                    className="h-full w-full object-cover object-center dark:hidden"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={trelloImgDark}
                    alt="Work in progress board (Trello, dark)"
                    className="hidden h-full w-full object-cover object-center dark:block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Right: clean “folders / assets” decorations */}
            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/40">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Deliverables
                  </p>
                  <div className="mt-4 grid gap-3">
                    {[
                      { label: 'Creative', meta: 'Design · Video · Social' },
                      { label: 'Web', meta: 'Landing pages · QA' },
                      { label: 'Ads', meta: 'Google · Meta' },
                    ].map((f) => (
                      <div
                        key={f.label}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900/60"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/20">
                          <Folder className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-blue-950 dark:text-white">{f.label}</p>
                          <p className="truncate text-xs text-slate-600 dark:text-slate-400">{f.meta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/40">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Live signals
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

