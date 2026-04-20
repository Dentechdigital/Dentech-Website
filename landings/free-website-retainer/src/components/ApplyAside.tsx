import { Mail, MapPin, Phone } from 'lucide-react';
import { getMainSiteUrl } from '../config';
import { SITE_CONTACT } from '../siteContact';

export default function ApplyAside() {
  const main = getMainSiteUrl();
  const mapsQuery = encodeURIComponent(
    `${SITE_CONTACT.addressLine1}, ${SITE_CONTACT.addressLine2}, ${SITE_CONTACT.addressCountry}`,
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <aside className="flex flex-col gap-6 rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:sticky lg:top-28">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Prefer to talk first?</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          If you are ready to move quickly, call us during business hours and mention this offer — we will route you to the
          right strategist.
        </p>
        <a
          href={`tel:+1${SITE_CONTACT.phoneTel}`}
          className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-blue-950 no-underline transition hover:text-blue-700"
        >
          <Phone className="h-5 w-5 shrink-0 text-blue-600" aria-hidden />
          {SITE_CONTACT.phoneDisplay}
        </a>
        <p className="mt-1 text-xs text-slate-500">{SITE_CONTACT.hoursShort}</p>
      </div>

      <div className="border-t border-slate-100 pt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Email</p>
        <a
          href={`mailto:${SITE_CONTACT.email}?subject=Free%20website%20%2B%206-month%20retainer%20offer`}
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-blue-700 no-underline hover:underline"
        >
          <Mail className="h-4 w-4 shrink-0" aria-hidden />
          {SITE_CONTACT.email}
        </a>
      </div>

      <div className="border-t border-slate-100 pt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Visit / mail</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-start gap-2 text-sm leading-relaxed text-slate-700 no-underline transition hover:text-blue-700"
        >
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden />
          <span>
            {SITE_CONTACT.addressLine1}
            <br />
            {SITE_CONTACT.addressLine2}, {SITE_CONTACT.addressCountry}
          </span>
        </a>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          Hybrid team — meetings by appointment. Same details as on our{' '}
          <a href={`${main}/contact`} className="font-medium text-blue-700 underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">
            contact page
          </a>
          .
        </p>
      </div>

      <div className="border-t border-slate-100 pt-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Where we work</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          We are <strong className="font-medium text-blue-950">headquartered in Ottawa</strong> and partner with clinics
          across <strong className="font-medium text-blue-950">Canada</strong>. We also support select practices in other
          countries when there is a strong fit — scope and compliance are confirmed before kickoff.
        </p>
      </div>
    </aside>
  );
}
