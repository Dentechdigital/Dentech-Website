import React from 'react';
import PageHeroAboutStyle from '../PageHeroAboutStyle';

export default function AboutHero() {
  return (
    <PageHeroAboutStyle
      badge="Since 2017 · Ottawa, Canada"
      title="The dental growth partner behind your website, ads, and patient experience."
      description={
        <>
          If your team is stretched thin between the front desk and Facebook, you need a senior crew that treats marketing
          like a system — not a checklist. Dentech Digital is a small, experienced team based in Ottawa, helping dental
          and medical practices across Canada launch, scale, and prove ROI since 2017.
        </>
      }
      primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
      secondaryCta={{ to: '/case-studies', label: 'View case studies' }}
    />
  );
}
