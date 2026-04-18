import type { ChatRuntimeConfig } from '@dentech/chat-widget';
import { CHATBOT_FAQ } from '../../data/chatbotFaq';
import { trackChatEvent } from './chatbotAnalytics';
import ChatRouterLink from './ChatRouterLink';
import { sendChatCompletion } from './sendChatCompletion';

export const dentechChatRuntimeConfig: ChatRuntimeConfig = {
  sessionStorageKey: 'dentech-chat-session',
  welcomeMessage:
    "Hi — I'm Maya, Dentech Digital's assistant. Ask about services, pricing, timelines, or booking a strategy call.",
  teaserTitle: 'Need a quick answer?',
  teaserBody: 'Maya, our AI admin assistant, can help with services, pricing, and next steps.',
  teaserStatusLine: 'Online now',
  teaserPrimaryCta: 'Chat with Maya',
  teaserSecondaryCta: 'Browse quick answers',
  teaserFooterNote: 'No personal data required',
  chatHeaderTitle: 'Chat with Maya',
  chatHeaderSupportLine:
    'I help with Dentech Digital services, pricing, timelines, and getting you to the right next step.',
  chatHeaderStatusLine: 'Online now',
  assistantName: 'Maya',
  assistantAvatarSrc: '/team/maya.webp',
  assistantRoleBadge: 'AI admin assistant',
  chatResponseHintLine: 'Typical replies within a few seconds.',
  poweredByLabel: 'Powered by Dentech Digital',
  poweredByTo: '/',
  faqTabHeader: 'Popular questions',
  helpdeskIntroTitle: 'Helpdesk quick answers',
  helpdeskIntroBody:
    'Pick a category, then open a question. Use the Chat tab for a live conversation with Maya, our AI admin assistant.',
  dialogAriaLabel: 'Maya, Dentech Digital admin assistant',
  tabChatLabel: 'Chat',
  tabHelpdeskLabel: 'Helpdesk',
  showQuickStarts: false,
  quickStartsLabel: 'Quick starts',
  composerAriaLabel: 'Message Maya',
  composerPlaceholder: 'Message Maya…',
  faqItems: CHATBOT_FAQ,
  starterPrompts: [],
  qualificationPrompts: [],
  helpdeskCategories: [
    { id: 'pricing', label: 'Pricing', intents: ['pricing'] },
    { id: 'services', label: 'Services', intents: ['services'] },
    { id: 'timeline', label: 'Timeline', intents: ['timeline'] },
    { id: 'getting-started', label: 'Getting started', intents: ['booking'] },
  ],
  headerAvatarSrcs: ['/team/maya.webp'],
  launcherBadgeSrc: '/team/maya.webp',
  defaultContactCta: { label: 'Contact Dentech', to: '/#contact' },
  bookStrategyCallCta: { label: 'Book Your Strategy Call', to: '/#contact' },
  faqModeNoMatchReply:
    'In Helpdesk mode I can only share curated answers. Try pricing, services, timeline, or getting started—or switch to Chat to talk with me (Maya) live.',
  faqModeNoMatchSuggestedCtas: [{ label: 'Contact Dentech', to: '/#contact' }],
  offlineErrorMessage: 'You appear offline. Please reconnect and try again.',
  liveAssistantUnavailableMessage:
    "I'm temporarily unable to reach the AI service. You can still use Contact, Pricing, or Services on the site.",
  ctaNudgeMessage:
    'You sound ready to decide—if you would like, book a strategy call and I will help you map a practical first 90 days with the team.',
  locale: 'en-CA',
  getPageContext: () => (typeof window === 'undefined' ? '/' : window.location.pathname),
  sendChatCompletion,
  onTrack: trackChatEvent,
  LinkComponent: ChatRouterLink,
  teaserDelayMs: 7000,
  assistantTypingLeadInMs: 550,
  assistantReplyMinDelayMs: 3200,
};
