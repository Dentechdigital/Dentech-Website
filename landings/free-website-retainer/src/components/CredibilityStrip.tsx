export default function CredibilityStrip() {
  return (
    <section className="border-b border-slate-200/60 bg-blue-950 px-4 py-10 text-white sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
