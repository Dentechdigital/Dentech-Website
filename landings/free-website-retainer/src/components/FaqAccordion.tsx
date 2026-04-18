import { useId, useState } from 'react';
import { getMainSiteUrl } from '../config';

type Item = { question: string; answer: string };

const faqItems: Item[] = [
  {
    question: 'Why is there a monthly fee if the website is included?',
    answer:
      'The site build is bundled into the six-month retainer offer — not billed as a separate website proposal. After launch, hosting, backups, platform updates, and reasonable maintenance are covered at $50/mo so your site stays fast, secure, and editable.',
  },
  {
    question: 'What does the 6-month retainer cover?',
    answer:
      'A scoped growth marketing program agreed at signup — typically channels like SEO/GEO, paid media, conversion improvements, and reporting. Exact deliverables and fees are spelled out in your contract before you commit.',
  },
  {
    question: 'Who owns the domain and the content?',
    answer:
      'Ownership and licensing for domain, copy, and imagery are defined in your agreement. We align to common practice: you own your brand content; platform and hosting terms are disclosed before signature.',
  },
  {
    question: 'What if I need more than five pages or a second language?',
    answer:
      'This offer covers the starter five-page, single-language package. Additional pages or languages can be scoped as a change request or a different engagement — we will quote clearly before any extra work begins.',
  },
  {
    question: 'What happens after six months?',
    answer:
      'We review results and options with you before renewal. Marketing can continue on a renewed retainer; hosting and maintenance can remain on the $50/mo plan unless you choose to migrate (subject to contract terms).',
  },
  {
    question: 'Is every clinic a fit?',
    answer:
      'We prioritize new and early-stage practices that match our channel stack and compliance comfort. Large multi-location rollouts or heavy custom data integrations may need a different approach — we will tell you honestly on the qualification call.',
  },
  {
    question: 'I need a fully custom marketing site with advanced integrations.',
    answer:
      'Ask our team about a Growth Build — a separate engagement for custom sites and deeper integrations. We will point you to the right contact on the main site.',
  },
];

function FaqRow({ item, isOpen, onToggle, panelId, buttonId }: { item: Item; isOpen: boolean; onToggle: () => void; panelId: string; buttonId: string }) {
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
        {item.answer}
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const baseId = useId().replace(/:/g, '');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-b border-slate-200/60 bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-3 text-slate-600">Straight answers before you apply. Final terms are always in your written agreement.</p>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/50 px-4 sm:px-6">
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
        <p className="mt-8 text-center text-sm text-slate-500">
          Looking for something beyond this starter package?{' '}
          <a
            href={`${getMainSiteUrl()}/contact`}
            className="font-medium text-blue-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us about a Growth Build
          </a>
          .
        </p>
      </div>
    </section>
  );
}
