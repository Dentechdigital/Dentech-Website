type Props = {
  /** Slightly different copy for placement context */
  variant?: 'after-pricing' | 'after-faq';
};

const copy: Record<NonNullable<Props['variant']>, string> = {
  'after-pricing':
    'If the numbers work for you, the next step is a short eligibility check — we confirm fit before any paperwork.',
  'after-faq':
    'Still comfortable with the details? Request an eligibility review — we reply within one business day.',
};

export default function MidPageEligibilityCta({ variant = 'after-pricing' }: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-blue-200/80 bg-gradient-to-b from-blue-50/90 to-white px-5 py-6 text-center shadow-sm sm:px-8 sm:py-7">
      <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">{copy[variant]}</p>
      <a
        href="#apply"
        className="mt-4 inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Check eligibility
      </a>
    </div>
  );
}
