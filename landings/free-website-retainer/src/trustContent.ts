import { getMainSiteUrl } from './config';

/** Partner logos (paths match main site `public/partners/`). */
export const TRUSTED_CLIENT_LOGOS = [
  { name: 'The Smile Doctors', src: '/partners/smile-doctors.webp', logoClass: 'h-9 sm:h-10', width: 420, height: 99 },
  { name: 'Riverside Orthodontics', src: '/partners/riverside-orthodontics.webp', logoClass: 'h-10 sm:h-11', width: 420, height: 108 },
  { name: 'Luminara Dental', src: '/partners/luminara-dental.webp', logoClass: 'h-9 sm:h-10', width: 420, height: 118 },
  { name: 'Kanata Family Dentistry', src: '/partners/kanata-family-dentistry.webp', logoClass: 'h-10 sm:h-11', width: 420, height: 140 },
  { name: 'Dentistry @ Kanata', src: '/partners/delta-medico-esthetique.webp', logoClass: 'h-12 sm:h-14', width: 420, height: 140 },
] as const;

/** Short quotes aligned with main `Testimonials.tsx` (images under main site `public/testimonials/`). */
export const LP_TESTIMONIAL_HIGHLIGHTS = [
  {
    name: 'Dr. Nazneen Sadikot',
    clinic: 'The Smile Doctors',
    image: '/testimonials/dr-nazneen-sadikot.webp',
    quote: 'Working with Dentech has been one of the best business decisions we made. Their team is proactive, clear, and consistently focused on real growth.',
  },
  {
    name: 'Dr. Rasha Al-Taweel',
    clinic: 'Luminara Dental',
    image: '/testimonials/dr-rasha-al-taweel.webp',
    quote: 'From day one, their team showed care, clarity, and strong business judgment. We trust them fully and value the relationship tremendously.',
  },
  {
    name: 'Dr. Issam Abualreesh',
    clinic: 'Riverside Orthodontics',
    image: '/testimonials/youssef-abuzribeh.webp',
    quote: 'Dentech brought a level of professionalism and consistency we were missing. The results have been strong, and the partnership has been very smooth.',
  },
] as const;

export function mainSiteAsset(path: string): string {
  const base = getMainSiteUrl();
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
