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
      title: '$50/mo hosting & maintenance',
      body: 'After go-live, ongoing hosting, backups, security updates, and reasonable content updates stay predictable at fifty dollars per month.',
    },
  ];

  return (
    <section id="offer" className="scroll-mt-24 border-b border-slate-200/60 bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">Offer at a glance</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Built for new and early-stage practices that need a credible web presence fast — without paying a standalone
          website proposal upfront.
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
