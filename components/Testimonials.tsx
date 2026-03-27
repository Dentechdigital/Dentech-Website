import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Nazneen Sadikot',
    clinic: 'The Smile Doctors',
    image: '/testimonials/dr-nazneen-sadikot.png',
    text: 'Dentech built a custom Webflow website for us and now handles our website management, SEO, AI visibility, Meta ads, social media, and content. In less than a year we generated 1300+ new bookings.',
    rating: 5,
  },
  {
    name: 'Dr. Suela Murataj',
    clinic: 'The Smile Doctors',
    image: '/testimonials/dr-suela-murataj.png',
    text: 'The team execution is complete and reliable. From strategy to content and optimization, Dentech keeps our growth engine running every month and the clinic results keep improving.',
    rating: 5,
  },
  {
    name: 'Dr. Issam Abualreesh',
    clinic: 'Riverside Orthodontics',
    image: '/testimonials/youssef-abuzribeh.png',
    text: 'Dentech helped us strengthen our local authority with high-quality SEO and content strategy. Their process is clear, accountable, and focused on long-term results.',
    rating: 5,
  },
  {
    name: 'Dr. Walid Issawy',
    clinic: 'Delta Clinique',
    image: '/testimonials/dr-walid-issawy.png',
    text: 'Working with Dentech has elevated our brand presence and positioning. Their consulting and execution support made our marketing sharper and more consistent across channels.',
    rating: 5,
  },
  {
    name: 'Youssef Abuzribeh',
    clinic: 'DWINC / RED3 (CEO)',
    image: '/testimonials/dr-issam-abulreesh.png',
    text: 'In two years, Dentech helped us grow revenue by 4.5x and dominate core dental construction keywords in Ottawa without spending on ads. They redesigned our website and support content, print, and VR materials.',
    rating: 5,
  },
  {
    name: 'Dr. Rasha Al-Taweel',
    clinic: 'Luminara Dental',
    image: '/testimonials/dr-rasha-al-taweel.png',
    text: 'Dentech brings both creative quality and performance thinking. Their strategic guidance and follow-through helped us improve visibility, trust, and patient demand.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6 tracking-tight">
            Trusted by clinics <br className="hidden sm:block" />
            <span className="text-blue-600 dark:text-blue-400">and growth-focused businesses.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
