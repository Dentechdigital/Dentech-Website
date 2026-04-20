import { scarcityHeroSupporting, scarcityShortLabel } from '../offerScarcity';

const chips = [
  'No separate site build fee',
  'Signature Marketing ($2,500/mo)',
  'Starter 5-page clinic site',
];

function OfferBadgeDark() {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden />
      New clinic offer · {scarcityShortLabel}
    </p>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/70">
      <div className="lp-dots lp-dots-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-32 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-1/3 h-48 w-48 rounded-full bg-teal-200/25 blur-3xl" aria-hidden />

      <div className="relative z-10 lp-shell pt-10 sm:pt-14">
        <div className="grid gap-10 pb-12 sm:gap-12 sm:pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-10 lg:pb-16">
          <div className="flex min-w-0 flex-col">
            <h1 className="text-[2.05rem] font-semibold leading-[1.14] tracking-tight text-blue-950 sm:text-[2.75rem] sm:leading-[1.08] md:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Website included for your practice
              </span>
              <span className="text-blue-950"> — no separate build fee</span>
              <span className="block pt-1.5 text-blue-950 sm:pt-2">
                when you commit to{' '}
                <span className="font-semibold text-blue-950">6 months of growth marketing</span>.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Professional starter site on our stack —{' '}
              <strong className="font-medium text-slate-800">no separate build fee</strong> — when you commit to six
              months of <strong className="font-medium text-slate-800">Signature Marketing at $2,500/mo</strong>.
              Hosting and maintenance from go-live are in your agreement (
              <a href="#pricing" className="font-medium text-blue-700 underline-offset-2 hover:underline">
                summary
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

      {/* Offer + scarcity bridge: sits on the boundary before the next section */}
      <div
        className="relative z-10 border-b border-slate-200/70 border-t border-white/15 bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]"
        aria-label="Offer highlights and enrollment"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
          aria-hidden
        />
        <div className="relative lp-shell py-8 sm:py-10">
          <OfferBadgeDark />
          <p className="mt-4 max-w-3xl text-base font-semibold leading-snug text-white sm:text-lg">
            Built for new practices that need to look established online on day one.
          </p>
          <ul className="mt-4 flex max-w-3xl flex-wrap gap-2" aria-label="Offer highlights">
            {chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-50 backdrop-blur-sm sm:text-sm"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl border-t border-white/10 pt-5 text-sm leading-relaxed text-blue-100/95 sm:text-base">
            {scarcityHeroSupporting}
          </p>
        </div>
      </div>
      {/* Sentinel: when this passes above the viewport, hero (including bridge) is fully off-screen — show mobile sticky CTA */}
      <div id="hero-scroll-end" className="h-0 w-full shrink-0" aria-hidden />
    </section>
  );
}
