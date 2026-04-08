import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  CalendarClock,
  Headphones,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Governance first',
    body: 'Flows respect your policies, scripts, and escalation rules — not generic “black box” replies.',
  },
  {
    icon: Users,
    title: 'Human in the loop',
    body: 'AI handles repetitive touchpoints; strategists and creatives stay accountable for brand and outcomes.',
  },
  {
    icon: MapPin,
    title: 'Ottawa × remote',
    body: 'We collaborate with local AI builders where it helps, and ship with the same hybrid team you already know.',
  },
];

const solutions = [
  {
    icon: Headphones,
    title: 'AI receptionist & call overflow',
    description:
      'After-hours and peak-time coverage, intelligent routing, and clean handoffs to your front desk or PMS-friendly workflows.',
  },
  {
    icon: Star,
    title: 'Reviews & reputation helpers',
    description:
      'Smarter timing for requests, templated follow-ups in your voice, and lightweight monitoring so nothing slips through.',
  },
  {
    icon: MessageSquare,
    title: 'On-site chat & patient Q&A',
    description:
      'Chat experiences grounded in your hours, services, and policies — with paths to book or speak to a human.',
  },
  {
    icon: CalendarClock,
    title: 'Reminders & follow-up nudges',
    description:
      'Reduce no-shows and keep recalls moving with thoughtful automation that feels like your practice, not a blast.',
  },
];

export default function AboutAIPartners() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-slate-950">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl dark:bg-cyan-600/12" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-600/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-cyan-200/70 bg-gradient-to-br from-cyan-50/95 via-white to-blue-50/90 shadow-[0_24px_80px_-32px_rgba(14,116,144,0.35)] dark:border-cyan-500/25 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 dark:shadow-xl dark:shadow-black/35">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-300/30 to-transparent blur-2xl dark:from-cyan-500/15" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-blue-400/20 to-transparent blur-2xl dark:from-blue-500/10" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />

          <div className="relative grid gap-12 p-8 md:grid-cols-2 md:gap-14 md:p-12 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/90 bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-800 shadow-sm backdrop-blur-sm dark:border-cyan-500/35 dark:bg-slate-800/90 dark:text-cyan-300">
                <Bot className="h-3.5 w-3.5" />
                AI & local partners
              </div>

              <h2 className="about-display mt-5 text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
                Custom AI tools for patient experience
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                We invest in <strong className="font-semibold text-slate-800 dark:text-slate-100">practical AI</strong>{' '}
                — workflows patients actually use, not slide-deck hype. Alongside Ottawa-area specialists, we design,
                integrate, and tune tools for dental and medical clinics: routing, reviews, chat, and light automation
                that respects Canadian privacy expectations and your clinical tone.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                Every build is measured against clear outcomes — fewer missed calls, faster replies, cleaner handoffs — and
                always complemented by your human team. Maya and our ops crew help keep prompts, data touchpoints, and
                playbooks consistent as platforms evolve.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="flex min-w-[200px] flex-1 flex-col gap-1.5 rounded-2xl border border-cyan-100/90 bg-white/75 px-4 py-3 shadow-sm dark:border-slate-600/80 dark:bg-slate-800/60"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-950 dark:text-white">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-600/20">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      {title}
                    </div>
                    <p className="text-xs leading-snug text-slate-600 dark:text-slate-400">{body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 inline-flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-cyan-200/60 pt-8 dark:border-cyan-500/20">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Explore the stack
                </span>
                <Link
                  to="/services#ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Services & AI solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-white/80 bg-white/85 p-6 shadow-lg shadow-cyan-900/5 backdrop-blur-sm dark:border-slate-600/90 dark:bg-slate-800/70 dark:shadow-black/25 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
                  What we ship
                </p>
                <ul className="mt-6 space-y-5">
                  {solutions.map(({ icon: Icon, title, description }) => (
                    <li key={title} className="flex gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 text-blue-600 shadow-inner dark:from-slate-700 dark:to-slate-800 dark:text-cyan-300">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="font-semibold text-blue-950 dark:text-white">{title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-cyan-300/60 bg-cyan-50/50 px-5 py-4 dark:border-cyan-500/30 dark:bg-slate-800/40">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong className="text-blue-950 dark:text-white">Questions?</strong> We’ll map a realistic pilot —
                  scope, timeline, and what success looks like on your dashboard.
                </p>
                <a
                  href="mailto:hello@dentech.digital?subject=AI%20tools%20for%20our%20practice"
                  className="shrink-0 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
