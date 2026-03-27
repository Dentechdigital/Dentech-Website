import React from 'react';
import { CheckCircle2, Sparkles, Globe, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const websitePackages = [
  {
    name: 'Starter Website',
    price: '$3,000',
    description: 'Best for clinics that need a clean and fast launch.',
    features: [
      'Up to 5 core pages',
      'Mobile-first responsive design',
      'On-page SEO setup',
      'Basic booking/contact integration',
    ],
  },
  {
    name: 'Premium Custom Website',
    price: '$5,000',
    description: 'Best for growth-focused brands that need full customization.',
    features: [
      'Custom page structure and UI',
      'Advanced conversion sections',
      'Custom copy + messaging structure',
      'Performance and SEO-ready architecture',
    ],
    highlighted: true,
  },
];

const marketingPackages = [
  {
    name: 'Starter Marketing',
    price: '$1,500/mo',
    description: 'Strong baseline for steady monthly growth.',
    features: [
      'SEO and local visibility foundation',
      'Core content cadence',
      'Monthly reporting',
      'Performance optimization cycles',
    ],
  },
  {
    name: 'Signature Marketing',
    price: '$2,500/mo',
    description: 'Our most popular package for aggressive growth.',
    features: [
      'Expanded SEO + authority growth',
      'Cross-channel campaign management',
      'Conversion-focused landing improvements',
      'Ongoing strategic optimization',
    ],
    highlighted: true,
  },
  {
    name: 'Elite Marketing',
    price: '$5,000/mo',
    description: 'Complete marketing engine with senior strategic support.',
    features: [
      'Advanced growth strategy leadership',
      'High-frequency optimization and scaling',
      'Premium creative and campaign support',
      'Priority execution and consulting access',
    ],
  },
];

type PackageItem = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

function PricingCard({ item }: { item: PackageItem }) {
  return (
    <div
      className={`rounded-3xl border p-6 md:p-7 transition-all duration-300 ${
        item.highlighted
          ? 'border-blue-300 bg-blue-50/70 dark:border-blue-500/40 dark:bg-blue-900/20 shadow-lg shadow-blue-900/10'
          : 'border-gray-200 bg-white/90 dark:border-slate-700 dark:bg-slate-800/70'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-blue-950 dark:text-white">{item.name}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
        <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-300 whitespace-nowrap">
          {item.price}
        </span>
      </div>

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
    <section className="py-24 bg-[#F5F7FB] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 mb-5">
            <Sparkles className="w-4 h-4" />
            <span>Clear Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 dark:text-white tracking-tight mb-5">
            Website & Marketing Packages
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

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-blue-900 dark:text-blue-200">
              <Globe className="w-5 h-5" />
              <h3 className="text-2xl font-bold">Website Design</h3>
            </div>
            {websitePackages.map((item) => (
              <PricingCard key={item.name} item={item} />
            ))}
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-2 text-blue-900 dark:text-blue-200">
              <Megaphone className="w-5 h-5" />
              <h3 className="text-2xl font-bold">Marketing</h3>
            </div>
            {marketingPackages.map((item) => (
              <PricingCard key={item.name} item={item} />
            ))}
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
