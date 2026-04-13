import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
/** Eager: avoids a second network round-trip on `/` (common cause of long “splash” on cold mobile loads). */
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Contact = lazy(() => import('./pages/Contact'));
const ClientPortal = lazy(() => import('./pages/ClientPortal'));

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Defer until route content is painted, then scroll to anchored section when explicitly requested.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
      return;
    }
    // Default behavior for cross-page navigation: always start at hero/top.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

function RouteFallback() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-3 bg-[#FAFAF9] dark:bg-slate-950"
      role="status"
      aria-live="polite"
    >
      <div className="h-9 w-9 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" aria-hidden />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="dentech-theme">
      <HelmetProvider>
        <Router>
          <RouteScrollManager />
          <div className="flex min-h-screen flex-col bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<RouteFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portal" element={<ClientPortal />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
