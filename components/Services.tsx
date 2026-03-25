import React from 'react';
import { Map, Target, MonitorSmartphone, Aperture, MailOpen, Cpu, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Local SEO & Maps',
    description: 'Rank #1 in your local area. We optimize your Google Business Profile and website so patients find you first.',
    icon: Map,
    bgImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=400',
    iconGradient: 'from-blue-500 to-cyan-400',
    iconColor: 'text-white',
    link: '/services#seo'
  },
  {
    title: 'Paid Advertising',
    description: 'Bring high-value patients to your chairs. We run targeted Google and Facebook ad campaigns designed for dental practices.',
    icon: Target,
    bgImage: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80&w=400',
    iconGradient: 'from-emerald-500 to-teal-400',
    iconColor: 'text-white',
    link: '/services#ppc'
  },
  {
    title: 'Custom Websites',
    description: 'Turn visitors into booked appointments. We build beautiful, fast, and mobile-responsive websites for your practice.',
    icon: MonitorSmartphone,
    bgImage: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&q=80&w=400',
    iconGradient: 'from-indigo-500 to-purple-400',
    iconColor: 'text-white',
    link: '/services#web'
  },
  {
    title: 'Content & Community',
    description: 'Stand out on social media. Our photographers, videographers, and designers create original, high-quality content for your social media posting.',
    icon: Aperture,
    bgImage: 'https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&q=80&w=400',
    iconGradient: 'from-amber-500 to-orange-400',
    iconColor: 'text-white',
    link: '/services#social'
  },
  {
    title: 'Print & Direct Mail',
    description: 'Dominate your immediate neighborhood. We design and distribute high-quality print materials that drive local awareness.',
    icon: MailOpen,
    bgImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400',
    iconGradient: 'from-rose-500 to-pink-400',
    iconColor: 'text-white',
    link: '/services#print'
  },
  {
    title: 'AI & Automation',
    description: 'Save time and reduce no-shows. We implement smart AI chatbots and automated follow-ups to streamline your front desk.',
    icon: Cpu,
    bgImage: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=400',
    iconGradient: 'from-violet-500 to-fuchsia-400',
    iconColor: 'text-white',
    link: '/services#ai'
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#FAFAF9] dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-700 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 pointer-events-none transition-colors duration-300" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-50 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-50 pointer-events-none transition-colors duration-300" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm mb-6 transition-colors duration-300">
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold tracking-wide text-gray-600 dark:text-gray-400 uppercase">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6 tracking-tight transition-colors duration-300">
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-400 to-emerald-500">grow your practice</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            We specialize exclusively in dental marketing. Our proven systems are designed to attract new patients, increase case acceptance, and grow your revenue predictably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link 
              to={service.link}
              key={index} 
              className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col h-full"
            >
              {/* Smooth Background Image Effect (Top Right) */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(circle at top right, black, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(circle at top right, black, transparent 70%)'
                }}
              >
                <img 
                  src={service.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Content Section */}
              <div className="relative z-10 flex flex-col flex-grow">
                {/* Attractive Gradient Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconGradient} shadow-md flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-8 flex-grow transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Subtle Read More Link */}
                <div className="mt-auto pt-4 border-t border-gray-50 dark:border-slate-700/50 flex items-center gap-2 text-sm font-semibold text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
