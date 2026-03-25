import React from 'react';
import { ArrowRight, Gift, CheckCircle2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecialOfferCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 dark:from-slate-900 dark:via-blue-950 dark:to-slate-950">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 font-semibold text-sm uppercase tracking-wider mb-6">
              <Gift className="w-4 h-4" />
              <span>Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Get a Premium Practice Website for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">FREE</span>
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sign a 6-month growth marketing contract and our award-winning design team will build, optimize, and launch a high-converting custom website for your clinic at zero cost. No obligation to inquire.
            </p>
            
            <ul className="space-y-3 mb-10 text-left max-w-md mx-auto lg:mx-0">
              {['Custom UI/UX Design (Value $5,000+)', 'SEO-Optimized Architecture', 'Mobile-First & Lightning Fast', 'Integrated Appointment Booking'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-50">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="group relative px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden">
                <span className="relative z-10">Claim Your Free Website</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent skew-x-12" />
              </Link>
              <span className="text-blue-200 text-sm font-medium">No commitment required to chat.</span>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="flex-1 w-full max-w-lg relative perspective-1000">
            <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl blur-2xl opacity-40 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Website Mockup" 
                className="relative rounded-2xl shadow-2xl border border-white/20 object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">Conversion Rate</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">+314%</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
