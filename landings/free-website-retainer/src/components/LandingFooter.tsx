import { getMainSiteUrl } from '../config';

export default function LandingFooter() {
  const main = getMainSiteUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-blue-950" style={{ fontFamily: 'Fraunces Variable, Georgia, serif' }}>
            Dentech Digital
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
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
      <p className="mx-auto mt-10 max-w-6xl border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
        © {year} Dentech Digital. Offer details and fees are confirmed in writing before engagement. This page is
        informational only and not a binding quote.
      </p>
    </footer>
  );
}
