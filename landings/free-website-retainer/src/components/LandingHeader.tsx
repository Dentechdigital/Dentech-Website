import { getMainSiteUrl } from '../config';

const nav = [
  { href: '#offer', label: 'Offer' },
  { href: '#included', label: "What's included" },
  { href: '#process', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#apply', label: 'Apply' },
];

export default function LandingHeader() {
  const main = getMainSiteUrl();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#fafaf9]/95 backdrop-blur-md">
      <div className="lp-shell flex items-center justify-between gap-4 py-3">
        <a
          href={main}
          className="flex shrink-0 items-center no-underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dentech Digital — main website"
        >
          <img
            src="/logo-light.svg?v=2"
            alt="Dentech Digital"
            width={180}
            height={72}
            className="h-10 w-auto sm:h-12"
          />
        </a>
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex" aria-label="Page sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-blue-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#apply"
          className="shrink-0 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Check eligibility
        </a>
      </div>
    </header>
  );
}
