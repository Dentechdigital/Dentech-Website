import { SITE_ORIGIN } from './aboutContent';

/** Lucide icon key used by Services grid / detail pages */
export type ServiceIconKey = 'map' | 'target' | 'monitor' | 'aperture' | 'mail' | 'cpu';

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
  heroTagline: string;
  heroBullets: string[];
  /** Opening paragraph on the detail page */
  overview: string;
  forWho: string;
  included: string[];
  processSteps: { title: string; body: string }[];
  /** Plain-text outcome signals (no imagery) */
  outcomes: string[];
  relatedSlugs: [string, string];
  faq: ServiceFaqItem[];
};

export const servicesHub = {
  metaTitle: 'Dental Marketing Services | Ottawa & Canada',
  metaDescription:
    'Full-funnel dental marketing services for Ottawa and Canada: local SEO/GEO, Google Maps, paid ads, websites, social content, print, and AI automation for growth-focused clinics.',
  h1: 'Dental marketing services built for Canadian practices',
  intro:
    'From classic search and Maps to generative answers (AI Overviews, assistants, and answer engines), we help patients find and trust you—then book. One team connects strategy, creative, media, and engineering, headquartered in Ottawa with hybrid delivery across Canada. Below, each service page explains who it fits, what we deliver, how we work together, and what “good” looks like in plain terms.',
  funnelPitch: [
    {
      title: 'One funnel, one team',
      body: 'Local discovery, AI-visible facts about your practice, your website, paid media, social proof, and follow-up should reinforce each other—not compete. We align channels so spend and effort compound.',
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
    question: 'What is GEO, and why does it matter alongside SEO?',
    answer:
      'GEO (generative engine optimization) is how clearly and accurately your practice shows up in AI-powered search and answer experiences—not only traditional rankings. Consistent facts (brand, address, hours, services, providers), strong service pages, and trustworthy copy help models summarize you correctly. We pair GEO with local SEO and Maps so you win in both classic and generative discovery.',
  },
  {
    question: 'Do you work with practices outside Ottawa?',
    answer:
      'Yes. We are headquartered in Ottawa and partner with practices across Canada (and select international clients). Local SEO, GEO, and creative are tailored to your real service areas and market.',
  },
  {
    question: 'Can I start with one service and add others later?',
    answer:
      'Absolutely. Many clients begin where the need is clearest—often website plus local SEO/GEO or paid search—then expand as tracking and capacity mature. We still design with the full funnel in mind.',
  },
  {
    question: 'Are these pages the same as your ad landing pages?',
    answer:
      'These URLs are built to be fast, focused, and strong for both SEO and GEO. For paid campaigns you can add UTM parameters to the same paths, or we can duplicate variants with permission—core messaging stays consistent.',
  },
  {
    question: 'How do proposals and pricing work?',
    answer:
      'Scope depends on market competition, number of locations, creative volume, and ad spend. After a strategy call we outline deliverables, timelines, and investment in writing so there are no surprises.',
  },
  {
    question: 'Do you offer services in French?',
    answer:
      'Yes—campaign languages can include English, French, and Arabic where your patients expect it, aligned with your brand and regulatory context.',
  },
  {
    question: 'What makes Dentech different from a general marketing agency?',
    answer:
      'Depth in dental: same team covers web, SEO & GEO, paid, social, print, and practical AI—so handoffs are minimal and accountability stays with one partner.',
  },
];

export const servicesOrdered: ServiceDefinition[] = [
  {
    slug: 'local-seo',
    title: 'Local SEO, GEO & Maps',
    shortDescription:
      'Classic rankings plus generative visibility: we tune your Google Business Profile, site, and entity signals so patients find you in Search, Maps, and AI-powered answers.',
    h1: 'Local SEO, GEO & Google Maps for dental practices',
    metaTitle: 'Local SEO, GEO & Maps for Dentists | Ottawa & Canada',
    metaDescription:
      'Dental local SEO, generative engine optimization (GEO), and Google Business Profile for Canadian practices. Maps visibility, traditional rankings, and accurate presence in AI search.',
    iconKey: 'map',
    iconGradient: 'from-blue-500 to-cyan-400',
    iconColor: 'text-white',
    heroTagline: 'Show up in classic search, Maps, and the answers patients get from AI tools— with facts that match everywhere.',
    heroBullets: [
      'GBP optimization, categories, services, and photo discipline for Maps & Search',
      'On-site structure: clear service entities, internal linking, and pages AI systems can cite',
      'GEO layer: consistent NAP, provider bios, FAQ-style answers, and schema where appropriate',
      'Review velocity and reputation signals aligned with your real service areas',
    ],
    overview:
      'Most new patients still start with Google—Search, Maps, and increasingly AI summaries that pull from your profile and site. We align your Google Business Profile, on-site service pages, and factual consistency so humans and automated systems describe your practice the same way. Work is paced for your market: dense cities need different tactics than suburban or regional draws.',
    forWho:
      'Single-location and multi-site general, family, cosmetic, orthodontic, and specialty practices competing in Canadian markets—from tight urban corridors to wider service areas.',
    included: [
      'Google Business Profile audit and ongoing optimization roadmap',
      'Local + GEO content audit: entities, service clarity, and question-based copy patients (and models) expect',
      'Local keyword and competitor snapshot for your market',
      'On-page recommendations, FAQ-style sections, and content briefs for priority treatments',
      'Structured data guidance (where it helps) and citation / NAP consistency checks',
      'Monthly readout: rankings, GBP actions, and directional GEO signals where observable',
    ],
    processSteps: [
      { title: 'Discover', body: 'We align on markets, services, and what “winning” means in your ZIP or city set—including how you should appear in AI summaries.' },
      { title: 'Build baseline', body: 'Technical and local footprint review; GBP, site, and entity consistency sequenced for impact in Search and generative surfaces.' },
      { title: 'Publish & iterate', body: 'Localized, trustworthy content; measurement; and monthly tuning based on queries, leads, and evolving search/AI behavior.' },
    ],
    outcomes: [
      'Clearer Maps presence for the services you want to grow',
      'Service pages that answer real patient questions in plain language',
      'Fewer mismatches between GBP, website, and third-party listings',
      'Reporting your team can act on—not a spreadsheet nobody opens',
    ],
    relatedSlugs: ['websites', 'paid-ads'],
    faq: [
      {
        question: 'What is GEO vs SEO for my dental practice?',
        answer:
          'SEO is about ranking and visibility in traditional search results and Maps. GEO (generative engine optimization) is about being represented accurately when users get answers from AI-powered search and assistants—clear facts, consistent entity information, and authoritative pages matter for both.',
      },
      {
        question: 'How long until we see local SEO or GEO traction?',
        answer:
          'Some GBP and clarity fixes can improve how you appear within weeks; rankings and AI summaries often depend on competitive density and how complete your digital footprint is. We set expectations from your market data, not generic timelines.',
      },
      {
        question: 'Do you guarantee #1 on Google or a specific AI answer?',
        answer:
          'No. We focus on accurate, trustworthy visibility and more qualified actions. Generative surfaces change often; we build durable fundamentals rather than chase guarantees no one can control.',
      },
      {
        question: 'What if we have multiple locations?',
        answer:
          'We structure each location with correct GBP logic, landing pages, and internal linking so locations support—not cannibalize—each other—critical for both SEO and GEO consistency.',
      },
      {
        question: 'Do you write blog posts or FAQ content?',
        answer:
          'When it serves patient questions, local intent, and clearer entity understanding for search and AI, yes. We avoid filler that does not help patients or conversion.',
      },
    ],
  },
  {
    slug: 'paid-ads',
    title: 'Paid Advertising',
    shortDescription:
      'Google and Meta campaigns built for dental margins—with tracking, creative testing, and clear reporting.',
    h1: 'Paid search & social ads for dental clinics',
    metaTitle: 'Dental PPC & Paid Social Agency | Ottawa & Canada',
    metaDescription:
      'Performance-focused Google and Facebook/Instagram advertising for dental practices in Canada. Landing pages, tracking, creative testing, and transparent reporting.',
    iconKey: 'target',
    iconGradient: 'from-emerald-500 to-teal-400',
    iconColor: 'text-white',
    heroTagline: 'Buy intent you can measure—not clicks that disappear into a black box.',
    heroBullets: [
      'Search and social structures tuned for implants, Invisalign, emergency, and new-patient offers',
      'Conversion tracking aligned with calls, forms, and bookings',
      'Creative iterations grounded in your brand and compliance tone',
    ],
    overview:
      'Paid media works when the promise in the ad matches the landing experience and someone answers the phone or form quickly. We structure accounts for the procedures you want, set honest tracking, and review performance in language your front desk and leadership can use. You own the ad accounts; we document structure so you are never locked in.',
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
    outcomes: [
      'Defined cost and volume signals for leads you actually want',
      'Less budget wasted on irrelevant queries or broad targeting',
      'Creative and landing tests tied to real booking outcomes',
      'Weekly clarity on what to scale, pause, or fix next',
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
      'Fast, trustworthy sites that convert—with mobile-first UX, SEO- and GEO-ready structure so search and AI surfaces can understand your practice.',
    h1: 'Custom dental websites that convert',
    metaTitle: 'Dental Website Design Agency | Ottawa & Canada',
    metaDescription:
      'High-converting dental websites: mobile-first UX, Core Web Vitals, SEO and GEO-friendly structure, and clear calls to book. Custom builds for Canadian clinics.',
    iconKey: 'monitor',
    iconGradient: 'from-indigo-500 to-purple-400',
    iconColor: 'text-white',
    heroTagline: 'Your front door online should feel as polished as your reception area.',
    heroBullets: [
      'Modern UI aligned with your brand and photography',
      'Speed, accessibility, and information architecture that supports SEO and GEO',
      'Clear primary actions: call, book, directions, key procedures',
    ],
    overview:
      'Your website is where search, ads, and referrals land—so it has to load fast, read clearly on phones, and make booking obvious. We structure pages around the procedures and locations you care about, wire analytics to real actions, and hand off with redirects and metadata handled so you do not lose equity from an old site.',
    forWho:
      'Practices launching new brands, redesigning dated sites, or opening additional locations that need a credible digital flagship.',
    included: [
      'UX structure and wireframe alignment on key patient journeys',
      'Visual design system applied to core templates',
      'Build on Webflow or your agreed stack; QA across devices',
      'Analytics and conversion events wired to real buttons and forms',
      'Launch checklist: redirects, metadata, structured cues where helpful, and performance sanity checks',
    ],
    processSteps: [
      { title: 'Positioning', body: 'Services, differentiation, and the story patients should feel in the first screen.' },
      { title: 'Design & build', body: 'Iterative layouts, content integration, and technical implementation.' },
      { title: 'Launch & learn', body: 'Post-launch fixes, heatmaps optional, and hooks for SEO, GEO, and ads.' },
    ],
    outcomes: [
      'Faster loads and stable layout on real phones—not just lab scores',
      'Obvious paths to call, book, or get directions',
      'Service and location pages that support SEO and GEO programs',
      'Analytics that reflect what patients actually do on your site',
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
          'Yes, with an audit of what to keep, merge, or retire for SEO, GEO consistency, and clarity.',
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
    metaTitle: 'Dental Social Media & Content Agency | Ottawa & Canada',
    metaDescription:
      'Social media strategy, creative direction, and content for Canadian dental practices. Brand-safe, conversion-aware posting—not generic filler.',
    iconKey: 'aperture',
    iconGradient: 'from-amber-500 to-orange-400',
    iconColor: 'text-white',
    heroTagline: 'Posts that support trust, education, and the services you want to grow.',
    heroBullets: [
      'Editorial calendar tied to campaigns and seasons',
      'Creative specs for photo/video partners or in-office capture',
      'Community management guidelines that match your tone',
    ],
    overview:
      'Social should reinforce the same story as your website and front desk—not random trends. We pick channels with intent, map content to patient questions and the services you want to fill, and set approval rhythms that work for busy clinics. Performance is reported without vanity-only scoreboards.',
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
    outcomes: [
      'A steady voice patients recognize across platforms',
      'Content tied to procedures and seasons you care about',
      'Fewer “post for the sake of posting” weeks',
      'Clearer sense of what to repeat and what to stop',
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
    metaTitle: 'Dental Print Design & Direct Mail | Ottawa & Canada',
    metaDescription:
      'Print design and direct mail for dental clinics: new mover campaigns, reactivation, grand openings, and office collateral aligned with your digital brand.',
    iconKey: 'mail',
    iconGradient: 'from-rose-500 to-pink-400',
    iconColor: 'text-white',
    heroTagline: 'Tangible touchpoints for the households and corridors that matter.',
    heroBullets: [
      'Creative that mirrors your online positioning',
      'Offers and QR journeys tracked where possible',
      'Specs handled for reliable print partners',
    ],
    overview:
      'Print still works when the audience, offer, and follow-up path are clear—especially for hyper-local radius, new movers, or reactivation. We align copy and design with your digital brand, use trackable phone or URL paths where possible, and hand off print-ready files with specs your vendor expects.',
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
    outcomes: [
      'Mail and collateral that match your online story',
      'Clear calls to action patients can act on in one step',
      'Attribution hooks so you know what to repeat',
      'Fewer print surprises at proof stage',
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
    metaTitle: 'Dental AI Receptionist & Automation | Ottawa & Canada',
    metaDescription:
      'AI-assisted chat, reminders, and operations automation for dental practices. Canadian privacy awareness, human escalation, and practical workflows.',
    iconKey: 'cpu',
    iconGradient: 'from-violet-500 to-fuchsia-400',
    iconColor: 'text-white',
    heroTagline: 'Automate repetitive patient touchpoints without sounding robotic.',
    heroBullets: [
      'After-hours and peak-time conversational coverage where appropriate',
      'Reminder and follow-up flows aligned with your PMS habits',
      'Governance: escalation paths and policy-friendly scripting',
    ],
    overview:
      'Automation should reduce repetitive load on staff—not replace judgment on fees, clinical questions, or upset patients. We map how patients reach you today, pilot narrow flows (e.g. after-hours chat or reminders) with logging, and define escalation paths that match your policies and Canadian privacy expectations.',
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
    outcomes: [
      'Fewer missed conversations at peak and after hours',
      'Scripts and flows your team trusts to hand off cleanly',
      'Small pilots before you commit to full rollout',
      'Clear rules for what stays with a human',
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
