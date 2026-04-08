import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight } from 'lucide-react';

export default function AboutAIPartners() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:border-cyan-500/35 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:shadow-lg dark:shadow-black/25">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:gap-12 md:p-12 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-800 dark:border-cyan-500/30 dark:bg-slate-800/80 dark:text-cyan-300">
                <Bot className="h-3.5 w-3.5" />
                AI & local partners
              </div>
              <h2 className="about-display mt-4 text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
                Custom AI tools for patient experience
              </h2>
              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                We invest in practical AI — not hype. Working with Ottawa-area AI specialists, we build and deploy
                tools like AI receptionist workflows, review helpers, and chat experiences tailored to dental practices.
                These sit alongside human strategists and creatives, not instead of them.
              </p>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Explore services & AI solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-inner dark:border-slate-600 dark:bg-slate-800/50">
              <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">·</span>
                  AI receptionist integrations for after-hours and overflow
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">·</span>
                  Review request and reputation helpers
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">·</span>
                  On-site chatbots aligned with your policies and tone
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
