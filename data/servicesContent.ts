import { SITE_ORIGIN } from './aboutContent';

/** Lucide icon key used by Services grid / detail pages */
export type ServiceIconKey = 'map' | 'target' | 'monitor' | 'aperture' | 'mail' | 'cpu';

export type ServiceGalleryItem = {
  /** Path under `public/` or absolute image URL (phase 1 may use CDN) */
  src: string;
  alt: string;
  caption?: string;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceDefinition = {
  slug: string;
  title: string;
  shortDescription: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  iconKey: ServiceIconKey;
  iconGradient: string;
  iconColor: string;
  /** Decorative image for service cards (full URL or path under public/) */
  cardBgImage: string;
  heroTagline: string;
  heroBullets: string[];
  forWho: string;
  included: string[];
  processSteps: { title: string; body: string }[];
  gallery: ServiceGalleryItem[];
  relatedSlugs: [string, string];
  faq: ServiceFaqItem[];
};

export const servicesHub = {
  metaTitle: 'Dental marketing services',
  metaDescription:
    'Full-funnel dental marketing for Canadian practices: local SEO & Maps, paid ads, custom websites, social & content, print, and AI automation. Ottawa-based team, Canada-wide delivery.',
  h1: 'Dental marketing services built for Canadian practices',
  intro:
    'From Maps visibility to booked appointments, we connect strategy, creative, media, and engineering in one accountable partnership—headquartered in Ottawa with hybrid delivery across Canada.',
  funnelPitch: [
    {
      title: 'One funnel, one team',
      body: 'Local discovery, your website, paid media, social proof, and follow-up should reinforce each other—not compete. We align channels so spend and effort compound.',
    },
    {
      title: 'Dental-only focus',
      body: 'We work with dental and adjacent healthcare brands, so positioning, procedure language, and compliance tone fit how patients actually choose a provider.',
    },
    {
      title: 'Clarity you can act on',
      body: 'Reporting ties to leads, consults, and production—not vanity metrics. You get practical readouts your front desk and leadership can use.',
    },
  ],
};

export const servicesHubFaq: ServiceFaqItem[] = [
  {
    question: 'Do you work with practices outside Ottawa?',
    answer:
      'Yes. We are headquartered in Ottawa and partner with practices across Canada (and select international clients). Local SEO and creative are tailored to your real service areas and market.',
  },
  {
    question: 'Can I start with one service and add others later?',
    answer:
      'Absolutely. Many clients begin where the need is clearest—often website + local SEO or paid search—then expand as tracking and capacity mature. We still design with the full funnel in mind.',
  },
  {
    question: 'Are these pages the same as your ad landing pages?',
    answer:
      'These URLs are built to be fast, focused, and SEO-friendly. For paid campaigns you can add UTM parameters to the same paths, or we can duplicate variants with permission—core messaging stays consistent.',
  },
  {
    question: 'How do proposals and pricing work?',
    answer:
      'Scope depends on market competition, number of locations, creative volume, and ad spend. After a strategy call we outline deliverables, timelines, and investment in writing so there are no surprises.',
  },
  {
    question: 'Do you offer services in French?',
    answer:
      'Yes—campaign languages can include English and French where your patients expect it, aligned with your brand and regulatory context.',
  },
  {
    question: 'What makes Dentech different from a general marketing agency?',
    answer:
      'Depth in dental: same team covers web, SEO, paid, social, print, and practical AI—so handoffs are minimal and accountability stays with one partner.',
  },
];

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const servicesOrdered: ServiceDefinition[] = [
  {
    slug: 'local-seo',
    title: 'Local SEO & Maps',
    shortDescription:
      'Rank where patients search. We optimize your Google Business Profile and site so high-intent local queries surface your practice.',
    h1: 'Local SEO & Google Maps for dental practices',
    metaTitle: 'Local SEO & Maps for dentists',
    metaDescription:
      'Dental local SEO and Google Business Profile optimization for Canadian practices. Improve Maps visibility, local rankings, and calls from high-intent patients.',
    iconKey: 'map',
    iconGradient: 'from-blue-500 to-cyan-400',
    iconColor: 'text-white',
    cardBgImage: unsplash('photo-1557683316-973673baf926'),
    heroTagline: 'Show up when neighbors search for a dentist they can trust.',
    heroBullets: [
      'GBP optimization, categories, services, and photo discipline',
      'On-site local signals, internal linking, and landing pages for key procedures',
      'Review velocity and NAP consistency aligned with your real service areas',
    ],
    forWho:
      'Single-location and multi-site general, family, cosmetic, orthodontic, and specialty practices competing in Canadian markets—from tight urban corridors to wider service areas.',
    included: [
      'Google Business Profile audit and ongoing optimization roadmap',
      'Local keyword and competitor snapshot for your market',
      'On-page recommendations and content briefs for priority treatments',
      'Citation and NAP consistency checks (where applicable)',
      'Monthly performance readout: visibility, actions, and leads where tracked',
    ],
    processSteps: [
      { title: 'Discover', body: 'We align on markets, services, and what “winning” means in your ZIP or city set.' },
      { title: 'Build baseline', body: 'Technical and local footprint review; GBP and site updates sequenced for impact.' },
      { title: 'Publish & iterate', body: 'Localized content, measurement, and monthly tuning based on real queries and leads.' },
    ],
    gallery: [
      {
        src: unsplash('photo-1460925895917-afdab827c52f', 1200),
        alt: 'Analytics dashboard illustrating local search and traffic insights for a dental practice website',
        caption: 'Local performance tracking example',
      },
      {
        src: unsplash('photo-1577563908411-5077b6dc7624', 1200),
        alt: 'Smartphone showing map results for local business search',
        caption: 'Maps and mobile discovery',
      },
    ],
    relatedSlugs: ['websites', 'paid-ads'],
    faq: [
      {
        question: 'How long until we see local SEO movement?',
        answer:
          'Some GBP and on-page fixes can improve clarity within weeks; competitive rankings often compound over several months. We set expectations from your market data, not generic timelines.',
      },
      {
        question: 'Do you guarantee #1 on Google?',
        answer:
          'No ethical agency can guarantee positions. We focus on sustainable visibility, accurate service representation, and more qualified actions from the searches that matter.',
      },
      {
        question: 'What if we have multiple locations?',
        answer:
          'We structure each location with correct GBP logic, landing pages, and internal linking so locations support—not cannibalize—each other.',
      },
      {
        question: 'Do you write blog posts for SEO?',
        answer:
          'When content serves patient questions and local intent, yes—briefs and publishing can be part of scope. We avoid filler that does not help patients or conversion.',
      },
    ],
  },
  {
    slug: 'paid-ads',
    title: 'Paid Advertising',
    shortDescription:
      'Google and Meta campaigns built for dental margins—with tracking, creative testing, and clear reporting.',
    h1: 'Paid search & social ads for dental clinics',
    metaTitle: 'Dental PPC & paid social (Google, Meta)',
    metaDescription:
      'Performance-focused Google and Facebook/Instagram advertising for dental practices in Canada. Landing pages, tracking, creative testing, and transparent reporting.',
    iconKey: 'target',
    iconGradient: 'from-emerald-500 to-teal-400',
    iconColor: 'text-white',
    cardBgImage: unsplash('photo-1557682250-33bd709cbe85'),
    heroTagline: 'Buy intent you can measure—not clicks that disappear into a black box.',
    heroBullets: [
      'Search and social structures tuned for implants, Invisalign, emergency, and new-patient offers',
      'Conversion tracking aligned with calls, forms, and bookings',
      'Creative iterations grounded in your brand and compliance tone',
    ],
    forWho:
      'Practices ready to invest in paid demand with realistic targets, fast follow-up, and willingness to test offers and landing experiences.',
    included: [
      'Account architecture and campaign build aligned to your services',
      'Keyword/theme strategy and negative keyword discipline (search)',
      'Ad creative and extension recommendations; ongoing A/B mindset',
      'Budget pacing and weekly optimization cadence',
      'Reporting: spend, leads, and next actions in plain language',
    ],
    processSteps: [
      { title: 'Fit & goals', body: 'Margin, capacity, and which procedures can sustainably support acquisition cost.' },
      { title: 'Launch foundation', body: 'Tracking, landing paths, and creative that match the promise in the ad.' },
      { title: 'Scale & refine', body: 'Lean into what converts; cut waste without hiding the truth in dashboards.' },
    ],
    gallery: [
      {
        src: unsplash('photo-1542744173-8e7e5348bb09', 1200),
        alt: 'Marketing team reviewing advertising performance metrics on screen',
        caption: 'Campaign rhythm & reporting',
      },
      {
        src: unsplash('photo-1563986768609-322da13575f3', 1200),
        alt: 'Mobile phone displaying social media feed interface',
        caption: 'Paid social creative testing',
      },
    ],
    relatedSlugs: ['websites', 'local-seo'],
    faq: [
      {
        question: 'What monthly ad spend do you recommend?',
        answer:
          'Minimums depend on market and specialty. We recommend a spend level that clears learning phases and produces enough conversions to optimize—discussed transparently before launch.',
      },
      {
        question: 'Who owns the ad accounts?',
        answer:
          'You should own your Google and Meta assets; we request access and document structure so you retain control.',
      },
      {
        question: 'Can you run only Meta or only Google?',
        answer:
          'Yes. We recommend the plan that matches intent and placement hygiene; many practices combine search for intent with social for awareness.',
      },
      {
        question: 'How fast can we launch?',
        answer:
          'With tracking verified and creative approved, many builds launch in a few weeks. Rushed launches without tracking usually waste budget.',
      },
    ],
  },
  {
    slug: 'websites',
    title: 'Custom Websites',
    shortDescription:
      'Fast, trustworthy sites that turn visitors into booked appointments—with mobile-first UX and SEO-ready structure.',
    h1: 'Custom dental websites that convert',
    metaTitle: 'Dental website design & development',
    metaDescription:
      'High-converting dental practice websites: mobile-first UX, Core Web Vitals, SEO structure, and clear calls to book. Custom builds for Canadian clinics.',
    iconKey: 'monitor',
    iconGradient: 'from-indigo-500 to-purple-400',
    iconColor: 'text-white',
    cardBgImage: unsplash('photo-1557682224-5b8590cd9ec5'),
    heroTagline: 'Your front door online should feel as polished as your reception area.',
    heroBullets: [
      'Modern UI aligned with your brand and photography',
      'Speed, accessibility, and SEO-friendly IA',
      'Clear primary actions: call, book, directions, key procedures',
    ],
    forWho:
      'Practices launching new brands, redesigning dated sites, or opening additional locations that need a credible digital flagship.',
    included: [
      'UX structure and wireframe alignment on key patient journeys',
      'Visual design system applied to core templates',
      'Build on Webflow or your agreed stack; QA across devices',
      'Analytics and conversion events wired to real buttons and forms',
      'Launch checklist: redirects, metadata, and performance sanity checks',
    ],
    processSteps: [
      { title: 'Positioning', body: 'Services, differentiation, and the story patients should feel in the first screen.' },
      { title: 'Design & build', body: 'Iterative layouts, content integration, and technical implementation.' },
      { title: 'Launch & learn', body: 'Post-launch fixes, heatmaps optional, and hooks for SEO and ads.' },
    ],
    gallery: [
      {
        src: unsplash('photo-1547658719-da2b51169166', 1200),
        alt: 'Desktop computer displaying a clean modern healthcare website layout',
        caption: 'Desktop & responsive layouts',
      },
      {
        src: unsplash('photo-1512941937669-90a1b58e7e9c', 1200),
        alt: 'Mobile phone held in hand showing a responsive website',
        caption: 'Mobile-first patient journeys',
      },
    ],
    relatedSlugs: ['local-seo', 'paid-ads'],
    faq: [
      {
        question: 'Do you use templates?',
        answer:
          'We use disciplined systems—not generic dental templates that make every clinic look the same. Structure repeats; brand, photography, and copy do not.',
      },
      {
        question: 'Can you migrate my existing content?',
        answer:
          'Yes, with an audit of what to keep, merge, or retire for SEO and clarity.',
      },
      {
        question: 'Will my site be fast?',
        answer:
          'Performance is a requirement. We optimize assets, layout stability, and hosting hygiene to support Core Web Vitals and real user experience.',
      },
      {
        question: 'Who updates the site after launch?',
        answer:
          'Training and documentation can be included; many clients retain us for ongoing updates and growth experiments.',
      },
    ],
  },
  {
    slug: 'social-content',
    title: 'Content & Community',
    shortDescription:
      'Strategy-first social and content that fits your brand—creative direction aligned with real appointment goals.',
    h1: 'Social media & content for dental practices',
    metaTitle: 'Dental social media & content marketing',
    metaDescription:
      'Social media strategy, creative direction, and content for Canadian dental practices. Brand-safe, conversion-aware posting—not generic filler.',
    iconKey: 'aperture',
    iconGradient: 'from-amber-500 to-orange-400',
    iconColor: 'text-white',
    cardBgImage: unsplash('photo-1557682260-96773eb01377'),
    heroTagline: 'Posts that support trust, education, and the services you want to grow.',
    heroBullets: [
      'Editorial calendar tied to campaigns and seasons',
      'Creative specs for photo/video partners or in-office capture',
      'Community management guidelines that match your tone',
    ],
    forWho:
      'Practices investing in reputation and recall—cosmetic, ortho, family, and groups that want a coherent voice across platforms.',
    included: [
      'Channel strategy: where to show up and why',
      'Content pillars mapped to patient questions and services',
      'Post frameworks and review cadence with stakeholders',
      'Asset coordination (design, short-form video, stories) as scoped',
      'Light performance snapshots: reach, engagement, and attributed signals where available',
    ],
    processSteps: [
      { title: 'Brand & guardrails', body: 'Voice, topics to avoid, and how to showcase outcomes tastefully.' },
      { title: 'Calendar & production', body: 'Batch planning, creation sprints, and approvals that respect your clinic schedule.' },
      { title: 'Optimize', body: 'Double down on what earns trust and inquiries; trim what does not.' },
    ],
    gallery: [
      {
        src: unsplash('photo-1611162616305-c69b3fa7fbe0', 1200),
        alt: 'Grid of social media content mockups on a design workspace',
        caption: 'Social creative & grids',
      },
      {
        src: unsplash('photo-1533750516457-a7f992034fec', 1200),
        alt: 'Team planning content with sticky notes and laptop',
        caption: 'Editorial planning',
      },
    ],
    relatedSlugs: ['paid-ads', 'print'],
    faq: [
      {
        question: 'Do you guarantee viral growth?',
        answer:
          'No. We build durable brand presence and aligned calls-to-action; chasing virality often clashes with healthcare tone.',
      },
      {
        question: 'Can you work with our in-house photos?',
        answer:
          'Often yes—clean lighting and simple briefs dramatically improve results. We can also coordinate photographers where needed.',
      },
      {
        question: 'Which platforms do you support?',
        answer:
          'Typically Instagram, Facebook, and short-form surfaces that match your patients; strategy picks channels, not trends.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'Engagement quality, saves, profile actions, and downstream leads where tracking exists—reported without vanity-only scoreboards.',
      },
    ],
  },
  {
    slug: 'print',
    title: 'Print & Direct Mail',
    shortDescription:
      'Neighborhood presence that matches your digital brand—postcards, flyers, and office collateral with clear CTAs.',
    h1: 'Print & direct mail for dental practices',
    metaTitle: 'Dental print design & direct mail',
    metaDescription:
      'Print design and direct mail for dental clinics: new mover campaigns, reactivation, grand openings, and office collateral aligned with your digital brand.',
    iconKey: 'mail',
    iconGradient: 'from-rose-500 to-pink-400',
    iconColor: 'text-white',
    cardBgImage: unsplash('photo-1541701494587-cb58502866ab'),
    heroTagline: 'Tangible touchpoints for the households and corridors that matter.',
    heroBullets: [
      'Creative that mirrors your online positioning',
      'Offers and QR journeys tracked where possible',
      'Specs handled for reliable print partners',
    ],
    forWho:
      'Practices with geographic density goals, new locations, reactivation pushes, or brand consistency across physical and digital.',
    included: [
      'Concept and copy for selected print formats',
      'Design files and print-ready handoff',
      'Guidance on targeting models (new movers, radius mail, etc.)',
      'Integration notes: phone, URL, and promo codes for attribution',
    ],
    processSteps: [
      { title: 'Objective', body: 'Who we are reaching, with what offer, and what action we want.' },
      { title: 'Design', body: 'Layouts tested for readability at mailbox distance.' },
      { title: 'Produce', body: 'Print partner coordination and quality checks on proofs.' },
    ],
    gallery: [
      {
        src: unsplash('photo-1586075010923-2dd45780fb8e', 1200),
        alt: 'Printed marketing postcards and brochures spread on a table',
        caption: 'Direct mail & collateral',
      },
      {
        src: unsplash('photo-1561070791-2526d30994b5', 1200),
        alt: 'Graphic design workspace with color swatches and print samples',
        caption: 'Print-ready design',
      },
    ],
    relatedSlugs: ['social-content', 'local-seo'],
    faq: [
      {
        question: 'Do you handle postage and mailing lists?',
        answer:
          'We can coordinate with vendors; list strategy and compliance are scoped per campaign. You approve data use.',
      },
      {
        question: 'Can print match our website?',
        answer:
          'Yes—that is the point. Visual system, fonts within print constraints, and messaging stay aligned.',
      },
      {
        question: 'What is a typical turnaround?',
        answer:
          'Creative and proofing often take a few weeks; print and mail add production time. Rush fees may apply with vendors.',
      },
      {
        question: 'Is print still effective?',
        answer:
          'For many markets, tactile mail plus digital follow-up still works—especially for hyper-local offers and reactivation.',
      },
    ],
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    shortDescription:
      'Practical AI: chat, reminders, overflow coverage—implemented with privacy awareness and human oversight.',
    h1: 'AI & automation for dental front desks',
    metaTitle: 'Dental AI receptionist & workflow automation',
    metaDescription:
      'AI-assisted chat, reminders, and operations automation for dental practices. Canadian privacy awareness, human escalation, and practical workflows.',
    iconKey: 'cpu',
    iconGradient: 'from-violet-500 to-fuchsia-400',
    iconColor: 'text-white',
    cardBgImage: unsplash('photo-1557672172-298e090bd0f1'),
    heroTagline: 'Automate repetitive patient touchpoints without sounding robotic.',
    heroBullets: [
      'After-hours and peak-time conversational coverage where appropriate',
      'Reminder and follow-up flows aligned with your PMS habits',
      'Governance: escalation paths and policy-friendly scripting',
    ],
    forWho:
      'Busy practices losing calls and chats, multi-location groups standardizing first touch, or teams piloting AI with conservative risk posture.',
    included: [
      'Workflow mapping: what should never be automated vs. what can be',
      'Tool selection or configuration within your stack constraints',
      'Scripting and QA passes with your team',
      'Training for staff handoffs and exception handling',
    ],
    processSteps: [
      { title: 'Map reality', body: 'How patients reach you today and where leaks happen.' },
      { title: 'Pilot', body: 'Limited rollout with logging and human review.' },
      { title: 'Expand', body: 'Scale what holds up; retire what does not.' },
    ],
    gallery: [
      {
        src: unsplash('photo-1531746797559-2fa8709246c3', 1200),
        alt: 'Chat interface mockup on laptop showing customer support conversation',
        caption: 'Chat & handoff flows',
      },
      {
        src: unsplash('photo-1454165804606-c3d57bc86b40', 1200),
        alt: 'Office desk with phone and scheduling calendar on screen',
        caption: 'Front-desk alignment',
      },
    ],
    relatedSlugs: ['websites', 'paid-ads'],
    faq: [
      {
        question: 'Will AI replace our front desk?',
        answer:
          'No—it should reduce repetitive load and after-hours gaps while your team handles nuance, billing questions, and relationship care.',
      },
      {
        question: 'How do you think about privacy?',
        answer:
          'We align flows with Canadian expectations and your counsel’s guidance; sensitive storytelling never belongs in automated scripts.',
      },
      {
        question: 'What platforms do you integrate with?',
        answer:
          'Depends on your PMS and telephony. We scope realistic integrations versus manual handoff.',
      },
      {
        question: 'Can we start small?',
        answer:
          'Yes—narrow pilots (e.g., missed-call SMS or after-hours chat) often prove value fastest.',
      },
    ],
  },
];

export const servicesBySlug: Record<string, ServiceDefinition> = Object.fromEntries(
  servicesOrdered.map((s) => [s.slug, s])
);

export function getServiceBySlug(slug: string | undefined): ServiceDefinition | null {
  if (!slug) return null;
  return servicesBySlug[slug] ?? null;
}

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}

export function buildServicesHubJsonLd(): Record<string, unknown> {
  const pageUrl = `${SITE_ORIGIN}/services`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${servicesHub.metaTitle} | Dentech Digital`,
        description: servicesHub.metaDescription,
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#itemlist`,
        itemListElement: servicesOrdered.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.title,
          item: `${SITE_ORIGIN}${servicePath(s.slug)}`,
        })),
      },
    ],
  };
}

export function buildServiceBreadcrumbJsonLd(service: ServiceDefinition): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_ORIGIN },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_ORIGIN}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${SITE_ORIGIN}${servicePath(service.slug)}`,
      },
    ],
  };
}

export function buildServiceWebPageJsonLd(service: ServiceDefinition): Record<string, unknown> {
  const url = `${SITE_ORIGIN}${servicePath(service.slug)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `${service.metaTitle} | Dentech Digital`,
        description: service.metaDescription,
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        description: service.shortDescription,
        provider: { '@type': 'Organization', name: 'Dentech Digital', url: SITE_ORIGIN },
        areaServed: { '@type': 'Country', name: 'Canada' },
      },
    ],
  };
}

/** Single JSON-LD payload for service detail (breadcrumb + WebPage + Service). */
export function buildServiceDetailStructuredData(service: ServiceDefinition): Record<string, unknown> {
  const url = `${SITE_ORIGIN}${servicePath(service.slug)}`;
  const breadcrumb = buildServiceBreadcrumbJsonLd(service) as Record<string, unknown>;
  const inner = buildServiceWebPageJsonLd(service)['@graph'] as Record<string, unknown>[];
  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumb, ...inner],
  };
}
