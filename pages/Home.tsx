import React, { lazy, Suspense } from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { homeFaqItems } from '../data/homeFaqContent';

const TrustedBy = lazy(() => import('../components/TrustedBy'));
const Services = lazy(() => import('../components/Services'));
const HomeProcessSteps = lazy(() => import('../components/HomeProcessSteps'));
const AISolutionsCTA = lazy(() => import('../components/AISolutionsCTA'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const HomeComparisonTable = lazy(() => import('../components/HomeComparisonTable'));
const SpecialOfferCTA = lazy(() => import('../components/SpecialOfferCTA'));
const CaseStudiesPreview = lazy(() => import('../components/CaseStudiesPreview'));
const HomeMidCta = lazy(() => import('../components/HomeMidCta'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const PricingPlans = lazy(() => import('../components/PricingPlans'));
const HomeFAQ = lazy(() => import('../components/HomeFAQ'));
const ContactSection = lazy(() => import('../components/ContactSection'));

const Home: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#FAFAF9] dark:bg-slate-950 transition-colors duration-300">
      <SEO
        title="Dental Marketing Agency Ottawa | SEO, GEO, Web & Ads"
        description="Ottawa dental marketing agency for Canadian clinics: local SEO, GEO, high-converting websites, paid media, and reputation systems that drive qualified bookings."
        faqStructuredData={homeFaqItems}
      />
      <Hero />
      <Suspense fallback={null}>
        <TrustedBy />
      </Suspense>
      <Suspense fallback={null}>
        <Services />
      </Suspense>
      <Suspense fallback={null}>
        <HomeProcessSteps />
      </Suspense>
      <Suspense fallback={null}>
        <AISolutionsCTA />
      </Suspense>
      <Suspense fallback={null}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={null}>
        <HomeComparisonTable />
      </Suspense>
      <Suspense fallback={null}>
        <SpecialOfferCTA />
      </Suspense>
      <Suspense fallback={null}>
        <CaseStudiesPreview />
      </Suspense>
      <Suspense fallback={null}>
        <HomeMidCta />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={null}>
        <PricingPlans />
      </Suspense>
      <Suspense fallback={null}>
        <HomeFAQ />
      </Suspense>
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </main>
  );
};

export default Home;
