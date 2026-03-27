import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight, Bot, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const websitePackages = [
  {
    category: 'Website',
    name: 'Starter Website',
    price: '$3,000',
    description: 'A solid launch package for clinics that need a professional web presence fast.',
    features: [
      'WordPress SEO-ready website',
      'Up to 5 key pages (Home, About, Services, Blog, Contact)',
      'Mobile-first responsive design',
      'On-page SEO setup',
      'Basic booking/contact integration',
      '1 extra month of revisions',
    ],
  },
  {
    category: 'Website',
    name: 'Premium Custom Website',
    price: '$5,000',
    description: 'Built for clinics that want a fully custom digital brand and higher conversion potential.',
    features: [
      'Everything in Starter Website +',
      'Fully custom pages and UX structure',
      'Expanded pages (testimonials, case studies, FAQs, gallery)',
      'Professional conversion-focused copywriting',
      'Advanced SEO architecture + speed optimization',
      'AI chatbot setup included',
    ],
    highlighted: true,
    aiNote: 'Includes AI Chatbot',
  },
];

const marketingPackages = [
  {
    category: 'Marketing',
    name: 'Starter Marketing',
    price: '$1,500/mo',
    description: 'A reliable monthly engine for consistent visibility and lead flow.',
    features: [
      'SEO optimization + local visibility support',
      'Consistent social posting and channel management',
      'Monthly performance reporting',
      'Creative assets for web + social',
    ],
  },
  {
    category: 'Marketing',
    name: 'Signature Marketing',
    price: '$2,500/mo',
    description: 'Best for clinics targeting aggressive growth and stronger market share.',
    features: [
      'Everything in Starter Marketing +',
      'PPC campaign creation and management',
      'Expanded SEO with deeper keyword strategy',
      'Authority-building placements and content',
      'Monthly strategy and optimization sessions',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    category: 'Marketing',
    name: 'Elite Marketing',
    price: '$5,000/mo',
    description: 'Enterprise growth support with high-touch execution and leadership-level strategy.',
    features: [
      'Everything in Signature Marketing +',
      'Advanced paid acquisition across key channels',
      'Dedicated content + campaign support',
      'Email and funnel automation layers',
      'Priority consulting and execution cycles',
    ],
  },
];

type PackageItem = {
  category: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  aiNote?: string;
};

function PricingCard({ item }: { item: PackageItem }) {
  const isMostPopular = item.badge === 'Most Popular';

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-6 md:p-7 transition-all duration-300 ${
        item.highlighted
          ? 'border-blue-300 bg-blue-50/70 dark:border-blue-500/40 dark:bg-slate-800/90 shadow-lg shadow-blue-900/10'
          : 'border-gray-200 bg-white/90 dark:border-slate-700 dark:bg-slate-800/70'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 ${
          item.highlighted
            ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500'
            : 'bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700'
        }`}
      />
      {isMostPopular && (
        <div className="absolute top-4 right-4 z-20 inline-flex items-center rounded-full border border-blue-300/70 bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-md">
          Most Popular
        </div>
      )}
      <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-white/30 blur-xl dark:bg-blue-400/10" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-cyan-100/40 blur-xl dark:bg-cyan-400/10" />

      <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="mb-2 inline-flex items-center rounded-full border border-blue-200/80 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200">
            {item.category}
          </div>
          {item.badge && !isMostPopular && (
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200">
              {item.badge.includes('AI') ? <Bot className="h-3.5 w-3.5" /> : <BadgeCheck className="h-3.5 w-3.5" />}
              <span>{item.badge}</span>
            </div>
          )}
          <h3 className="text-2xl font-bold text-blue-950 dark:text-white">{item.name}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
        <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-300 whitespace-nowrap">
          {item.price}
        </span>
      </div>

      {item.aiNote && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-800 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
          <Bot className="h-3.5 w-3.5" />
          <span>{item.aiNote}</span>
        </div>
      )}

      <ul className="space-y-2.5">
        {item.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-200">
            <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-300 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingPlans() {
  return (
    <section className="py-24 bg-[#F5F7FB] dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent dark:from-slate-900/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 mb-5">
            <Sparkles className="w-4 h-4" />
            <span>Clear Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 dark:text-white tracking-tight mb-5">
            Website & Marketing Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Simple, transparent packages built to help clinics and healthcare brands scale with confidence.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50/70 dark:border-emerald-500/30 dark:bg-emerald-500/10 px-5 py-4 md:px-6 md:py-5">
          <p className="text-base md:text-lg font-semibold text-emerald-800 dark:text-emerald-300">
            Limited-Time Offer: Get a free website design (<span className="font-bold">$3,000 value</span>) when you sign a 6-month{' '}
            <span className="font-bold">Signature Marketing plan ($2,500/mo)</span>.
          </p>
        </div>

        <div className="space-y-8">
          <div className="relative rounded-3xl border border-blue-100/80 bg-white/70 dark:border-slate-700 dark:bg-slate-800/60 p-5 sm:p-6 overflow-hidden">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-200/30 blur-2xl dark:bg-blue-500/20" />
            <div className="mb-5 flex items-center justify-between gap-3 flex-wrap">
              <h3 className="text-2xl font-bold text-blue-950 dark:text-white">Website Design Packages</h3>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-300">
                One-Time Investment
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {websitePackages.map((item) => (
                <PricingCard key={`${item.category}-${item.name}`} item={item} />
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl border border-indigo-100/80 bg-white/70 dark:border-slate-700 dark:bg-slate-800/60 p-5 sm:p-6 overflow-hidden">
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-indigo-200/30 blur-2xl dark:bg-indigo-500/20" />
            <div className="mb-5 flex items-center justify-between gap-3 flex-wrap">
              <h3 className="text-2xl font-bold text-blue-950 dark:text-white">Ongoing Marketing Packages</h3>
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-300">
                Monthly Retainer
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {marketingPackages.map((item) => (
                <PricingCard key={`${item.category}-${item.name}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>Get a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
