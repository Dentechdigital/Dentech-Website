import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export const homeFaqItems: HomeFaqItem[] = [
  {
    question: 'Do Ottawa dental clinics need local SEO and a Google Business Profile?',
    answer:
      'Yes. Most new patient discovery in Ottawa, Ontario, and across Canada still starts with Google Search and Maps. A complete Google Business Profile, accurate NAP (name, address, phone), and local dental SEO help you show up for high-intent queries like "dentist near me" and specialty services. Dentech Digital builds local SEO into websites and retainers so Ottawa-area practices and multi-location groups strengthen visibility where it matters.',
  },
  {
    question: 'How much does dental website design cost in 2026?',
    answer:
      'Professional dental website design with Dentech Digital typically starts at $3,000 for our Starter Website (up to five key pages, mobile-first design, on-page SEO setup, and basic booking or contact integration) and $5,000 for a Premium Custom Website with expanded pages, conversion copy, advanced SEO architecture, speed optimization, and AI chatbot setup. Custom quotes apply for unique scopes or larger builds.',
  },
  {
    question: 'Should I hire a dental marketing agency instead of a general marketing agency?',
    answer:
      'For most dental practices, yes—if growth and compliance matter. A dental marketing agency understands procedure naming, patient intent, competitive claims, and how orthodontic, cosmetic, and general practices market differently. Dentech Digital focuses exclusively on dental and healthcare-adjacent clinics, so strategy, creative, and landing pages align with how real patients search and book.',
  },
  {
    question: 'Are Google Ads and Meta Ads worth it for dentists?',
    answer:
      'They can be—when campaigns are structured, tracked, and optimized for cost per qualified lead. Paid search and paid social work best paired with a fast, trustworthy website and clear call-tracking. Dentech Digital\'s retainers cover campaign creation and management; ad media spend is billed directly to your Google and Meta accounts and is separate from the monthly management fee, so budgets stay transparent.',
  },
  {
    question: 'How long does a dental website project take from kickoff to launch?',
    answer:
      'Most projects launch in roughly 8 to 12 weeks depending on content readiness, number of pages, and revision rounds. Starter packages move faster when branding and photography are ready; Premium Custom Website timelines reflect custom UX, expanded pages (testimonials, case studies, FAQs, gallery), and deeper SEO. Your timeline and milestones are confirmed in writing after discovery.',
  },
  {
    question: 'What is included in dental website packages at Dentech Digital?',
    answer:
      'Starter Website includes an SEO-ready site, up to five core pages (e.g., Home, About, Services, Blog, Contact), responsive mobile-first design, on-page SEO setup, basic booking or contact integration, and an extra month of revisions. Premium Custom Website adds fully custom pages and UX structure, expanded marketing pages, professional conversion copywriting, advanced SEO plus speed work, and AI chatbot setup—aligned with the published Website & Marketing Pricing on this site.',
  },
  {
    question: 'Can an AI chatbot help a dental front desk capture more leads?',
    answer:
      'Yes. A well-trained AI chatbot answers common questions after hours, routes emergencies appropriately, and captures name, phone, and intent so your team can follow up quickly. That reduces missed calls and form abandonments from patients comparing clinics online. Our Premium Custom Website package includes AI chatbot setup so lead capture matches your brand tone and practice policies.',
  },
  {
    question: 'Does Dentech Digital only work with Ottawa dental practices?',
    answer:
      'No. We are headquartered in Ottawa, ON, Canada (499 Preston St), and serve many Eastern Ontario clinics—we also work with dental practices across Canada and internationally when the engagement fits. Strategy sessions and delivery are built for remote collaboration; on-site needs are scoped per project.',
  },
];

export default function HomeFAQ() {
  return (
    <section
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
      aria-labelledby="home-faq-heading"
    >
      <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl dark:bg-cyan-500/10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 mb-5">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2
            id="home-faq-heading"
            className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-white tracking-tight mb-4"
          >
            Dental marketing & website questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Clear answers on local SEO, dental website pricing, paid ads, and how we work with Ottawa and Canadian
            clinics—written for patients, owners, and search.
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqItems.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200/90 bg-[#FAFAF9]/90 dark:border-slate-700 dark:bg-slate-800/50 overflow-hidden transition-shadow open:shadow-md dark:open:shadow-slate-900/50 hover:shadow-md dark:hover:shadow-slate-900/50"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base md:text-lg font-semibold text-blue-950 dark:text-white m-0 pr-2">
                  {item.question}
                </h3>
                <ChevronDown
                  className="w-5 h-5 flex-shrink-0 text-blue-600 transition-transform duration-200 group-open:rotate-180 dark:text-blue-400"
                  aria-hidden
                />
              </summary>
              <div className="border-t border-slate-100 px-5 pb-4 pt-0 dark:border-slate-700/80 md:px-6 md:pb-5">
                <p className="text-[15px] md:text-base leading-relaxed text-gray-700 dark:text-gray-300 pt-4">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
