import React, { useMemo, useState } from 'react';
import type { WorkGalleryCategory, WorkGalleryItem } from '../../data/caseStudiesContent';

const TABS: { id: WorkGalleryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Websites' },
  { id: 'social', label: 'Social' },
  { id: 'print', label: 'Print' },
];

type Props = {
  items: WorkGalleryItem[];
  id?: string;
};

export default function CaseStudiesWorkGallery({ items, id = 'our-work' }: Props) {
  const [filter, setFilter] = useState<(typeof TABS)[number]['id']>('all');

  const visible = useMemo(() => {
    if (filter === 'all') return items;
    return items.filter((i) => i.category === filter);
  }, [items, filter]);

  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-slate-200/70 bg-[#FAFAF9] py-16 dark:border-slate-800 dark:bg-slate-950 md:py-24"
      aria-labelledby="our-work-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Portfolio</p>
          <h2
            id="our-work-heading"
            className="about-display mt-2 text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl"
          >
            Some of our work
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Selected website, social, and print samples from live delivery formats used in dental growth programs.
          </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work by type">
          {TABS.map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-800 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-500/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
          {visible.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200/80 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/40 dark:hover:border-blue-500/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-950 shadow-sm backdrop-blur dark:bg-slate-950/85 dark:text-white">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-blue-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
