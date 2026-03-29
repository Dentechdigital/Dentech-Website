import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import DentalMarketingGraphic from './DentalMarketingGraphic';
import DynamicDots from './DynamicDots';
import { FEATURES } from '../constants';

const Hero: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

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
    <section className="relative w-full min-h-screen overflow-hidden bg-[#FAFAF9] dark:bg-slate-900 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-32 lg:pb-32 flex flex-col justify-center transition-colors duration-300">
      
      <style>{`
        @keyframes textShine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-text-shine {
          background-size: 200% auto;
          animation: textShine 4s linear infinite;
        }
      `}</style>
      
      {/* Background Decorative Blur (Left side subtle) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/50 dark:bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300" />

      {/* Full-width Dynamic Dots Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-30 transition-opacity duration-300" style={{
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }}>
        <DynamicDots />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="flex flex-col items-start text-left max-w-2xl mx-auto lg:mx-0 space-y-8 lg:pr-12">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">Ottawa's #1 Dental Marketing Agency</span>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-blue-950 dark:text-white leading-[1.1] transition-colors duration-300">
              Your Full-Service Marketing Firm,<br />
                <span className="relative inline-block mt-2">
                  {/* Subtle animated glow behind the text */}
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 blur-xl opacity-30 dark:opacity-40 animate-text-shine rounded-full"></span>
                  {/* The actual text with animated gradient */}
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-indigo-600 animate-text-shine pr-2">
                  For Less Than the Cost of One Hire.
                  </span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 transition-colors duration-300">
                Dentech helps Ottawa dental practices and DSOs attract more patients, dominate local search, and build a 5-star reputation.
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
                      <img src={`${import.meta.env.BASE_URL}avatar.png`} alt="Expert" className="relative z-10 w-10 h-10 rounded-full object-cover shadow-sm border border-gray-200 dark:border-slate-700 group-hover:border-green-400 transition-colors duration-300" referrerPolicy="no-referrer" />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#FAFAF9] dark:border-slate-900 rounded-full z-20 transition-colors duration-300"></span>
                    </div>
                    <span className="group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Let's talk</span>
                  </span>
                </a>
                
                {/* Hand-drawn Arrow pointing to Let's talk */}
                <div className="absolute -right-8 sm:-right-12 -top-4 sm:-top-6 w-12 h-12 sm:w-16 sm:h-16 text-blue-400 dark:text-blue-400 pointer-events-none hidden sm:block animate-bounce" style={{ animationDuration: '3s' }}>
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                    <path d="M80,10 Q80,60 20,80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M40,60 L20,80 L45,95" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
                    <h4 className="font-semibold text-blue-950 dark:text-white mb-1 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{feature.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug transition-colors duration-300">{feature.description}</p>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Dashboard Visual */}
          <div className="relative flex flex-col items-center justify-center mt-12 lg:mt-0 pt-12 pb-8 lg:py-0 w-full max-w-[100vw] sm:overflow-visible">
            <div className="scale-[0.85] sm:scale-100 origin-center w-full max-w-md mx-auto">
              <DentalMarketingGraphic />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;