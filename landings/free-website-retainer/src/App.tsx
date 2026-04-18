import CredibilityStrip from './components/CredibilityStrip';
import FaqAccordion from './components/FaqAccordion';
import HeroSection from './components/HeroSection';
import InclusionGrid from './components/InclusionGrid';
import LandingFooter from './components/LandingFooter';
import LandingHeader from './components/LandingHeader';
import LeadForm from './components/LeadForm';
import OfferSnapshot from './components/OfferSnapshot';
import PricingStrip from './components/PricingStrip';
import ProcessSteps from './components/ProcessSteps';
import SeoHead from './components/SeoHead';
import StickyMobileCta from './components/StickyMobileCta';

export default function App() {
  return (
    <>
      <SeoHead />
      <LandingHeader />
      <main className="pb-28 md:pb-0">
        <HeroSection />
        <OfferSnapshot />
        <InclusionGrid />
        <ProcessSteps />
        <CredibilityStrip />
        <PricingStrip />
        <FaqAccordion />
        <section id="apply" className="scroll-mt-24 bg-[#fafaf9] px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">Check eligibility</h2>
            <p className="mt-3 text-slate-600">
              Tell us about your practice. We will confirm fit, answer questions, and share the written agreement path
              if there is a match.
            </p>
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </section>
        <LandingFooter />
      </main>
      <StickyMobileCta />
    </>
  );
}
