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
  return `https://www.google.com/maps?q=${mapsQueryEncoded()}&z=15&output=embed`;
}

export function googleMapsExternalUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${mapsQueryEncoded()}`;
}
