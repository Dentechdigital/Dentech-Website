import { getMainSiteUrl } from '../config';

export default function LandingFooter() {
  const main = getMainSiteUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-white to-slate-50/80 py-12">
      <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.2]" aria-hidden />
      <div className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" aria-hidden />
      <div className="relative z-10 lp-shell flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href={main} className="inline-block no-underline" target="_blank" rel="noopener noreferrer" aria-label="Dentech Digital — main website">
            <img src="/logo-light.svg?v=2" alt="Dentech Digital" width={200} height={80} className="h-11 w-auto sm:h-12" />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            Ottawa-based dental growth partner — websites, SEO/GEO, paid media, and reputation systems.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href={main} className="font-medium text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
            Main website
          </a>
          <a href={`${main}/contact`} className="text-slate-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
          <a href={`${main}/services`} className="text-slate-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
            Services
          </a>
        </div>
      </div>
      <p className="relative z-10 lp-shell mt-10 border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
        © {year} Dentech Digital. Offer details and fees are confirmed in writing before engagement. This page is
        informational only and not a binding quote.
      </p>
    </footer>
  );
}
