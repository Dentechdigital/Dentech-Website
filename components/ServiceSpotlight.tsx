import React from 'react';
import type { ServiceSpotlight as ServiceSpotlightData } from '../data/servicesContent';

type Props = {
  data: ServiceSpotlightData;
  /** Article-style lists—no card chrome (for calmer detail pages). */
  plain?: boolean;
};

const surface =
  'rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.06] dark:bg-slate-900/60 dark:ring-white/[0.08] sm:p-8';

const proseList =
  'mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-slate-700 marker:text-blue-600 dark:text-slate-300 dark:marker:text-blue-400';

const proseOrdered =
  'mt-4 list-decimal space-y-4 pl-5 text-base leading-relaxed text-slate-700 marker:font-semibold dark:text-slate-300';

/**
 * Service-specific snapshot blocks—same visual language as the detail page (soft cards, minimal chrome).
 */
export default function ServiceSpotlight({ data, plain = false }: Props) {
  const titlePlain = 'text-lg font-semibold text-slate-900 dark:text-white';
  const titleCard = 'text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400';
  const shell = plain ? '' : surface;

  switch (data.variant) {
    case 'queryChips':
      return (
        <div className={shell}>
          <h3 className={plain ? titlePlain : titleCard}>{data.title}</h3>
          {plain ? (
            <ul className={proseList}>
              {data.queries.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          ) : (
            <ul className="mt-5 flex flex-wrap gap-2">
              {data.queries.map((q) => (
                <li
                  key={q}
                  className="rounded-full bg-slate-100 px-3.5 py-2 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200 sm:text-sm"
                >
                  {q}
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case 'ledgerLines':
      return (
        <div className={shell}>
          <h3 className={plain ? titlePlain : titleCard}>{data.title}</h3>
          {plain ? (
            <ul className={proseList}>
              {data.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : (
            <ul className="mt-6 space-y-3">
              {data.lines.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case 'firstScreenChecks':
      return (
        <div className={shell}>
          <h3 className={plain ? titlePlain : titleCard}>{data.title}</h3>
          {plain ? (
            <ol className={proseOrdered}>
              {data.checks.map((c) => (
                <li key={c} className="pl-1">
                  {c}
                </li>
              ))}
            </ol>
          ) : (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.checks.map((c, i) => (
                <li
                  key={c}
                  className="flex gap-3 rounded-xl bg-slate-50/90 px-4 py-3 text-sm leading-snug text-slate-700 dark:bg-slate-800/50 dark:text-slate-200"
                >
                  <span className="font-mono text-xs tabular-nums text-slate-400 dark:text-slate-500">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-medium text-slate-900 dark:text-white">{c}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case 'weekStrip':
      return (
        <div className={shell}>
          <h3 className={plain ? titlePlain : titleCard}>{data.title}</h3>
          {plain ? (
            <ol className={proseOrdered}>
              {data.strips.map((strip) => (
                <li key={strip} className="pl-1">
                  {strip}
                </li>
              ))}
            </ol>
          ) : (
            <ol className="mt-6 divide-y divide-slate-100 dark:divide-slate-700/80">
              {data.strips.map((strip, i) => (
                <li key={strip} className="flex gap-4 py-4 text-sm leading-relaxed text-slate-600 first:pt-0 last:pb-0 dark:text-slate-300">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {i + 1}
                  </span>
                  {strip}
                </li>
              ))}
            </ol>
          )}
        </div>
      );

    case 'journeySteps':
      return (
        <div className={shell}>
          <h3 className={plain ? titlePlain : titleCard}>{data.title}</h3>
          {plain ? (
            <ol className={proseOrdered}>
              {data.steps.map((step) => (
                <li key={step.label} className="pl-1">
                  <span className="font-semibold text-slate-900 dark:text-white">{step.label}</span>
                  <span className="mt-1 block text-slate-600 dark:text-slate-400">{step.detail}</span>
                </li>
              ))}
            </ol>
          ) : (
            <ol className="mt-8 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {data.steps.map((step, i) => (
                <li key={step.label}>
                  <div className="flex flex-col gap-3 sm:items-center sm:text-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm dark:bg-blue-500">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{step.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.detail}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      );

    case 'splitLanes':
      return (
        <div className={shell}>
          <h3 className={plain ? titlePlain : titleCard}>{data.title}</h3>
          {plain ? (
            <div className="mt-4 space-y-8">
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{data.leftTitle}</p>
                <ul className={proseList}>
                  {data.leftItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{data.rightTitle}</p>
                <ul className={proseList}>
                  {data.rightItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="mt-6 grid gap-8 border-t border-slate-100 pt-6 dark:border-slate-700/80 md:grid-cols-2 md:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{data.leftTitle}</p>
                <ul className="mt-3 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                  {data.leftItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">{data.rightTitle}</p>
                <ul className="mt-3 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                  {data.rightItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5 text-blue-600 dark:text-blue-400" aria-hidden>
                        {'\u2713'}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      );

    default: {
      const exhaustiveCheck: never = data;
      return exhaustiveCheck;
    }
  }
}
