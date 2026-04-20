export default function CredibilityStrip() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 py-10 text-white">
      <div className="lp-dots-dark pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-cyan-400/15 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl" aria-hidden />
      <div className="relative z-10 lp-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
          Dentech Digital is an Ottawa-based dental growth partner. We combine clinical-market language with measurable
          acquisition work — websites, SEO/GEO, paid media, and reputation systems.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-blue-200/90 sm:text-sm">
          <li>Ottawa HQ</li>
          <li>Canada-wide</li>
          <li>Dental &amp; medical focus</li>
        </ul>
      </div>
    </section>
  );
}
