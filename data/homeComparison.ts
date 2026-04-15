/** Homepage comparison table: Dentech vs typical digital / generalist agencies (SolGuruz-style clarity, no video). */

export const heroTrustPoints = [
  'Serving practices since 2017',
  'Ottawa HQ · Canada-wide',
  'Dental & medical focus',
  'Hybrid senior-led team',
] as const;

export type ComparisonTone = 'weak' | 'mixed' | 'strong';

export type HomeComparisonRow = {
  criterion: string;
  /** Short label for “typical” column */
  typical: string;
  typicalTone: ComparisonTone;
  /** Short label for Dentech column */
  dentech: string;
  dentechTone: ComparisonTone;
};

export const homeComparisonRows: HomeComparisonRow[] = [
  {
    criterion: 'Industry depth (dental procedures, compliance tone, patient intent)',
    typical: 'Generalist or “healthcare” templates',
    typicalTone: 'weak',
    dentech: 'Dental-only positioning & language',
    dentechTone: 'strong',
  },
  {
    criterion: 'Measurement (what “good” means month to month)',
    typical: 'Clicks & impressions first',
    typicalTone: 'weak',
    dentech: 'Bookings, consults & production signals',
    dentechTone: 'strong',
  },
  {
    criterion: 'Channel integration (SEO, ads, site, social, follow-up)',
    typical: 'Silos or separate vendors',
    typicalTone: 'mixed',
    dentech: 'One roadmap, one accountable team',
    dentechTone: 'strong',
  },
  {
    criterion: 'Transparency (access, reporting, who does the work)',
    typical: 'Black box or junior-only delivery',
    typicalTone: 'weak',
    dentech: 'Clear ownership & practical readouts',
    dentechTone: 'strong',
  },
  {
    criterion: 'Creative & web tied to conversion, not just aesthetics',
    typical: 'Pretty pages, weak funnels',
    typicalTone: 'mixed',
    dentech: 'Conversion-first UX & campaigns',
    dentechTone: 'strong',
  },
  {
    criterion: 'Bilingual / local market nuance (e.g. FR + EN in Canada)',
    typical: 'English-only or bolt-on translation',
    typicalTone: 'mixed',
    dentech: 'Campaign languages: EN, FR & Arabic',
    dentechTone: 'strong',
  },
];
