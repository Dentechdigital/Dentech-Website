import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <style>{`
        .about-display { font-family: 'Fraunces', Georgia, 'Times New Roman', serif; }
      `}</style>

      <SEO
        title="About Dentech Digital"
        description="Ottawa dental marketing agency since 2017. Meet founder Mohammed Dahman, our hybrid team, full-funnel services for Canadian dental practices, and how we work."
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
