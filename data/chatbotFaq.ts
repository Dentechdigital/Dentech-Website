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
];
