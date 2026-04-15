import React from 'react';
import type { ServiceSpotlight as ServiceSpotlightData } from '../data/servicesContent';

type Props = {
  data: ServiceSpotlightData;
};

/**
 * Renders the service-specific “spotlight” block—each variant uses a different layout.
 */
export default function ServiceSpotlight({ data }: Props) {
  switch (data.variant) {
    case 'queryChips':
      return (
        <div className="rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/90 to-white p-6 shadow-sm dark:border-blue-900/50 dark:from-blue-950/40 dark:to-slate-900 sm:p-8">
          <h3 className="text-lg font-bold text-blue-950 dark:text-white">{data.title}</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {data.queries.map((q) => (
              <li
                key={q}
                className="rounded-full border border-blue-200/90 bg-white px-4 py-2 font-mono text-xs text-blue-900 shadow-sm dark:border-blue-800 dark:bg-slate-900 dark:text-blue-100 sm:text-sm"
              >
                {q}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'ledgerLines':
      return (
        <div className="rounded-3xl border border-emerald-200/80 bg-white p-6 shadow-sm dark:border-emerald-900/40 dark:bg-slate-900 sm:p-8">
          <h3 className="text-lg font-bold text-emerald-950 dark:text-emerald-100">{data.title}</h3>
          <ul className="mt-5 space-y-3 border-l-2 border-emerald-500/40 pl-5">
            {data.lines.map((line) => (
              <li key={line} className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {line}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'firstScreenChecks':
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <h3 className="text-lg font-bold text-blue-950 dark:text-white">{data.title}</h3>
          </div>
          {data.checks.map((c, i) => (
            <div
              key={c}
              className={`rounded-2xl border p-4 text-sm leading-snug text-slate-700 dark:text-slate-200 ${
                i % 2 === 0
                  ? 'border-indigo-200/80 bg-indigo-50/50 dark:border-indigo-900/50 dark:bg-indigo-950/30'
                  : 'border-slate-200/90 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-800/50'
              }`}
            >
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-1 font-medium text-blue-950 dark:text-white">{c}</p>
            </div>
          ))}
        </div>
      );

    case 'weekStrip':
      return (
        <div className="overflow-hidden rounded-3xl border border-amber-200/80 bg-amber-50/40 dark:border-amber-900/40 dark:bg-amber-950/20">
          <div className="border-b border-amber-200/60 bg-amber-100/50 px-5 py-3 dark:border-amber-900/50 dark:bg-amber-950/40">
            <h3 className="text-lg font-bold text-amber-950 dark:text-amber-100">{data.title}</h3>
          </div>
          <ol className="divide-y divide-amber-200/60 dark:divide-amber-900/50">
            {data.strips.map((strip, i) => (
              <li key={strip} className="flex gap-4 px-5 py-4 text-sm text-amber-950/95 dark:text-amber-50/90">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-200/80 text-xs font-bold text-amber-900 dark:bg-amber-900/60 dark:text-amber-100">
                  {i + 1}
                </span>
                <span className="pt-1 leading-relaxed">{strip}</span>
              </li>
            ))}
          </ol>
        </div>
      );

    case 'journeySteps':
      return (
        <div className="rounded-3xl border border-rose-200/80 bg-gradient-to-r from-rose-50/80 via-white to-white p-6 dark:border-rose-900/40 dark:from-rose-950/25 dark:via-slate-900 dark:to-slate-900 sm:p-8">
          <h3 className="text-lg font-bold text-rose-950 dark:text-rose-100">{data.title}</h3>
          <ol className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-4">
            {data.steps.map((step, i) => (
              <li key={step.label} className="relative flex-1 md:text-center">
                {i < data.steps.length - 1 ? (
                  <div
                    className="absolute left-[calc(50%+1.5rem)] top-5 hidden h-0.5 w-[calc(100%-3rem)] bg-gradient-to-r from-rose-300 to-rose-100 md:block dark:from-rose-800 dark:to-rose-950"
                    aria-hidden
                  />
                ) : null}
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-rose-400 bg-white text-sm font-bold text-rose-700 dark:border-rose-600 dark:bg-slate-800 dark:text-rose-200 md:mx-auto">
                  {i + 1}
                </span>
                <p className="mt-3 font-semibold text-rose-950 dark:text-rose-100">{step.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      );

    case 'splitLanes':
      return (
        <div className="overflow-hidden rounded-3xl border border-violet-200/80 bg-white shadow-sm dark:border-violet-900/40 dark:bg-slate-900">
          <h3 className="border-b border-slate-100 bg-violet-50/80 px-6 py-4 text-lg font-bold text-violet-950 dark:border-slate-800 dark:bg-violet-950/30 dark:text-violet-100">
            {data.title}
          </h3>
          <div className="grid md:grid-cols-2">
            <div className="border-b border-slate-100 p-6 md:border-b-0 md:border-r dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wide text-red-700 dark:text-red-300">{data.leftTitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {data.leftItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-500" aria-hidden>
                      ×
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">{data.rightTitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {data.rightItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-600" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );

    default: {
      const exhaustiveCheck: never = data;
      return exhaustiveCheck;
    }
  }
}
