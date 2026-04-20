import { Star } from 'lucide-react';
import { getMainSiteUrl } from '../config';
import { LP_TESTIMONIAL_HIGHLIGHTS, TRUSTED_CLIENT_LOGOS, mainSiteAsset } from '../trustContent';

export default function CredibilityStrip() {
  const quotes = LP_TESTIMONIAL_HIGHLIGHTS.slice(0, 2);
  const main = getMainSiteUrl();

  return (
    <section
      id="trust"
      className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 py-12 text-white sm:py-14"
    >
      <div className="lp-dots-dark pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="relative z-10 lp-shell space-y-10">
        <p className="text-center text-sm text-blue-100/95">
          Same partners and proof as on{' '}
          <a href={main} className="font-medium text-white underline-offset-2 hover:underline">
            dentechdigital.ca
          </a>
          .
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-90">
          {TRUSTED_CLIENT_LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={mainSiteAsset(logo.src)}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className={`w-auto object-contain brightness-0 invert ${logo.logoClass}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {quotes.map((t) => (
            <figure
              key={t.name}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <img
                src={mainSiteAsset(t.image)}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-white/20"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0">
                <div className="flex gap-0.5 text-amber-300" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-2 text-sm leading-relaxed text-blue-50/95">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-white">
                  {t.name}
                  <span className="mt-0.5 block font-normal text-blue-200/90">{t.clinic}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
