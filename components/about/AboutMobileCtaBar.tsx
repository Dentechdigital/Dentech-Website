import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutMobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-transparent px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-0 lg:hidden">
      <Link
        to="/contact"
        className="flex w-full items-center justify-center gap-2 rounded-full border border-white/35 bg-blue-600/72 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(37,99,235,0.38)] backdrop-blur-xl backdrop-saturate-150 transition-colors active:bg-blue-600/85 dark:border-white/20 dark:bg-blue-500/55 dark:shadow-[0_10px_36px_rgba(0,0,0,0.42)] dark:active:bg-blue-500/70"
      >
        Book a strategy call
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
