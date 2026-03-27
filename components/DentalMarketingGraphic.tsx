import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Star, Search, Calendar, MessageSquare, Instagram, Facebook, Youtube } from 'lucide-react';

const fakeNames = ["Sarah M.", "David K.", "Emma R.", "Michael T.", "Jessica L.", "James B.", "Olivia C.", "Daniel W.", "Sophia H.", "Liam P."];

const DentalMarketingGraphic: React.FC = () => {
  // Simulated live data feed
  const [patients, setPatients] = useState(142);
  const [isAnimating, setIsAnimating] = useState(false);
  const [recentPatients, setRecentPatients] = useState([
    { id: 1, name: "Sarah M.", time: "2m ago" },
    { id: 2, name: "David K.", time: "15m ago" },
    { id: 3, name: "Emma R.", time: "1h ago" }
  ]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPatients(p => p + 1);
      setIsAnimating(true);
      
      setRecentPatients(prev => {
        const newName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
        const newPatient = { id: Date.now(), name: newName, time: "Just now" };
        const updatedPrev = prev.map(p => p.time === "Just now" ? { ...p, time: "1m ago" } : p);
        return [newPatient, ...updatedPrev].slice(0, 3);
      });

      setTimeout(() => setIsAnimating(false), 1000);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[460px] mx-auto flex flex-col justify-between perspective-[1000px] z-10">
      <style>{`
        @keyframes drawPath {
          to { stroke-dashoffset: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDownFade {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-draw {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: drawPath 2s ease-out forwards;
          animation-delay: 0.2s;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounceSlow 5s ease-in-out infinite;
        }
        .animate-slide-up {
          opacity: 0;
          animation: slideUpFade 0.6s ease-out forwards;
        }
        .animate-slide-down {
          animation: slideDownFade 0.5s ease-out forwards;
        }
      `}</style>

      {/* Background Glows for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-200/40 via-teal-100/20 to-indigo-200/40 blur-[60px] rounded-full -z-10" />

      {/* Main Crisp Image (Designed for Cutout) */}
      <div className="relative z-10 flex-1 w-full flex items-start justify-center">
        {/* 
          NOTE: To use your attached cutout image:
          1. Upload it to the file explorer (create a 'public' folder and upload it there as 'dentist-cutout.png')
          2. Change the src below to "/dentist-cutout.png"
        */}
        <img 
          src={`${import.meta.env.BASE_URL}dentist-cutout.png`} 
          alt="Professional Dentist" 
          className="w-full h-auto object-contain object-top scale-[1.1] origin-top drop-shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 3D Bento Dashboard (Overlapping bottom) */}
      <div className="relative z-20 transform-gpu rotate-x-[4deg] hover:rotate-x-0 transition-transform duration-700 mt-4 sm:-mt-16 w-full">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 p-2 sm:p-3 bg-white/20 dark:bg-slate-800/20 backdrop-blur-[40px] border border-white/40 dark:border-slate-700/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-3xl relative overflow-hidden">
          {/* Subtle shine on main container */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
          
          {/* SEO Chart */}
          <div className="col-span-2 bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 border border-white/50 dark:border-slate-700/50 shadow-sm relative overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-[0.15] dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}></div>
            
            <div className="flex justify-between items-start mb-2 relative z-10">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wider">
                  <Search className="w-3.5 h-3.5" /> Local SEO Traffic
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-extrabold text-blue-950 dark:text-white">+284%</h3>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">90 days</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-900/30 backdrop-blur-sm px-2.5 py-1.5 rounded-lg flex items-center gap-1 mt-1">
                <TrendingUp className="w-3.5 h-3.5" /> Page 1
              </span>
            </div>
            
            {/* Crisp SVG Chart */}
            <div className="h-20 w-full relative mt-1">
              <svg viewBox="0 0 400 80" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="blue-gradient-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,70 C50,60 100,40 150,45 C200,50 250,20 300,15 C350,10 380,5 400,0 L400,80 L0,80 Z" fill="url(#blue-gradient-2)" className="animate-slide-up" />
                <path d="M0,70 C50,60 100,40 150,45 C200,50 250,20 300,15 C350,10 380,5 400,0" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                <circle cx="400" cy="0" r="6" fill="#fff" stroke="#2563eb" strokeWidth="2.5" className="animate-slide-up" style={{ animationDelay: '1s' }} />
              </svg>
            </div>
          </div>

          {/* Reputation */}
          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/50 dark:border-slate-700/50 shadow-sm flex flex-col justify-center relative overflow-hidden">
            {/* Glass shine */}
            <div className="absolute -right-10 -top-10 w-24 h-24 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between gap-1 w-full relative z-10">
              <div className="shrink-0">
                <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-amber-500 mb-1 uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-amber-500" /> Reputation
                </div>
                <div className="text-xs sm:text-sm font-bold leading-tight">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
              </div>
              {/* Fixed SVG Circle - Text perfectly centered inside */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90 drop-shadow-sm">
                  <path className="text-gray-100 dark:text-slate-700" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-amber-500" strokeWidth="3.5" strokeDasharray="98, 100" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" style={{ animation: 'drawPath 1.5s ease-out 1s forwards' }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-extrabold text-blue-950 dark:text-white">4.9</span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-3 w-full relative z-10">
              <div className="flex justify-between text-[8px] sm:text-[9px] font-bold text-gray-500 dark:text-gray-400 mb-1">
                <span>5.0 Target</span>
                <span className="text-amber-500">98%</span>
              </div>
              <div className="w-full bg-gray-200/80 dark:bg-slate-700/80 rounded-full h-1.5 overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-amber-400 to-amber-500 h-1.5 rounded-full relative" style={{ width: '98%' }}>
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI */}
          <div className="bg-gradient-to-br from-blue-600/90 to-indigo-700/90 backdrop-blur-xl border border-white/30 rounded-2xl p-3 sm:p-4 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] relative overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
            <TrendingUp className="absolute -right-2 -bottom-2 w-16 h-16 text-white opacity-10" />
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="text-[10px] text-blue-200 font-bold mb-1 uppercase tracking-wider">Estimated ROI</div>
              <div className="text-3xl font-extrabold drop-shadow-md">4.2x</div>
              <div className="text-[9px] text-blue-100 mt-1 opacity-90 font-medium">Based on Patient LTV</div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Elements (Independent from main card) */}
      
      {/* 1. New Patient Booked */}
      <div className="absolute -top-16 sm:top-8 right-0 scale-[0.7] sm:scale-100 origin-right bg-white/40 dark:bg-slate-800/40 backdrop-blur-[30px] p-3 pr-5 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/60 dark:border-slate-700/60 flex items-center gap-3 z-30 animate-bounce-slow">
        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <span className="block text-sm font-bold text-blue-950 dark:text-white">New Patient!</span>
          <span className="block text-xs text-gray-500 dark:text-gray-400 font-medium">Via Google Search</span>
        </div>
      </div>

      {/* 2. Cost Per Lead */}
      <div className="absolute top-[35%] sm:top-[40%] right-0 transform -translate-y-1/2 scale-[0.75] sm:scale-100 origin-right bg-white/40 dark:bg-slate-800/40 backdrop-blur-[30px] p-3 pr-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/60 dark:border-slate-700/60 flex items-center gap-3 z-30 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div>
          <span className="block text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Cost Per Lead</span>
          <span className="block text-sm font-extrabold text-blue-950 dark:text-white">-42% Decrease</span>
        </div>
      </div>

      {/* 3. New Patients Count */}
      <div className="hidden sm:block absolute top-[25%] sm:top-28 left-0 scale-[0.75] sm:scale-100 origin-left bg-white/40 dark:bg-slate-800/40 backdrop-blur-[30px] p-4 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/60 dark:border-slate-700/60 w-48 z-0 animate-float" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
          <Users className="w-3.5 h-3.5" /> New Patients
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className={`text-4xl font-extrabold text-blue-950 dark:text-white transition-all duration-300 ${isAnimating ? 'text-emerald-500 dark:text-emerald-400 scale-110' : ''}`}>
            {patients}
          </h3>
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>
        </div>
        <div className="mt-1 text-[10px] text-gray-500 dark:text-gray-400 font-medium pb-2.5 border-b border-gray-200/60 dark:border-slate-700/60 mb-2.5">
          Growing this month
        </div>
        
        {/* Live Patient List */}
        <div className="space-y-2 overflow-hidden">
          {recentPatients.map((patient, i) => (
            <div 
              key={patient.id} 
              className={`flex items-center justify-between transition-all duration-500 ${i === 0 && isAnimating ? 'animate-slide-down opacity-100' : 'opacity-80'}`}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-blue-950 dark:text-gray-200">{patient.name}</span>
              </div>
              <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded ${patient.time === 'Just now' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}>
                {patient.time}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DentalMarketingGraphic;
