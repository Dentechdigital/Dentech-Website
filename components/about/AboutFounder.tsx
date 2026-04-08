import React, { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { FOUNDER_LINKEDIN_URL } from '../../data/aboutContent';

const PHOTO = `${import.meta.env.BASE_URL}team/dahman-m.png`;

export default function AboutFounder() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-20 dark:bg-slate-950">
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-500/18" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="about-display text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
          Founder
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Leadership with a builder’s mindset — code, creative, and accountable media buying.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-slate-200 to-slate-100 shadow-2xl shadow-blue-200/40 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:shadow-blue-900/20 lg:mx-0">
              {imgOk ? (
                <img
                  src={PHOTO}
                  alt="Mohammed Dahman, Founder of Dentech Digital"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-white">
                  <span className="text-5xl font-bold tracking-tight">MD</span>
                  <span className="mt-4 max-w-xs text-center text-sm font-medium opacity-90">
                    Photo: add team/dahman-m.png to your public folder
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5 dark:ring-white/10" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Mohammed Dahman
            </p>
            <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">Founder & Principal</p>

            <blockquote className="about-display mt-8 border-l-4 border-blue-500 pl-6 text-xl font-medium leading-snug text-blue-950 dark:text-white md:text-2xl">
              “We only win when our clients and partners win — that’s the filter for every recommendation we make.”
            </blockquote>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                Mohammed founded Dentech Digital to unite technical depth with accountable media: a background in
                computer science, interface design, and web engineering, paired with hands-on leadership of paid
                campaigns at serious scale. Clients get one leadership lens across the work — from live-site fixes and
                conversion paths to auction strategy, creative, and production timelines — without handoffs that slow
                decisions or dilute results.
              </p>
              <p>
                Dentech proved its model across sectors before narrowing by choice to dental practices and medical
                clinics — where patient trust, regulatory tone, and booked care matter as much as the metrics in the
                dashboard.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={FOUNDER_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:hello@dentech.digital"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700 dark:border-slate-500/70 dark:bg-slate-800/90 dark:text-slate-100 dark:hover:border-blue-400/60 dark:hover:bg-slate-700/90 dark:hover:text-blue-200"
              >
                <Mail className="h-4 w-4" />
                hello@dentech.digital
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
