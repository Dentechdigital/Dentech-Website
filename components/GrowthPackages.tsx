import React, { useCallback, useId, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  LayoutGrid,
  ListTree,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionGradientEmphasis } from './SectionGradientEmphasis';

type PriorityId = 'leads' | 'brand' | 'multi';
type ViewMode = 'essential' | 'detailed';

type DentechSoftwarePillar = {
  title: string;
  items: string[];
};

type PackageTier = {
  id: PriorityId;
  tier: number;
  name: string;
  tagline: string;
  clinicType: string;
  essentialBullets: [string, string, string];
  detailedFeatures: string[];
  highlight?: string;
  dentechSoftware?: DentechSoftwarePillar;
};

const priorities: { id: PriorityId; label: string; hint: string }[] = [
  { id: 'leads', label: 'High-Margin Leads', hint: 'Core Patient Engine' },
  { id: 'brand', label: 'Brand Dominance', hint: 'Social + Dentech portal' },
  { id: 'multi', label: 'Multi-Location', hint: 'Expansion & Re-Launch' },
];

const packageTiers: PackageTier[] = [
  {
    id: 'leads',
    tier: 1,
    name: 'Core Patient Engine',
    tagline: 'Targeted local search & paid acquisition',
    clinicType:
      'Established practices that want steady, high-value inquiries—implants, aligners, emergency, and hygiene.',
    essentialBullets: [
      'Google PPC & Meta funnels for high-margin procedures in your catchment',
      'Google Business Profile & Local Maps SEO for top local packs',
      'Dentech portal lead tracking with RCDSO/ODQ-compliant ad copy',
    ],
    highlight: 'Complimentary custom Webflow website with any 6-month growth partnership.',
    detailedFeatures: [
      'High-intent Google PPC campaigns for implants, aligners, emergency, and cosmetic searches',
      'Localized Facebook & Instagram lead funnels for family and cosmetic care',
      'Systematic GBP & Maps ranking optimization',
      'Dentech portal call tracking & recordings for reception QA',
      'Dentech portal & app: missed-call text-back, reminders, centralized lead inbox',
      'Pre-audited landing pages for Ontario & Quebec dental marketing rules',
    ],
  },
  {
    id: 'brand',
    tier: 2,
    name: 'Brand Dominance & Social Engine',
    tagline: 'Organic + paid catchment dominance',
    clinicType:
      'Clinics ready to own their market with video, social proof, and automated patient follow-up.',
    essentialBullets: [
      'Everything in Core Patient Engine',
      'Monthly short-form video (Reels & Shorts) featuring your team & procedures',
      'Dedicated social across Instagram, Facebook & TikTok',
    ],
    highlight: 'Full content production layered on our paid + local SEO growth engine.',
    dentechSoftware: {
      title: 'Dentech portal & app',
      items: [
        'Missed-call instant text-back via the Dentech app so leads don’t call the next clinic',
        'Automated post-visit review engine for authentic 5-star Google reviews',
        'Centralized lead CRM—every inquiry in one Dentech portal pipeline',
      ],
    },
    detailedFeatures: [
      'Custom branded graphics aligned to your practice identity',
      'Complimentary Webflow site with interactive booking & mobile optimization',
      'Community engagement & content scheduling across platforms',
      'Patient procedure guides & FAQ highlight reels',
      'Dentech app post-appointment SMS workflows for review generation',
    ],
  },
  {
    id: 'multi',
    tier: 3,
    name: 'Practice Expansion & Re-Launch',
    tagline: 'Bespoke blueprint for groups & new locations',
    clinicType:
      'Multi-location groups, acquisitions, or grand openings needing digital + physical alignment.',
    essentialBullets: [
      'Everything in Brand Dominance',
      'Multi-location Dentech portal dashboard—leads tracked per branch',
      'Grand opening & local event campaign playbooks',
    ],
    highlight: 'Multi-site Webflow architecture plus signage & print vendor coordination.',
    detailedFeatures: [
      'Advanced Webflow: practitioner bios, treatment guides, location pages',
      'Physical collateral specs with certified local print & signage vendors',
      'Window wraps, TV displays & outdoor branding logistics',
      'Priority SLA with bi-weekly strategic revenue rollups',
      'Dedicated account oversight for practice managers',
    ],
  },
];

const valueProps = [
  {
    title: 'RCDSO & ODQ safe',
    description: 'Campaigns and landing pages audited for Ontario & Quebec dental advertising rules.',
    icon: ShieldCheck,
    color: 'text-blue-600 dark:text-blue-300',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
  },
  {
    title: '100% call attribution',
    description:
      'The Dentech portal shows which campaigns drive booked consultations—with call history in one place.',
    icon: Phone,
    color: 'text-emerald-600 dark:text-emerald-300',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10',
  },
  {
    title: 'Automated front desk',
    description:
      'The Dentech app texts back missed calls immediately so prospects stay in your pipeline.',
    icon: Zap,
    color: 'text-indigo-600 dark:text-indigo-300',
    bg: 'bg-indigo-50 dark:bg-indigo-500/10',
  },
];

type PackageCardProps = {
  pkg: PackageTier;
  viewMode: ViewMode;
  isExpanded: boolean;
  isHighlighted: boolean;
  onToggleExpand: () => void;
  detailsPanelId: string;
};

function PackageCard({
  pkg,
  viewMode,
  isExpanded,
  isHighlighted,
  onToggleExpand,
  detailsPanelId,
}: PackageCardProps) {
  const showDetails = viewMode === 'detailed' || isExpanded;

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 transition-all duration-300 md:p-6 ${
        isHighlighted
          ? 'scale-[1.02] border-blue-400 bg-blue-50/80 shadow-xl shadow-blue-900/15 ring-2 ring-blue-500/40 dark:border-blue-500/50 dark:bg-slate-800/95 dark:ring-blue-400/30'
          : 'border-gray-200 bg-white/90 dark:border-slate-700 dark:bg-slate-800/70'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${
          isHighlighted
            ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500'
            : 'bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-600'
        }`}
      />

      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="inline-flex rounded-full border border-blue-200/80 bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200">
            Tier {pkg.tier}
          </span>
          {isHighlighted && (
            <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
              Best match
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold leading-snug text-blue-950 dark:text-white md:text-xl">{pkg.name}</h3>
        <p className="mt-1 text-xs font-medium text-blue-700 dark:text-blue-300">{pkg.tagline}</p>
      </div>

      <p className="mb-4 rounded-xl border border-slate-200/80 bg-slate-50/90 px-3 py-2.5 text-sm leading-snug text-slate-700 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-200">
        <span className="font-semibold text-blue-950 dark:text-white">For: </span>
        {pkg.clinicType}
      </p>

      <ul className="mb-4 space-y-2.5">
        {pkg.essentialBullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm leading-snug text-gray-700 dark:text-gray-200">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {pkg.dentechSoftware && (
        <div className="mb-4 rounded-xl border border-indigo-200/80 bg-indigo-50/70 px-3 py-3 dark:border-indigo-500/30 dark:bg-indigo-500/10">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-800 dark:text-indigo-200">
            {pkg.dentechSoftware.title}
          </p>
          <ul className="mt-2 space-y-1.5">
            {pkg.dentechSoftware.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs leading-snug text-indigo-950 dark:text-indigo-100">
                <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-600 dark:text-indigo-300" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {viewMode === 'essential' && (
        <button
          type="button"
          onClick={onToggleExpand}
          aria-expanded={isExpanded}
          aria-controls={detailsPanelId}
          className="mb-1 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:text-blue-300"
        >
          {isExpanded ? 'Hide specs' : '+ Show more specs'}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
      )}

      <div
        id={detailsPanelId}
        hidden={!showDetails}
        className={showDetails ? 'mt-3 border-t border-slate-200/80 pt-4 dark:border-slate-700' : ''}
      >
        {showDetails && (
          <>
            {pkg.highlight && (
              <p className="mb-3 text-xs font-medium leading-relaxed text-amber-900 dark:text-amber-100">
                <span className="font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">Offer: </span>
                {pkg.highlight}
              </p>
            )}
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Full specifications
            </p>
            <ul className="space-y-2">
              {pkg.detailedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}

export default function GrowthPackages({ compactIntro = false }: { compactIntro?: boolean }) {
  const baseId = useId();
  const [viewMode, setViewMode] = useState<ViewMode>('essential');
  const [expandedTiers, setExpandedTiers] = useState<Set<number>>(new Set());
  const [selectedPriority, setSelectedPriority] = useState<PriorityId | null>(null);

  const setGlobalView = useCallback((mode: ViewMode) => {
    setViewMode(mode);
    if (mode === 'detailed') {
      setExpandedTiers(new Set(packageTiers.map((p) => p.tier)));
    } else {
      setExpandedTiers(new Set());
    }
  }, []);

  const toggleCardExpand = useCallback((tier: number) => {
    setExpandedTiers((prev) => {
      const next = new Set(prev);
      if (next.has(tier)) next.delete(tier);
      else next.add(tier);
      return next;
    });
  }, []);

  const selectPriority = useCallback((id: PriorityId) => {
    setSelectedPriority((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="packages"
      className={`relative scroll-mt-24 overflow-hidden bg-[#F5F7FB] transition-colors duration-300 dark:bg-slate-950 ${
        compactIntro ? 'py-12 md:py-16' : 'py-20 md:py-24'
      }`}
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/20" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-3xl text-center ${compactIntro ? 'mb-8 md:mb-10' : 'mb-10 md:mb-12'}`}>
          {!compactIntro && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
              <Sparkles className="h-4 w-4" aria-hidden />
              <span>Predictable Patient Acquisition</span>
            </div>
          )}
          <h2 className={`mb-3 font-bold tracking-tight text-blue-950 dark:text-white ${
            compactIntro
              ? 'text-2xl md:text-3xl'
              : 'text-3xl md:text-4xl md:leading-tight lg:text-5xl'
          }`}>
            {compactIntro ? (
              <>
                Compare the three <SectionGradientEmphasis>growth tiers</SectionGradientEmphasis>
              </>
            ) : (
              <>
                Turn Searches Into{' '}
                <SectionGradientEmphasis>Booked Appointments</SectionGradientEmphasis>
              </>
            )}
          </h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 md:text-lg">
            {compactIntro
              ? 'Pick your priority, then review essential or full specs. Scope is confirmed on a strategy call—not a one-size list price.'
              : 'Compliant growth systems for Ontario & Quebec clinics—lead follow-up and reporting in the Dentech portal.'}
          </p>
        </div>

        {/* 2-click package selector */}
        <div className="mx-auto mb-8 max-w-3xl">
          <p className="mb-3 flex items-center justify-center gap-2 text-center text-sm font-semibold text-slate-700 dark:text-slate-300">
            <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden />
            What&apos;s your main priority?
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3" role="group" aria-label="Select your growth priority">
            {priorities.map((p) => {
              const active = selectedPriority === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => selectPriority(p.id)}
                  aria-pressed={active}
                  className={`rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                    active
                      ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:border-blue-500/40'
                  }`}
                >
                  <span className="block text-sm font-bold">{p.label}</span>
                  <span
                    className={`mt-0.5 block text-xs ${active ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}
                  >
                    {p.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global view toggle */}
        <div className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Display
          </span>
          <div
            className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            role="group"
            aria-label="Package detail level"
          >
            <button
              type="button"
              onClick={() => setGlobalView('essential')}
              aria-pressed={viewMode === 'essential'}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                viewMode === 'essential'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300'
              }`}
            >
              <LayoutGrid className="h-4 w-4" aria-hidden />
              Essential view
            </button>
            <button
              type="button"
              onClick={() => setGlobalView('detailed')}
              aria-pressed={viewMode === 'detailed'}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                viewMode === 'detailed'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300'
              }`}
            >
              <ListTree className="h-4 w-4" aria-hidden />
              Detailed view
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {packageTiers.map((pkg) => (
            <PackageCard
              key={pkg.tier}
              pkg={pkg}
              viewMode={viewMode}
              isExpanded={expandedTiers.has(pkg.tier)}
              isHighlighted={selectedPriority === pkg.id}
              onToggleExpand={() => toggleCardExpand(pkg.tier)}
              detailsPanelId={`${baseId}-tier-${pkg.tier}-details`}
            />
          ))}
        </div>

        <div className="mt-14 md:mt-16">
          <h3 className="mb-6 text-center text-xl font-bold text-blue-950 dark:text-white md:text-2xl">
            Why clinics <SectionGradientEmphasis>partner with us</SectionGradientEmphasis>
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 dark:border-slate-700 dark:bg-slate-800/70"
                >
                  <div className={`mb-3 inline-flex rounded-lg p-2.5 ${item.bg}`}>
                    <Icon className={`h-5 w-5 ${item.color}`} aria-hidden />
                  </div>
                  <h4 className="font-bold text-blue-950 dark:text-white">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
