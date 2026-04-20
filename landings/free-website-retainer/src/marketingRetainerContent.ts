/**
 * Copy aligned with main site `components/PricingPlans.tsx` (marketingPackages) and offer framing in
 * `components/SpecialOfferCTA.tsx` — keep in sync when those change.
 */
/** Bundled “website included” offer on this LP is only sold with Signature Marketing. */
export const WEBSITE_OFFER_TIER_LABEL = 'Signature Marketing';
export const WEBSITE_OFFER_MONTHLY = '$2,500/mo';

export type RetainerTier = {
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  badge?: string;
  highlighted?: boolean;
  /** When true, this tier is the one tied to the free-starter-site bundle on this landing page. */
  websiteBundleEligible?: boolean;
};

export const MARKETING_RETAINER_TIERS: readonly RetainerTier[] = [
  {
    name: 'Starter Marketing',
    price: '$1,500/mo',
    description:
      'A reliable monthly growth foundation focused on visibility, consistency, and steady lead generation across your key local channels.',
    features: [
      'SEO optimization + local visibility support',
      'Consistent social posting and channel management',
      'Monthly performance reporting',
      'Creative assets for web + social',
    ],
    websiteBundleEligible: false,
  },
  {
    name: 'Signature Marketing',
    price: '$2,500/mo',
    description:
      'Best for clinics targeting faster growth, stronger market share, and higher lead quality through multi-channel execution.',
    features: [
      'Everything in Starter Marketing +',
      'PPC campaign creation and management',
      'Expanded SEO with deeper keyword strategy',
      'Authority-building placements and content',
      'Monthly strategy and optimization sessions',
    ],
    highlighted: true,
    badge: 'Most Popular',
    websiteBundleEligible: true,
  },
  {
    name: 'Elite Marketing',
    price: '$5,000/mo',
    description:
      'Enterprise-level growth support with high-touch execution, advanced strategy, and ongoing optimization for scale.',
    features: [
      'Everything in Signature Marketing +',
      'Advanced paid acquisition across key channels',
      'Dedicated content + campaign support',
      'Email and funnel automation layers',
      'Priority consulting and execution cycles',
    ],
    websiteBundleEligible: false,
  },
] as const;
