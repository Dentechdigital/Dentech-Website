import type { ChatRuntimeConfig } from '@dentech/chat-widget';
import { CHATBOT_FAQ } from '../../data/chatbotFaq';
import { CHATBOT_QUALIFICATION_PROMPTS, CHATBOT_STARTER_PROMPTS } from '../../data/chatbotPrompts';
import { trackChatEvent } from './chatbotAnalytics';
import ChatRouterLink from './ChatRouterLink';
import { sendChatCompletion } from './sendChatCompletion';

export const dentechChatRuntimeConfig: ChatRuntimeConfig = {
  sessionStorageKey: 'dentech-chat-session',
  welcomeMessage:
    'Welcome to Dentech. Ask about pricing, services, timeline, or next steps and I will guide you quickly.',
  teaserTitle: 'Do you have any questions?',
  teaserBody: 'Dentech support is online and can guide your next growth step.',
  teaserStatusLine: 'Team replies under 1 hour',
  teaserPrimaryCta: 'Chat with Dentech Team',
  teaserSecondaryCta: 'Browse quick answers',
  teaserFooterNote: 'No personal data required',
  chatHeaderTitle: 'Talk with Dentech Team!',
  chatHeaderEmoji: '\u{1F642}',
  chatHeaderSupportLine: 'Dentech support is online and can guide your next growth step.',
  chatHeaderStatusLine: 'Team replies under 1 hour',
  faqTabHeader: 'Popular questions',
  helpdeskIntroTitle: 'Helpdesk quick answers',
  helpdeskIntroBody: 'Pick a category, then open a question. Use the Chat tab for a live conversation.',
  dialogAriaLabel: 'Dentech chatbot assistant',
  tabChatLabel: 'Chat',
  tabHelpdeskLabel: 'Helpdesk',
  quickStartsLabel: 'Quick starts',
  composerAriaLabel: 'Ask Dentech chatbot',
  composerPlaceholder: 'Compose your message...',
  faqItems: CHATBOT_FAQ,
  starterPrompts: CHATBOT_STARTER_PROMPTS,
  qualificationPrompts: CHATBOT_QUALIFICATION_PROMPTS,
  helpdeskCategories: [
    { id: 'pricing', label: 'Pricing', intents: ['pricing'] },
    { id: 'services', label: 'Services', intents: ['services'] },
    { id: 'timeline', label: 'Timeline', intents: ['timeline'] },
    { id: 'getting-started', label: 'Getting started', intents: ['booking'] },
  ],
  headerAvatarSrcs: ['/mohammed-dahman.webp', '/team/balfoul.webp', '/team/omayma-r.webp'],
  launcherBadgeSrc: '/avatar-80w.webp',
  defaultContactCta: { label: 'Contact Dentech', to: '/contact' },
  bookStrategyCallCta: { label: 'Book Your Strategy Call', to: '/contact' },
  faqModeNoMatchReply:
    'I can help with approved quick answers only in Helpdesk mode. Try pricing, services, timeline, or getting started.',
  faqModeNoMatchSuggestedCtas: [{ label: 'Contact Dentech', to: '/contact' }],
  offlineErrorMessage: 'You appear offline. Please reconnect and try again.',
  liveAssistantUnavailableMessage:
    'The live assistant is temporarily unavailable. You can continue with Contact, Pricing, or Services right now.',
  ctaNudgeMessage:
    'You look close to decision stage. If you want, use "Book Your Strategy Call" and we can map your first 90-day plan.',
  locale: 'en-CA',
  getPageContext: () => (typeof window === 'undefined' ? '/' : window.location.pathname),
  sendChatCompletion,
  onTrack: trackChatEvent,
  LinkComponent: ChatRouterLink,
  teaserDelayMs: 7000,
};
