import React, { useEffect, useMemo, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionGradientEmphasis } from './SectionGradientEmphasis';

const testimonials = [
  {
    name: 'Dr. Nazneen Sadikot',
    clinic: 'The Smile Doctors',
    image: '/testimonials/dr-nazneen-sadikot.webp',
    text: 'Working with Dentech has been one of the best business decisions we made. Their team is proactive, clear, and consistently focused on real growth.',
    rating: 5,
  },
  {
    name: 'Dr. Issam Abualreesh',
    clinic: 'Riverside Orthodontics',
    image: '/testimonials/youssef-abuzribeh.webp',
    text: 'Dentech brought a level of professionalism and consistency we were missing. The results have been strong, and the partnership has been very smooth.',
    rating: 5,
  },
  {
    name: 'Dr. Walid Issawy',
    clinic: 'Delta Clinique',
    image: '/testimonials/dr-walid-issawy.webp',
    text: 'They understand positioning, quality, and how to build trust in the market. We saw meaningful momentum quickly and sustained improvement over time.',
    rating: 5,
  },
  {
    name: 'Dr. Suela Murataj',
    clinic: 'The Smile Doctors',
    image: '/testimonials/dr-suela-murataj.webp',
    text: 'The communication is excellent and the execution is always on point. We feel supported, confident, and in control of our brand direction.',
    rating: 5,
  },
  {
    name: 'Youssef Abuzribeh',
    clinic: 'DWINC / RED3 (CEO)',
    image: '/testimonials/dr-issam-abulreesh.webp',
    text: 'Dentech has been a true growth partner for us. Their guidance is strategic, their standards are high, and they consistently deliver measurable impact.',
    rating: 5,
  },
  {
    name: 'Dr. Rasha Al-Taweel',
    clinic: 'Luminara Dental',
    image: '/testimonials/dr-rasha-al-taweel.webp',
    text: 'From day one, their team showed care, clarity, and strong business judgment. We trust them fully and value the relationship tremendously.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, testimonials.length - cardsPerView),
    [cardsPerView]
  );

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl">
            Trusted by dental teams focused on <SectionGradientEmphasis>measurable growth</SectionGradientEmphasis>.
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out -mx-3"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 xl:w-1/3 shrink-0 px-3">
                  <div className="bg-[#FAFAF9] dark:bg-slate-800 rounded-3xl p-8 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 relative h-full flex flex-col overflow-hidden">
                    <div className="pointer-events-none absolute -top-10 -right-8 h-24 w-24 rounded-full bg-blue-200/40 blur-2xl dark:bg-blue-500/20" />
                    <div className="pointer-events-none absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-indigo-200/30 blur-2xl dark:bg-indigo-500/20" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100 dark:text-slate-700" />
                    
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 relative z-10 italic flex-grow">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-5 mt-auto border-t border-gray-200/70 dark:border-slate-700/80 relative z-10 min-h-[78px]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="leading-tight">
                        <h4 className="font-bold text-blue-950 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{testimonial.clinic}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
