import { Bot, Globe, MapPin, Printer, Target, Users } from 'lucide-react';

export const FEATURES = [
  {
    title: 'Local SEO & Maps',
    description: 'Show up in Search, Maps, and AI answers for high-intent dental queries.',
    icon: MapPin,
    iconGradient: 'from-blue-500 to-cyan-400',
    iconColor: 'text-white',
    link: '/services/local-seo',
  },
  {
    title: 'Paid acquisition',
    description: 'Drive measurable growth with targeted Google and Meta campaigns.',
    icon: Target,
    iconGradient: 'from-emerald-500 to-teal-400',
    iconColor: 'text-white',
    link: '/services/paid-ads',
  },
  {
    title: 'Dental websites',
    description: 'Craft a high-converting, mobile-first practice site.',
    icon: Globe,
    iconGradient: 'from-sky-500 to-blue-400',
    iconColor: 'text-white',
    link: '/services/websites',
  },
  {
    title: 'Social & content',
    description: 'Build trust with video, reviews, and consistent community presence.',
    icon: Users,
    iconGradient: 'from-indigo-500 to-purple-400',
    iconColor: 'text-white',
    link: '/services/social-content',
  },
  {
    title: 'Print & signage',
    description: 'Align physical brand presence with your digital funnel.',
    icon: Printer,
    iconGradient: 'from-amber-500 to-orange-400',
    iconColor: 'text-white',
    link: '/services/print',
  },
  {
    title: 'AI & automation',
    description: 'Missed-call text-back and lead workflows in the Dentech portal.',
    icon: Bot,
    iconGradient: 'from-cyan-500 to-teal-400',
    iconColor: 'text-white',
    link: '/services/ai-automation',
  },
];
