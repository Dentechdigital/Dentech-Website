import React from 'react';
import { Smile, Waves, Sparkles, Heart, Triangle } from 'lucide-react';

const cardStyles = [
  'bg-sky-100/90 text-sky-800 border-sky-200 hover:bg-sky-200/90 dark:bg-sky-500/20 dark:text-sky-100 dark:border-sky-400/30 dark:hover:bg-sky-500/30',
  'bg-emerald-100/90 text-emerald-800 border-emerald-200 hover:bg-emerald-200/90 dark:bg-emerald-500/20 dark:text-emerald-100 dark:border-emerald-400/30 dark:hover:bg-emerald-500/30',
  'bg-violet-100/90 text-violet-800 border-violet-200 hover:bg-violet-200/90 dark:bg-violet-500/20 dark:text-violet-100 dark:border-violet-400/30 dark:hover:bg-violet-500/30',
  'bg-amber-100/90 text-amber-800 border-amber-200 hover:bg-amber-200/90 dark:bg-amber-500/20 dark:text-amber-100 dark:border-amber-400/30 dark:hover:bg-amber-500/30',
  'bg-rose-100/90 text-rose-800 border-rose-200 hover:bg-rose-200/90 dark:bg-rose-500/20 dark:text-rose-100 dark:border-rose-400/30 dark:hover:bg-rose-500/30'
];

const clients = [
  {
    name: 'The Smile Doctors',
    link: 'https://example.com/smile-doctors',
    logo: (
      <div className="flex items-center gap-2">
        <Smile className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2.5} />
        <span className="font-sans font-bold tracking-tight text-xl sm:text-2xl">Smile<span className="font-light">Doctors</span></span>
      </div>
    )
  },
  {
    name: 'Riverside Orthodontics',
    link: 'https://example.com/riverside',
    logo: (
      <div className="flex items-center gap-2">
        <Waves className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2} />
        <div className="flex flex-col justify-center">
          <span className="font-serif font-semibold leading-none text-lg sm:text-xl">Riverside</span>
          <span className="font-sans text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] uppercase leading-none mt-1">Orthodontics</span>
        </div>
      </div>
    )
  },
  {
    name: 'Luminara Dental',
    link: 'https://example.com/luminara',
    logo: (
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={1.5} />
        <span className="font-sans font-medium tracking-[0.2em] uppercase text-lg sm:text-xl">Luminara</span>
      </div>
    )
  },
  {
    name: 'Kanata Family Dentistry',
    link: 'https://example.com/kanata',
    logo: (
      <div className="flex items-center gap-2">
        <Heart className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2} />
        <div className="flex flex-col justify-center border-l-2 border-current pl-2">
          <span className="font-sans font-bold leading-none text-sm sm:text-base">KANATA</span>
          <span className="font-sans text-[0.6rem] sm:text-[0.65rem] tracking-wider uppercase leading-none mt-0.5">Family Dentistry</span>
        </div>
      </div>
    )
  },
  {
    name: 'Delta Clinique',
    link: 'https://example.com/delta',
    logo: (
      <div className="flex items-center gap-2">
        <Triangle className="w-5 h-5 sm:w-7 sm:h-7 fill-current" strokeWidth={1} />
        <span className="font-sans font-black tracking-tighter uppercase text-xl sm:text-2xl">Delta<span className="font-normal tracking-normal text-lg sm:text-xl ml-1 capitalize">Clinique</span></span>
      </div>
    )
  }
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-950 relative overflow-hidden transition-colors duration-300">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-sm font-semibold text-blue-100/80 uppercase tracking-wider mb-8 transition-colors duration-300">
          Trusted by top dental practices
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16">
          {clients.map((client, index) => (
            <a 
              key={index} 
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-3 rounded-2xl border backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer ${cardStyles[index % cardStyles.length]}`}
              title={client.name}
            >
              {client.logo}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
