import { SITE_ORIGIN } from './aboutContent';

/** Lucide icon key used by Services grid / detail pages */
export type ServiceIconKey = 'map' | 'target' | 'monitor' | 'aperture' | 'mail' | 'cpu';

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

/** Subsection for “Under the hood” technical copy on service detail pages */
export type ServiceTechnicalSection = {
  heading: string;
  paragraphs: string[];
};

/** Unique mid-page block per service—different layout variants, not one template */
export type ServiceSpotlight =
  | { variant: 'queryChips'; title: string; queries: string[] }
  | { variant: 'ledgerLines'; title: string; lines: string[] }
  | { variant: 'firstScreenChecks'; title: string; checks: string[] }
  | { variant: 'weekStrip'; title: string; strips: string[] }
  | { variant: 'journeySteps'; title: string; steps: { label: string; detail: string }[] }
  | {
      variant: 'splitLanes';
      title: string;
      leftTitle: string;
      leftItems: string[];
      rightTitle: string;
      rightItems: string[];
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
  /** Plain-language definition for readers new to the service */
  whatItIs: string;
  /** Why practices invest—symptoms, risk, opportunity */
  whyItMatters: string[];
  forWho: string;
  /** Optional: readiness before buying (tracking, site, capacity) */
  prerequisites?: string[];
  included: string[];
  processSteps: { title: string; body: string }[];
  /** Credible technical depth—platforms, signals, mechanisms */
  technicalDeepDive: ServiceTechnicalSection[];
  /** Trust-building “what we see go wrong” */
  commonMistakes: string[];
  /** Plain-text outcome signals (no imagery) */
  outcomes: string[];
  /** How we judge progress with you */
  metricsWeWatch: string[];
  relatedSlugs: [string, string];
  /** Override default FAQ section title on the detail page */
  faqSectionTitle?: string;
  /** Override default FAQ section subheading */
  faqSectionSubheading?: string;
  /** Service-specific spotlight (layout + copy differs by variant) */
  spotlight?: ServiceSpotlight;
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
      'What dental local SEO and GEO are, why they matter, and how GBP, your site, and citations work together for Canadian practices—technical depth, honest timelines, no ranking guarantees.',
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
    whatItIs:
      'Local SEO (search engine optimization) is the work of helping your practice show up when people search in your area—for example “dentist near me,” “emergency dentist,” or “Invisalign [city].” It combines your Google Business Profile (GBP—the Maps listing), your website, reviews, and citations so Google understands who you are, where you are, and what you treat. GEO—generative engine optimization—is the newer sibling: it is about being described accurately when patients get answers from AI overviews and assistants, not only blue links. Both depend on the same foundation: consistent facts and clear service language.',
    whyItMatters: [
      'High-intent patients compare you in seconds on Maps and mobile search; if categories, photos, or hours are wrong, they call someone else.',
      'Specialty and fee-for-service growth (implants, ortho, sleep, perio surgery) needs pages and entities that match how people actually search—not only how clinicians label procedures.',
      'AI summaries and Maps pull from GBP and your site; when those disagree, patients lose trust before they ever reach your front desk.',
      'Multi-location groups live or die on whether each location has correct landing pages and GBP logic—otherwise locations compete with each other.',
      'Reviews and recency signals influence both human choice and local ranking; ignoring reputation is effectively choosing invisibility.',
    ],
    prerequisites: [
      'Accurate legal business name, address, and phone as you want them shown publicly.',
      'Access to Google Business Profile (owner or manager) and Google Search Console for the website domain.',
      'A realistic list of priority procedures and markets (neighbourhoods, cities, or radii) you want to grow.',
    ],
    technicalDeepDive: [
      {
        heading: 'Google Business Profile (GBP) and Maps',
        paragraphs: [
          'GBP is the structured record Google uses for Maps, local pack results, and many knowledge-style answers. Primary and secondary categories, services with descriptions, attributes (e.g. accessibility), photos, and Q&A all send signals about relevance. We align categories with how patients search, not only how software defaults suggest.',
          'Photo cadence and quality affect engagement; we give practical capture briefs so your team or photographer can feed the profile without clutter.',
        ],
      },
      {
        heading: 'On-site structure, entities, and internal links',
        paragraphs: [
          'Search engines and AI systems both benefit when each major procedure has a dedicated page with plain-language headings, FAQs, and internal links to related services and providers. Thin “doorway” pages hurt; specific, helpful pages help.',
          'Internal linking distributes authority and clarifies relationships—for example linking “dental implants” to “bone grafting” and “sedation dentistry” where appropriate.',
        ],
      },
      {
        heading: 'NAP, citations, and schema (where it helps)',
        paragraphs: [
          'NAP stands for name, address, and phone—your core identity online. Inconsistent NAP across directories confuses Google and patients. We audit high-impact listings and fix conflicts without chasing every obsolete directory.',
          'Structured data (JSON-LD schema) can clarify organization, local business, and FAQs when implemented correctly; we recommend it where it reflects visible content, not as a gimmick.',
        ],
      },
      {
        heading: 'GEO in plain terms',
        paragraphs: [
          'Generative systems summarize from multiple sources. When your GBP, site, and bios agree on doctors, hours, insurance posture, and flagship services, summaries are more likely to be accurate. GEO is not “tricking AI”—it is disciplined factual marketing plus strong pages worth citing.',
        ],
      },
    ],
    commonMistakes: [
      'Keyword-stuffed city pages that read fake and get ignored by both users and algorithms.',
      'Ignoring the difference between brand search and non-brand local search—both need different content and measurement.',
      'Letting a marketing vendor “own” GBP under their email; you should retain ownership.',
      'Chasing blog volume instead of answering the twenty questions patients in your market actually ask.',
      'Treating reviews as “someone else’s job” instead of a steady, ethical request process tied to real visits.',
    ],
    metricsWeWatch: [
      'Non-brand impressions and clicks in Search Console for priority local queries.',
      'GBP actions: calls, direction requests, website taps—trended month over month.',
      'Rank distribution for tracked terms (e.g. top 3 / top 10) for each priority service and location.',
      'Review velocity, rating stability, and qualitative themes in feedback.',
      'Landing page engagement on key service URLs (scroll, time on page where meaningful).',
    ],
    spotlight: {
      variant: 'queryChips',
      title: 'Example searches we plan visibility around',
      queries: [
        'dentist near me',
        'emergency dentist [city]',
        'Invisalign consultation [neighbourhood]',
        'dental implants bone graft',
        'family dentist open Saturday',
      ],
    },
    relatedSlugs: ['websites', 'paid-ads'],
    faqSectionTitle: 'Maps, pack results & AI answers',
    faqSectionSubheading:
      'Questions we hear from owners who care about rankings but also about wrong addresses in AI summaries.',
    faq: [
      {
        question: 'How is the local map pack different from the organic listings below it?',
        answer:
          'The map pack is driven heavily by Google Business Profile signals, proximity, and relevance to the query; organic results depend more on your website’s authority and page-level relevance. Strong programs align both so the story matches when patients click Maps versus a blue link.',
      },
      {
        question: 'Can one dentist work at two addresses without confusing Google?',
        answer:
          'Yes, with clear practitioner markup, correct practitioner–location relationships in GBP, and dedicated location pages where needed. The risk is duplicate or merged listings—we document who works where and keep NAP consistent.',
      },
      {
        question: 'Should every associate get their own Google Business Profile?',
        answer:
          'Usually no—often the practice brand is the entity patients search for. Individual practitioner profiles can help in specific markets, but they can also fragment reviews and categories. We recommend a structure that matches how patients actually look you up.',
      },
      {
        question: 'How do you handle English and French searches in the same city?',
        answer:
          'We align GBP services and descriptions with both languages where appropriate, mirror key FAQs, and ensure your site does not contradict either language variant. French query volume varies by neighbourhood; we use real Search Console and Ads data where available.',
      },
      {
        question: 'A competitor’s listing looks fake or keyword-stuffed—what is the first step?',
        answer:
          'Document the issue with screenshots, compare against Google’s guidelines, and use the appropriate reporting path—while continuing to strengthen your own entity signals so you are less vulnerable to noise.',
      },
      {
        question: 'Do we need a separate landing page for every suburb we want?',
        answer:
          'Only when those pages serve distinct intent and are genuinely useful—not thin “dentist in X” clones. We prefer fewer, stronger location and service pages plus honest service-area signals in GBP.',
      },
      {
        question: 'How long until GBP or rankings feel different?',
        answer:
          'Clarity fixes (hours, categories, duplicate suppression) can change how you look within weeks. Competitive rankings and AI summaries depend on market density and completeness of your footprint—we forecast from your data, not a generic “90 days.”',
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
      'Dental PPC and Meta ads for Canada: what paid search is, why tracking and landing pages matter, how budgets learn, and how we report—without vanity metrics or account lock-in.',
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
    whatItIs:
      'Paid advertising for dental practices usually means buying placements on Google (Search, sometimes Performance Max, Display where appropriate) and Meta (Facebook and Instagram). You pay when someone clicks or when the platform delivers impressions, depending on the objective. Unlike organic SEO, paid media can put you in front of intent immediately—but only if tracking, offers, landing pages, and front-desk follow-up are aligned. The goal is not “traffic”; it is qualified conversations you can book.',
    whyItMatters: [
      'Organic visibility takes time; paid fills chairs while SEO and reputation compound—especially for high-value procedures with long research cycles.',
      'Competitors bid on your brand and category terms; absence from paid auctions can mean you never appear for the most valuable clicks in your city.',
      'Without conversion tracking, you cannot tell which ads, keywords, or audiences actually produce patients—so budgets drift to waste.',
      'Slow phone answer or a weak booking page silently burns ad spend; the platform still charges for the click.',
      'Seasonal pushes (whitening, ortho consults, implant seminars) need controlled tests with clear start and end—not vague “always on” spend.',
    ],
    prerequisites: [
      'Confirmed booking paths: phone, online scheduling, or forms someone monitors within minutes during business hours.',
      'Rough margin and capacity guardrails for the procedures you want to advertise.',
      'Access to Google Ads / Meta Business Suite (we work in your accounts with documented structure).',
    ],
    technicalDeepDive: [
      {
        heading: 'Search intent and campaign structure',
        paragraphs: [
          'Search campaigns should separate high-intent themes (e.g. “emergency dentist,” “dental implants [city]”) from broader research queries. Match types, negatives, and search term reviews prevent paying for irrelevant clicks like unrelated jobs or geographies you do not serve.',
          'Performance Max and broad match can work when fed clean conversion signals and strong creative; they are not a substitute for strategy when tracking is weak.',
        ],
      },
      {
        heading: 'Tracking that matches real dentistry',
        paragraphs: [
          'We wire primary conversion actions to calls, form fills, and booked appointments where technically possible—often via call tracking numbers, CRM tags, or offline conversion imports from your PMS export (scoped to what your compliance allows).',
          'UTM hygiene matters: consistent naming lets you compare Meta vs Google vs organic downstream in analytics.',
        ],
      },
      {
        heading: 'Landing experience and creative',
        paragraphs: [
          'The headline on the landing page should echo the ad promise. Mismatch is the #1 silent killer of quality score and conversion rate.',
          'Creative for dental must stay within professional and regulatory tone: before/afters, testimonials, and offers need your approval and sometimes college guidance—we build review cycles into production.',
        ],
      },
      {
        heading: 'Budget, learning phase, and pacing',
        paragraphs: [
          'Platforms need enough conversion volume to optimize. Micro-budgets across too many campaigns starve learning. We recommend consolidation until signals stabilize, then expand.',
        ],
      },
    ],
    commonMistakes: [
      'Optimizing for clicks or impressions instead of booked consults or new patients.',
      'Sending all traffic to the homepage instead of procedure-specific landers.',
      'Ignoring negative keywords until thousands are wasted on “jobs” or “free” intent.',
      'Letting multiple vendors retarget the same users with conflicting messages.',
      'Turning off campaigns every time the schedule is full—then losing algorithmic history.',
    ],
    metricsWeWatch: [
      'Cost per qualified lead and cost per booked consult (definitions agreed upfront).',
      'Search term and placement quality—what you actually paid for.',
      'Call answer rate and booking conversion from tracked calls.',
      'Return on ad spend (ROAS) only where revenue attribution is honest—not fabricated.',
      'Creative fatigue signals: frequency, CTR drops, rising CPA on Meta.',
    ],
    spotlight: {
      variant: 'ledgerLines',
      title: 'Economics we align before turning spend on',
      lines: [
        'Target cost per booked consult—not cost per click.',
        'Minimum weekly volume so Google and Meta can exit “learning” with real signal.',
        'Which procedures subsidize acquisition for the next 90 days versus which must break even immediately.',
      ],
    },
    relatedSlugs: ['websites', 'local-seo'],
    faqSectionTitle: 'Budget, auctions & accountability',
    faqSectionSubheading:
      'Paid search and paid social each have different rules—here is how we think about them for dental.',
    faq: [
      {
        question: 'What is “brand defense” on Google and when is it worth paying for?',
        answer:
          'Competitors can bid on your practice name. Brand campaigns capture high-intent navigational clicks cheaply and control the message above the organic result. We recommend brand defense when we see conquesting in your auction reports or when your organic sitelinks do not cover booking paths.',
      },
      {
        question: 'Are dental campaigns subject to Meta special ad category rules?',
        answer:
          'Often yes—health-related targeting and creative face restrictions. We build audiences and copy within those rules, use Advantage+ placements only when appropriate, and avoid targeting that would put your account at risk.',
      },
      {
        question: 'Can we attribute implants to a keyword without recording every phone call?',
        answer:
          'Sometimes. Options include call extension tracking, dynamic number pools with disclosure, front-desk disposition tags, and CRM exports. What is legal and acceptable varies by province and your policies—we scope with your team, not assumptions.',
      },
      {
        question: 'How do you stop ads from showing for “free dental” or job seekers?',
        answer:
          'Negative keyword lists, geo exclusions, audience exclusions, and routine search term reviews—especially in the first 30 days after launch when waste patterns appear.',
      },
      {
        question: 'Is $2,000/month enough to test implants and emergency at the same time?',
        answer:
          'Usually not in competitive cities—splitting budget starves learning. We often sequence: prove emergency or new-patient flow first, then layer high-consideration procedures with dedicated landers once tracking is clean.',
      },
      {
        question: 'When would you run Meta only and skip Google Search?',
        answer:
          'When search volume for your goals is thin, when you are promoting visual offers (whitening, smile consults), or when search is temporarily paused for a site rebuild—but we still want a path back to Search once foundations are ready.',
      },
      {
        question: 'Who owns the ad accounts if we part ways?',
        answer:
          'You should own Google Ads and Meta Business assets; we work as a partner with documented admin roles. You can revoke access anytime; we hand over change logs and naming conventions.',
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
      'Custom dental websites in Canada: UX, speed (Core Web Vitals), SEO/GEO structure, migrations, and analytics—what a practice site must do technically and for patients before marketing scales.',
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
    whatItIs:
      'A dental website is your always-on receptionist: it explains who you are, what you treat, how to book, and why patients should trust you—usually on a phone screen first. “Custom” means information architecture, design, copy, performance, and analytics are built around your real services and markets, not a one-size-fits-all template that hides weak strategy behind stock photos. Technical quality (speed, accessibility, stable layout) affects both Google rankings and whether a nervous patient actually taps “Book.”',
    whyItMatters: [
      'Most discovery journeys end on your site or booking widget; Maps and ads only start the conversation.',
      'Patients compare 2–3 practices quickly; slow loads, cluttered navigation, or buried phone numbers directly cost appointments.',
      'SEO and GEO programs need crawlable, well-structured pages; a pretty site that search engines cannot parse wastes downstream marketing spend.',
      'Relaunches go wrong without redirect plans—losing years of link equity and causing confusing AI summaries.',
      'Accessibility is both the right thing and increasingly aligned with good UX: contrast, focus states, readable type.',
    ],
    prerequisites: [
      'Brand basics: logo, colours, and any brand guidelines; or willingness to define them as part of the project.',
      'Photo direction: professional photography strongly preferred for trust; we can brief your photographer.',
      'Decision-makers available for structured approvals so timelines do not slip.',
    ],
    technicalDeepDive: [
      {
        heading: 'Information architecture and UX',
        paragraphs: [
          'We map primary journeys: new patient general, emergency, cosmetic consult, ortho parent, implant second opinion, etc. Each journey gets obvious next steps and minimal cognitive load.',
          'Navigation depth is balanced: enough pages for SEO/GEO, not so many that patients get lost.',
        ],
      },
      {
        heading: 'Performance and Core Web Vitals',
        paragraphs: [
          'Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) describe real user experience. We optimize images, font loading, lazy loading discipline, and third-party scripts (chat, analytics) so they do not tank performance.',
        ],
      },
      {
        heading: 'SEO/GEO-friendly templates',
        paragraphs: [
          'Semantic HTML headings, descriptive title tags and meta descriptions, internal linking blocks, and FAQ sections where they reflect real patient questions—all support discovery.',
          'Migration: 301 redirect maps from old URLs, update of XML sitemaps, and Search Console monitoring catch soft 404s early.',
        ],
      },
      {
        heading: 'Analytics and consent',
        paragraphs: [
          'We wire events to meaningful actions: click-to-call, form start/submit, online booking clicks. Where Canadian privacy laws require consent banners, we coordinate with your counsel’s guidance on configuration—not one-size-fits-all legal advice.',
        ],
      },
    ],
    commonMistakes: [
      'Auto-playing video or huge hero carousels that hurt LCP on mobile.',
      'Hiding the phone number behind multiple taps on mobile.',
      'Duplicating the same service copy across “city pages” with only the city name swapped.',
      'Launching a new site without redirect mapping from old URLs.',
      'Installing five marketing pixels with no owner—slowing the site and breaking attribution.',
    ],
    metricsWeWatch: [
      'Core Web Vitals field and lab trends after launch.',
      'Conversion rate on primary CTAs by traffic source.',
      '404s and redirect chains from Search Console.',
      'Scroll depth or engagement on key procedure pages (where tools allow).',
      'Organic and paid landing engagement before/after redesign milestones.',
    ],
    spotlight: {
      variant: 'firstScreenChecks',
      title: 'What the first screen must accomplish on a phone',
      checks: [
        'Who you are + neighbourhood credibility in one glance',
        'Tap-to-call and booking above the fold without hunting',
        'Primary services linked—not buried in a mega-menu',
        'Trust cues (team, reviews, college-appropriate language) without clutter',
      ],
    },
    relatedSlugs: ['local-seo', 'paid-ads'],
    faqSectionTitle: 'Build, migration & accessibility',
    faqSectionSubheading:
      'Technical and UX decisions that affect every channel downstream.',
    faq: [
      {
        question: 'Can you embed our existing online booking widget without breaking Core Web Vitals?',
        answer:
          'Often yes—we lazy-load third-party widgets, isolate them from LCP candidates, and test on real devices. If a vendor script is too heavy, we discuss alternatives (deep link to booking app, lighter iframe, or phased load after consent).',
      },
      {
        question: 'Separate “mobile menu” experience vs one long homepage—which do you recommend?',
        answer:
          'Depends on content depth. Deep multi-location sites benefit from clear mobile navigation; smaller practices sometimes convert better with a disciplined single-column scroll. We prototype both in wireframes before locking UI.',
      },
      {
        question: 'What happens to old blog URLs if we delete thin posts nobody reads?',
        answer:
          'We map each URL: 301 merge to a stronger parent topic, 410 when truly gone, or refresh when the topic still matters. Bulk deletion without mapping is how sites lose long-tail traffic quietly.',
      },
      {
        question: 'Do you design toward WCAG 2.1 AA for public-sector or grant-funded clinics?',
        answer:
          'We can align build and QA checklists to WCAG-oriented acceptance criteria—contrast, focus order, labels, motion. Formal VPAT or legal sign-off is outside our scope; your accessibility counsel sets the bar.',
      },
      {
        question: 'Webflow vs WordPress vs “headless”—how do you choose?',
        answer:
          'Editor experience, who will update content weekly, integration needs, and performance budget. We recommend the smallest stack that your team will actually maintain—fancy architecture that nobody touches ages poorly.',
      },
      {
        question: 'Who owns DNS and can we keep our registrar?',
        answer:
          'You keep registrar and DNS ownership. We document required records, staging subdomains, and rollback so launches are reversible if something misbehaves.',
      },
      {
        question: 'Do you use reusable layouts or bespoke every page?',
        answer:
          'Reusable layout systems with bespoke hero, photography, and copy per location/service—so the site feels custom without reinventing every technical detail.',
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
      'Dental social and content for Canada: strategy, pillars, creative specs, approvals, and measurement—what “content marketing” means for practices and how it supports trust and bookings.',
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
    whatItIs:
      'Social media and content marketing for dentistry mean planned storytelling on the channels your patients actually use—usually Instagram and Facebook, sometimes short-form video—plus the supporting captions, carousels, and occasional blog or FAQ content that feeds search and your website. It is not random posting. It is a calendar tied to patient questions, seasonal demand (whitening before weddings, ortho before school), and the procedures you want to grow, with brand-safe tone and clear escalation when someone asks clinical or fee questions in comments or DMs.',
    whyItMatters: [
      'Trust is built before the first visit; consistent, educational content reduces anxiety for high-stakes treatments.',
      'Referrals check you online; a stale or chaotic feed undermines word-of-mouth.',
      'Paid campaigns work better when organic profiles and posts match the same offers and messaging.',
      'Recall and reactivation campaigns need creative hooks patients recognize in the feed.',
      'Without guardrails, well-meaning staff can post out-of-scope claims or PHI-adjacent content.',
    ],
    prerequisites: [
      'Named approvers (doctor + marketing lead) and turnaround expectations for reviews.',
      'Brand voice examples: posts you liked, competitors you do not want to resemble.',
      'Photo/video access: in-office capture plan or photographer coordination.',
    ],
    technicalDeepDive: [
      {
        heading: 'Channel strategy and content pillars',
        paragraphs: [
          'We choose channels based on patient demographics and proof—not trends. Pillars typically mix education (how procedures work), social proof (tasteful testimonials), team culture (who will care for me), and soft promotional tied to capacity.',
        ],
      },
      {
        heading: 'Creative specs and production rhythm',
        paragraphs: [
          'We deliver specs for aspect ratios, safe zones, on-screen text size, and hook length for Reels/Shorts. Batch creation reduces context-switching for your team.',
        ],
      },
      {
        heading: 'Community management and compliance tone',
        paragraphs: [
          'Scripts for common DMs, escalation to human for clinical or billing questions, and crisis tone if reviews spike. Healthcare marketing should avoid before/after surprises and unverifiable superlatives.',
        ],
      },
      {
        heading: 'Measurement that is not vanity-only',
        paragraphs: [
          'Saves, shares, profile taps, and website clicks from bio matter more than raw follower counts. Where UTMs exist, we connect social-assisted conversions to the rest of your reporting story.',
        ],
      },
    ],
    commonMistakes: [
      'Posting clinical jargon patients do not search or relate to.',
      'Inconsistent hours or offers between social, GBP, and the website.',
      'Over-polishing to the point of never shipping—cadence beats perfection.',
      'Boosting random posts without a landing path or tracking.',
      'Ignoring comment questions until they become public frustration.',
    ],
    metricsWeWatch: [
      'Reach and engagement rate on priority content types.',
      'Profile actions and website clicks from social referrals.',
      'Saves and shares as quality signals on educational posts.',
      'DM volume and response time (where measurable).',
      'Downstream booked consults from social-tagged campaigns when UTMs are used.',
    ],
    spotlight: {
      variant: 'weekStrip',
      title: 'Example four-week rhythm (not a rigid contract)',
      strips: [
        'Week 1: pillar education + team intro',
        'Week 2: patient question carousel tied to one service',
        'Week 3: light seasonal tie-in + CTA to book',
        'Week 4: proof or FAQ + repurpose best clip to Stories',
      ],
    },
    relatedSlugs: ['paid-ads', 'print'],
    faqSectionTitle: 'Voice, cadence & community',
    faqSectionSubheading:
      'Creative and moderation choices that are specific to social—not generic marketing FAQs.',
    faq: [
      {
        question: 'How do you keep “birthday posts” and staff spotlights from feeling off-brand?',
        answer:
          'Templates with locked fonts/colours, pre-approved caption starters, and a rule: every human story still ties to a patient value (trust, access, education)—not random personal content.',
      },
      {
        question: 'Reels: 15 seconds or 45 for a procedure explainer?',
        answer:
          'Hook in 2 seconds, deliver one idea per reel. For complex treatments we often split into a series of shorter reels rather than one long lecture—completion rate matters for distribution.',
      },
      {
        question: 'Should doctors appear on camera or is voiceover + captions enough?',
        answer:
          'Both work. Camera builds trust faster when doctors are comfortable; voiceover + B-roll works when time is tight. We never pressure on-camera work that feels inauthentic.',
      },
      {
        question: 'An associate wants to post clinical cases—what guardrails do you set?',
        answer:
          'Consent, college advertising rules, no PHI in captions, and “before/after” policies you approve in writing. Clinical posts go through a slower approval lane.',
      },
      {
        question: 'How often should we post if we only have one person approving copy?',
        answer:
          'Sustainable cadence beats aspirational calendars. We often start biweekly or three times weekly with batch filming, then scale once approvals stay under SLA.',
      },
      {
        question: 'Can you manage boosted posts vs ads manager campaigns?',
        answer:
          'Yes—boosting is fine for quick tests; Ads Manager is better for structured audiences, exclusions, and reporting. We document which path we used so results are comparable month to month.',
      },
      {
        question: 'What if a patient DMs a clinical question?',
        answer:
          'Scripted reply: we cannot diagnose in DMs, here is how to reach the office or book. Never fee quotes or treatment plans in private message threads.',
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
      'Dental print and direct mail in Canada: formats, Canada Post considerations, list compliance, QR/URL tracking, and when mail complements digital—plain-language planning for clinics.',
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
    whatItIs:
      'Print and direct mail are physical pieces—postcards, letters, brochures, referral pads, in-office signage—that reach people in a specific geography or relationship to your practice. Direct mail targets households or segments (for example new movers within a radius). Good dental print is readable at arm’s length, carries one primary offer, and uses QR codes or unique phone numbers so you can measure response. It works best when creative matches your digital brand so patients recognize you everywhere.',
    whyItMatters: [
      'Dense neighbourhoods and new mover streams still respond to tactile mail—especially for grand openings and reactivation.',
      'Older demographics and families may notice mailbox pieces before they scroll far enough to see your ad.',
      'Print reinforces digital: someone who saw your Meta ad may finally act when the postcard arrives.',
      'Reactivation lists (patients overdue for hygiene or unscheduled treatment) often need a tangible nudge, not only email.',
      'In-office leave-behinds support treatment acceptance when paired with clear next steps.',
    ],
    prerequisites: [
      'Clear offer and audience: radius, new movers, inactive patient list (with compliant data use).',
      'Print vendor or willingness to use one we coordinate with; proof approval workflow.',
      'Tracking: unique URL, QR, or phone extension per campaign where possible.',
    ],
    technicalDeepDive: [
      {
        heading: 'Formats and postal realities',
        paragraphs: [
          'Standard sizes (e.g. 6×9 postcard, letter in envelope) affect postage class and speed. We design within Canada Post–friendly specs your printer recommends to avoid surprise surcharges.',
        ],
      },
      {
        heading: 'Creative hierarchy at mailbox distance',
        paragraphs: [
          'Headline, single offer, proof point, and one CTA above the fold on the address side. Body copy supports—not repeats—the headline. QR codes include quiet zones and human-readable fallback URLs.',
        ],
      },
      {
        heading: 'Lists and compliance',
        paragraphs: [
          'House lists from your PMS require consent and retention policies you own; we document how the campaign uses data. Purchased lists vary in quality—we advise where third-party data is worth it versus radius saturation.',
        ],
      },
    ],
    commonMistakes: [
      'Cluttered postcards with ten services and no single action.',
      'Mismatch between mail offer and website landing page.',
      'Tiny type and low contrast for older eyes.',
      'No attribution plan—“we think it worked” is not a strategy.',
      'Skipping proof approval and reprinting at full cost.',
    ],
    metricsWeWatch: [
      'Redemption of offer codes or unique URL visits.',
      'Call volume spikes on tracked lines during mail windows.',
      'Cost per booked appointment vs digital-only cohorts (honest comparisons).',
      'Reactivation appointments attributed to list segments.',
      'Reprint rate and proof revision counts (operational quality).',
    ],
    spotlight: {
      variant: 'journeySteps',
      title: 'From mailbox to chair',
      steps: [
        { label: 'Arrives', detail: 'One headline, one offer, readable arm’s length away' },
        { label: 'Scans', detail: 'QR or short URL lands on a mobile page that matches the card' },
        { label: 'Books', detail: 'Front desk knows the promo code and tracks source in PMS notes' },
      ],
    },
    relatedSlugs: ['social-content', 'local-seo'],
    faqSectionTitle: 'Postage, lists & creative format',
    faqSectionSubheading:
      'Direct mail has different constraints than pixels—questions we get in kickoff.',
    faq: [
      {
        question: 'Saturation mailing vs a targeted list—how do you choose?',
        answer:
          'Saturation covers every mailbox in a polygon—great for grand openings when you need awareness fast. Targeted lists (new movers, age band, radius) cost more per piece but waste less when the offer is narrow. We model both with your budget.',
      },
      {
        question: 'Bilingual postcard: English one side, French reverse—does that confuse people?',
        answer:
          'Not if hierarchy is clear: dominant language on the address side with a bold flip cue. We test readability at arm’s length and keep the CTA obvious on both faces.',
      },
      {
        question: 'Can we mail only apartment buildings near the office?',
        answer:
          'Sometimes, via carrier routes or purchased segments—depends on vendor data quality. We sanity-check against your real patient geography so you do not over-index on renters if your offer fits families in houses.',
      },
      {
        question: 'What offer tends to work: free whitening vs a paid consult credit?',
        answer:
          'Depends on positioning and capacity. Free consults can flood hygiene; whitening drives volume for cosmetic positioning. We align the offer with the procedures you want to fill and your team’s phone script.',
      },
      {
        question: 'Do you design referral pads or in-office leave-behinds?',
        answer:
          'Yes—collateral that matches the same visual system as mail and web, with print specs for your local printer.',
      },
      {
        question: 'Who pays Canada Post or the mail house—you or us?',
        answer:
          'Typically you contract postage and print; we deliver print-ready art and spec sheets. We can introduce vendors we trust, but the commercial relationship stays with your practice.',
      },
      {
        question: 'How long from approved proof to in-home?',
        answer:
          'Often 2–5 weeks depending on class of mail, list processing, and plant queue. Rush exists but costs more—we build calendars around your open date or campaign window.',
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
      'Dental AI and automation in Canada: chat, SMS, reminders, guardrails, privacy-aware pilots, and realistic PMS expectations—what to automate, what never should be, and how we measure.',
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
    whatItIs:
      'AI and automation in a dental practice usually mean chatbots or scripted SMS flows for routine questions, after-hours coverage, appointment reminders, reactivation nudges, and internal checklists—always with human escalation for clinical, billing, or upset-patient situations. “AI” here is narrow: language models or decision trees configured to your policies, not a replacement for your team. Good automation feels like a helpful assistant; bad automation frustrates patients and creates privacy risk.',
    whyItMatters: [
      'Missed calls and slow texts are leaked production—especially for emergency and high-value consults.',
      'Front desks experience predictable peaks; automation absorbs repetitive questions so humans handle nuance.',
      'After-hours behaviour has shifted: patients message before they voicemail; if nobody answers, they move on.',
      'Multi-location groups need consistent first-touch answers without each office improvising.',
      'Done carefully, automation improves show rates when reminders respect patient preferences and regulations.',
    ],
    prerequisites: [
      'Written policies on what can and cannot be said by automation (fees, clinical advice, insurance).',
      'Telephony and PMS context: who answers escalations and within what timeframe.',
      'Privacy review with your counsel for logging, retention, and vendor data processing in Canada.',
    ],
    technicalDeepDive: [
      {
        heading: 'Workflow mapping before tools',
        paragraphs: [
          'We document current paths: phone tree, website form, chat widget, Instagram DMs, referral portal. Only then do we match tools—off-the-shelf chat, PMS add-ons, or lightweight integrations—to realistic workflows.',
        ],
      },
      {
        heading: 'Prompting, guardrails, and logging',
        paragraphs: [
          'Scripts include fallback phrases, scope limits (“I cannot diagnose”), and handoff triggers. Logging helps you audit what patients asked and how the system responded—essential for tuning and compliance conversations.',
        ],
      },
      {
        heading: 'Integrations vs human bridge',
        paragraphs: [
          'Deep PMS integration is not always available; sometimes the right answer is SMS handoff to a human with templated context. We scope honest integration vs manual steps so you are not sold fantasy plumbing.',
        ],
      },
    ],
    commonMistakes: [
      'Letting bots quote fees or clinical opinions.',
      'No escalation path when the patient is angry or confused.',
      'Over-automating reminders without opt-out hygiene.',
      'Choosing tools before defining who owns content updates.',
      'Skipping staff training so humans fight the system instead of using it.',
    ],
    metricsWeWatch: [
      'Missed-call rate and time-to-first-response after hours.',
      'Automation containment rate vs human takeover (quality, not just cost).',
      'Appointment reminders delivery, confirm, and show-rate deltas.',
      'Patient complaints or negative sentiment themes in escalated chats.',
      'Pilot KPIs agreed before scale (e.g. 30-day window).',
    ],
    spotlight: {
      variant: 'splitLanes',
      title: 'Where automation helps—and where humans stay in charge',
      leftTitle: 'Keep with a human',
      leftItems: [
        'Individualized treatment and fee discussions',
        'Upset patients and formal complaints',
        'Insurance predetermination storytelling',
        'Anything your college flags as advertising or clinical advice',
      ],
      rightTitle: 'Often safe to automate',
      rightItems: [
        'Hours, parking, and location confirmations',
        'Missed-call SMS with booking link',
        'Reminder sequences with clear opt-out',
        'FAQ-style answers that link to authoritative pages',
      ],
    },
    relatedSlugs: ['websites', 'paid-ads'],
    faqSectionTitle: 'Chat, SMS & PMS reality',
    faqSectionSubheading:
      'Automation is as much policy and telecom as it is software—questions we resolve before go-live.',
    faq: [
      {
        question: 'If a patient asks “how much is an implant” in chat, what should the bot say?',
        answer:
          'Never a personalized quote. A safe pattern is: explain that fees vary by case, invite them to book a consult, and offer to connect them with the front desk—then hand off with context.',
      },
      {
        question: 'Missed-call text-back: instant auto-reply vs next business morning?',
        answer:
          'Depends on risk tolerance and provincial expectations around electronic contact. Some practices prefer a delayed template during sleeping hours; others want immediate acknowledgment. We document the policy you choose.',
      },
      {
        question: 'Who owns conversation logs if we cancel the vendor?',
        answer:
          'Your contract with the vendor should specify export, retention, and deletion. We advise on what to ask for during procurement; legal review confirms obligations.',
      },
      {
        question: 'Two-way SMS in Canada—do short codes still work everywhere?',
        answer:
          'Carrier filtering and toll-free vs long-code rules change. We test deliverability on major Canadian carriers for your use case and adjust registration or templates when messages fail silently.',
      },
      {
        question: 'Can automation write directly into OpenDental, Dentrix, or Eaglesoft?',
        answer:
          'Sometimes via official APIs or approved middleware; often the honest answer is partial integration plus human confirmation. We scope what is real for your stack before promising “full sync.”',
      },
      {
        question: 'Will patients know they are not talking to a person?',
        answer:
          'Disclosure and tone matter. We default to clear labeling where appropriate and scripts that sound calm and human—surprise erodes trust faster than automation itself.',
      },
      {
        question: 'What is the smallest pilot you would recommend?',
        answer:
          'Often missed-call SMS or after-hours chat with a narrow scope, two-week review window, and explicit escalation metrics—prove containment and satisfaction before expanding.',
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

/**
 * Hero collage filename under `public/services/{slug}/` (service detail pages only).
 */
export const serviceHeroCollageFilename: Record<string, string> = {
  'paid-ads': 'hero-collage-ads.webp',
  'local-seo': 'hero-collage-seo.webp',
  websites: 'hero-collage-websites.webp',
  'social-content': 'hero-collage-social.webp',
  print: 'hero-collage-print.webp',
  'ai-automation': 'hero-collage-ai.webp',
};

/** Public path starting with `/` — pair with base URL / `mediaUrl()`. */
export function serviceHeroCollagePublicPath(slug: string): string | null {
  const file = serviceHeroCollageFilename[slug];
  return file ? `/services/${slug}/${file}` : null;
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
