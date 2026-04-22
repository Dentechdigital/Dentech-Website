import type { ChatRuntimeConfig } from '@dentech/chat-widget';
import { CHATBOT_FAQ } from '../../data/chatbotFaq';
import { CHATBOT_QUALIFICATION_PROMPTS, CHATBOT_STARTER_PROMPTS } from '../../data/chatbotPrompts';
import { recordChatConversationForNetlify, trackChatEvent } from './chatbotAnalytics';
import ChatRouterLink from './ChatRouterLink';
import { sendChatCompletion } from './sendChatCompletion';

export const dentechChatRuntimeConfig: ChatRuntimeConfig = {
  sessionStorageKey: 'dentech-chat-session',
  welcomeMessage:
    "Hi — I'm Maya. One line: new to Dentech or already a client? What do you need (call, pricing, services, hours)? I'll route you fast.",
  teaserTitle: 'Plan your next step?',
  teaserBody: 'Maya routes you to answers and a strategy call or contact — not endless back-and-forth.',
  teaserStatusLine: 'Online now',
  teaserPrimaryCta: 'Chat with Maya',
  teaserSecondaryCta: 'Browse quick answers',
  teaserFooterNote: 'No personal data required',
  chatHeaderTitle: 'Chat with Maya',
  chatHeaderSupportLine: 'Short answers from our FAQs — then a clear next step (call or contact).',
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
  showQuickStarts: true,
  quickStartsLabel: 'Quick starts',
  composerAriaLabel: 'Message Maya',
  composerPlaceholder: 'e.g. Book a call, pricing, hours…',
  faqItems: CHATBOT_FAQ,
  starterPrompts: CHATBOT_STARTER_PROMPTS,
  qualificationPrompts: CHATBOT_QUALIFICATION_PROMPTS,
  helpdeskCategories: [
    { id: 'pricing', label: 'Pricing', intents: ['pricing'] },
    { id: 'services', label: 'Services', intents: ['services'] },
    { id: 'timeline', label: 'Timeline', intents: ['timeline'] },
    { id: 'getting-started', label: 'Getting started', intents: ['booking'] },
    { id: 'current-clients', label: 'Current clients', intents: ['existing-client'] },
  ],
  headerAvatarSrcs: ['/team/maya.webp'],
  launcherBadgeSrc: '/team/maya.webp',
  defaultContactCta: { label: 'Contact Dentech', to: '/#contact' },
  bookStrategyCallCta: { label: 'Book Your Strategy Call', to: '/#contact' },
  faqModeNoMatchReply:
    'Helpdesk mode: curated answers only. Try Pricing, Services, Timeline, or Getting started — or open Chat for Maya.',
  faqModeNoMatchSuggestedCtas: [{ label: 'Contact Dentech', to: '/#contact' }],
  offlineErrorMessage: 'You appear offline. Please reconnect and try again.',
  liveAssistantUnavailableMessage:
    "I'm temporarily unable to reach the AI service. You can still use Contact, Pricing, or Services on the site.",
  ctaNudgeMessage: 'Ready for a concrete plan? Fastest next step: book a strategy call via Contact.',
  locale: 'en-CA',
  getPageContext: () => (typeof window === 'undefined' ? '/' : window.location.pathname),
  sendChatCompletion,
  onTrack: trackChatEvent,
  onConversationUpdate: recordChatConversationForNetlify,
  LinkComponent: ChatRouterLink,
  teaserDelayMs: 7000,
  assistantTypingLeadInMs: 550,
  assistantReplyMinDelayMs: 3200,
};
