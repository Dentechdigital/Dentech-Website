import React from 'react';
import type { CaseStudy } from '../../data/caseStudiesContent';

type Props = {
  study: CaseStudy;
  /** Sticky hero image column (large screens). Off by default for text-first case studies. */
  showSideImage?: boolean;
  /** When `showSideImage` is true, which side the image sits on */
  imageSide?: 'left' | 'right';
  /** Alternate background treatment */
  tone?: 'light' | 'tinted';
};

function StudyBody({ study }: { study: CaseStudy }) {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {study.context.title}
        </h3>
        {study.context.paragraphs.map((p, idx) => (
          <p key={`ctx-${idx}`} className="mt-3 text-slate-600 dark:text-slate-300">
            {p}
          </p>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{study.owned.title}</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {study.owned.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur transition-colors dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500" aria-hidden />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{study.results.title}</h3>
        {study.results.paragraphs.map((p, idx) => (
          <p key={`res-${idx}`} className="mt-3 text-slate-600 dark:text-slate-300">
            {p}
          </p>
        ))}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {study.results.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-[#FAFAF9] p-5 shadow-sm dark:border-slate-700 dark:from-slate-900/60 dark:to-slate-900/20"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {m.label}
              </p>
              <p className="about-display mt-2 text-3xl font-semibold text-blue-950 dark:text-white">{m.value}</p>
              {m.hint ? <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{m.hint}</p> : null}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{study.system.title}</h3>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {study.system.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/40"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 dark:bg-blue-500/20 dark:text-blue-300">
                {i + 1}
              </span>
              <p className="mt-3 font-semibold text-blue-950 dark:text-white">{step.title}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>

      {study.artifacts.length > 0 ? (
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Artifacts & proof</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {study.artifacts.map((a) => (
              <figure
                key={a.src + a.alt}
                className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900/40"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={a.src} alt={a.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                {a.caption ? (
                  <figcaption className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">{a.caption}</figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function StudyHeroImage({ study }: { study: CaseStudy }) {
  return (
    <div className="lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-100 shadow-[0_20px_60px_-30px_rgba(2,6,23,0.45)] dark:border-slate-700 dark:bg-slate-800">
        <img
          src={study.heroImage}
          alt={study.heroImageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">Swap with final creative anytime—layout stays consistent.</p>
    </div>
  );
}

export default function CaseStudyLongSection({
  study,
  showSideImage = false,
  imageSide = 'right',
  tone = 'light',
}: Props) {
  const sectionBg =
    tone === 'tinted'
      ? 'bg-[#FAFAF9] dark:bg-slate-950'
      : 'bg-white dark:bg-slate-900/35';

  return (
    <section
      id={study.anchorId}
      className={`scroll-mt-28 border-t border-slate-200/70 py-16 dark:border-slate-800 md:py-24 ${sectionBg}`}
      aria-labelledby={`${study.anchorId}-heading`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
            {study.industry}
          </span>
          <span className="hidden sm:inline">·</span>
          <span>{study.location}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{study.timeframe}</span>
        </div>

        <h2
          id={`${study.anchorId}-heading`}
          className="about-display mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-5xl"
        >
          {study.clientName}
        </h2>
        <p className="mt-3 max-w-4xl text-xl text-slate-700 dark:text-slate-200">{study.headline}</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
          {study.summary}
        </p>

        <div className={`mt-12 ${showSideImage ? 'grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12' : ''}`}>
          {!showSideImage ? (
            <StudyBody study={study} />
          ) : imageSide === 'right' ? (
            <>
              <div className="lg:col-span-7">
                <StudyBody study={study} />
              </div>
              <div className="lg:col-span-5">
                <StudyHeroImage study={study} />
              </div>
            </>
          ) : (
            <>
              <div className="lg:col-span-5">
                <StudyHeroImage study={study} />
              </div>
              <div className="lg:col-span-7">
                <StudyBody study={study} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
