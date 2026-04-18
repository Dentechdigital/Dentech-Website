import React, { useEffect, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { homeFaqItems, type HomeFaqItem } from '../data/homeFaqContent';
import { SectionGradientEmphasis } from './SectionGradientEmphasis';

export type { HomeFaqItem };

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
}: {
  item: HomeFaqItem;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  const panelId = `home-faq-panel-${index}`;
  const triggerId = `home-faq-trigger-${index}`;

  const handleSummaryActivate = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    onToggle(index);
  };

  return (
    <details
      open={isOpen}
      className="group rounded-2xl border border-slate-200/90 bg-[#FAFAF9]/90 dark:border-slate-700 dark:bg-slate-800/50 overflow-hidden transition-shadow open:shadow-md dark:open:shadow-slate-900/50 hover:shadow-md dark:hover:shadow-slate-900/50"
    >
      <summary
        id={triggerId}
        className="flex w-full cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 [&::-webkit-details-marker]:hidden"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={handleSummaryActivate}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleSummaryActivate(e);
          }
        }}
      >
        <h3 className="text-base md:text-lg font-semibold text-blue-950 dark:text-white m-0 pr-2">
          {item.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-blue-600 transition-transform duration-200 dark:text-blue-400 mt-0.5 ${
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
        <p className="text-[15px] md:text-base leading-relaxed text-gray-700 dark:text-gray-300 pt-4">
          {item.answer}
        </p>
      </div>
    </details>
  );
}

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isLg = useLgBreakpoint();

  const handleAccordionToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftColumnItems = homeFaqItems.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === 0);
  const rightColumnItems = homeFaqItems.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === 1);

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
      aria-labelledby="home-faq-heading"
    >
      <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl dark:bg-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 mb-5">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2
            id="home-faq-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl"
          >
            Dental marketing <SectionGradientEmphasis>questions</SectionGradientEmphasis>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Straight answers on local SEO, GEO, channels, timelines, reputation, and how we support Canadian dental
            practices—useful for owners, office managers, and AI-assisted search.
          </p>
        </div>

        {/* One layout in the DOM at a time so ids stay unique and accordion state stays in sync */}
        {isLg ? (
          <div className="flex flex-row items-start gap-4">
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              {leftColumnItems.map(({ item, index }) => (
                <FaqCard
                  key={item.question}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={handleAccordionToggle}
                />
              ))}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              {rightColumnItems.map(({ item, index }) => (
                <FaqCard
                  key={item.question}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={handleAccordionToggle}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {homeFaqItems.map((item, index) => (
              <FaqCard
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={handleAccordionToggle}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
