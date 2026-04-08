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

export const capabilityCards = [
  {
    title: 'Brand & print',
    description:
      'Signage, business cards, flyers, brochures, banners, apparel, trade show booths — everything patients see before they ever click an ad.',
    span: 'md:col-span-1',
  },
  {
    title: 'Web & email',
    description:
      'Custom sites, landing pages, email setup, signatures, and integrations that turn traffic into booked consultations.',
    span: 'md:col-span-1',
  },
  {
    title: 'Social & community',
    description:
      'Strategy, content creation, community building, and channel management — with emphasis on authentic storytelling.',
    span: 'md:col-span-2 lg:col-span-1',
  },
  {
    title: 'Paid media',
    description:
      'Google, Meta, TikTok, and beyond — structured campaigns, clear attribution, and disciplined testing as your local marketing team.',
    span: 'md:col-span-2 lg:col-span-1',
  },
];

export const devStack = [
  'HTML, CSS, JavaScript',
  'React / MERN-style stacks',
  'PHP',
  'Shopify, WordPress, Webflow, Framer, Duda',
];

export const marketingStack = [
  'Google Analytics 4 & Tag Manager',
  'Google Ads & Meta Business Suite',
  'TikTok Ads',
  'Semrush / Ahrefs-class SEO tooling',
  'HubSpot, Mailchimp, Klaviyo (email & CRM)',
  'Looker Studio reporting',
];

export const teamRoles = [
  'Account managers',
  'Social media managers',
  'Photographers & videographers',
  'Video editors',
  'SEO specialists',
  'Media buyers',
  'Designers',
  'Content strategists',
  'Email marketers',
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
