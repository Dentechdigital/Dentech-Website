import { useState } from 'react';
import { getMainSiteUrl } from '../config';

const FORM_NAME = 'free-website-retainer-lead';

const timelineOptions = ['Immediately', 'Within 30 days', '1–3 months', 'Exploring options'];
const budgetOptions = ['< $1,500/mo', '$1,500–$2,500/mo', '$2,500–$5,000/mo', '$5,000+/mo', 'Prefer to discuss'];

function encodeBody(data: Record<string, string>): string {
  return new URLSearchParams(data).toString();
}

function getFormAction(): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return '/';
  return base.endsWith('/') ? base : `${base}/`;
}

type LeadFormProps = {
  className?: string;
};

export default function LeadForm({ className = '' }: LeadFormProps) {
  const mainSite = getMainSiteUrl();
  const [fullName, setFullName] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [consent, setConsent] = useState(false);
  const [botField, setBotField] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!fullName.trim()) next.fullName = 'Enter your name.';
    if (!clinicName.trim()) next.clinicName = 'Enter your practice name.';
    if (!city.trim()) next.city = 'Enter your city or region.';
    if (!email.trim()) next.email = 'Enter a work email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = 'Enter a valid email address.';
    if (!phone.trim()) next.phone = 'Enter a phone number so we can reach you.';
    if (!timeline) next.timeline = 'Select a timeline.';
    if (!budgetRange) next.budgetRange = 'Select a budget band.';
    if (!consent) next.consent = 'Confirm consent to proceed.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;
    if (botField.trim()) return;

    setSubmitting(true);
    const body = encodeBody({
      'form-name': FORM_NAME,
      'bot-field': '',
      fullName: fullName.trim(),
      clinicName: clinicName.trim(),
      city: city.trim(),
      email: email.trim(),
      phone: phone.trim(),
      timeline,
      budgetRange,
      consent: consent ? 'yes' : 'no',
    });

    try {
      const res = await fetch(getFormAction(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(`Submit failed (${res.status})`);
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again, or use the contact page on our main site.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={`flex h-full min-h-0 flex-col justify-center rounded-2xl border border-emerald-200 bg-emerald-50/90 p-8 text-center shadow-sm ${className}`.trim()}
      >
        <p className="text-lg font-semibold text-emerald-900">Thank you — we received your request.</p>
        <p className="mt-3 text-sm leading-relaxed text-emerald-800">
          We aim to reply within <strong>one business day</strong>. If your timeline is urgent, reach us through the main
          site contact page.
        </p>
        <a
          href={`${mainSite}/contact`}
          className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open main contact page
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex h-full min-h-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 ${className}`.trim()}
      noValidate
    >
      <p className="rounded-xl border border-amber-200 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
        <strong>Before you submit:</strong> you are requesting the <strong>6-month retainer + included 5-page starter site</strong>.
        <strong>Hosting and maintenance ($150/mo)</strong> is included in your six-month retainer from go-live — not a
        separate add-on fee.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(ev) => setFullName(ev.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-err' : undefined}
          />
          {errors.fullName ? (
            <p id="fullName-err" className="mt-1 text-xs text-red-600" role="alert">
              {errors.fullName}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="clinicName" className="block text-sm font-medium text-slate-700">
            Practice name <span className="text-red-600">*</span>
          </label>
          <input
            id="clinicName"
            name="clinicName"
            type="text"
            autoComplete="organization"
            value={clinicName}
            onChange={(ev) => setClinicName(ev.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-invalid={Boolean(errors.clinicName)}
            aria-describedby={errors.clinicName ? 'clinicName-err' : undefined}
          />
          {errors.clinicName ? (
            <p id="clinicName-err" className="mt-1 text-xs text-red-600" role="alert">
              {errors.clinicName}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-700">
            City / region <span className="text-red-600">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            value={city}
            onChange={(ev) => setCity(ev.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? 'city-err' : undefined}
          />
          {errors.city ? (
            <p id="city-err" className="mt-1 text-xs text-red-600" role="alert">
              {errors.city}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Work email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-err' : undefined}
          />
          {errors.email ? (
            <p id="email-err" className="mt-1 text-xs text-red-600" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-err' : undefined}
          />
          {errors.phone ? (
            <p id="phone-err" className="mt-1 text-xs text-red-600" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-slate-700">
            Start timeline <span className="text-red-600">*</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={timeline}
            onChange={(ev) => setTimeline(ev.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? 'timeline-err' : undefined}
          >
            <option value="">Select…</option>
            {timelineOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {errors.timeline ? (
            <p id="timeline-err" className="mt-1 text-xs text-red-600" role="alert">
              {errors.timeline}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium text-slate-700">
            Monthly marketing budget (target band) <span className="text-red-600">*</span>
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={budgetRange}
            onChange={(ev) => setBudgetRange(ev.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-invalid={Boolean(errors.budgetRange)}
            aria-describedby={errors.budgetRange ? 'budgetRange-err' : undefined}
          >
            <option value="">Select…</option>
            {budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {errors.budgetRange ? (
            <p id="budgetRange-err" className="mt-1 text-xs text-red-600" role="alert">
              {errors.budgetRange}
            </p>
          ) : null}
        </div>
      </div>

      <p className="sr-only" aria-hidden="true">
        <label htmlFor="botField">Leave blank</label>
        <input id="botField" name="bot-field" type="text" tabIndex={-1} autoComplete="off" value={botField} onChange={(ev) => setBotField(ev.target.value)} />
      </p>

      <div className="mt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={consent}
            onChange={(ev) => setConsent(ev.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby="consent-text consent-err"
          />
          <span id="consent-text">
            I agree to be contacted about this offer and understand final terms are set in a written agreement. I have
            reviewed the{' '}
            <a href={`${mainSite}/contact`} className="font-medium text-blue-700 underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
              privacy practices on the main Dentech site
            </a>
            .
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-err" className="mt-2 text-xs text-red-600" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 w-full rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? 'Sending…' : 'Submit application'}
      </button>
    </form>
  );
}
