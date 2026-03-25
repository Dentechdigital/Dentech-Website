import React from 'react';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    clinic: 'Luminara Dental',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600',
    title: 'Scaling from 20 to 85 New Patients Monthly',
    metrics: [
      { label: 'New Patients', value: '+325%', icon: Users },
      { label: 'Cost Per Lead', value: '-42%', icon: DollarSign },
    ],
    tags: ['Google Ads', 'SEO', 'Web Design']
  },
  {
    clinic: 'Riverside Orthodontics',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    title: 'Dominating the Local Invisalign Market',
    metrics: [
      { label: 'Invisalign Starts', value: '+150%', icon: TrendingUp },
      { label: 'Organic Traffic', value: '+210%', icon: Users },
    ],
    tags: ['SEO', 'Content', 'Social Media']
  }
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-[#FAFAF9] dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6 tracking-tight">
              Real results for <br className="hidden md:block" />
              <span className="text-blue-600 dark:text-blue-400">real practices.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Don't just take our word for it. See how we've helped dental practices across the country scale their revenue and patient base.
            </p>
          </div>
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-blue-950 dark:text-white border border-gray-200 dark:border-slate-700 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm whitespace-nowrap"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Link 
              key={index}
              to="/case-studies"
              className="group flex flex-col bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={study.image} 
                  alt={study.clinic} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-blue-950 dark:text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {study.clinic}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-slate-700">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                        <metric.icon className="w-4 h-4" />
                        <span className="text-xs font-medium uppercase tracking-wider">{metric.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
