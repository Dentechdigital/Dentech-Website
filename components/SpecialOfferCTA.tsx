import React from 'react';
import { ArrowRight, Gift, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecialOfferCTA() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-200/40 dark:bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-amber-200/40 dark:bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 shadow-[0_20px_80px_rgba(15,23,42,0.08)] p-6 sm:p-8 lg:p-12">
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-300/60 dark:border-amber-400/30 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold tracking-wide uppercase">
                <Gift className="w-4 h-4" />
                <span>Limited Time Offer</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                Get a Premium Practice Website for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">FREE</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Sign a 6-month growth marketing contract and our award-winning design team will build, optimize, and launch a high-converting custom website for your clinic at zero cost. No obligation to inquire.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Custom UI/UX Design (Value $5,000+)', 'SEO-Optimized Architecture', 'Mobile-First & Lightning Fast', 'Integrated Appointment Booking'].map((item, i) => (
                  <li key={i} className="group/feature flex items-start gap-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/70 px-3.5 py-3 hover:bg-white dark:hover:bg-slate-800 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-200 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link to="/contact" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 shadow-lg shadow-blue-900/15 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <span>Claim Your Free Website</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                </Link>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">No commitment required to chat.</span>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}free-offer-mockup.png`}
                alt="Premium dental clinic website mockup on desktop and smartphone"
                className="w-full max-w-[560px] h-auto object-contain drop-shadow-[0_28px_60px_rgba(15,23,42,0.26)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
