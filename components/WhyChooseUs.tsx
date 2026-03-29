import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, TrendingUp, Users, ShieldCheck, Award, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    title: 'Dental Exclusive',
    description: 'We only work with dental practices. We know the terminology, the procedures, and exactly what high-value patients are searching for.',
    icon: Users,
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-500/10'
  },
  {
    title: 'Data-Driven Results',
    description: 'No guesswork. Every campaign is backed by data and optimized continuously for the lowest cost-per-acquisition and highest ROI.',
    icon: TrendingUp,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10'
  },
  {
    title: 'Transparent Reporting',
    description: 'Access your custom dashboard 24/7. See exactly where your budget is going, how many leads were generated, and the revenue won.',
    icon: ShieldCheck,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-500/10'
  },
  {
    title: 'Proven Framework',
    description: 'We use a battle-tested marketing framework that has consistently generated thousands of new patients for our partner clinics.',
    icon: CheckCircle2,
    color: 'text-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-500/10'
  },
  {
    title: 'Award-Winning Design',
    description: 'Your practice deserves a premium brand. Our websites and ad creatives are designed to build immediate trust and authority.',
    icon: Award,
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-500/10'
  },
  {
    title: 'Rapid Execution',
    description: 'Time is money. We launch your foundational campaigns within 14 days, getting new patient inquiries flowing faster.',
    icon: Clock,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-500/10'
  }
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Sticky */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6 transition-colors duration-300">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-300 uppercase">The Dentech Advantage</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 dark:text-white mb-6 tracking-tight leading-tight">
                Why partner <br className="hidden lg:block" />
                <span className="whitespace-nowrap">
                  with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Dentech?</span>
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We don't just run ads. We build comprehensive growth engines tailored specifically for ambitious dental practices.
              </p>
              
              <Link to="/contact" className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group">
                <span>Get Your Free Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column - Scrolling Cards */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className={`group p-8 rounded-3xl border border-gray-100 dark:border-slate-800 bg-[#FAFAF9] dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${reason.bg} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <reason.icon className={`w-7 h-7 ${reason.color}`} strokeWidth={1.5} />
                    </div>
                    <span className="text-4xl font-black text-gray-100 dark:text-slate-700/50 group-hover:text-blue-50 dark:group-hover:text-blue-900/30 transition-colors duration-500">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 lg:hidden">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg group">
                <span>Get Your Free Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
