export const CHATBOT_STARTER_PROMPTS: string[] = [
  'What is the best package for my clinic stage?',
  'How quickly can we launch?',
  'What should we prioritize in the first 90 days?',
  'How do we book a strategy call this week?',
];

export const CHATBOT_QUALIFICATION_PROMPTS: string[] = [
  'Single clinic: where should we start first?',
  'Multi-location group: what growth model works best?',
  'We need more booked treatments in 60-90 days.',
  'How much team time is needed from our side?',
];

export const CHATBOT_INTENT_SHORTCUTS: { label: string; prompt: string }[] = [
  { label: 'Pricing', prompt: 'Show me your pricing options.' },
  { label: 'Services', prompt: 'Which services should we start with?' },
  { label: 'Booking', prompt: 'How do we book a strategy call?' },
  { label: 'Case Studies', prompt: 'Can you share relevant case studies?' },
  { label: 'Locations', prompt: 'Do you work outside Ottawa?' },
  { label: 'Timeline', prompt: 'What timeline should we expect for results?' },
];
