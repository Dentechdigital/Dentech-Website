import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DentalMarketingGraphic from './DentalMarketingGraphic';
import DynamicDots from './DynamicDots';
import { FEATURES } from '../constants';

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
        @keyframes arrowDriftX {
          0% { transform: translateX(0); }
          50% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
        .animate-text-shine {
          background-size: 180% 100%;
          animation: textShine 3.8s ease-in-out infinite alternate;
          -webkit-text-fill-color: transparent;
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
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-50 transition-opacity duration-300" style={{
        maskImage: 'radial-gradient(ellipse at center, black 32%, transparent 92%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 32%, transparent 92%)'
      }}>
        <DynamicDots />
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
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto mt-8">
              <Link to="/contact" className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-medium text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">Get Your Free Audit</span>
                <div className="relative z-10 bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </Link>

              <div className="relative w-full sm:w-auto mt-2 sm:mt-0">
                <a href="tel:6138693121" className="group relative px-6 py-4 bg-transparent text-blue-950 dark:text-white rounded-full font-medium text-lg transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="relative">
                      {/* Online glow effect behind avatar on hover */}
                      <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-0 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500"></div>
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
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#FAFAF9] dark:border-slate-950 rounded-full z-20 transition-colors duration-300"></span>
                    </div>
                    <span className="group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Let's talk</span>
                  </span>
                </a>
                
                {/* Hand-drawn Arrow pointing to Let's talk */}
                <div
                  className="pointer-events-none absolute -right-9 sm:-right-12 top-1/2 hidden -translate-y-1/2 text-blue-400 dark:text-blue-400 sm:block"
                  style={{ animation: 'arrowDriftX 2.8s ease-in-out infinite' }}
                >
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 drop-shadow-sm">
                    <path d="M84 16 Q84 58 30 74" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M46 58 L28 74 L50 88" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
            </div>

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
              <DentalMarketingGraphic />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;