import { CheckCircle2, XCircle } from 'lucide-react';

const goodFit = [
  'Opening soon or recently opened — you need a credible, mobile-first site fast, not a generic DIY look.',
  'Ready to invest in patient demand for six months (SEO/GEO, social cadence, paid media depending on tier) — not “website only.”',
  'You want one growth partner for your site and marketing direction (your clinical tools stay separate).',
  'Comfortable starting with up to five pages in English; you can expand scope later if needed.',
];

const notFit = [
  'Phase-one enterprise needs: deep EMR integrations, complex multi-location rollouts, or heavy custom patient portals.',
  'You want a brochure site only with no marketing retainer — this program is bundled by design.',
  'Many languages, many locations, or unusual compliance needs beyond a standard starter — we’ll recommend a different engagement.',
  'Price-only shopping with no intent to run marketing — we’re unlikely to be the right match.',
];

export default function FitSection() {
  return (
    <section
      id="fit"
      className="relative scroll-mt-24 overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-slate-50/80 via-white to-white py-16 sm:py-20"
    >
      <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.3]" aria-hidden />
      <div className="relative z-10 lp-shell">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Is this right for you?</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
          Built for new practices — honest about fit
        </h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          We work best with new clinic owners who need clarity and one accountable partner. We&apos;ll tell you honestly if
          this isn&apos;t the right fit — before paperwork. Deliverables and fees are always confirmed in writing before
          you commit.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-950">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
              Usually a strong fit
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700">
              {goodFit.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-950">
              <XCircle className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
              Often not this offer
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600">
              {notFit.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              If that sounds like you, we may still help via a{' '}
              <span className="font-medium text-slate-700">Growth Build</span> or custom scope — ask on{' '}
              <a href="#faq" className="font-medium text-blue-700 underline-offset-2 hover:underline">
                FAQ
              </a>{' '}
              or{' '}
              <a href="#apply" className="font-medium text-blue-700 underline-offset-2 hover:underline">
                apply
              </a>{' '}
              and we&apos;ll point you the right way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
