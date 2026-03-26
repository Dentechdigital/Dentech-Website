import React from 'react';
import { ArrowRight, Gift, CheckCircle2, TrendingUp } from 'lucide-react';
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

            <div className="w-full flex items-stretch">
              <div className="group relative w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-3 shadow-2xl hover:shadow-[0_24px_54px_rgba(15,23,42,0.2)] transition-all duration-500">
                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 h-full min-h-[360px]">
                  <div className="h-10 px-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">brightsmileclinic.com</span>
                  </div>

                  <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-5 gap-4 h-[calc(100%-2.5rem)]">
                    <div className="sm:col-span-3 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 p-4 text-white flex flex-col justify-between">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-white/80 font-semibold mb-2">Bright Smile Dental</p>
                        <h3 className="text-xl font-bold leading-tight">Modern care for confident smiles.</h3>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-2 text-xs bg-white/20 rounded-full px-3 py-1.5 w-fit">
                        <span>Book Appointment</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="sm:col-span-2 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                      <img
                        src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=900"
                        alt="Dental clinic website preview"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="sm:col-span-5 grid grid-cols-2 gap-3">
                      <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 px-3 py-2.5">
                        <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold">Services</p>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-1">Implants, Invisalign, Family Care</p>
                      </div>
                      <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 px-3 py-2.5 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold">Conversion Rate</p>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">+314%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
