import { useId, useState } from 'react';
import { getMainSiteUrl } from '../config';
import MidPageEligibilityCta from './MidPageEligibilityCta';

type Item = { question: string; answer: string };

const faqItems: Item[] = [
  {
    question: 'We are not open yet — can we start? What is the timeline?',
    answer:
      'Yes. Many new owners begin before opening. We align content and go-live to your launch window during onboarding. Timeline depends on asset readiness and review rounds — we give you a realistic schedule on the qualification call.',
  },
  {
    question: 'We only have a logo and photos — how does content work?',
    answer:
      'That is enough to start. We help structure services, headlines, and trust copy from interviews and your inputs. You approve everything before launch; deeper copywriting layers are available at higher marketing tiers where scoped.',
  },
  {
    question: 'What does “live” mean for this starter package?',
    answer:
      'A professional multi-page site (up to five) on our managed platform, with a contact flow that includes an appointment or callback request — not necessarily live two-way calendar sync, which may be a higher tier. Exact behavior is confirmed before launch.',
  },
  {
    question: 'Why is there a monthly fee if the website is “included”?',
    answer:
      'The site build is bundled into the six-month retainer — not billed as a separate website proposal. Hosting, backups, platform updates, and reasonable maintenance are included at $150/mo for the full six-month term from go-live so your site stays fast, secure, and editable.',
  },
  {
    question: 'Does the included website apply to every marketing tier?',
    answer:
      'On this landing page, no — the starter site bundle is only available with Signature Marketing at $2,500/mo for six months. Starter and Elite are shown for comparison; if you need a different tier or custom scope, contact us on the main site and we will recommend the right path.',
  },
  {
    question: 'What does the 6-month retainer cover?',
    answer:
      'For this offer: Signature Marketing — SEO/GEO, social consistency, PPC management, expanded SEO, authority content, monthly strategy sessions, reporting, and conversion improvements aligned to your clinic. Exact deliverables and fees are spelled out in your contract before you commit.',
  },
  {
    question: 'How is this different from Wix or a cheap template?',
    answer:
      'You get a dental-focused build, managed hosting and updates, and ongoing marketing execution tied to your goals — not a generic template you maintain alone. Strategy, reporting, and channel work are part of the retainer, not an extra.',
  },
  {
    question: 'What if we outgrow the five-page starter site?',
    answer:
      'We can scope additional pages, languages, or a larger build as a change request or a different engagement. We quote clearly before any extra work — many practices graduate to a Growth Build or expanded retainer.',
  },
  {
    question: 'Who owns the domain and the content?',
    answer:
      'Ownership and licensing for domain, copy, and imagery are defined in your agreement. Common practice: you own your brand content; platform and hosting terms are disclosed before signature.',
  },
  {
    question: 'What happens after six months?',
    answer:
      'We review results and options with you before renewal. Marketing can continue on a renewed retainer; hosting and maintenance typically continues at $150/mo unless you choose a different arrangement or migrate (subject to contract terms).',
  },
  {
    question: 'Is every clinic a fit?',
    answer:
      'We prioritize new and early-stage practices that match our channel stack. Large multi-location rollouts or heavy custom data integrations may need a different approach — we will tell you honestly on the qualification call.',
  },
  {
    question: 'I need a fully custom marketing site with advanced integrations.',
    answer:
      'Ask our team about a Growth Build — a separate engagement for custom sites and deeper integrations. We will point you to the right contact on the main site.',
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
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-white to-slate-50/60 py-16 sm:py-20"
    >
      <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.25]" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" aria-hidden />
      <div className="relative z-10 lp-shell">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Straight answers for new clinic owners. Final terms are always in your written agreement.
        </p>
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

        <MidPageEligibilityCta variant="after-faq" />

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
