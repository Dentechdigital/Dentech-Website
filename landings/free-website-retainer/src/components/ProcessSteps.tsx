const steps = [
  {
    step: '1',
    title: 'Qualify',
    body: 'Short application + call. We confirm fit, market, and timeline so both sides are aligned before paperwork.',
  },
  {
    step: '2',
    title: 'Strategy & onboarding',
    body: 'Kickoff, goals, brand inputs, and content collection. Retainer scope and channel priorities are locked for the first sprint.',
  },
  {
    step: '3',
    title: 'Build & review',
    body: 'We design your five pages on the managed platform, implement your booking request flow, and walk you through review rounds.',
  },
  {
    step: '4',
    title: 'Launch + marketing',
    body: 'Go-live, analytics checks, then execution on the agreed growth plan for the remainder of the six months.',
  },
];

export default function ProcessSteps() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/60 bg-gradient-to-br from-white via-slate-50/40 to-blue-50/50 py-16 sm:py-20"
    >
      <div className="lp-dots lp-dots-fade-b pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" aria-hidden />
      <div className="relative z-10 lp-shell">
        <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">How it works</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Four clear phases from application to live site and active marketing.</p>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-6 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white" aria-hidden>
                {s.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-blue-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
