import { scarcityOfferCallout } from '../offerScarcity';
import { WEBSITE_OFFER_MONTHLY, WEBSITE_OFFER_TIER_LABEL } from '../marketingRetainerContent';

export default function OfferSnapshot() {
  const items = [
    {
      title: '6-month Signature retainer',
      body: `This page's bundle is valid only with ${WEBSITE_OFFER_TIER_LABEL} at ${WEBSITE_OFFER_MONTHLY} — our most popular tier: deeper SEO, PPC management, authority content, and monthly strategy sessions. We execute and report monthly; exact scope is in your agreement.`,
    },
    {
      title: 'Starter website included',
      body: 'No separate design/build fee for the five-page clinic package — we scope, design, and launch your site during onboarding. Custom UI/UX, mobile-first performance, and an appointment request flow on contact.',
    },
    {
      title: 'Hosting & maintenance in your retainer',
      body: 'From go-live through your six-month term, hosting, backups, security updates, and reasonable content tweaks are covered at $150/mo as part of the retainer — not a surprise add-on. Details in your agreement.',
    },
  ];

  return (
    <section
      id="offer"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-white via-white to-slate-50/80 py-16 sm:py-20"
    >
      <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-indigo-100/70 blur-3xl" aria-hidden />
      <div className="relative z-10 lp-shell">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">What this offer is</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          A bundled path for <strong className="font-medium text-blue-950">new and early-stage practices</strong>: a
          credible web presence plus six months of{' '}
          <strong className="font-medium text-blue-950">
            {WEBSITE_OFFER_TIER_LABEL} ({WEBSITE_OFFER_MONTHLY})
          </strong>{' '}
          — without a standalone website proposal upfront. Starter and Elite tiers are not part of this specific offer.
        </p>
        <p className="mt-4 max-w-3xl rounded-xl border border-blue-200 bg-blue-50/90 px-4 py-3 text-sm font-medium leading-relaxed text-blue-950">
          <span className="font-semibold">Eligibility:</span> included starter site + this LP pricing path applies only when
          you commit to <strong>{WEBSITE_OFFER_TIER_LABEL}</strong> at <strong>{WEBSITE_OFFER_MONTHLY}</strong> for six
          months (hosting/maintenance from go-live per the pricing section).
        </p>
        <p className="mt-4 max-w-3xl text-sm italic text-slate-600">
          We&apos;ll tell you honestly if this isn&apos;t the right fit — before paperwork. Deliverables and fees are in
          writing before you commit.
        </p>
        <p className="mt-5 max-w-3xl rounded-xl border border-slate-200/90 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-slate-700">
          <span className="font-semibold text-blue-950">Availability. </span>
          {scarcityOfferCallout}
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:border-blue-200/80 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-blue-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
