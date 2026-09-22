import React, { lazy, Suspense, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroDentistCutout from './HeroDentistCutout';

const DynamicDots = lazy(() => import('./DynamicDots'));
const DentalMarketingChrome = lazy(() => import('./DentalMarketingChrome'));

const assetBase = `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}`;

const TRUST_STATS = [
  { value: '2017', label: 'Serving clinics since' },
  { value: '$250k+', label: 'Ad spend managed per year' },
  { value: 'Ottawa', label: 'Your local team' },
] as const;

const Hero: React.FC = () => {
  const [showHeroEnhancements, setShowHeroEnhancements] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: IdleRequestOptions) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const enable = () => setShowHeroEnhancements(true);
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    if (w.requestIdleCallback) {
      idleId = w.requestIdleCallback(enable, { timeout: 4000 });
    } else {
      timeoutId = window.setTimeout(enable, 1600);
    }
    return () => {
      if (idleId !== undefined && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative flex w-full flex-col justify-center overflow-hidden bg-[#FAFAF9] pb-12 pt-24 transition-colors duration-300 dark:bg-slate-950 md:pb-16 md:pt-28 lg:min-h-[calc(100vh-1rem)] lg:pb-20 lg:pt-28">
      
      <style>{`
        @keyframes textShine {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-text-shine {
          background-size: 180% 100%;
          animation: textShine 3.8s ease-in-out infinite alternate;
          -webkit-text-fill-color: transparent;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
          padding-right: 0.06em;
          text-shadow: 0 0 24px rgba(59, 130, 246, 0.18);
        }
        @media (max-width: 640px) {
          .animate-text-shine {
            background-size: 155% 100%;
            text-shadow: 0 0 14px rgba(59, 130, 246, 0.14);
          }
        }
      `}</style>
      
      {/* Background Decorative Blur — light mode only (clean dark hero without top-left glow) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300 dark:hidden" />

      {/* Full-width Dynamic Dots Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-70 transition-opacity duration-300 dark:opacity-35"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 32%, transparent 92%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 32%, transparent 92%)',
        }}
      >
        {showHeroEnhancements ? (
          <Suspense fallback={null}>
            <DynamicDots />
          </Suspense>
        ) : null}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-8">
          {/* Left: copy + trust stats */}
          <div className="mx-auto flex max-w-2xl flex-col items-start space-y-8 text-left lg:mx-0 lg:pr-12">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">Ottawa-based dental growth partner</span>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-[2.15rem] font-semibold leading-[1.1] tracking-tight text-blue-950 transition-colors duration-300 max-sm:tracking-tight sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-[3.15rem] lg:leading-[1.1] dark:text-white">
                The Complete{' '}
                <span className="relative inline">
                  <span className="pr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 animate-text-shine">
                    Patient Acquisition Engine
                  </span>
                </span>{' '}
                for Modern Dental Clinics.
              </h1>
              <p className="mx-auto max-w-lg text-lg font-normal leading-relaxed text-gray-600 transition-colors duration-300 sm:text-xl dark:text-gray-300 lg:mx-0">
                Dentech helps Ottawa dental practices and Canadian groups generate qualified patient demand through SEO, GEO, paid media, conversion-focused websites, and reputation systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                to="/contact"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:w-auto"
              >
                <span className="relative z-10">Get Your Free Audit</span>
                <div className="relative z-10 rounded-full bg-white/20 p-1 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
              </Link>
              <div className="relative w-full sm:mt-0 sm:w-auto">
                <a
                  href="tel:6138693121"
                  className="group relative flex w-full items-center justify-center gap-3 rounded-full bg-transparent px-6 py-4 text-lg font-medium text-blue-950 transition-all duration-300 dark:text-white sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full" aria-hidden>
                        <div className="absolute inset-0 scale-150 rounded-full bg-green-500 opacity-0 blur transition-all duration-500 group-hover:opacity-40" />
                      </div>
                      <img
                        src={`${assetBase}avatar.webp`}
                        srcSet={`${assetBase}avatar-80w.webp 80w, ${assetBase}avatar-160w.webp 160w`}
                        sizes="40px"
                        alt="Dentech strategist"
                        width={40}
                        height={40}
                        className="relative z-10 h-10 w-10 rounded-full border border-gray-200 object-cover shadow-sm transition-colors duration-300 dark:border-slate-700 group-hover:border-green-400"
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-0 right-0 z-20 h-3 w-3 rounded-full border-2 border-[#FAFAF9] bg-green-500 transition-colors duration-300 dark:border-slate-950" />
                    </div>
                    <span className="transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                      Let&apos;s talk
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <dl className="mt-2 grid w-full grid-cols-3 gap-3 border-t border-gray-200/70 pt-6 dark:border-slate-800">
              {TRUST_STATS.map((stat) => (
                <div key={stat.value} className="min-w-0">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-xl font-semibold tracking-tight text-blue-950 sm:text-2xl dark:text-white">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>

          </div>

          {/* Right: dashboard visual */}
          <div className="relative mt-8 flex min-h-[26rem] w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden pb-2 pt-4 sm:min-h-[30rem] lg:mt-0 lg:min-h-[32rem] lg:overflow-visible lg:py-0">
            <div className="mx-auto w-full max-w-md origin-center scale-[0.8] sm:scale-[0.92] lg:scale-100">
              <div className="relative z-10 mx-auto flex min-h-[420px] w-full max-w-[460px] flex-col justify-between perspective-[1000px] sm:min-h-[480px]">
                <HeroDentistCutout />
                {showHeroEnhancements ? (
                  <Suspense fallback={null}>
                    <DentalMarketingChrome />
                  </Suspense>
                ) : null}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;