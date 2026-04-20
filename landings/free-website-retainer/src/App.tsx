import ApplyAside from './components/ApplyAside';
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
        <section
          id="apply"
          className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#fafaf9] via-white to-blue-50/40 py-16 sm:py-20"
        >
          <div className="lp-dots pointer-events-none absolute inset-0 opacity-[0.3]" aria-hidden />
          <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" aria-hidden />
          <div className="relative z-10 lp-shell">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">Check eligibility</h2>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Tell us about your practice. We will confirm fit, answer questions, and share the written agreement path
                  if there is a match.
                </p>
                <div className="mt-8">
                  <LeadForm />
                </div>
              </div>
              <div className="lg:col-span-5">
                <ApplyAside />
              </div>
            </div>
          </div>
        </section>
        <LandingFooter />
      </main>
      <StickyMobileCta />
    </>
  );
}
