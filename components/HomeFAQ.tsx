import React, { useEffect, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export const homeFaqItems: HomeFaqItem[] = [
  {
    question: 'Why do local SEO and GEO matter for dental practices in Ottawa and across Canada?',
    answer:
      'Most new patients still discover clinics through Google Search and Maps—and increasingly through AI-powered answers and overviews. Local SEO helps you rank for high-intent queries like "dentist near me" and emergency or specialty care. GEO (generative engine optimization) helps your practice be summarized accurately in those experiences: consistent NAP, clear service and provider pages, and trustworthy copy. Dentech Digital treats local SEO and GEO as core layers of growth for Canadian clinics and multi-location groups.',
  },
  {
    question: 'What types of dental practices do you work with?',
    answer:
      'We partner with general and family dentistry, cosmetic and implant-focused practices, orthodontics, pediatric dentistry, periodontics, oral surgery, and multi-location groups—any team that wants clearer positioning, better leads, and measurable marketing. Strategy changes by specialty: emergency and family keywords differ from aligner or full-arch campaigns, and your funnels should reflect that.',
  },
  {
    question: 'How long does it take to see results from dental marketing?',
    answer:
      'Paid search and social can show traction in weeks when tracking, landing pages, and call handling are tight. SEO and local authority usually compound over months—many practices see meaningful movement in roughly three to six months depending on competition, review volume, and site quality. We set expectations up front with Ottawa and nationwide clients so channels are sequenced for both quick tests and long-term compounding.',
  },
  {
    question: 'What marketing channels work best for dentists today?',
    answer:
      'There is no single channel that replaces the rest. Strong growth typically combines a fast, trustworthy website; local SEO and Maps visibility; disciplined paid search where margins make sense; consistent social proof; and content that answers real patient questions. The right mix depends on your market, services, and capacity—our job is to align channels so they reinforce each other instead of competing.',
  },
  {
    question: 'Should I hire a dental marketing agency instead of a general agency?',
    answer:
      'For most clinics, a dental-focused partner is easier to scale with. Procedure naming, treatment positioning, regulatory tone, and how patients compare providers online are different in dentistry than in retail or B2B. Dentech Digital works only with dental and adjacent healthcare brands, so campaigns, copy, and reporting map to how practices actually acquire patients in Canada and beyond.',
  },
  {
    question: 'How important are Google reviews and online reputation?',
    answer:
      'Very important. Reviews influence both click-through on Maps and whether someone trusts your site enough to call. A steady flow of recent, descriptive reviews—paired with fast responses and clear policies—supports local rankings and conversion. We help clients bake review requests, follow-up, and reporting into their marketing rhythm so reputation becomes a growth system, not a last-minute scramble.',
  },
  {
    question: 'What metrics should a dental practice track from marketing?',
    answer:
      'Start with lead volume and quality: phone calls, form fills, chats, and booked consultations attributed to each channel. Layer in cost per lead, show-up rate, and production from new patients where data is available. Vanity metrics alone do not pay the bills—we report on what ties spend to chairs and revenue so Ottawa-area and remote teams can make clear decisions.',
  },
  {
    question: 'Do I need a long-term contract to work with Dentech Digital?',
    answer:
      'Engagements are scoped in writing with clear deliverables and timelines; many clients choose monthly or project-based work that fits their growth stage. Heavy upfront discounts sometimes pair with longer commitments—if that applies, it is spelled out explicitly. The goal is alignment on outcomes and transparency, not locking clinics into partnerships that do not fit.',
  },
  {
    question: 'How do you handle patient privacy and marketing compliance in Canada?',
    answer:
      'Marketing must respect Canadian privacy expectations (including PIPEDA and provincial health privacy rules where they apply), platform policies, and professional advertising norms. We avoid sensitive health storytelling in ads, use consent-based lead capture, and coordinate with your team on what can and cannot be said publicly. Your office should always have final say on clinical claims and required disclaimers.',
  },
  {
    question: 'Where is Dentech Digital based, and do you work outside Ottawa?',
    answer:
      'We are headquartered in Ottawa, Ontario, Canada (499 Preston St), and work with many practices in Eastern Ontario and across Canada; remote strategy and delivery are standard, and international clients are considered when there is a good fit. Local SEO execution is tailored to your real service areas—whether that is a few neighbourhoods or multiple provinces.',
  },
];

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLg = useLgBreakpoint();

  const handleAccordionToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftColumnItems = homeFaqItems.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === 0);
  const rightColumnItems = homeFaqItems.map((item, index) => ({ item, index })).filter(({ index }) => index % 2 === 1);

  return (
    <section
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
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
            className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-white tracking-tight mb-4"
          >
            Dental marketing questions
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
