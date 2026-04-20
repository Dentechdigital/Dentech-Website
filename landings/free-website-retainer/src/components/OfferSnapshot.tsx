import { CheckCircle2 } from 'lucide-react';
import { getMainSiteUrl } from '../config';
import { scarcityOfferCallout } from '../offerScarcity';
import { MARKETING_RETAINER_TIERS, WEBSITE_OFFER_MONTHLY, WEBSITE_OFFER_TIER_LABEL } from '../marketingRetainerContent';

const signatureTier = MARKETING_RETAINER_TIERS.find((t) => t.websiteBundleEligible)!;

const siteBullets = [
  'Up to 5 pages (e.g. Home, About, Team, Services, Contact)',
  'Appointment / callback request on contact — mobile-first, fast',
  'Single-language (English); we host, update, and keep the platform current',
];

const steps = [
  { n: '1', t: 'Apply', d: 'Short form + call — we confirm Signature fit.' },
  { n: '2', t: 'Kickoff', d: 'Goals, brand inputs, content — you approve before launch.' },
  { n: '3', t: 'Launch', d: 'Site goes live; then six months of Signature execution + reporting.' },
];

export default function OfferSnapshot() {
  const main = getMainSiteUrl();

  return (
    <section
      id="offer"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-white via-white to-slate-50/80 py-14 sm:py-20"
    >
      <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <div className="relative z-10 lp-shell">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">What you get</h2>
        <p className="mt-3 max-w-3xl text-lg text-slate-700">
          For <strong className="text-blue-950">new practices</strong>: a professional starter site at{' '}
          <strong className="text-blue-950">no separate build fee</strong> when you sign six months of{' '}
          <strong className="text-blue-950">
            {WEBSITE_OFFER_TIER_LABEL} ({WEBSITE_OFFER_MONTHLY})
          </strong>
          . Hosting and maintenance (<strong className="text-blue-950">$150/mo</strong>) is included in that agreement
          from go-live. Terms confirmed in writing before you commit.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Starter site</h3>
            <ul className="mt-4 space-y-3">
              {siteBullets.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              {WEBSITE_OFFER_TIER_LABEL} — what we run for six months
            </h3>
            <ul className="mt-4 space-y-2.5">
              {signatureTier.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-600">
              Need Starter, Elite, or custom scope?{' '}
              <a href={`${main}/contact`} className="font-medium text-blue-700 underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
                Contact us on the main site
              </a>
              — this page is Signature-only.
            </p>
          </div>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white" aria-hidden>
                {s.n}
              </span>
              <div>
                <p className="font-semibold text-blue-950">{s.t}</p>
                <p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-3xl text-sm text-slate-600">
          <span className="font-semibold text-blue-950">Availability. </span>
          {scarcityOfferCallout}
        </p>

        <div className="mt-8">
          <a
            href="#apply"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Check eligibility
          </a>
        </div>
      </div>
    </section>
  );
}
