import React from 'react';
import { 
  Users, 
  Target, 
  CalendarCheck, 
  TrendingUp, 
  MapPin, 
  Megaphone, 
  Star,
  Globe
} from 'lucide-react';

export const METRICS = [
  {
    id: 1,
    label: 'New Patients',
    value: '45',
    change: '+12%',
    icon: <Users className="w-6 h-6 text-white" />,
    gradient: 'from-blue-600 to-blue-800',
    textColor: 'text-green-600'
  },
  {
    id: 2,
    label: 'Cost Per Lead',
    value: '$42',
    change: '-8%',
    icon: <Target className="w-6 h-6 text-white" />,
    gradient: 'from-indigo-500 to-purple-700',
    textColor: 'text-green-600'
  },
  {
    id: 3,
    label: 'Appointments',
    value: '128',
    change: '+24',
    icon: <CalendarCheck className="w-6 h-6 text-white" />,
    gradient: 'from-teal-500 to-emerald-700',
    textColor: 'text-blue-950'
  },
  {
    id: 4,
    label: 'Campaign ROI',
    value: '324%',
    change: '+18%',
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    gradient: 'from-slate-800 to-black',
    textColor: 'text-green-600'
  }
];

export const FEATURES = [
  {
    title: 'Digital Branding',
    description: 'Craft a stunning, high-converting online brand presence.',
    icon: Globe,
    iconGradient: 'from-blue-500 to-cyan-400',
    iconColor: 'text-white',
    link: '/services#web'
  },
  {
    title: 'Growth Marketing',
    description: 'Drive measurable growth with targeted ad campaigns.',
    icon: Target,
    iconGradient: 'from-emerald-500 to-teal-400',
    iconColor: 'text-white',
    link: '/services#ppc'
  },
  {
    title: 'Social Community',
    description: 'Build loyal relationships through active audience engagement.',
    icon: Users,
    iconGradient: 'from-indigo-500 to-purple-400',
    iconColor: 'text-white',
    link: '/services#social'
  }
];

export const TEAM_AVATARS = [
  "https://picsum.photos/seed/dentist1/100",
  "https://picsum.photos/seed/dentist2/100",
  "https://picsum.photos/seed/dentist3/100",
  "https://picsum.photos/seed/dentist4/100"
];