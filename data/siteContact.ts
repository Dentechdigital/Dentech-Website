import { SITE_ORIGIN } from './aboutContent';

/** Full-bleed hero art on `/contact` (person right, negative space left for copy) */
export const CONTACT_PAGE_HERO_PATH = '/contact/hero-contact.webp';

/** Tailwind classes for `<img>` positioning in `PageHeroAboutStyle` */
export const CONTACT_PAGE_HERO_IMAGE_CLASS =
  'object-cover object-[50%_28%] sm:object-[55%_center] md:object-[58%_center] lg:object-[62%_center] xl:object-[58%_32%]';

/** Canonical contact details — reuse on Contact page, embeds, and CTAs */
export const SITE_CONTACT = {
  phoneDisplay: '(613) 869-3121',
  phoneTel: '6138693121',
  email: 'hello@dentech.digital',
  addressLine1: '499 Preston St',
  addressLine2: 'Ottawa, ON',
  addressCountry: 'Canada',
  get addressSingleLine() {
    return `${this.addressLine1}, ${this.addressLine2}, ${this.addressCountry}`;
  },
  hoursShort: 'Mon – Fri, 9:00 AM – 6:00 PM ET',
  /** Ottawa hybrid / by appointment */
  availabilityNote: 'Hybrid team — meetings by appointment. Walk-ins not available.',
} as const;

function mapsQueryEncoded(): string {
  return encodeURIComponent(
    `${SITE_CONTACT.addressLine1}, ${SITE_CONTACT.addressLine2}, ${SITE_CONTACT.addressCountry}`
  );
}

export function googleMapsEmbedUrl(): string {
  /** Use maps subdomain + output=embed; parent CSP must allow frame-src to Google. */
  return `https://maps.google.com/maps?q=${mapsQueryEncoded()}&z=15&output=embed&hl=en`;
}

export function googleMapsExternalUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${mapsQueryEncoded()}`;
}

export function buildContactStructuredData(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_ORIGIN}/contact#localbusiness`,
    name: 'Dentech Digital',
    url: `${SITE_ORIGIN}/contact`,
    image: `${SITE_ORIGIN}/dentist-cutout-800w.webp`,
    email: SITE_CONTACT.email,
    telephone: '+1-613-869-3121',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONTACT.addressLine1,
      addressLocality: 'Ottawa',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.401,
      longitude: -75.698,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: [
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'AdministrativeArea', name: 'Ontario' },
      { '@type': 'AdministrativeArea', name: 'Quebec' },
      { '@type': 'Country', name: 'Canada' },
    ],
  };
}
