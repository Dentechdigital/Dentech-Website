import React from 'react';
import { ArrowRight, MessageCircle, LineChart, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionGradientEmphasis } from './SectionGradientEmphasis';

const steps = [
  {
    icon: MessageCircle,
    title: 'Discovery call',
    body: 'We learn your market, services, capacity, and what “winning” looks like for your team—before we talk channels or budgets.',
  },
  {
    icon: LineChart,
    title: 'Roadmap & quick wins',
    body: 'You get a practical plan: what to fix first, what to measure, and how SEO, ads, site, and creative work together—not a generic checklist.',
  },
  {
    icon: Rocket,
    title: 'Build, launch, iterate',
    body: 'We ship in focused phases, report in plain language, and optimize toward consults and production—not vanity metrics.',
  },
] as const;

export default function HomeProcessSteps() {
  return (
    <section className="bg-[#FAFAF9] py-20 dark:bg-slate-950 md:py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">How we work</p>
          <h2 id="process-heading" className="mt-3 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl">
            From first hello to <SectionGradientEmphasis>steady growth</SectionGradientEmphasis>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 md:text-lg">
            Transparent phases so you always know what we are doing, why it matters, and what happens next.
          </p>
        </div>

        <ol className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <span className="absolute right-6 top-6 font-mono text-3xl font-bold text-slate-100 dark:text-slate-800">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500">
                <step.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-blue-950 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold text-slate-600 underline-offset-4 hover:text-blue-600 hover:underline dark:text-slate-400 dark:hover:text-blue-400"
          >
            Read about our team & story
          </Link>
        </div>
      </div>
    </section>
  );
}
