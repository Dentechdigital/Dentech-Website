import { scarcityHeroSupporting, scarcityShortLabel } from '../offerScarcity';

const chips = ['No separate site build fee', '6-month growth marketing', 'Starter 5-page clinic site'];

function OfferBadge() {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden />
      New clinic offer · {scarcityShortLabel}
    </p>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-x-hidden border-b border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 pt-10 sm:pt-14">
      <div className="lp-dots lp-dots-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-1/3 h-48 w-48 rounded-full bg-teal-200/25 blur-3xl" aria-hidden />

      <div className="relative z-10 lp-shell">
        <div className="mb-6 sm:mb-8">
          <OfferBadge />
          <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-blue-950/90">
            Built for new practices that need to look established online on day one.
          </p>
          <ul className="mt-4 flex max-w-2xl flex-wrap gap-2" aria-label="Offer highlights">
            {chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-slate-200/90 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">{scarcityHeroSupporting}</p>
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
              Look legitimate before and right after you open: we design and launch a professional, mobile-first clinic
              site on our managed platform — no separate website invoice. One partner for strategy, build, and go-live.
              Hosting and maintenance are covered in your agreement from go-live (see{' '}
              <a href="#pricing" className="font-medium text-blue-700 underline-offset-2 hover:underline">
                pricing summary
              </a>
              ).
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Check eligibility
              </a>
              <a
                href="#offer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-center text-sm font-semibold text-blue-950 shadow-sm transition hover:border-blue-200 hover:bg-slate-50"
              >
                See the offer
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
