import React from 'react';
import { ArrowRight, CheckCircle2, Gift, Phone, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionGradientEmphasis } from './SectionGradientEmphasis';

type PackageTier = {
  tier: number;
  name: string;
  tagline: string;
  bestFor: string;
  highlight: string;
  includesLabel?: string;
  features: string[];
  emphasized?: boolean;
};

const packageTiers: PackageTier[] = [
  {
    tier: 1,
    name: 'Core Patient Engine',
    tagline: 'Targeted Local Search & Paid Acquisition',
    bestFor:
      'Established practices seeking a steady, predictable influx of high-value patient inquiries (implants, clear aligners, emergency dentistry, and hygiene services).',
    highlight:
      'Complimentary Custom Webflow Website Included (High-performance custom site build included at zero upfront cost with any 6-month growth partnership).',
    features: [
      'High-Intent Google PPC Campaigns: Capture active patient searches for high-margin procedures in your immediate catchment area.',
      'Targeted Meta Lead Funnels: Localized Facebook & Instagram campaigns designed to drive cosmetic and family care inquiries.',
      'Google Business Profile & Local Maps SEO: Systematic ranking optimization for top local search packs.',
      'CallRail Dynamic Call Tracking & Recording: 100% transparency into inbound call volume, reception handling, and booked consultations.',
      'GoHighLevel Practice Lead Engine: Instant missed-call text-back, automated appointment reminder workflows, and centralized lead CRM.',
      'RCDSO & ODQ Compliance Assurance: Ad copy and landing pages pre-audited against Ontario and Quebec dental marketing regulations.',
    ],
  },
  {
    tier: 2,
    name: 'Brand Dominance & Social Engine',
    tagline: 'Complete Organic & Paid Catchment Area Dominance',
    bestFor:
      'Ambitious clinics looking to dominate their local market, build deep community trust, and showcase clinical expertise through short-form video and active social channels.',
    highlight:
      'Full Content Production + Core Paid Growth Engine (Combines our high-converting PPC and Local Maps SEO engine with monthly video editing and organic social strategy).',
    includesLabel: 'Includes Everything in Core Engine, Plus:',
    features: [
      'Dedicated Social Media Management: Multi-platform strategy, scheduling, and community engagement across Instagram, Facebook, and TikTok.',
      'Short-Form Video Editing & Production: Monthly edited Reels and Shorts featuring clinic doctors, patient procedure guides, and FAQ highlights.',
      'Custom Branded Graphic Design: High-fidelity promotional graphics matching your practice identity.',
      'Automated Patient Review Engine: Automated GHL post-appointment SMS workflows engineered to generate authentic 5-star Google reviews.',
      'Complimentary Custom Webflow Website Build: Fully customized practice site with interactive booking links and mobile optimization.',
    ],
    emphasized: true,
  },
  {
    tier: 3,
    name: 'Practice Expansion & Re-Launch',
    tagline: 'Bespoke Growth Blueprint for Group Practices & New Locations',
    bestFor:
      'Multi-location dental groups, newly acquired practices, or grand opening launches requiring comprehensive digital and physical presence alignment.',
    highlight:
      'Multi-Site Digital Architecture & Turnkey Physical Signage Management (Custom-tailored scope covering digital lead pipelines, multi-site Webflow architecture, and physical vendor coordination).',
    includesLabel: 'Includes Everything in Brand Dominance, Plus:',
    features: [
      'Multi-Location GoHighLevel Architecture: Centralized multi-branch dashboard for practice managers to track lead performance across all clinic locations.',
      'Advanced Multi-Page Webflow Architecture: Comprehensive website structure with custom practitioner bio pages, treatment guides, and location pages.',
      'Grand Opening & Event Campaign Strategy: Targeted local campaigns for community open houses, ribbon-cuttings, or new associate introductions.',
      'Physical Collateral & Signage Logistics Management: Direct specification coordination with certified local print and signage vendors for window wraps, TV displays, and outdoor branding.',
      'Priority SLA & Dedicated Account Oversight: Priority technical support with bi-weekly strategic revenue rollups.',
    ],
  },
];

const valueProps = [
  {
    title: 'RCDSO & ODQ Regulatory Safe',
    description:
      'We understand local dental board regulations in Ontario and Quebec. Your ad campaigns and landing pages will never use banned superlatives, guarantees, or prohibited clinical claims.',
    icon: ShieldCheck,
    color: 'text-blue-600 dark:text-blue-300',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
  },
  {
    title: '100% Call Attribution & Transparency',
    description:
      'Through CallRail dynamic number insertion, you hear exact call recordings and track precisely how many high-value patient appointments your marketing generates.',
    icon: Phone,
    color: 'text-emerald-600 dark:text-emerald-300',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
  },
  {
    title: 'Automated Front-Desk Reception Support',
    description:
      'Our GoHighLevel engine automatically texts back missed calls immediately, preventing prospective patients from calling the next clinic down the street.',
    icon: Zap,
    color: 'text-indigo-600 dark:text-indigo-300',
    bg: 'bg-indigo-50 dark:bg-indigo-500/10',
  },
];

function PackageCard({ pkg }: { pkg: PackageTier }) {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 md:p-7 transition-all duration-300 ${
        pkg.emphasized
          ? 'border-blue-300 bg-blue-50/70 shadow-lg shadow-blue-900/10 dark:border-blue-500/40 dark:bg-slate-800/90'
          : 'border-gray-200 bg-white/90 dark:border-slate-700 dark:bg-slate-800/70'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 ${
          pkg.emphasized
            ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500'
            : 'bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700'
        }`}
      />

      <div className="relative z-10 mb-5">
        <div className="mb-2 inline-flex items-center rounded-full border border-blue-200/80 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200">
          Tier {pkg.tier}
        </div>
        <h3 className="text-xl font-bold leading-snug text-blue-950 dark:text-white md:text-2xl">{pkg.name}</h3>
        <p className="mt-2 text-sm font-semibold text-blue-700 dark:text-blue-300">{pkg.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          <span className="font-semibold text-gray-800 dark:text-gray-200">Best for: </span>
          {pkg.bestFor}
        </p>
      </div>

      <div className="mb-5 rounded-2xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 dark:border-amber-500/25 dark:bg-amber-500/10">
        <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200">
          <Gift className="h-3.5 w-3.5 shrink-0" aria-hidden />
          Key offer
        </div>
        <p className="text-sm font-medium leading-relaxed text-amber-950 dark:text-amber-100">{pkg.highlight}</p>
      </div>

      <div className="flex-1">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {pkg.includesLabel ?? "What's included"}
        </p>
        <ul className="space-y-3">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-[14px] leading-6 text-gray-700 dark:text-gray-200">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function GrowthPackages() {
  return (
    <section
      id="packages"
      className="relative scroll-mt-24 overflow-hidden bg-[#F5F7FB] py-24 transition-colors duration-300 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent dark:from-slate-900/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section 1 — hero copy */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
            <Sparkles className="h-4 w-4" aria-hidden />
            <span>Predictable Patient Acquisition</span>
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl md:leading-tight">
            Turn Inbound Searches Into{' '}
            <SectionGradientEmphasis>Booked Dental Appointments</SectionGradientEmphasis>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Fully compliant, high-converting growth systems designed exclusively for clinics in Ontario and Quebec.
            Built with GHL lead automation and transparent call tracking.
          </p>
        </div>

        {/* Section 2 — package tiers */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {packageTiers.map((pkg) => (
            <PackageCard key={pkg.tier} pkg={pkg} />
          ))}
        </div>

        {/* Section 3 — value proposition */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-blue-950 dark:text-white md:text-3xl">
              Why Dental Clinics <SectionGradientEmphasis>Partner With Us</SectionGradientEmphasis>
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/70"
                >
                  <div className={`mb-4 inline-flex rounded-xl p-3 ${item.bg}`}>
                    <Icon className={`h-6 w-6 ${item.color}`} aria-hidden />
                  </div>
                  <h4 className="text-lg font-bold text-blue-950 dark:text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
