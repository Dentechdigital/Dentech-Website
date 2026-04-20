import { scarcityOfferCallout } from '../offerScarcity';

export default function OfferSnapshot() {
  const items = [
    {
      title: '6-month retainer',
      body: 'Growth marketing partnership focused on qualified patient demand — SEO, GEO, paid media, and conversion paths aligned to your clinic.',
    },
    {
      title: 'Website build included',
      body: 'No separate design/build fee for the starter clinic package described below — we scope, design, and launch your site as part of onboarding.',
    },
    {
      title: '$150/mo hosting & maintenance (included)',
      body: 'From go-live through your six-month term, hosting, backups, security updates, and reasonable content updates are covered at $150/mo as part of your retainer — not billed separately.',
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
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">Offer at a glance</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Built for new and early-stage practices that need a credible web presence fast — without paying a standalone
          website proposal upfront.
        </p>
        <p className="mt-5 max-w-2xl rounded-xl border border-slate-200/90 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-slate-700">
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
