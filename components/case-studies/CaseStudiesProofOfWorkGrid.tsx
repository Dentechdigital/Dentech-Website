import React from 'react';
import { ImageIcon } from 'lucide-react';
import type { ProofOfWorkSlot } from '../../data/caseStudiesContent';
import { SectionGradientEmphasis } from '../SectionGradientEmphasis';

function mediaUrl(src: string): string {
  if (src.startsWith('http')) return src;
  const base = import.meta.env.BASE_URL;
  return `${base}${src.replace(/^\//, '')}`;
}

type Props = {
  slots: ProofOfWorkSlot[];
  id?: string;
};

export default function CaseStudiesProofOfWorkGrid({ slots, id = 'proof-of-work' }: Props) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-slate-200/70 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/35 md:py-20"
      aria-labelledby="proof-of-work-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">Proof of work</p>
          <h2
            id="proof-of-work-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl"
          >
            Creative &amp; collateral <SectionGradientEmphasis>snapshots</SectionGradientEmphasis>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Representative proof assets across websites, social campaigns, print collateral, and signage.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {slots.map((slot) => {
            const hasImage = Boolean(slot.src?.trim());
            return (
              <li key={slot.id}>
                <figure className="h-full">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-[1.35rem] border bg-[#FAFAF9] dark:bg-slate-800/40 ${
                      hasImage
                        ? 'border-slate-200/80 shadow-sm dark:border-slate-700'
                        : 'border-dashed border-slate-300/90 dark:border-slate-600'
                    }`}
                  >
                    {hasImage && slot.src ? (
                      <img
                        src={mediaUrl(slot.src)}
                        alt={slot.alt ?? ''}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-slate-900/80">
                          <ImageIcon className="h-6 w-6 text-slate-400 dark:text-slate-500" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-blue-950 dark:text-white">
                            {slot.categoryLabel}
                          </p>
                          <p className="mt-1.5 text-sm leading-snug text-slate-500 dark:text-slate-400">{slot.hint}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {hasImage && slot.src ? (
                    <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                      {slot.categoryLabel}
                    </figcaption>
                  ) : (
                    <p className="mt-2 text-center font-mono text-[11px] text-slate-400 dark:text-slate-500">{slot.id}</p>
                  )}
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
