import { Star } from 'lucide-react';
import { LP_TESTIMONIAL_HIGHLIGHTS, TRUSTED_CLIENT_LOGOS, mainSiteAsset } from '../trustContent';

export default function CredibilityStrip() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 py-14 text-white sm:py-16"
    >
      <div className="lp-dots-dark pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-cyan-400/15 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl" aria-hidden />

      <div className="relative z-10 lp-shell space-y-12">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200/90">Social proof</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Trusted by practices like yours
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
            Dentech Digital combines clinical-market language with measurable acquisition work — websites, SEO/GEO, paid
            media, and reputation systems. Same partner logos and client voices as on our main site.
          </p>
        </header>

        <div
          className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] sm:px-8 sm:py-10"
          aria-labelledby="trust-logos-heading"
        >
          <p id="trust-logos-heading" className="text-center text-xs font-semibold uppercase tracking-wider text-blue-200/90">
            Trusted by leading dental brands
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-12">
            {TRUSTED_CLIENT_LOGOS.map((client) => (
              <div key={client.name} className="flex min-w-[140px] items-center justify-center px-2 sm:min-w-[160px]">
                <img
                  src={mainSiteAsset(client.src)}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className={`${client.logoClass} w-auto max-w-[200px] object-contain opacity-95 sm:max-w-none`}
                  style={{ filter: 'brightness(0) invert(1) saturate(0) contrast(1.08)' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/15 pt-12" aria-labelledby="trust-reviews-heading">
          <h3 id="trust-reviews-heading" className="text-center text-xs font-semibold uppercase tracking-wider text-blue-200/90">
            What clients say
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-blue-100/90">
            Recent feedback — aligned with testimonials on the main Dentech site.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LP_TESTIMONIAL_HIGHLIGHTS.map((t) => (
              <li
                key={t.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-950/35 p-5 backdrop-blur-sm sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={mainSiteAsset(t.image)}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">{t.name}</p>
                    <p className="truncate text-xs text-blue-200/90">{t.clinic}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5 text-amber-400" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-blue-50/95">&ldquo;{t.quote}&rdquo;</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
