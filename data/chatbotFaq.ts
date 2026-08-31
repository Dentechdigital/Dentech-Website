import type { ChatFaqItem } from '../types/chatbot';
import { SITE_CONTACT } from './siteContact';

export const CHATBOT_FAQ: ChatFaqItem[] = [
  {
    id: 'contact-hours-info',
    question: 'How do I reach you — phone, email, and hours?',
    answer: `${SITE_CONTACT.phoneDisplay} · ${SITE_CONTACT.email} · ${SITE_CONTACT.hoursShort}. ${SITE_CONTACT.availabilityNote} Use Contact on the site to book or message the team.`,
    prompts: ['Opening hours', 'Business hours', 'Contact info', 'Phone number', 'Email'],
    intent: 'booking',
    ctas: [
      { label: 'Contact', to: '/#contact' },
      { label: 'Book call', to: '/#contact' },
    ],
  },
  {
    id: 'packages-show-options',
    question: 'What growth packages do you offer?',
    answer:
      'Our home page Packages section outlines three tiers: Core Patient Engine (local search and paid acquisition), Brand Dominance & Social Engine (organic plus paid dominance), and Practice Expansion & Re-Launch (multi-site and grand openings). Scope is confirmed on a strategy call.',
    prompts: ['Show packages', 'What packages do you offer?', 'Growth packages'],
    intent: 'pricing',
    ctas: [
      { label: 'View Packages', to: '/#packages' },
      { label: 'Talk to a Strategist', to: '/#contact' },
    ],
  },
  {
    id: 'pricing-monthly-retainers',
    question: 'Do you offer monthly retainers?',
    answer:
      'Yes. Growth partnerships run on monthly retainers covering SEO/GEO, paid media, content, Dentech portal automation, and optimization—often with a complimentary Webflow site on a 6-month agreement. Exact scope is set before kickoff.',
    prompts: ['Do you offer monthly retainers?', 'Monthly marketing retainer', 'Retainer billing model'],
    intent: 'pricing',
    ctas: [
      { label: 'View Packages', to: '/#packages' },
      { label: 'Talk to a Strategist', to: '/#contact' },
    ],
  },
  {
    id: 'pricing-best-package-stage',
    question: 'What is the best package for my clinic stage?',
    answer:
      'Core Patient Engine fits steady high-value lead flow. Brand Dominance adds social, video, and review engines. Practice Expansion covers multi-location Dentech portal setup, Webflow architecture, and launch campaigns. A strategy call maps the right tier to your market and capacity.',
    prompts: [
      'What is the best package for my clinic stage?',
      'Which package should we start with?',
      'Best package for a single dental clinic',
    ],
    intent: 'pricing',
    ctas: [
      { label: 'View Packages', to: '/#packages' },
      { label: 'Book a Strategy Call', to: '/#contact' },
    ],
  },
  {
    id: 'pricing-overview',
    question: 'How much does it cost to work with Dentech?',
    answer:
      'Packages are scoped to clinic stage—not one-size-fits-all list pricing on the site. Core, Brand Dominance, and Expansion tiers differ by channels, locations, and production. Book a strategy call for a tailored quote.',
    prompts: [
      'What package fits a single clinic?',
      'How much does dental marketing cost',
      'Dentech pricing overview',
    ],
    intent: 'pricing',
    ctas: [
      { label: 'View Packages', to: '/#packages' },
      { label: 'Talk to a Strategist', to: '/#contact' },
    ],
  },
  {
    id: 'pricing-single-vs-multi',
    question: 'What is the difference between single-clinic and multi-location packages?',
    answer:
      'Single-clinic packages focus on local demand capture, Dentech portal attribution, and automated lead follow-up. Multi-location Expansion adds centralized dashboards, per-location pages, and coordinated launch or signage support.',
    prompts: ['Single clinic pricing', 'Multi-location pricing model', 'How do retainers scale by locations?'],
    intent: 'pricing',
    ctas: [
      { label: 'View Packages', to: '/#packages' },
      { label: 'Book Strategy Call', to: '/#contact' },
    ],
  },
  {
    id: 'pricing-what-included',
    question: 'What is usually included in a monthly retainer?',
    answer:
      'Retainers include channel strategy, campaign execution, Dentech portal tracking & workflows, and optimization cadence—scoped to demand generation, conversion, or market dominance depending on tier.',
    prompts: ['Retainer scope example', 'What is included in monthly management?', 'Can we start with one channel only?'],
    intent: 'pricing',
    ctas: [
      { label: 'Talk to a Strategist', to: '/#contact' },
      { label: 'Explore Services', to: '/#services' },
    ],
  },
  {
    id: 'services-overview',
    question: 'What services do you provide?',
    answer:
      'We provide full-funnel dental growth services: SEO/GEO, paid media, websites, social/content, print/direct mail, and AI automation. Most clients begin with one high-impact area and expand with a roadmap.',
    prompts: ['Explore services', 'Do you handle SEO and ads together?', 'Do you build websites too?'],
    intent: 'services',
    ctas: [
      { label: 'Explore Services', to: '/#services' },
      { label: 'See Case Studies', to: '/#case-studies' },
    ],
  },
  {
    id: 'services-channel-priority',
    question: 'Which service should we prioritize first?',
    answer:
      'Priority depends on your current bottleneck. If demand is low, paid and local visibility are first. If traffic exists but bookings lag, conversion systems and offer clarity are usually the first lever.',
    prompts: ['How to choose first service', 'What if we need fast bookings?', 'What if website traffic is low?'],
    intent: 'services',
    ctas: [
      { label: 'Explore Services', to: '/#services' },
      { label: 'Book a Strategy Call', to: '/#contact' },
    ],
  },
  {
    id: 'services-tech-stack',
    question: 'Can Dentech handle website, ads, SEO, and automation together?',
    answer:
      'Yes. Dentech can run an integrated growth stack so messaging, tracking, media, and website conversion work together. This reduces channel silos and improves decision speed for clinic leadership.',
    prompts: ['Do you handle full funnel execution?', 'Can we combine SEO and ads?', 'Do you integrate tracking and CRM signals?'],
    intent: 'services',
    ctas: [
      { label: 'See Case Studies', to: '/#case-studies' },
      { label: 'Contact Team', to: '/#contact' },
    ],
  },
  {
    id: 'timeline-results',
    question: 'How fast can we expect results?',
    answer:
      'Paid channels can show directional traction in weeks if tracking and offer clarity are in place. SEO/GEO usually compounds over months. We set realistic timelines based on market competition and your clinic capacity.',
    prompts: ['What happens in first 30 days?', 'How long does SEO take?', 'Can we start with ads first?'],
    intent: 'timeline',
    ctas: [
      { label: 'Book a Strategy Call', to: '/#contact' },
      { label: 'View Services', to: '/#services' },
    ],
  },
  {
    id: 'timeline-90-days',
    question: 'What does the first 90 days usually look like?',
    answer:
      'Typical rollout: Phase 1 audit and tracking stabilization, Phase 2 launch and baseline acquisition, Phase 3 optimization with weekly tuning and monthly leadership reporting focused on booked-treatment outcomes.',
    prompts: [
      'What happens in first month?',
      'How often do we review performance?',
      'How is progress reported?',
      'What should we prioritize in the first 90 days?',
    ],
    intent: 'timeline',
    ctas: [
      { label: 'Book a Strategy Call', to: '/#contact' },
      { label: 'View Services', to: '/#services' },
    ],
  },
  {
    id: 'timeline-team-involvement',
    question: 'How much time does our clinic team need to invest?',
    answer:
      'Most teams allocate a focused weekly touchpoint for approvals and operational feedback. Dentech manages execution and optimization, while your team validates priorities and availability constraints.',
    prompts: ['How much internal time is needed?', 'Who should join meetings?', 'How often are approvals needed?'],
    intent: 'timeline',
    ctas: [
      { label: 'Contact Team', to: '/#contact' },
      { label: 'About Dentech', to: '/about' },
    ],
  },
  {
    id: 'location-coverage',
    question: 'Do you only work in Ottawa?',
    answer:
      'We are headquartered in Ottawa and work with clinics across Canada and selected international markets. Campaigns are localized to your real service area and patient intent.',
    prompts: ['Do you support multi-location groups?', 'Do you work in Ontario and Quebec?', 'Can we work remotely?'],
    intent: 'locations',
    ctas: [
      { label: 'About Dentech', to: '/about' },
      { label: 'Contact Team', to: '/#contact' },
    ],
  },
  {
    id: 'book-consultation',
    question: 'How do we get started?',
    answer:
      'Start with a strategy call so we can review your goals, channels, and growth constraints. We then recommend a practical phase-by-phase plan with clear next steps.',
    prompts: [
      'Book a strategy call',
      'What should I prepare?',
      'Can we start with one service?',
      'How do we book a strategy call this week?',
    ],
    intent: 'booking',
    ctas: [
      { label: 'Start the Contact Form', to: '/#contact' },
      { label: 'View Case Studies', to: '/#case-studies' },
    ],
  },
  {
    id: 'getting-started-prep',
    question: 'What should we prepare before the strategy call?',
    answer:
      'Bring your goals, target treatments, current channel performance, and scheduling constraints. This helps us prioritize the highest-impact actions and avoid generic recommendations.',
    prompts: ['How to prepare for strategy call?', 'What data should we share?', 'What happens after the first call?'],
    intent: 'booking',
    ctas: [
      { label: 'Start the Contact Form', to: '/#contact' },
      { label: 'Book a Strategy Call', to: '/#contact' },
    ],
  },
  {
    id: 'getting-started-next-step',
    question: 'What happens after we decide to move forward?',
    answer:
      'You get a practical kickoff sequence: goals alignment, channel plan, implementation priorities, and operating rhythm. Execution starts with the fastest path to measurable demand and booking improvements.',
    prompts: ['What is onboarding process?', 'How quickly can we launch?', 'What is the first milestone?'],
    intent: 'booking',
    ctas: [
      { label: 'Book Strategy Call', to: '/#contact' },
      { label: 'View Case Studies', to: '/#case-studies' },
    ],
  },
  {
    id: 'existing-client-contact',
    question: 'We already work with Dentech — how do we reach the team?',
    answer:
      'Use the Contact section on this site or reply on your existing Dentech thread if you have one. For campaign updates, billing, or service changes, a human on the team will route you to the right person—Maya cannot change live campaigns or account settings.',
    prompts: ['I am a current client', 'Who do I email?', 'Change our ads / website request'],
    intent: 'existing-client',
    ctas: [
      { label: 'Contact Team', to: '/#contact' },
      { label: 'View Services', to: '/#services' },
    ],
  },
];
