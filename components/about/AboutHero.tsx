import React from 'react';
import PageHeroAboutStyle from '../PageHeroAboutStyle';
import { SectionGradientEmphasis } from '../SectionGradientEmphasis';
import { ABOUT_PAGE_HERO_IMAGE_CLASS, ABOUT_PAGE_HERO_PATH } from '../../data/aboutContent';

function mediaUrl(src: string): string {
  if (src.startsWith('http')) return src;
  const base = import.meta.env.BASE_URL;
  return `${base}${src.replace(/^\//, '')}`;
}

export default function AboutHero() {
  return (
    <PageHeroAboutStyle
      badge="Since 2017 · Ottawa, Canada"
      title={
        <>
          The dental growth partner behind your website, ads, and{' '}
          <SectionGradientEmphasis>patient experience</SectionGradientEmphasis>.
        </>
      }
      description={
        <>
          If your team is stretched thin between the front desk and Facebook, you need a senior crew that treats marketing
          like a system — not a checklist. Dentech Digital is a small, experienced team based in Ottawa, helping dental
          and medical practices across Canada and international markets launch, scale, and prove ROI since 2017.
        </>
      }
      primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
      secondaryCta={{ to: '/case-studies', label: 'View case studies' }}
      heroImageSrc={mediaUrl(ABOUT_PAGE_HERO_PATH)}
      heroImageClassName={ABOUT_PAGE_HERO_IMAGE_CLASS}
    />
  );
}
