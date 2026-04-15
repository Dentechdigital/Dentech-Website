import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroDentistCutout from './HeroDentistCutout';
import { FEATURES } from '../constants';
import { heroTrustPoints } from '../data/homeComparison';

const DynamicDots = lazy(() => import('./DynamicDots'));
const DentalMarketingChrome = lazy(() => import('./DentalMarketingChrome'));

const assetBase = `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}`;

const Hero: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const featuresRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!Number.isNaN(index)) {
              setVisibleFeatures((prev) => {
                if (prev.includes(index)) return prev;
                return [...prev, index];
              });
              // Stop observing once visible so it doesn't fade out/in again
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the item is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    featuresRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#FAFAF9] dark:bg-slate-950 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-32 lg:pb-32 flex flex-col justify-center transition-colors duration-300">
      
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
        className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-50 transition-opacity duration-300"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 32%, transparent 92%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 32%, transparent 92%)',
        }}
      >
        <Suspense fallback={null}>
          <DynamicDots />
        </Suspense>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-8">
          {/* Left: copy + features */}
          <div className="mx-auto flex max-w-2xl flex-col items-start space-y-8 text-left lg:mx-0 lg:pr-12">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">Ottawa-based dental growth partner</span>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-blue-950 dark:text-white leading-[1.1] transition-colors duration-300">
              Scale your clinic with&nbsp;
                <span className="relative inline">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 animate-text-shine pr-2">
                  confidence and excellence.
                  </span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 transition-colors duration-300">
                Dentech helps Ottawa dental practices and Canadian groups generate qualified patient demand through SEO, GEO, paid media, conversion-focused websites, and reputation systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
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
                <Link
                  to="/about"
                  className="flex w-full items-center justify-center rounded-full border border-slate-200/90 bg-white/80 px-6 py-3.5 text-sm font-semibold text-blue-950 shadow-sm backdrop-blur transition hover:border-blue-200 hover:bg-white dark:border-slate-600 dark:bg-slate-800/80 dark:text-white dark:hover:border-blue-500/40 sm:w-auto"
                >
                  How we work
                </Link>
              </div>
              <div className="relative w-full sm:mt-0 sm:w-auto">
                <a
                  href="tel:6138693121"
                  className="group relative flex w-full items-center justify-center gap-3 rounded-full bg-transparent px-6 py-4 text-lg font-medium text-blue-950 transition-all duration-300 dark:text-white sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 scale-150 rounded-full bg-green-500 opacity-0 blur transition-all duration-500 group-hover:opacity-40" />
                      <img
                        src={`${assetBase}avatar.webp`}
                        srcSet={`${assetBase}avatar-80w.webp 80w, ${assetBase}avatar-160w.webp 160w`}
                        sizes="40px"
                        alt="Expert"
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

            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-left" aria-label="Quick facts">
              {heroTrustPoints.map((label) => (
                <li
                  key={label}
                  className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:text-xs"
                >
                  {label}
                </li>
              ))}
            </ul>

            {/* Features List */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full border-t border-gray-200/60 dark:border-slate-800 mt-8 transition-colors duration-300">
              {FEATURES.map((feature, index) => (
                <Link 
                  to={feature.link || '/services'}
                  key={index}
                  data-index={index}
                  ref={(el) => { featuresRef.current[index] = el; }}
                  className={`flex flex-col items-start text-left gap-3 group cursor-pointer transition-all duration-700 ease-out ${
                    visibleFeatures.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.iconGradient} shadow-md flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <feature.icon className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-950 dark:text-white mb-1 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug transition-colors duration-300">{feature.description}</p>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* Right: dashboard visual */}
          <div className="relative mt-12 flex min-h-[40rem] w-full max-w-[100vw] flex-col items-center justify-center pb-8 pt-12 sm:min-h-[44rem] sm:overflow-visible lg:mt-0 lg:min-h-[42rem] lg:py-0">
            <div className="mx-auto w-full max-w-md origin-center scale-[0.85] sm:scale-100">
              <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-[460px] flex-col justify-between perspective-[1000px]">
                <HeroDentistCutout />
                <Suspense fallback={null}>
                  <DentalMarketingChrome />
                </Suspense>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;