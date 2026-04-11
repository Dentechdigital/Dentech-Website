import { SITE_ORIGIN } from './aboutContent';
import type { FaqAccordionItem } from '../components/FaqAccordion';

export type CaseStudyMetric = {
  label: string;
  value: string;
  hint?: string;
};

export type CaseStudyTimelineItem = {
  title: string;
  body: string;
};

export type CaseStudyGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  anchorId: string;
  clientName: string;
  industry: string;
  location: string;
  timeframe: string;
  headline: string;
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  context: { title: string; paragraphs: string[] };
  owned: { title: string; bullets: string[] };
  results: { title: string; paragraphs: string[]; metrics: CaseStudyMetric[] };
  system: { title: string; steps: { title: string; body: string }[] };
  artifacts: CaseStudyGalleryItem[];
};

export type ProofStat = {
  label: string;
  value: string;
  sublabel?: string;
};

export type WorkGalleryCategory = 'websites' | 'social' | 'print';

export type WorkGalleryItem = {
  id: string;
  category: WorkGalleryCategory;
  src: string;
  alt: string;
  title: string;
  description: string;
};

/** Six slots for mixed proof assets (web, wraps, print). Set `src` when files exist under `public/`. */
export type ProofOfWorkSlot = {
  id: string;
  categoryLabel: string;
  hint: string;
  /** Path under `public/`, e.g. `/case-studies/proof/pow-1.png` */
  src?: string;
  alt?: string;
};

export type TrustLogo = {
  name: string;
  /** Optional logo path under `public/`. When absent, render a text badge. */
  src?: string;
};

export const caseStudiesPageMeta = {
  title: 'Case Study',
  description:
    'How Dentech Digital helped The Smile Doctors generate 1300+ new patient bookings in year one with a full-stack system: website, SEO/GEO, Google & Meta ads, social, content, and print.',
};

/** Full-bleed hero background on `/case-studies` (same pattern as service detail `PageHeroAboutStyle`). */
export const caseStudiesHeroBannerPath = '/case-studies/hero-case-studies-banner.png';

/** `object-position` for the hero banner (dark copy zone left, proof/table art right). */
export const caseStudiesHeroImageClassName =
  'object-cover object-[28%_center] sm:object-[32%_center] lg:object-[36%_center]';

export const caseStudiesProofAtGlance: ProofStat[] = [
  {
    label: 'New patient bookings',
    value: '1300+',
    sublabel: 'Smile Doctors — first full year',
  },
  {
    label: 'Growth window',
    value: '< 12 mo',
    sublabel: 'Measured booking velocity in the launch year',
  },
  {
    label: 'Markets',
    value: 'ON & QC',
    sublabel: 'Ottawa + Gatineau footprint',
  },
  {
    label: 'Channels in one team',
    value: 'Full stack',
    sublabel: 'Web, SEO/GEO, paid, social, print & signage',
  },
];

export const caseStudiesScopeBadges = [
  'Custom websites',
  'SEO & GEO',
  'Google & Meta ads',
  'Social & originals',
  'Print & signage',
];

export const caseStudiesToc = [
  { id: 'proof', label: 'Proof' },
  { id: 'smile-doctors', label: 'Smile Doctors' },
  { id: 'our-work', label: 'Our work' },
  { id: 'trust', label: 'Clients' },
  { id: 'faq', label: 'FAQ' },
  { id: 'proof-of-work', label: 'Work proofs' },
  { id: 'cta', label: 'Next step' },
] as const;

export const smileDoctorsCaseStudy: CaseStudy = {
  slug: 'smile-doctors',
  anchorId: 'smile-doctors',
  clientName: 'The Smile Doctors',
  industry: 'Dental group',
  location: 'Ottawa–Gatineau region',
  timeframe: 'First 12 months (year one)',
  headline: '1300+ new bookings in year one with a full-stack growth system',
  summary:
    'We operated as the outsourced marketing department: digital properties, discovery (SEO/GEO), demand capture (Google & Meta), social presence, original creative, and physical brand presence through signage and print.',
  heroImage: '/case-studies/smile-doctors-proof.png',
  heroImageAlt: 'Smile Doctors patient growth summary showing 1309 patient count',
  context: {
    title: 'Context',
    paragraphs: [
      'The group needed predictable patient flow across multiple communities while competing in a high-intent local market. The mandate was not “more posts”—it was measurable booked appointments tied to clear offers, strong local relevance, and a trustworthy brand experience online and on-location.',
      'We aligned messaging to insurance realities (including CDCP-related conversations where relevant), service mix, and the geographic footprint spanning Ottawa, ON and Gatineau, QC—so discovery, ads, and on-site creative all pointed to the same story.',
    ],
  },
  owned: {
    title: 'What we owned end-to-end',
    bullets: [
      'Custom website strategy, IA, copy, design, build, and ongoing management',
      'SEO + GEO: local relevance, entity clarity, service pages, and measurable queries',
      'Paid acquisition on Google and Meta with creative testing and landing alignment',
      'Social management and original content production (not generic templates)',
      'Signage, window wraps, and core print materials for on-street visibility and trust',
    ],
  },
  results: {
    title: 'Results',
    paragraphs: [
      'The practice crossed 1300+ new bookings in the first year while investing across web, organic, paid, social, and physical touchpoints—so growth was not dependent on a single channel failing.',
      'We report in business language: booked patients, cost-per-lead trends, creative winners, and the next set of tests—not vanity dashboards.',
    ],
    metrics: [
      { label: 'Net new bookings', value: '1300+', hint: 'Year-one performance window' },
      { label: 'Markets served', value: 'ON & QC', hint: 'Ottawa + Gatineau footprint' },
      { label: 'Paid + organic', value: 'Integrated', hint: 'Search, social, conversion paths' },
      { label: 'Physical brand', value: 'Print', hint: 'Signage, wraps, collateral' },
    ],
  },
  system: {
    title: 'How the system compounds',
    steps: [
      { title: 'Discover', body: 'Maps, search, and social proof establish credibility and answers patients actually need.' },
      { title: 'Convert', body: 'Fast site, clear offers, and aligned ad creative reduce friction to booking.' },
      { title: 'Reinforce', body: 'Content, reviews momentum, and on-location branding increase trust after the click.' },
    ],
  },
  artifacts: [
    {
      src: '/case-studies/smile-doctors-proof.png',
      alt: 'Patient count documentation excerpt',
      caption: 'Documented patient volume trajectory (redacted fields where required).',
    },
  ],
};

export const caseStudiesOrdered: CaseStudy[] = [smileDoctorsCaseStudy];

export const caseStudiesBySlug: Record<string, CaseStudy> = Object.fromEntries(
  caseStudiesOrdered.map((c) => [c.slug, c])
);

/** Placeholder gallery — replace images under `public/case-studies/work/` when ready. */
export const caseStudiesWorkGallery: WorkGalleryItem[] = [
  {
    id: 'w1',
    category: 'websites',
    src: '/case-studies/work/website-1.png',
    alt: 'Placeholder website mockup 1',
    title: 'Website — conversion-led IA',
    description: 'Placeholder: replace with a full-width mock or screenshot.',
  },
  {
    id: 'w2',
    category: 'websites',
    src: '/case-studies/work/website-2.png',
    alt: 'Placeholder website mockup 2',
    title: 'Website — service depth',
    description: 'Placeholder: service pages, proof blocks, mobile parity.',
  },
  {
    id: 'w3',
    category: 'websites',
    src: '/case-studies/work/website-3.png',
    alt: 'Placeholder website mockup 3',
    title: 'Website — brand refresh',
    description: 'Placeholder: before/after or component library snapshot.',
  },
  {
    id: 's1',
    category: 'social',
    src: '/case-studies/work/social-1.png',
    alt: 'Placeholder social creative 1',
    title: 'Social — campaign creative',
    description: 'Placeholder: Meta or short-form creative tile.',
  },
  {
    id: 's2',
    category: 'social',
    src: '/case-studies/work/social-2.png',
    alt: 'Placeholder social creative 2',
    title: 'Social — educational thread',
    description: 'Placeholder: carousel or story frames.',
  },
  {
    id: 's3',
    category: 'social',
    src: '/case-studies/work/social-3.png',
    alt: 'Placeholder social creative 3',
    title: 'Social — offer test',
    description: 'Placeholder: creative variant for testing hooks.',
  },
  {
    id: 'p1',
    category: 'print',
    src: '/case-studies/work/print-1.png',
    alt: 'Placeholder print design 1',
    title: 'Print — signage system',
    description: 'Placeholder: window or exterior signage layout.',
  },
  {
    id: 'p2',
    category: 'print',
    src: '/case-studies/work/print-2.png',
    alt: 'Placeholder print design 2',
    title: 'Print — event collateral',
    description: 'Placeholder: symposium handout or booth panel.',
  },
  {
    id: 'p3',
    category: 'print',
    src: '/case-studies/work/print-3.png',
    alt: 'Placeholder print design 3',
    title: 'Print — brand stationery',
    description: 'Placeholder: business cards, letterhead, or mailer.',
  },
];

/** Drop final JPG/PNG into `public/case-studies/proof/` and set `src` + `alt` on each slot. */
export const caseStudiesProofOfWorkSlots: ProofOfWorkSlot[] = [
  { id: 'pow-1', categoryLabel: 'Website', hint: 'Desktop home or key landing screenshot' },
  { id: 'pow-2', categoryLabel: 'Website', hint: 'Mobile frame or high-converting service page' },
  { id: 'pow-3', categoryLabel: 'Window wrap', hint: 'Storefront or vinyl mock / install photo' },
  { id: 'pow-4', categoryLabel: 'Print', hint: 'Brochure, poster, or direct mail spread' },
  { id: 'pow-5', categoryLabel: 'Signage', hint: 'Interior panel, wayfinding, or exterior board' },
  { id: 'pow-6', categoryLabel: 'Campaign', hint: 'Meta/Google creative, OOH, or social proof tile' },
];

export const caseStudiesTrustLogos: TrustLogo[] = [
  { name: 'The Smile Doctors' },
  { name: 'Google Ads' },
  { name: 'Meta Business' },
  { name: 'Webflow' },
];

export const caseStudiesFaq: FaqAccordionItem[] = [
  {
    question: 'How do you measure success for a dental group like Smile Doctors?',
    answer:
      'We anchor reporting to booked appointments and patient acquisition costs—not likes. Depending on access, we align on PMS exports, booking logs, call tracking, and UTM hygiene so paid, organic, and social each have defensible attribution boundaries.',
  },
  {
    question: 'Can you really run SEO and GEO without “keyword tricks”?',
    answer:
      'Yes. GEO is entity clarity + trustworthy depth: consistent facts, excellent service pages, and content that matches how people ask questions in classic search and AI experiences. The goal is to be summarized accurately, not to game snippets.',
  },
  {
    question: 'What does “full-stack” include in practice?',
    answer:
      'Anything required to communicate, convert, and reinforce trust: website, SEO/GEO, paid media, social and originals, analytics, and physical branding like signage and print. Exact scope is scoped after a strategy call.',
  },
  {
    question: 'Do you work outside Ottawa?',
    answer:
      'Yes. We are Ottawa-based with hybrid delivery across Canada (and select international clients). Local programs are tailored to real service areas, competition, and language needs.',
  },
  {
    question: 'How fast can we launch?',
    answer:
      'Timeline depends on creative volume, locations, compliance review, and whether we are building net-new properties or migrating content. We publish a phased roadmap with milestones so you always know what ships when.',
  },
  {
    question: 'Who owns the creative files and accounts?',
    answer:
      'You do. We document access, handoff assets, and keep admin ownership clear—no hostage situations. Migration support is part of how we work.',
  },
  {
    question: 'What is required from our team operationally?',
    answer:
      'A point person for approvals, access to booking data where possible, and timely feedback on clinical accuracy. We keep requests practical for busy practices.',
  },
];

export function buildCaseStudiesPageJsonLd(): Record<string, unknown> {
  const pageUrl = `${SITE_ORIGIN}/case-studies`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${caseStudiesPageMeta.title} | Dentech Digital`,
        description: caseStudiesPageMeta.description,
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#case-study-list`,
        itemListElement: caseStudiesOrdered.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.clientName,
          description: c.headline,
        })),
      },
    ],
  };
}
