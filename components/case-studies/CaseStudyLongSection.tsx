import React from 'react';
import type { CaseStudy } from '../../data/caseStudiesContent';

type Props = {
  study: CaseStudy;
  /** Hero image column on large screens */
  imageSide?: 'left' | 'right';
};

function StudyBody({ study }: { study: CaseStudy }) {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-bold text-blue-950 dark:text-white">{study.context.title}</h3>
        {study.context.paragraphs.map((p, idx) => (
          <p key={`ctx-${idx}`} className="mt-3 text-slate-600 dark:text-slate-300">
            {p}
          </p>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-bold text-blue-950 dark:text-white">{study.owned.title}</h3>
        <ul className="mt-4 space-y-3">
          {study.owned.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-slate-700 dark:text-slate-200">
              <span className="mt-1.5 h-1.5 w-4 shrink-0 rounded-full bg-blue-500" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold text-blue-950 dark:text-white">{study.results.title}</h3>
        {study.results.paragraphs.map((p, idx) => (
          <p key={`res-${idx}`} className="mt-3 text-slate-600 dark:text-slate-300">
            {p}
          </p>
        ))}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {study.results.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-slate-200/90 bg-[#FAFAF9] p-5 dark:border-slate-700 dark:bg-slate-800/60"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{m.label}</p>
              <p className="about-display mt-2 text-3xl font-semibold text-blue-950 dark:text-white">{m.value}</p>
              {m.hint ? <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{m.hint}</p> : null}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-blue-950 dark:text-white">{study.system.title}</h3>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {study.system.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 dark:border-slate-700 dark:bg-slate-800/50"
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
          <h3 className="text-lg font-bold text-blue-950 dark:text-white">Artifacts & proof</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {study.artifacts.map((a) => (
              <figure
                key={a.src + a.alt}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.src} alt={a.alt} className="h-full w-full object-cover" loading="lazy" />
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
      <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-lg dark:border-slate-700 dark:bg-slate-800">
        <img src={study.heroImage} alt={study.heroImageAlt} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
        Swap with final campaign creative anytime—layout stays consistent.
      </p>
    </div>
  );
}

export default function CaseStudyLongSection({ study, imageSide = 'right' }: Props) {
  return (
    <section
      id={study.anchorId}
      className="scroll-mt-28 border-t border-slate-200/70 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/35 md:py-20"
      aria-labelledby={`${study.anchorId}-heading`}
    >
      <div className="w-full">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
            {study.industry}
          </span>
          <span>{study.location}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{study.timeframe}</span>
        </div>

        <h2
          id={`${study.anchorId}-heading`}
          className="about-display mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl"
        >
          {study.clientName}: {study.headline}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">{study.summary}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          {imageSide === 'right' ? (
            <>
              <StudyBody study={study} />
              <StudyHeroImage study={study} />
            </>
          ) : (
            <>
              <StudyHeroImage study={study} />
              <StudyBody study={study} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
