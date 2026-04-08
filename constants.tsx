import { Users, Target, Globe } from 'lucide-react';

export const FEATURES = [
  {
    title: 'Digital Branding',
    description: 'Craft a stunning, high-converting online brand presence.',
    icon: Globe,
    iconGradient: 'from-blue-500 to-cyan-400',
    iconColor: 'text-white',
    link: '/services#web',
  },
  {
    title: 'Growth Marketing',
    description: 'Drive measurable growth with targeted ad campaigns.',
    icon: Target,
    iconGradient: 'from-emerald-500 to-teal-400',
    iconColor: 'text-white',
    link: '/services#ppc',
  },
  {
    title: 'Social Community',
    description: 'Build loyal relationships through active audience engagement.',
    icon: Users,
    iconGradient: 'from-indigo-500 to-purple-400',
    iconColor: 'text-white',
    link: '/services#social',
  },
];
