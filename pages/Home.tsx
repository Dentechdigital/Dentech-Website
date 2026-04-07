import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import AISolutionsCTA from '../components/AISolutionsCTA';
import WhyChooseUs from '../components/WhyChooseUs';
import SpecialOfferCTA from '../components/SpecialOfferCTA';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import Testimonials from '../components/Testimonials';
import PricingPlans from '../components/PricingPlans';
import HomeFAQ, { homeFaqItems } from '../components/HomeFAQ';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#FAFAF9] dark:bg-slate-900 transition-colors duration-300">
      <SEO
        title="Home"
        description="Dental marketing, custom websites & local SEO for Ottawa and Canadian clinics. Transparent pricing for websites and monthly growth retainers."
        faqStructuredData={homeFaqItems}
      />
      <Hero />
      <TrustedBy />
      <Services />
      <AISolutionsCTA />
      <WhyChooseUs />
      <SpecialOfferCTA />
      <CaseStudiesPreview />
      <Testimonials />
      <PricingPlans />
      <HomeFAQ />
      <ContactSection />
    </main>
  );
};

export default Home;
