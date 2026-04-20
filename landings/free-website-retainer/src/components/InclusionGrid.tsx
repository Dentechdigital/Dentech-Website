const pages = ['Home', 'About', 'Team', 'Services', 'Contact'];

const extras = [
  'Booking / appointment request form on the contact flow',
  'Single-language site (English)',
  'Mobile-first layout and fast performance targets',
  'SEO- and GEO-friendly structure (titles, headings, local signals)',
  'Managed publishing: we handle deployment and platform updates within your plan',
];

export default function InclusionGrid() {
  return (
    <section
      id="included"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#fafaf9] via-[#fafaf9] to-blue-50/30 py-16 sm:py-20"
    >
      <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.4]" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-200/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl" aria-hidden />
      <div className="relative z-10 lp-shell">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">What&apos;s included in your site</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Up to <strong className="text-blue-950">five pages</strong> on our managed clinic platform — we design and build;
          you get an editor-friendly site without naming underlying technology.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Page set (max 5)</h3>
            <ul className="mt-4 space-y-3">
              {pages.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700" aria-hidden>
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Also included</h3>
            <ul className="mt-4 space-y-3">
              {extras.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-sm"
                >
                  <span className="mt-0.5 text-blue-600" aria-hidden>
                    •
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              Booking means a patient can request an appointment or callback from your site (form workflow). Live
              two-way calendar sync may require a higher tier — we&apos;ll confirm during onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
