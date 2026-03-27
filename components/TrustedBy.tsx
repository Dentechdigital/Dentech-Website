import React from 'react';

const clients = [
  {
    name: 'The Smile Doctors',
    logoSrc: '/partners/smile-doctors.png',
    logoClass: 'h-10 sm:h-12',
    filter: 'brightness(1.1) saturate(1.1)',
  },
  {
    name: 'Riverside Orthodontics',
    logoSrc: '/partners/riverside-orthodontics.png',
    logoClass: 'h-10 sm:h-12',
    filter: 'brightness(1.08) saturate(1.12)',
  },
  {
    name: 'Luminara Dental',
    logoSrc: '/partners/luminara-dental.png',
    logoClass: 'h-10 sm:h-12',
    filter: 'brightness(1.06) saturate(1.1)',
  },
  {
    name: 'Kanata Family Dentistry',
    logoSrc: '/partners/kanata-family-dentistry.png',
    logoClass: 'h-12 sm:h-14',
    filter: 'brightness(1.08) saturate(1.1)',
  },
  {
    name: 'Delta Médico-Esthétique',
    logoSrc: '/partners/delta-medico-esthetique.png',
    logoClass: 'h-16 sm:h-20',
    filter: 'brightness(1.08) saturate(1.06)',
  },
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
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-5 md:gap-x-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex min-w-[170px] items-center justify-center rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/80"
              title={client.name}
            >
              <img
                src={client.logoSrc}
                alt={client.name}
                className={`${client.logoClass} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
                style={{ filter: client.filter }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
