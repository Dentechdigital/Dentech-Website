import React from 'react';
import { Code2, LineChart } from 'lucide-react';
import { devStack, marketingStack } from '../../data/aboutContent';

export default function AboutStackTools() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="about-display text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
          Tools & platforms we master
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          We are fluent in both build and buy — from custom code to no-code site builders and the marketing stack your
          clinic already uses (or should).
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 dark:border-slate-700 dark:bg-slate-800/40">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-blue-950 dark:text-white">Development & CMS</h3>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
              {devStack.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-blue-500">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 dark:border-slate-700 dark:bg-slate-800/40">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <LineChart className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-blue-950 dark:text-white">Marketing & analytics</h3>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
              {marketingStack.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-500">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
