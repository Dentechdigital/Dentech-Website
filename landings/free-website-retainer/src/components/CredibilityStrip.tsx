import { Star } from 'lucide-react';
import { LP_TESTIMONIAL_HIGHLIGHTS, TRUSTED_CLIENT_LOGOS, mainSiteAsset } from '../trustContent';

export default function CredibilityStrip() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 py-14 text-white sm:py-16">
      <div className="lp-dots-dark pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-cyan-400/15 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl" aria-hidden />

      <div className="relative z-10 lp-shell space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-200/90">Why teams trust us</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Ottawa-based partner for serious dental growth
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
              Dentech Digital combines clinical-market language with measurable acquisition work — websites, SEO/GEO,
              paid media, and reputation systems. We are headquartered in Ottawa with hybrid delivery across{' '}
              <strong className="font-semibold text-white">Canada</strong> and select international clients when there is
              a strong fit.
            </p>
          </div>
          <ul className="flex flex-shrink-0 flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-blue-200/90 sm:text-sm lg:justify-end">
            <li>Ottawa HQ</li>
            <li>Canada-wide</li>
            <li>Select countries</li>
            <li>Dental focus</li>
          </ul>
        </div>

        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-blue-200/80">
            Trusted by leading dental brands
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-12">
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

        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-blue-200/80">What clients say</p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LP_TESTIMONIAL_HIGHLIGHTS.map((t) => (
              <li
                key={t.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6"
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
