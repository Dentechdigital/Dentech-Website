import React from 'react';
import { Check, Minus, HelpCircle } from 'lucide-react';
import { homeComparisonRows, type ComparisonTone } from '../data/homeComparison';
import { SectionGradientEmphasis } from './SectionGradientEmphasis';

function ToneCell({ tone, children }: { tone: ComparisonTone; children: React.ReactNode }) {
  const icon =
    tone === 'strong' ? (
      <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" strokeWidth={2.5} aria-hidden />
    ) : tone === 'mixed' ? (
      <HelpCircle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" strokeWidth={2} aria-hidden />
    ) : (
      <Minus className="h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500" strokeWidth={2} aria-hidden />
    );
  return (
    <div className="flex gap-2.5 text-left">
      <span className="mt-0.5">{icon}</span>
      <span className="text-sm leading-snug text-slate-700 dark:text-slate-200">{children}</span>
    </div>
  );
}

export default function HomeComparisonTable() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 md:py-24" aria-labelledby="compare-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Compare</p>
          <h2 id="compare-heading" className="mt-3 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl">
            Generalist agency vs. <SectionGradientEmphasis>Dentech</SectionGradientEmphasis>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
            When growth has to show up in the schedule—not just the dashboard—you need a partner built for dental markets,
            integrated execution, and honest measurement.
          </p>
        </div>

        {/* Desktop / tablet: table */}
        <div className="hidden overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm dark:border-slate-700/90 md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Comparison of typical marketing agencies and Dentech Digital for dental practices</caption>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/90 dark:border-slate-700 dark:bg-slate-900/80">
                <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 lg:px-6">
                  What you care about
                </th>
                <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 lg:px-6">
                  Typical digital shop
                </th>
                <th
                  scope="col"
                  className="bg-blue-600/5 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-blue-800 dark:bg-blue-500/10 dark:text-blue-200 lg:px-6"
                >
                  Dentech Digital
                </th>
              </tr>
            </thead>
            <tbody>
              {homeComparisonRows.map((row) => (
                <tr key={row.criterion} className="border-b border-slate-100 last:border-0 dark:border-slate-800/80">
                  <th scope="row" className="max-w-[14rem] px-5 py-4 text-sm font-semibold text-blue-950 dark:text-white lg:max-w-none lg:px-6 lg:py-5">
                    {row.criterion}
                  </th>
                  <td className="px-5 py-4 align-top lg:px-6 lg:py-5">
                    <ToneCell tone={row.typicalTone}>{row.typical}</ToneCell>
                  </td>
                  <td className="bg-blue-600/[0.04] px-5 py-4 align-top dark:bg-blue-500/[0.06] lg:px-6 lg:py-5">
                    <ToneCell tone={row.dentechTone}>{row.dentech}</ToneCell>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <ul className="flex flex-col gap-4 md:hidden">
          {homeComparisonRows.map((row) => (
            <li
              key={row.criterion}
              className="rounded-2xl border border-slate-200/90 bg-[#FAFAF9] p-5 dark:border-slate-700 dark:bg-slate-900/60"
            >
              <p className="text-sm font-semibold text-blue-950 dark:text-white">{row.criterion}</p>
              <div className="mt-4 grid gap-4 border-t border-slate-200/80 pt-4 dark:border-slate-700">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Typical digital shop
                  </p>
                  <ToneCell tone={row.typicalTone}>{row.typical}</ToneCell>
                </div>
                <div className="rounded-xl bg-blue-600/[0.06] p-3 dark:bg-blue-500/10">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200">
                    Dentech Digital
                  </p>
                  <ToneCell tone={row.dentechTone}>{row.dentech}</ToneCell>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
