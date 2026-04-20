import { WEBSITE_OFFER_MONTHLY, WEBSITE_OFFER_TIER_LABEL } from '../marketingRetainerContent';
import MidPageEligibilityCta from './MidPageEligibilityCta';

export default function PricingStrip() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#fafaf9] to-white py-16 sm:py-20"
    >
      <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-100/50 blur-3xl" aria-hidden />
      <div className="relative z-10 lp-shell">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">What you pay — in plain terms</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          <strong className="font-medium text-blue-950">Primary reference for fees:</strong> the website build is not
          billed separately when you qualify and sign the six-month retainer at{' '}
          <strong className="text-blue-950">
            {WEBSITE_OFFER_TIER_LABEL} ({WEBSITE_OFFER_MONTHLY})
          </strong>{' '}
          — the only tier for this landing-page bundle. Hosting and maintenance at{' '}
          <strong className="text-blue-950">$150/mo</strong> is included in that agreement for the full six-month term from
          go-live. Final fees are confirmed in your written agreement.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <caption className="border-b border-slate-100 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              Summary (details confirmed on your agreement)
            </caption>
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
              <tr>
                <th scope="col" className="px-4 py-3 sm:px-6">
                  Item
                </th>
                <th scope="col" className="px-4 py-3 sm:px-6">
                  During setup + retainer
                </th>
                <th scope="col" className="px-4 py-3 sm:px-6">
                  After launch (monthly)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <th scope="row" className="px-4 py-4 font-medium text-blue-950 sm:px-6">
                  Starter clinic site (up to 5 pages + booking request)
                </th>
                <td className="px-4 py-4 sm:px-6">Included with signed 6-month retainer — no separate build fee</td>
                <td className="px-4 py-4 sm:px-6">—</td>
              </tr>
              <tr className="bg-blue-50/50">
                <th scope="row" className="px-4 py-4 font-medium text-blue-950 sm:px-6">
                  Hosting &amp; maintenance
                </th>
                <td className="px-4 py-4 sm:px-6">
                  $150 / month — included in your 6-month retainer from go-live
                  <span className="mt-1 block text-xs font-normal text-slate-600">
                    Hosting, backups, platform updates, and reasonable content tweaks within plan limits.
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-700 sm:px-6">
                  After the initial term, continues monthly per your renewal agreement (typically $150/mo unless
                  updated).
                </td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-4 font-medium text-blue-950 sm:px-6">
                  Growth marketing retainer
                </th>
                <td className="px-4 py-4 sm:px-6">
                  <strong className="font-medium text-blue-950">This offer:</strong> {WEBSITE_OFFER_TIER_LABEL} at{' '}
                  {WEBSITE_OFFER_MONTHLY} for 6 months (details in agreement). Other tiers are outside this LP bundle.
                </td>
                <td className="px-4 py-4 sm:px-6">Renewal or new agreement after term — discussed before renewal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <MidPageEligibilityCta variant="after-pricing" />
      </div>
    </section>
  );
}
