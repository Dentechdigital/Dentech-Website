import React, { useEffect, useRef, useState } from 'react';
import { timelineMilestones } from '../../data/aboutContent';

export default function AboutStoryTimeline() {
  const [visible, setVisible] = useState<Record<number, boolean>>({});
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = Number(entry.target.getAttribute('data-i'));
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [i]: true }));
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );

    refs.current.forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="about-display text-center text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
          Our story
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600 dark:text-slate-300">
          Dentech Digital is a dental and medical marketing agency headquartered in Ottawa, Ontario — shaped by years of
          building products, buying media, and earning trust in competitive markets.
        </p>

        <div className="relative mt-16">
          <div
            className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-200 via-blue-400 to-cyan-300 md:block dark:from-blue-900 dark:via-blue-600 dark:to-cyan-800"
            aria-hidden
          />
          <div className="space-y-12 md:space-y-16">
            {timelineMilestones.map((m, i) => (
              <div
                key={m.year}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-i={i}
                className={`relative flex flex-col gap-4 transition-all duration-700 md:flex-row md:gap-10 ${
                  visible[i] ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="flex shrink-0 items-center gap-4 md:w-44 md:flex-col md:items-center md:pt-1">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-xs font-bold text-white shadow-md dark:border-slate-950 dark:bg-blue-500">
                    {i + 1}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 md:text-center">
                    {m.year}
                  </span>
                </div>
                <div className="rounded-2xl border border-slate-200/90 bg-[#FAFAF9] p-6 dark:border-slate-600/80 dark:bg-slate-800/75 md:flex-1">
                  <h3 className="text-xl font-semibold text-blue-950 dark:text-white">{m.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
