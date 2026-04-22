import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gift, X } from 'lucide-react';
import { SectionGradientEmphasis } from './SectionGradientEmphasis';

const FORM_NAME = 'free-website-offer-popup';
const SESSION_DONE = 'dentech-offer-popup-done';

function getFormAction(): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return '/';
  return base.endsWith('/') ? base : `${base}/`;
}

function encodeNetlifyBody(data: Record<string, string>): string {
  return new URLSearchParams(data).toString();
}

/**
 * Homepage-only style offer modal: opens after 20s or desktop exit-intent (cursor toward tab close).
 * One show per browser session unless dismissed/submitted earlier.
 */
export default function FreeWebsiteOfferPopup() {
  const location = useLocation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [clinicName, setClinicName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [botField, setBotField] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const openedRef = useRef(false);

  const isContact = location.pathname === '/contact';

  const markDone = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_DONE, '1');
    } catch {
      /* ignore */
    }
  }, []);

  const isSessionDone = useCallback(() => {
    try {
      return sessionStorage.getItem(SESSION_DONE) === '1';
    } catch {
      return false;
    }
  }, []);

  const tryOpen = useCallback(() => {
    if (isContact || openedRef.current || isSessionDone()) return;
    openedRef.current = true;
    setOpen(true);
  }, [isContact, isSessionDone]);

  const close = useCallback(() => {
    setOpen(false);
    markDone();
    dialogRef.current?.close();
  }, [markDone]);

  useEffect(() => {
    if (isContact || isSessionDone()) return;

    const timer = window.setTimeout(() => {
      tryOpen();
    }, 20_000);

    const onExitIntent = (e: MouseEvent) => {
      if (e.clientY > 24) return;
      tryOpen();
    };
    document.documentElement.addEventListener('mouseleave', onExitIntent);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.removeEventListener('mouseleave', onExitIntent);
    };
  }, [isContact, isSessionDone, tryOpen]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) {
      if (typeof el.showModal === 'function') {
        el.showModal();
      }
    } else {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    if (isContact) {
      setOpen(false);
      dialogRef.current?.close();
    }
  }, [isContact]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (botField.trim()) return;
    if (!fullName.trim() || !email.trim() || !clinicName.trim()) {
      setError('Please add your name, work email, and practice name.');
      return;
    }
    if (!consent) {
      setError('Please confirm we may contact you about this request.');
      return;
    }

    setSubmitting(true);
    const body = encodeNetlifyBody({
      'form-name': FORM_NAME,
      'bot-field': '',
      fullName: fullName.trim(),
      email: email.trim(),
      clinicName: clinicName.trim(),
      phone: phone.trim(),
      message: message.trim(),
    });

    try {
      const res = await fetch(getFormAction(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSuccess(true);
      markDone();
    } catch {
      setError('Something went wrong. You can still reach us from the Contact page or call the team.');
    } finally {
      setSubmitting(false);
    }
  };

  if (isContact) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-[80] max-h-[min(92dvh,720px)] w-[calc(100%-1.5rem)] max-w-md translate-y-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/50 open:flex open:flex-col dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 sm:max-w-lg"
      aria-labelledby="free-offer-popup-title"
      aria-describedby="free-offer-popup-desc"
      onClose={close}
    >
      <div className="flex max-h-[inherit] flex-col">
        <div className="relative overflow-hidden border-b border-blue-100/70 bg-gradient-to-br from-blue-50/95 via-white to-indigo-50/55 px-4 py-4 sm:px-6 dark:border-slate-700/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950/90">
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-300/30 blur-2xl dark:bg-blue-500/12" />
          <div className="pointer-events-none absolute -bottom-6 left-1/3 h-20 w-40 -translate-x-1/2 rounded-full bg-cyan-200/25 blur-2xl dark:bg-cyan-500/10" />
          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0 pr-2">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-blue-200/90 bg-blue-50/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-700 shadow-sm dark:border-slate-600 dark:bg-slate-800/90 dark:text-blue-200">
                <Gift className="h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-blue-300" aria-hidden />
                <span>Limited time offer</span>
              </div>
              <h2
                id="free-offer-popup-title"
                className="text-xl font-bold leading-[1.2] tracking-tight text-slate-900 dark:text-white sm:text-2xl"
              >
                <span className="block">Get a premium practice</span>
                <span className="block">
                  <SectionGradientEmphasis>Website for FREE</SectionGradientEmphasis>
                </span>
              </h2>
              <p className="mt-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">Bundled with your 6-month Signature plan.</p>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-full p-2 text-slate-500 transition hover:bg-white/80 hover:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label="Close"
              onClick={close}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3.5 sm:px-6 sm:py-5">
          <p id="free-offer-popup-desc" className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            For qualifying new practices, we bundle a professional starter site (no separate build fee) with a six-month
            Signature Marketing agreement at $2,500/mo. Hosting and maintenance from go-live is included in that
            agreement as described on the site—final terms are always confirmed in writing.
          </p>
          <ul className="mt-3 list-inside list-disc text-sm text-slate-600 dark:text-slate-400">
            <li>5-page clinic-focused starter site</li>
            <li>Managed hosting path with the retainer</li>
            <li>We confirm fit before anything is binding</li>
          </ul>

          {success ? (
            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/90 px-4 py-4 text-sm text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-100">
              <p className="font-semibold">Thank you — we received your note.</p>
              <p className="mt-2 leading-relaxed">
                A strategist will review your details and follow up by email. If it is urgent, use the Contact page or
                call us directly.
              </p>
              <button
                type="button"
                className="mt-4 text-sm font-semibold text-blue-700 underline-offset-2 hover:underline dark:text-blue-300"
                onClick={close}
              >
                Close
              </button>
            </div>
          ) : (
            <form className="mt-5 space-y-2.5" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-2.5">
                <label className="min-w-0 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:text-xs">
                  Full name
                  <input
                    type="text"
                    name="fullName"
                    autoComplete="name"
                    value={fullName}
                    onChange={(ev) => setFullName(ev.target.value)}
                    className="mt-0.5 w-full min-w-0 rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-900 outline-none ring-blue-500/30 focus:ring-2 sm:px-2.5 sm:py-2 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                    required
                  />
                </label>
                <label className="min-w-0 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:text-xs">
                  Work email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    className="mt-0.5 w-full min-w-0 rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-900 outline-none ring-blue-500/30 focus:ring-2 sm:px-2.5 sm:py-2 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                    required
                  />
                </label>
                <label className="min-w-0 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:text-xs">
                  Practice
                  <input
                    type="text"
                    name="clinicName"
                    autoComplete="organization"
                    value={clinicName}
                    onChange={(ev) => setClinicName(ev.target.value)}
                    className="mt-0.5 w-full min-w-0 rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-900 outline-none ring-blue-500/30 focus:ring-2 sm:px-2.5 sm:py-2 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                    required
                  />
                </label>
                <label className="min-w-0 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:text-xs">
                  Phone <span className="font-normal normal-case text-slate-400">(opt.)</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                    className="mt-0.5 w-full min-w-0 rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-900 outline-none ring-blue-500/30 focus:ring-2 sm:px-2.5 sm:py-2 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                  />
                </label>
              </div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Anything we should know? <span className="font-normal normal-case text-slate-400">(optional)</span>
                <textarea
                  name="message"
                  rows={2}
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                  className="mt-1 w-full resize-none rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-900 outline-none ring-blue-500/30 focus:ring-2 dark:border-slate-600 dark:bg-slate-950 dark:text-white"
                />
              </label>

              <p className="hidden">
                <label>
                  Do not fill
                  <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <label className="flex cursor-pointer items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600"
                />
                <span>
                  I agree Dentech Digital may contact me about this request. See the{' '}
                  <Link to="/contact" className="font-medium text-blue-700 underline-offset-2 hover:underline dark:text-blue-300" onClick={close}>
                    contact
                  </Link>{' '}
                  page for privacy expectations.
                </span>
              </label>

              {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}

              <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send request'}
                </button>
                <Link
                  to="/#free-website-offer"
                  className="text-center text-sm font-medium text-blue-700 underline-offset-2 hover:underline dark:text-blue-300 sm:text-right"
                  onClick={close}
                >
                  View full offer on the homepage
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}
