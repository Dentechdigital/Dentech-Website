import type { BlogPost } from '../types';

export const postContentStrategy: BlogPost = {
  slug: 'dental-content-strategy-service-pages-blog-faq-seo',
  publishedAt: '2026-01-24',
  title: 'Dental content strategy: service pages vs blog vs FAQ for SEO',
  metaTitle: 'Dental content strategy for SEO',
  metaDescription:
    'Allocate content investment across service pages, blogs, and FAQs for dental SEO—when to publish what, and how to avoid thin pages.',
  keywords: [
    'dental content marketing',
    'dental service page SEO',
    'dental blog strategy',
  ],
  heroImageAlt: 'Content calendar and dental marketing notes on a desk',
  heroImageSrc: '/services/social-content/hero-collage-social.webp',
  heroImageClassName:
    'object-cover object-[24%_center] sm:object-[28%_center] lg:object-[32%_center]',
  cardImageSrc: '/services/social-content/hero-collage-social.webp',
  faq: [
    {
      question: 'Should we blog weekly?',
      answer:
        'Quality beats cadence. One strong, patient-useful article monthly often outperforms four thin posts—especially if service pages still lack depth.',
    },
    {
      question: 'What belongs on a service page vs a blog?',
      answer:
        'Service pages should definitively describe offerings, candidacy, process, and FAQs for that service. Blogs explore questions, comparisons, and seasonal topics that link back to services.',
    },
    {
      question: 'Are FAQ accordions good for SEO?',
      answer:
        'Yes when answers are specific and helpful. They can generate FAQ rich results when marked up responsibly and aligned with on-page content.',
    },
    {
      question: 'How do we avoid duplicate topics?',
      answer:
        'Maintain a simple content matrix: topic, primary page, target keyword, status. Audit quarterly for overlap and merge weak pages.',
    },
  ],
  keyTakeaways: [
    'Prioritize money services first: implants, ortho, sedation—where lifetime value justifies depth.',
    'Each service page needs unique proof: doctors, technology, financing overview, booking CTA.',
    'Blog posts should internally link to the right service page with descriptive anchor text.',
    'Refresh top pages twice yearly; dentistry and search behavior evolve.',
    'Pair editorial plans with **[social & content](/services/social-content)** distribution.',
  ],
  bodyMarkdown: `Content is not “extra”—it is how patients and search engines **understand what you do**. **Dentech Digital** helps **Canadian dental clinics** invest in the right mix of **service pages**, **blogs**, and **FAQs** so you do not churn low-value articles while core pages stay thin.

The mistake we see most often is a busy **editorial calendar** paired with **thin service pages**—so traffic lands on blog posts that cannot convert because the money pages still read like a brochure from 2012. Flip the priority: **depth where revenue is decided**, then support with education that links back cleanly.

![Social and content strategy collage](/services/social-content/hero-collage-social.webp)

## Service pages: your revenue spine

Service pages should answer: **who is a candidate**, **what happens**, **how long recovery broadly takes**, **what questions to ask**, and **how to book**. Avoid copying manufacturer brochures verbatim; localize to your team and protocols (without overpromising).

## Blog: education and discovery

Blogs excel at **long-tail questions**: “What to expect after bone graft healing timelines?” or “Invisalign vs braces for adults—high-level tradeoffs.” Link to **[consultation booking](/contact)** and relevant services.

## FAQ modules

Use FAQs on service pages and a central FAQ hub if helpful. Write answers **patient-plain**, not insurance-code dense.

## Content governance

| Role | Responsibility |
| --- | --- |
| Clinical lead | Accuracy review for clinical claims |
| Marketing | Calendar, SEO targets, internal links |
| Front desk | Patient questions feed content ideas |

### Internal linking discipline

Every blog post should answer: **which service page does this support?** Use descriptive anchors (“dental implant consultation process”) rather than vague “click here.” When you refresh a service page, scan older posts for outdated links or mentions of retired offers—stale internal links confuse patients and dilute relevance signals over time.

## People also ask

**Do we need video?**  
Short explainers can help engagement; accessibility captions matter. Start with written depth if budget is tight.

**Should we translate content?**  
If you serve bilingual communities (common around **Ottawa**), consider professionally translated high-value pages—not only widget translation.

## A simple quarterly audit

Once per quarter, export your top 20 landing URLs and ask: **Is the primary CTA obvious?** **Does the page answer the top three patient questions** your team hears on the phone? **Do FAQs match what people actually type?** Small updates beat “content for content’s sake” when capacity and compliance are real constraints.`,
};

export const postAnalyticsAttribution: BlogPost = {
  slug: 'dental-practice-analytics-attribution-calls-forms',
  publishedAt: '2026-01-26',
  title: 'Analytics and attribution for dental practices: calls, forms, and CRM basics',
  metaTitle: 'Dental practice analytics & attribution',
  metaDescription:
    'Set up practical analytics for dental clinics: call tracking, form events, source attribution, and CRM handoffs—without drowning in dashboards.',
  keywords: [
    'dental practice analytics',
    'call tracking dental marketing',
    'dental CRM attribution',
  ],
  heroImageAlt: 'Analytics dashboard showing marketing metrics for a healthcare practice',
  heroImageSrc: '/services/paid-ads/hero-collage-ads.webp',
  heroImageClassName:
    'object-cover object-[28%_center] sm:object-[32%_center] lg:object-[36%_center]',
  cardImageSrc: '/services/paid-ads/hero-collage-ads.webp',
  faq: [
    {
      question: 'Do I need call tracking?',
      answer:
        'If phone calls drive a large share of bookings, dynamic number insertion can clarify which campaigns work. Ensure privacy disclosures meet your counsel’s standards.',
    },
    {
      question: 'What is a minimum viable analytics stack?',
      answer:
        'A privacy-conscious analytics tool or GA4 with conversion events, call tracking optional, and UTM hygiene on campaigns often suffices for SMB clinics.',
    },
    {
      question: 'How do we attribute patients who switch devices?',
      answer:
        'Perfect attribution is rare. Use blended models: last-click for ops simplicity plus periodic surveys asking “How did you hear about us?”',
    },
    {
      question: 'Should marketing see PHI in CRM notes?',
      answer:
        'Marketing usually should not need detailed PHI. Work with compliance to define fields and access roles.',
    },
  ],
  keyTakeaways: [
    'Define conversions: booked consult, accepted treatment plan deposit, etc.',
    'Use UTMs on every paid link; keep a living UTM cheat sheet.',
    'Review cost per booked patient by channel monthly.',
    'Connect ad platforms to offline outcomes qualitatively when CRM integration is immature.',
    'Upgrade measurement when launching **[paid ads](/services/paid-ads)** at scale.',
  ],
  bodyMarkdown: `If you cannot **see** which messages drive **booked patients**, you optimize for clicks. **Dentech Digital** builds measurement plans for **Canadian dental clinics** that respect **privacy** and front-desk reality.

Dashboards are only useful when someone owns the **interpretation**: why did calls spike—seasonality, a new associate, a promo, or a tracking change? Start with a short narrative each month, not twenty slides.

![Paid media and performance collage](/services/paid-ads/hero-collage-ads.webp)

## Start with decisions, not tools

Pick **3–5 KPIs**: booked new patients, consults scheduled, hygiene reactivation rate, cost per acquisition (blended), and organic share of leads.

## Call tracking considerations

Dynamic numbers help attribute phone calls to campaigns. Disclose tracking appropriately on the site and in call flows per counsel guidance.

## Form and chat events

Fire analytics events on successful submissions—not only button clicks. Test on mobile.

## CRM handoffs

Even a lightweight spreadsheet beats nothing: date, source, procedure interest, outcome. As you mature, integrate **[AI & automation](/services/ai-automation)** cautiously with privacy review.

## Monthly review cadence

1. Export campaign performance  
2. Compare to schedule capacity  
3. Pause underperformers; scale winners  
4. Feed learnings to creative and landing pages  

### UTM hygiene (small detail, big clarity)

Agree on a **naming convention** for campaigns and stick to it: source, medium, campaign, and optional content/ad variant. When UTMs are inconsistent, reports become untrustworthy and teams argue about data instead of decisions. Keep a one-page cheat sheet in your shared drive and update it when you launch new channels.

## People also ask

**Is GA4 enough?**  
Often yes for websites; complement with ad platform data and call metrics.

**What about HIPAA vs PIPEDA framing?**  
Canadian clinics primarily navigate **PIPEDA**/provincial health laws; US HIPAA analogies can confuse—ask counsel.

## Bridging online metrics to the schedule

Even without a perfect CRM, you can tag front-desk notes with **inquiry source** for a sample week each quarter. Comparing that sample to analytics trends catches blind spots—especially when patients research online but book by phone after a day or two.`,
};

export const postMarketingCalendar: BlogPost = {
  slug: 'dental-marketing-calendar-demand-hygiene-consult-emergency',
  publishedAt: '2026-01-28',
  title: 'Dental marketing calendar: hygiene recall, consults, and emergency intent',
  metaTitle: 'Dental marketing calendar planning',
  metaDescription:
    'Plan dental marketing around demand types: hygiene recall, specialty consults, and emergency search intent—quarterly rhythms for Canadian clinics.',
  keywords: [
    'dental marketing calendar',
    'hygiene recall marketing',
    'dental emergency SEO',
  ],
  heroImageAlt: 'Wall calendar with marketing milestones for a dental practice',
  heroImageSrc: '/services/print/hero-collage-print.webp',
  heroImageClassName:
    'object-cover object-[26%_center] sm:object-[30%_center] lg:object-[34%_center]',
  cardImageSrc: '/services/print/hero-collage-print.webp',
  faq: [
    {
      question: 'How far ahead should we plan campaigns?',
      answer:
        'A rolling 90-day plan with a lighter 12-month skeleton works well: seasons, school holidays, and insurance benefit cycles matter for many Canadian families.',
    },
    {
      question: 'Should emergency keywords get their own landing page?',
      answer:
        'Often yes—distinct copy, clear hours, phone prominence, and realistic wait expectations perform better than generic pages.',
    },
    {
      question: 'How do we promote hygiene without sounding salesy?',
      answer:
        'Lead with prevention benefits, easy booking, and reminder automations. Educational tone outperforms pushy discounting for long-term trust.',
    },
    {
      question: 'What is a realistic content cadence for social?',
      answer:
        '3–5 quality posts weekly beats daily low-value posts for most clinics. Batch production monthly.',
    },
  ],
  keyTakeaways: [
    'Map offers to capacity: do not advertise promos you cannot schedule.',
    'Build recall campaigns before peak benefit usage windows.',
    'Specialty consults (ortho, implants) may need longer nurture sequences.',
    'Emergency pages need mobile click-to-call and after-hours clarity.',
    'Align calendar with **[SEO](/services/local-seo)** and **[paid media](/services/paid-ads)** jointly.',
  ],
  bodyMarkdown: `**Dentech Digital** helps **Ottawa** and **Canadian** practices align **marketing calendars** with **clinical capacity** and **patient behavior**. This framework segments demand so you are not only running generic “dental office” ads.

Calendars fail when marketing announces an offer the schedule cannot absorb—or when recall campaigns go silent for months because no one owns the rhythm. The goal is **predictable, repeatable pushes** aligned to chair time and community context.

![Print and direct mail collage](/services/print/hero-collage-print.webp)

## Three demand lanes

1. **Hygiene & recall** — continuity care, membership plans, reminder automation  
2. **Consultative specialty** — ortho, implants, full-arch; education-heavy journeys  
3. **Urgent / emergency** — toothache, trauma; speed, empathy, and clarity win  

## Quarterly rhythm (example)

| Quarter | Focus | Tactics |
| --- | --- | --- |
| Q1 | Benefits reset | Recall + insurance-friendly messaging |
| Q2 | Families & sports | Mouthguards, teen ortho interest |
| Q3 | Back-to-school | Checkups, scheduling crunch |
| Q4 | Year-end benefits | Hygiene fills + consult promos (compliant) |

Adjust to your patient mix—this table is illustrative, not prescriptive.

## Search intent alignment

- **Emergency**: city + “emergency dentist,” “toothache,” “broken tooth”  
- **Specialty**: long-tail procedure questions  
- **Recall**: email/SMS plus social proof on gentle hygiene experiences  

## Creative notes

Use **real team faces**, **short videos**, and **clear hours**. Respect **college advertising** and **contest rules** if you run promotions.

### Offline + online in the same story

**[Print & direct mail](/services/print)** still works for recall when paired with easy booking paths. Mention the same phone number and web address across pieces; mismatches erode trust and confuse attribution. If you run a seasonal mailer, mirror the theme on your site hero for a few weeks so digital and physical experiences feel intentional—not accidental.

## People also ask

**How do we coordinate with front desk?**  
Share a one-page calendar with talk tracks and booking priorities before each push.

**What if we lack creative bandwidth?**  
Start with **[print & direct mail](/services/print)** for hyper-local recall and pair with modest paid boosts—test, then scale.

## A realistic “minimum viable” calendar

If you can only execute a few beats per quarter, prioritize: **recall before benefit windows**, **one specialty consult push** aligned to provider capacity, and **emergency clarity** (hours, phone, after-hours messaging) year-round. Everything else is optional polish until those three stay consistent.`,
};

