import type { ChatFaqItem } from '../types/chatbot';

export const CHATBOT_FAQ: ChatFaqItem[] = [
  {
    id: 'pricing-overview',
    question: 'How much does it cost to work with Dentech?',
    answer:
      'Most engagements start with website packages or monthly marketing retainers, depending on your growth stage and channel mix. We can recommend the best-fit starting point after a quick strategy call.',
    prompts: ['Show pricing options', 'What package fits a single clinic?', 'Do you offer monthly retainers?'],
    intent: 'pricing',
    ctas: [
      { label: 'View Pricing', to: '/#pricing' },
      { label: 'Talk to a Strategist', to: '/contact' },
    ],
  },
  {
    id: 'pricing-single-vs-multi',
    question: 'What is the difference between single-clinic and multi-location pricing?',
    answer:
      'Single-clinic plans focus on local demand capture and appointment flow. Multi-location plans add governance, shared standards, and location-level reporting so each clinic can grow without losing brand consistency.',
    prompts: ['Single clinic pricing', 'Multi-location pricing model', 'How do retainers scale by locations?'],
    intent: 'pricing',
    ctas: [
      { label: 'View Pricing', to: '/#pricing' },
      { label: 'Book Strategy Call', to: '/contact' },
    ],
  },
  {
    id: 'pricing-what-included',
    question: 'What is usually included in a monthly retainer?',
    answer:
      'Most retainers include channel strategy, campaign execution, tracking, and optimization cadence. Scope is selected by growth objective: demand generation, conversion improvement, or authority building in local search.',
    prompts: ['Retainer scope example', 'What is included in monthly management?', 'Can we start with one channel only?'],
    intent: 'pricing',
    ctas: [
      { label: 'Talk to a Strategist', to: '/contact' },
      { label: 'Explore Services', to: '/services' },
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
      { label: 'Explore Services', to: '/services' },
      { label: 'See Case Studies', to: '/case-studies' },
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
      { label: 'Explore Services', to: '/services' },
      { label: 'Book a Strategy Call', to: '/contact' },
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
      { label: 'See Case Studies', to: '/case-studies' },
      { label: 'Contact Team', to: '/contact' },
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
      { label: 'Book a Strategy Call', to: '/contact' },
      { label: 'View Services', to: '/services' },
    ],
  },
  {
    id: 'timeline-90-days',
    question: 'What does the first 90 days usually look like?',
    answer:
      'Typical rollout: Phase 1 audit and tracking stabilization, Phase 2 launch and baseline acquisition, Phase 3 optimization with weekly tuning and monthly leadership reporting focused on booked-treatment outcomes.',
    prompts: ['What happens in first month?', 'How often do we review performance?', 'How is progress reported?'],
    intent: 'timeline',
    ctas: [
      { label: 'Book a Strategy Call', to: '/contact' },
      { label: 'View Services', to: '/services' },
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
      { label: 'Contact Team', to: '/contact' },
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
      { label: 'Contact Team', to: '/contact' },
    ],
  },
  {
    id: 'book-consultation',
    question: 'How do we get started?',
    answer:
      'Start with a strategy call so we can review your goals, channels, and growth constraints. We then recommend a practical phase-by-phase plan with clear next steps.',
    prompts: ['Book a strategy call', 'What should I prepare?', 'Can we start with one service?'],
    intent: 'booking',
    ctas: [
      { label: 'Start the Contact Form', to: '/contact' },
      { label: 'View Case Studies', to: '/case-studies' },
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
      { label: 'Start the Contact Form', to: '/contact' },
      { label: 'Book a Strategy Call', to: '/contact' },
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
      { label: 'Book Strategy Call', to: '/contact' },
      { label: 'View Case Studies', to: '/case-studies' },
    ],
  },
];
