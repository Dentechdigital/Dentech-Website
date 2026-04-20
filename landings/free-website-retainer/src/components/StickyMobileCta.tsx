import { useEffect, useState } from 'react';

const HERO_END_ID = 'hero-scroll-end';

export default function StickyMobileCta() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const el = document.getElementById(HERO_END_ID);
    if (!el) return;

    function update() {
      const node = document.getElementById(HERO_END_ID);
      if (!node) return;
      const rect = node.getBoundingClientRect();
      setPastHero(rect.bottom <= 0);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${pastHero ? 'pointer-events-auto' : 'pointer-events-none'}`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      aria-hidden={!pastHero}
    >
      <div
        className={`lp-shell bg-gradient-to-t from-[#fafaf9]/80 via-[#fafaf9]/35 to-transparent py-3 backdrop-blur-[2px] transition-all duration-300 ease-out supports-[backdrop-filter]:from-[#fafaf9]/50 supports-[backdrop-filter]:via-[#fafaf9]/20 ${
          pastHero ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <a
          href="#apply"
          tabIndex={pastHero ? 0 : -1}
          className="block w-full rounded-full bg-blue-600 py-3.5 text-center text-sm font-semibold text-white shadow-[0_10px_40px_-4px_rgba(37,99,235,0.45),0_4px_14px_rgba(15,23,42,0.12)] ring-1 ring-white/20 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Check eligibility
        </a>
      </div>
    </div>
  );
}
