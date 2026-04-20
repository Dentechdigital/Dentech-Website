import { CheckCircle2 } from 'lucide-react';
import { getMainSiteUrl } from '../config';
import {
  MARKETING_RETAINER_TIERS,
  RETAINER_WHAT_TO_EXPECT,
  WEBSITE_OFFER_MONTHLY,
  WEBSITE_OFFER_TIER_LABEL,
} from '../marketingRetainerContent';

export default function MarketingRetainerSection() {
  const main = getMainSiteUrl();
  const pricingHref = `${main}/#pricing`;

  return (
    <section
      id="retainer"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-white via-slate-50/50 to-white py-16 sm:py-20"
    >
      <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" aria-hidden />
      <div className="relative z-10 lp-shell">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
          Your six-month marketing retainer
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Sign a <strong className="font-medium text-blue-950">6-month growth marketing contract</strong> at{' '}
          <strong className="font-medium text-blue-950">
            {WEBSITE_OFFER_TIER_LABEL} ({WEBSITE_OFFER_MONTHLY})
          </strong>{' '}
          and we design and launch your starter clinic website at{' '}
          <strong className="font-medium text-blue-950">no separate build fee</strong>. This page&apos;s bundled offer is{' '}
          <strong className="font-medium text-blue-950">only valid at that tier</strong> — not with Starter or Elite as
          shown here. Need a different setup? Use the{' '}
          <a href={`${main}/contact`} className="font-medium text-blue-700 underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
            main contact page
          </a>
          .
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
          Below is how <strong className="font-medium text-blue-950">Starter</strong>,{' '}
          <strong className="font-medium text-blue-950">Signature</strong>, and{' '}
          <strong className="font-medium text-blue-950">Elite</strong> compare on our main site — same program names and
          features. Only <strong className="font-medium text-blue-950">Signature</strong> carries this LP&apos;s website
          bundle.{' '}
          <a
            href={pricingHref}
            className="font-medium text-blue-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View pricing on the main site
          </a>
          .
        </p>

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-blue-700">What&apos;s included by tier</h3>
        <ul className="mt-6 grid gap-6 lg:grid-cols-3">
          {MARKETING_RETAINER_TIERS.map((tier) => (
            <li
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
                tier.highlighted
                  ? 'border-blue-300 bg-gradient-to-b from-blue-50/90 to-white ring-2 ring-blue-200/90'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {tier.badge ? (
                <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {tier.badge}
                </span>
              ) : null}
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Marketing</p>
              <h4 className="mt-2 text-lg font-semibold text-blue-950">{tier.name}</h4>
              <p className="mt-1 text-xl font-semibold text-blue-950">{tier.price}</p>
              {tier.websiteBundleEligible ? (
                <p className="mt-2 rounded-lg border border-emerald-200/90 bg-emerald-50/90 px-2.5 py-1.5 text-xs font-semibold text-emerald-900">
                  This landing offer: starter site included — {WEBSITE_OFFER_MONTHLY} Signature retainer
                </p>
              ) : (
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Website bundle on this page is not offered at this tier. Ask us about upgrading to Signature or a custom
                  scope.
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.description}</p>
              <ul className="mt-5 flex flex-col gap-2.5 border-t border-slate-100 pt-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-blue-950">What to expect</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
            From application to renewal — clear scope up front, then execution and reporting through the six-month term.
          </p>
          <ul className="mt-6 space-y-3">
            {RETAINER_WHAT_TO_EXPECT.map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
