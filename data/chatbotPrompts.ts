export const CHATBOT_STARTER_PROMPTS: string[] = [
  'Book a strategy call',
  'Pricing',
  'Services',
  'Hours & contact',
];

export const CHATBOT_QUALIFICATION_PROMPTS: string[] = [
  'New clinic — where to start?',
  'Multi-location',
  'Need more bookings',
  'Our team’s time?',
];

export const CHATBOT_INTENT_SHORTCUTS: { label: string; prompt: string }[] = [
  { label: 'Pricing', prompt: 'Pricing' },
  { label: 'Services', prompt: 'Services' },
  { label: 'Book call', prompt: 'Book a strategy call' },
  { label: 'Case studies', prompt: 'Case studies' },
  { label: 'Locations', prompt: 'Locations you serve' },
  { label: 'Timeline', prompt: 'Timeline for results' },
];
