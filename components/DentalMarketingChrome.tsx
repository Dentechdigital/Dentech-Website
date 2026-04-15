import React, { useEffect, useState } from 'react';
import {
  TrendingUp,
  Users,
  Star,
  Search,
  Calendar,
  MessageSquare,
} from 'lucide-react';

const fakeNames = [
  'Sarah M.',
  'David K.',
  'Emma R.',
  'Michael T.',
  'Jessica L.',
  'James B.',
  'Olivia C.',
  'Daniel W.',
  'Sophia H.',
  'Liam P.',
];

/**
 * Dashboard / bento UI layered over the hero cutout (lazy-loaded from Hero).
 */
export default function DentalMarketingChrome() {
  const [patients, setPatients] = useState(142);
  const [isAnimating, setIsAnimating] = useState(false);
  const [recentPatients, setRecentPatients] = useState([
    { id: 1, name: 'Sarah M.', time: '2m ago' },
    { id: 2, name: 'David K.', time: '15m ago' },
    { id: 3, name: 'Emma R.', time: '1h ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPatients((p) => p + 1);
      setIsAnimating(true);

      setRecentPatients((prev) => {
        const newName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
        const newPatient = { id: Date.now(), name: newName, time: 'Just now' };
        const updatedPrev = prev.map((p) => (p.time === 'Just now' ? { ...p, time: '1m ago' } : p));
        return [newPatient, ...updatedPrev].slice(0, 3);
      });

      setTimeout(() => setIsAnimating(false), 1000);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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

      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-200/40 via-teal-100/20 to-indigo-200/40 blur-[60px]" />

      <div className="relative z-20 -ml-4 mt-4 w-[calc(100%+1rem)] transform-gpu rotate-x-[4deg] transition-transform duration-700 hover:rotate-x-0 sm:-mt-16 sm:-ml-10 sm:w-[calc(100%+2.5rem)]">
        <div className="relative grid grid-cols-2 gap-2 rounded-3xl border border-white/40 bg-white/20 p-2 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] backdrop-blur-[40px] sm:gap-3 sm:p-3 dark:border-slate-700/40 dark:bg-slate-800/20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />

          <div className="relative col-span-2 overflow-hidden rounded-2xl border border-white/50 bg-white/40 p-4 shadow-sm backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/40">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15] dark:opacity-10"
              style={{
                backgroundImage: 'radial-gradient(#3b82f6 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
              }}
            />

            <div className="relative z-10 mb-2 flex items-start justify-between">
              <div>
                <div className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  <Search className="h-3.5 w-3.5" /> Local SEO Traffic
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-extrabold text-blue-950 dark:text-white">+284%</h3>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">90 days</span>
                </div>
              </div>
              <span className="mt-1 flex items-center gap-1 rounded-lg bg-emerald-50/80 px-2.5 py-1.5 text-xs font-bold text-emerald-600 backdrop-blur-sm dark:bg-emerald-900/30 dark:text-emerald-400">
                <TrendingUp className="h-3.5 w-3.5" /> Page 1
              </span>
            </div>

            <div className="relative mt-1 h-20 w-full">
              <svg viewBox="0 0 400 80" className="h-full w-full overflow-visible">
                <defs>
                  <linearGradient id="blue-gradient-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 C50,60 100,40 150,45 C200,50 250,20 300,15 C350,10 380,5 400,0 L400,80 L0,80 Z"
                  fill="url(#blue-gradient-2)"
                  className="animate-slide-up"
                />
                <path
                  d="M0,70 C50,60 100,40 150,45 C200,50 250,20 300,15 C350,10 380,5 400,0"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-draw"
                />
                <circle
                  cx="400"
                  cy="0"
                  r="6"
                  fill="#fff"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  className="animate-slide-up"
                  style={{ animationDelay: '1s' }}
                />
              </svg>
            </div>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/50 bg-white/40 p-3 shadow-sm backdrop-blur-xl sm:p-4 dark:border-slate-700/50 dark:bg-slate-800/40">
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-400/10 blur-xl" />

            <div className="relative z-10 flex w-full items-center justify-between gap-1">
              <div className="shrink-0">
                <div className="mb-1 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-amber-500 sm:text-[10px]">
                  <Star className="h-3 w-3 fill-amber-500" /> Reputation
                </div>
                <div className="text-xs font-bold leading-tight sm:text-sm">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
              </div>
              <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90 transform drop-shadow-sm">
                  <path
                    className="text-gray-100 dark:text-slate-700"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-amber-500"
                    strokeWidth="3.5"
                    strokeDasharray="98, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    style={{ animation: 'drawPath 1.5s ease-out 1s forwards' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-extrabold text-blue-950 dark:text-white sm:text-sm">4.9</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-3 w-full">
              <div className="mb-1 flex justify-between text-[8px] font-bold text-gray-500 sm:text-[9px] dark:text-gray-400">
                <span>5.0 Target</span>
                <span className="text-amber-500">98%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200/80 shadow-inner dark:bg-slate-700/80">
                <div className="relative h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500" style={{ width: '98%' }}>
                  <div className="absolute inset-0 animate-pulse bg-white/20" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-br from-blue-600/90 to-indigo-700/90 p-3 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-xl sm:p-4">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />
            <TrendingUp className="pointer-events-none absolute -bottom-2 -right-2 h-16 w-16 text-white opacity-10" />
            <div className="pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10">
              <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-blue-200">Estimated ROI</div>
              <div className="text-3xl font-extrabold drop-shadow-md">4.2x</div>
              <div className="mt-1 text-[9px] font-medium text-blue-100 opacity-90">Based on Patient LTV</div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-bounce-slow absolute -top-16 right-0 z-30 flex origin-right scale-[0.92] items-center gap-3.5 rounded-2xl border border-white/60 bg-white/40 p-4 pr-5 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-[30px] sm:top-8 sm:-right-8 sm:scale-100 sm:p-3 sm:gap-3 dark:border-slate-700/60 dark:bg-slate-800/40 md:-right-4 lg:-right-8 max-sm:max-w-[min(100%,18rem)]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:bg-emerald-900/50 dark:text-emerald-400 sm:h-10 sm:w-10">
          <Calendar className="h-6 w-6 sm:h-5 sm:w-5" />
        </div>
        <div className="min-w-0">
          <span className="block text-base font-bold text-blue-950 dark:text-white sm:text-sm">New Patient!</span>
          <span className="block text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-xs">Via Google Search</span>
        </div>
      </div>

      <div
        className="animate-float absolute top-[35%] right-0 z-30 flex -translate-y-1/2 origin-right scale-[0.9] transform items-center gap-3.5 rounded-2xl border border-white/60 bg-white/40 p-4 pr-5 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-[30px] sm:top-[40%] sm:-right-8 sm:scale-100 sm:p-3 sm:gap-3 sm:pr-4 dark:border-slate-700/60 dark:bg-slate-800/40 md:-right-2 lg:-right-4 max-sm:max-w-[min(100%,17rem)]"
        style={{ animationDelay: '0.5s' }}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:bg-indigo-900/50 dark:text-indigo-400 sm:h-10 sm:w-10">
          <MessageSquare className="h-6 w-6 sm:h-5 sm:w-5" />
        </div>
        <div className="min-w-0">
          <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-[10px]">
            Cost Per Lead
          </span>
          <span className="block text-base font-extrabold text-blue-950 dark:text-white sm:text-sm">-42% Decrease</span>
        </div>
      </div>

      <div
        className="animate-float absolute top-[25%] -left-4 z-0 hidden w-48 origin-left scale-[0.75] rounded-2xl border border-white/60 bg-white/40 p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-[30px] sm:top-28 sm:-left-12 sm:block sm:scale-100 dark:border-slate-700/60 dark:bg-slate-800/40 md:-left-20 lg:-left-24"
        style={{ animationDelay: '1s' }}
      >
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
          <Users className="h-3.5 w-3.5" /> New Patients
        </div>
        <div className="flex items-baseline gap-2">
          <h3
            className={`text-4xl font-extrabold text-blue-950 transition-all duration-300 dark:text-white ${isAnimating ? 'scale-110 text-emerald-500 dark:text-emerald-400' : ''}`}
          >
            {patients}
          </h3>
          <div className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>
        </div>
        <div className="mt-1 border-b border-gray-200/60 pb-2.5 text-[10px] font-medium text-gray-500 dark:border-slate-700/60 dark:text-gray-400 mb-2.5">
          Growing this month
        </div>

        <div className="space-y-2 overflow-hidden">
          {recentPatients.map((patient, i) => (
            <div
              key={patient.id}
              className={`flex items-center justify-between transition-all duration-500 ${i === 0 && isAnimating ? 'animate-slide-down opacity-100' : 'opacity-80'}`}
            >
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-blue-950 dark:text-gray-200">{patient.name}</span>
              </div>
              <span
                className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${patient.time === 'Just now' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}
              >
                {patient.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
