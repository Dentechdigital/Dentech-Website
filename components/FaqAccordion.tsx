import React, { useEffect, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export type FaqAccordionItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqAccordionItem[];
  /** Prefix for stable ids (e.g. "service-seo") */
  idPrefix: string;
  badgeText?: string;
  heading: string;
  subheading?: string;
  className?: string;
  /**
   * Lighter layout: no section/card fills or decorative background—use inside articles
   * or other already-framed pages.
   */
  embedded?: boolean;
};

function useLgBreakpoint() {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setMatches(mq.matches);
    const handler = () => setMatches(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return matches;
}

function FaqCard({
  item,
  index,
  isOpen,
  onToggle,
  idPrefix,
  embedded,
}: {
  item: FaqAccordionItem;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  idPrefix: string;
  embedded: boolean;
}) {
  const panelId = `${idPrefix}-panel-${index}`;
  const triggerId = `${idPrefix}-trigger-${index}`;

  const handleSummaryActivate = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    onToggle(index);
  };

  const cardSurface = embedded
    ? 'border-slate-200/80 bg-transparent open:shadow-none hover:shadow-none dark:border-slate-600/80 dark:bg-transparent'
    : 'border-slate-200/90 bg-[#FAFAF9]/90 open:shadow-md hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:open:shadow-slate-900/50 dark:hover:shadow-slate-900/50';

  return (
    <details
      open={isOpen}
      className={`group overflow-hidden rounded-2xl border transition-shadow ${cardSurface}`}
    >
      <summary
        id={triggerId}
        className="flex w-full cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 [&::-webkit-details-marker]:hidden"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={handleSummaryActivate}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleSummaryActivate(e);
        }}
      >
        <h3 className="m-0 pr-2 text-base font-semibold text-blue-950 dark:text-white md:text-lg">{item.question}</h3>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 transition-transform duration-200 dark:text-blue-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden
        />
      </summary>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="border-t border-slate-100 px-5 pb-4 pt-0 dark:border-slate-700/80 md:px-6 md:pb-5"
      >
        <p className="pt-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 md:text-base">{item.answer}</p>
      </div>
    </details>
  );
}

export default function FaqAccordion({
  items,
  idPrefix,
  badgeText = 'FAQ',
  heading,
  subheading,
  className = '',
  embedded = false,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isLg = useLgBreakpoint();
  const headingId = `${idPrefix}-heading`;

  const handleAccordionToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftColumnItems = items.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === 0);
  const rightColumnItems = items.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === 1);

  if (!items.length) return null;

  return (
    <section
      className={
        embedded
          ? `relative ${className}`
          : `relative overflow-hidden bg-white py-16 dark:bg-slate-950 md:py-20 ${className}`
      }
      aria-labelledby={headingId}
    >
      {!embedded ? (
        <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-500/10" />
      ) : null}

      <div className={embedded ? 'relative z-10' : 'relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
        <div
          className={
            embedded
              ? 'mb-8 max-w-none text-left'
              : 'mx-auto mb-10 w-full max-w-none text-center'
          }
        >
          {!embedded ? (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
              <HelpCircle className="h-4 w-4" />
              <span>{badgeText}</span>
            </div>
          ) : null}
          <h2
            id={headingId}
            className={
              embedded
                ? 'mb-2 text-xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-2xl'
                : 'mb-3 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-4xl'
            }
          >
            {heading}
          </h2>
          {subheading ? (
            <p
              className={
                embedded
                  ? 'text-base text-slate-600 dark:text-slate-400'
                  : 'text-lg text-gray-600 dark:text-gray-300'
              }
            >
              {subheading}
            </p>
          ) : null}
        </div>

        {isLg ? (
          <div className="flex flex-row items-start gap-4">
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              {leftColumnItems.map(({ item, index }) => (
                <FaqCard
                  key={`${idPrefix}-${item.question}`}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={handleAccordionToggle}
                  idPrefix={idPrefix}
                  embedded={embedded}
                />
              ))}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              {rightColumnItems.map(({ item, index }) => (
                <FaqCard
                  key={`${idPrefix}-${item.question}`}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={handleAccordionToggle}
                  idPrefix={idPrefix}
                  embedded={embedded}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {items.map((item, index) => (
              <FaqCard
                key={`${idPrefix}-${item.question}`}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={handleAccordionToggle}
                idPrefix={idPrefix}
                embedded={embedded}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
