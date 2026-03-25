import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Jenkins',
    clinic: 'Luminara Dental',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150',
    text: "Dentech completely transformed our digital presence. Within 3 months of launching our new site and SEO campaign, we saw a 40% increase in high-value patient bookings. Their team actually understands dentistry.",
    rating: 5
  },
  {
    name: 'Dr. Michael Chen',
    clinic: 'Riverside Orthodontics',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150',
    text: "We were burning money on Google Ads before Dentech took over. They restructured our campaigns, built dedicated landing pages, and cut our cost-per-lead in half while doubling our Invisalign starts.",
    rating: 5
  },
  {
    name: 'Dr. Emily Rodriguez',
    clinic: 'The Smile Doctors',
    image: 'https://images.unsplash.com/photo-1594824436998-058b231b611c?auto=format&fit=crop&q=80&w=150',
    text: "The transparency is what sets them apart. I log into my dashboard and see exactly how many calls and appointments came from their efforts. It's the best marketing investment we've ever made.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6 tracking-tight">
            Loved by dentists <br className="hidden sm:block" />
            <span className="text-blue-600 dark:text-blue-400">across the country.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#FAFAF9] dark:bg-slate-800 rounded-3xl p-8 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100 dark:text-slate-700" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto relative z-10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-blue-950 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
