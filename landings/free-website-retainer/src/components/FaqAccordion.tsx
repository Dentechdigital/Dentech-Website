import { useId, useState } from 'react';
import { getMainSiteUrl } from '../config';

type Item = { question: string; answer: string };

const faqItems: Item[] = [
  {
    question: 'Why is there a monthly fee if the website is included?',
    answer:
      'The site build is bundled into your six-month Signature retainer — not a separate invoice. Hosting, backups, updates, and reasonable maintenance are included at $150/mo for the full six-month term from go-live.',
  },
  {
    question: 'Is this offer only for Signature at $2,500/mo?',
    answer:
      'Yes on this page. The starter site bundle requires six months of Signature Marketing ($2,500/mo). Other tiers or custom work — use the main site contact and we will point you to the right program.',
  },
  {
    question: 'We are not open yet — can we start? What about content?',
    answer:
      'Yes. We often build ahead of opening. Logo and photos are enough to start; we shape copy and structure with you. Timeline depends on reviews and your launch target — we give a realistic schedule on the qualification call.',
  },
  {
    question: 'How is this different from Wix or a template?',
    answer:
      'Dental-focused build, managed hosting, and ongoing marketing (SEO, social, PPC, reporting) in one retainer — not a DIY site you maintain alone.',
  },
  {
    question: 'What happens after six months? Who owns the site?',
    answer:
      'We review renewal options with you. Marketing can continue on a new agreement; hosting often continues at $150/mo unless you migrate (per contract). Domain and brand content ownership are defined in your agreement.',
  },
];

function FaqRow({
  item,
  isOpen,
  onToggle,
  panelId,
  buttonId,
}: {
  item: Item;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  buttonId: string;
}) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <h3 className="m-0 text-base font-semibold text-blue-950">
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-4 text-left transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span>{item.question}</span>
          <span className="shrink-0 text-blue-600" aria-hidden>
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="pb-4 text-sm leading-relaxed text-slate-600"
      >
        {isOpen ? item.answer : null}
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const baseId = useId().replace(/:/g, '');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-white to-slate-50/60 py-14 sm:py-16"
    >
      <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.25]" aria-hidden />
      <div className="relative z-10 lp-shell">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">FAQ</h2>
        <p className="mt-2 max-w-2xl text-slate-600">Short answers — final terms are in your agreement.</p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/50 px-4 sm:px-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-faq-btn-${index}`;
            const panelId = `${baseId}-faq-panel-${index}`;
            return (
              <FaqRow
                key={item.question}
                item={item}
                isOpen={isOpen}
                onToggle={() => setOpenIndex(isOpen ? null : index)}
                buttonId={buttonId}
                panelId={panelId}
              />
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          Custom build or integrations?{' '}
          <a
            href={`${getMainSiteUrl()}/contact`}
            className="font-medium text-blue-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Main site contact
          </a>
          .
        </p>
      </div>
    </section>
  );
}
