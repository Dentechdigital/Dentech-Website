import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import SpecialOfferCTA from '../components/SpecialOfferCTA';
import CaseStudiesPreview from '../components/CaseStudiesPreview';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#FAFAF9] dark:bg-slate-900 transition-colors duration-300">
      <SEO 
        title="Home" 
        description="Welcome to our agency. We help you grow your business." 
      />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChooseUs />
      <SpecialOfferCTA />
      <CaseStudiesPreview />
      <Testimonials />
      <ContactSection />
    </main>
  );
};

export default Home;
