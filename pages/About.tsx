import React from 'react';
import SEO from '../components/SEO';
import { buildAboutStructuredData } from '../data/aboutContent';
import AboutHero from '../components/about/AboutHero';
import AboutStatsStrip from '../components/about/AboutStatsStrip';
import AboutWhoWeServe from '../components/about/AboutWhoWeServe';
import AboutStoryTimeline from '../components/about/AboutStoryTimeline';
import AboutFounder from '../components/about/AboutFounder';
import AboutLiveMarquee from '../components/about/AboutLiveMarquee';
import AboutCapabilitiesBento from '../components/about/AboutCapabilitiesBento';
import AboutTeamScrum from '../components/about/AboutTeamScrum';
import AboutAIPartners from '../components/about/AboutAIPartners';
import AboutProof from '../components/about/AboutProof';
import AboutOfficeCTA from '../components/about/AboutOfficeCTA';
import AboutMobileCtaBar from '../components/about/AboutMobileCtaBar';

const aboutStructuredData = buildAboutStructuredData();

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Dentech Digital | Ottawa Dental Marketing Agency"
        description="Meet Dentech Digital, an Ottawa dental marketing agency serving clinics since 2017, with founder-led experience since 2006 across strategy, web, SEO/GEO, and paid media."
        structuredData={aboutStructuredData}
      />

      <div className="min-h-screen bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
        <AboutHero />
        <AboutStatsStrip />
        <AboutWhoWeServe />
        <AboutStoryTimeline />
        <AboutFounder />
        <AboutCapabilitiesBento />
        <AboutTeamScrum />
        <AboutLiveMarquee />
        <AboutAIPartners />
        <AboutProof />
        <AboutOfficeCTA />
        <AboutMobileCtaBar />
        {/* Padding so fixed mobile CTA does not cover footer content */}
        <div className="h-16 lg:hidden" aria-hidden />
      </div>
    </>
  );
};

export default About;
