/** Public site origin for JSON-LD (update if your canonical domain differs). */
export const SITE_ORIGIN = 'https://dentech.digital';

export const FOUNDER_LINKEDIN_URL = 'https://www.linkedin.com/in/mohammed-dahman-2aab49128/';

export const aboutStats = [
  { label: 'Serving practices since', value: '2017' },
  { label: 'Headquartered in', value: 'Ottawa, ON' },
  { label: 'Industry focus', value: 'Dental & medical' },
  { label: 'Delivery model', value: 'Hybrid team' },
  { label: 'Markets', value: 'Canada-wide' },
  { label: 'Campaign languages', value: 'English & French' },
  { label: 'How we work', value: 'Roadmap-led' },
  { label: 'Creative & content', value: 'Strategy-first' },
];

export const whoWeServe = [
  'Solo practices and growing group practices across Canada (and select international clients)',
  'General, cosmetic, orthodontic, pediatric, and specialty dental clinics',
  'Medical clinics that need the same disciplined approach to growth and creative',
];

export const differentiators = [
  'Dental-only focus — we speak patient intent, procedures, and compliance tone',
  'Full-funnel partner — from signage and print through web, email, social, and paid media',
  'Performance clarity — reporting and optimization tied to consults, production, and ROI — not vanity metrics',
  'Integrated partnership — strategy, creative, and media under one accountable team with senior oversight and a single point of contact',
];

export const timelineMilestones = [
  {
    year: '2017',
    title: 'Dentech takes shape',
    body:
      'Mohammed Dahman launches the agency after years in computer science, design, and web development — plus hands-on experience running significant paid media budgets across multiple businesses.',
  },
  {
    year: '2017–2020',
    title: 'Built for every industry',
    body:
      'We partnered with businesses of all kinds — websites, campaigns, and growth systems — while sharpening how we buy, measure, and optimize media.',
  },
  {
    year: '2020+',
    title: 'Dental & medical specialization',
    body:
      'For roughly the last five years we have focused on dental practices and medical clinics, collaborating with industry leaders so our clients benefit from deep sector knowledge.',
  },
];

/** Keys mapped to Lucide icons in AboutCapabilitiesBento */
export type CapabilityVisualKey = 'brand' | 'web' | 'social' | 'paid';

export const capabilityCards: {
  title: string;
  description: string;
  /** Bento layout: wide ≈ 2/3 cell, narrow ≈ 1/3 (md+ grid) */
  bentoSpan: 'wide' | 'narrow';
  visual: {
    key: CapabilityVisualKey;
    bgImage: string;
    iconGradient: string;
    topBar: string;
  };
}[] = [
  {
    title: 'Brand & print',
    description:
      'Signage, business cards, flyers, brochures, banners, apparel, trade show booths — everything patients see before they ever click an ad.',
    bentoSpan: 'wide',
    visual: {
      key: 'brand',
      bgImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600',
      iconGradient: 'from-rose-500 to-pink-500',
      topBar: 'from-rose-500 via-pink-500 to-amber-400',
    },
  },
  {
    title: 'Web & email',
    description:
      'Custom sites, landing pages, email setup, signatures, and integrations that turn traffic into booked consultations.',
    bentoSpan: 'narrow',
    visual: {
      key: 'web',
      bgImage: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&q=80&w=500',
      iconGradient: 'from-indigo-500 to-violet-500',
      topBar: 'from-indigo-500 via-violet-500 to-blue-400',
    },
  },
  {
    title: 'Social & community',
    description:
      'Strategy, content creation, community building, and channel management — with emphasis on authentic storytelling.',
    bentoSpan: 'narrow',
    visual: {
      key: 'social',
      bgImage: 'https://images.unsplash.com/photo-1557682260-96773eb01377?auto=format&fit=crop&q=80&w=500',
      iconGradient: 'from-amber-500 to-orange-500',
      topBar: 'from-amber-500 via-orange-500 to-rose-400',
    },
  },
  {
    title: 'Paid media',
    description:
      'Google, Meta, TikTok, and beyond — structured campaigns, clear attribution, and disciplined testing as your local marketing team.',
    bentoSpan: 'wide',
    visual: {
      key: 'paid',
      bgImage: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80&w=600',
      iconGradient: 'from-emerald-500 to-teal-500',
      topBar: 'from-emerald-500 via-teal-500 to-cyan-400',
    },
  },
];

/** Shared inbox; mailto subject identifies the intended teammate. */
export const TEAM_CONTACT_EMAIL = 'smile@dentech.digital';

export const aboutTeamMembers: {
  nameDisplay: string;
  role: string;
  /** File under /public/ — use null for initials-only until a photo exists */
  photo: string | null;
}[] = [
  { nameDisplay: 'Balfoul', role: 'Account manager', photo: 'team/balfoul.jpg' },
  { nameDisplay: 'Dahman. M', role: 'Founder', photo: 'mohammed-dahman.jpg' },
  { nameDisplay: 'Omayma R.', role: 'Social media manager', photo: 'team/omayma-r.jpg' },
  { nameDisplay: 'Youssef E.', role: 'Designer', photo: 'team/youssef-e.jpg' },
  { nameDisplay: 'Khadir M.', role: 'SEO / GEO specialist', photo: 'team/khadir-m.jpg' },
  { nameDisplay: 'Zak A.', role: 'Webflow designer', photo: 'team/zak-a.jpg' },
  { nameDisplay: 'Sabri Y.', role: 'Web developer', photo: 'team/sabri-y.jpg' },
  { nameDisplay: 'Maya', role: 'AI admin assistant', photo: 'team/maya.jpg' },
];

export const scrumSteps = [
  {
    title: 'Discover',
    body: 'Goals, audience, market, and quick wins — aligned with your capacity and revenue targets.',
  },
  {
    title: 'Build',
    body: 'Creative, landing experiences, and campaigns shipped in focused phases with visible milestones.',
  },
  {
    title: 'Grow',
    body: 'Optimize, scale what works, and report in plain language tied to leads and production.',
  },
];

export const testimonialPlaceholder = {
  quote:
    'Dentech helped us turn scattered marketing into a system — clearer messaging, better leads, and a team that actually understands dentistry.',
  attribution: 'Practice leader',
  location: 'Ontario, Canada',
};

export function buildAboutStructuredData() {
  const orgId = `${SITE_ORIGIN}/#organization`;
  const pageUrl = `${SITE_ORIGIN}/about`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'About Dentech Digital | Ottawa Dental Marketing Agency',
        description:
          'Meet Dentech Digital — Ottawa-based dental marketing agency since 2017. Founder Mohammed Dahman, full-funnel growth for Canadian dental practices.',
        isPartOf: { '@id': orgId },
        about: { '@id': orgId },
      },
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: 'Dentech Digital',
        logo: `${SITE_ORIGIN}/logo-light.svg`,
        image: `${SITE_ORIGIN}/logo-light.svg`,
        description:
          'Dental and medical marketing agency based in Ottawa, Ontario. Websites, SEO, paid media, social content, print, and AI-powered patient experience tools.',
        url: SITE_ORIGIN,
        email: 'hello@dentech.digital',
        telephone: '+1-613-869-3121',
        foundingDate: '2017',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '499 Preston St',
          addressLocality: 'Ottawa',
          addressRegion: 'ON',
          addressCountry: 'CA',
        },
        areaServed: [
          { '@type': 'City', name: 'Ottawa' },
          { '@type': 'AdministrativeArea', name: 'Ontario' },
          { '@type': 'Country', name: 'Canada' },
        ],
        founder: {
          '@type': 'Person',
          name: 'Mohammed Dahman',
          sameAs: FOUNDER_LINKEDIN_URL,
          jobTitle: 'Founder & Principal',
        },
      },
    ],
  };
}
