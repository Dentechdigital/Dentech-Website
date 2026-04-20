function OfferBadge() {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" aria-hidden />
      New clinic offer
    </p>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-x-hidden border-b border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 pt-10 sm:pt-14">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 sm:mb-8">
          <OfferBadge />
        </div>

        <div className="grid gap-10 pb-14 sm:gap-12 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-10 lg:pb-20">
          <div className="flex min-w-0 flex-col">
            <h1 className="text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-blue-950 sm:text-5xl sm:leading-tight">
              Your practice website included — when you commit to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                6 months of growth marketing
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              We design and launch a professional, mobile-first clinic site on our managed platform — no separate website
              build invoice. You sign a 6-month marketing retainer; we handle strategy, build, and go-live.
            </p>
            <p className="mt-4 max-w-xl rounded-xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm font-medium text-amber-950">
              <span className="font-semibold">Hosting &amp; maintenance: $150/mo</span> is included in your six-month
              retainer from go-live — hosting, backups, platform updates, and reasonable content tweaks within your plan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Request this offer
              </a>
              <a
                href="#included"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-center text-sm font-semibold text-blue-950 shadow-sm transition hover:border-blue-200 hover:bg-slate-50"
              >
                See what&apos;s included
              </a>
            </div>
          </div>

          <div className="flex min-w-0 justify-center lg:justify-end lg:pt-0">
            <img
              src="/hero-mockup.webp"
              alt="Website preview on desktop and phone"
              width={960}
              height={720}
              className="w-full max-w-[min(100%,520px)] object-contain drop-shadow-[0_24px_48px_rgba(15,23,42,0.14)] sm:max-w-[560px] lg:max-h-[min(640px,calc(100dvh-10rem))] lg:max-w-[min(720px,100%)]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
