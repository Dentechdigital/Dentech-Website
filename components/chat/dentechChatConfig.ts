import type { ChatRuntimeConfig } from '@dentech/chat-widget';
import { CHATBOT_FAQ } from '../../data/chatbotFaq';
import { CHATBOT_QUALIFICATION_PROMPTS, CHATBOT_STARTER_PROMPTS } from '../../data/chatbotPrompts';
import { recordChatConversationForNetlify, trackChatEvent } from './chatbotAnalytics';
import ChatRouterLink from './ChatRouterLink';
import { sendChatCompletion } from './sendChatCompletion';

export const dentechChatRuntimeConfig: ChatRuntimeConfig = {
  sessionStorageKey: 'dentech-chat-session',
  welcomeMessage:
    "Hi — I'm Maya. Tell me if you're exploring Dentech for the first time or already a client, and what you want to achieve — I'll get you to the right next step (often a quick strategy call for new practices).",
  teaserTitle: 'Plan your next step?',
  teaserBody: 'Maya routes you to answers and a strategy call or contact — not endless back-and-forth.',
  teaserStatusLine: 'Online now',
  teaserPrimaryCta: 'Chat with Maya',
  teaserSecondaryCta: 'Browse quick answers',
  teaserFooterNote: 'No personal data required',
  chatHeaderTitle: 'Chat with Maya',
  chatHeaderSupportLine:
    'I answer from our FAQs and nudge you toward a strategy call (new clients) or the right contact path (current clients).',
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
  composerPlaceholder: 'e.g. New clinic in Toronto — need website + leads…',
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
    'In Helpdesk mode I can only share curated answers. Try pricing, services, timeline, or getting started—or switch to Chat to talk with me (Maya) live.',
  faqModeNoMatchSuggestedCtas: [{ label: 'Contact Dentech', to: '/#contact' }],
  offlineErrorMessage: 'You appear offline. Please reconnect and try again.',
  liveAssistantUnavailableMessage:
    "I'm temporarily unable to reach the AI service. You can still use Contact, Pricing, or Services on the site.",
  ctaNudgeMessage:
    'You sound ready for a concrete plan — the fastest path is a strategy call via Contact so our team can confirm fit and priorities. Want me to point you there?',
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
