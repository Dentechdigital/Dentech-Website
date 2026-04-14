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
const DentechChatWidget = lazy(() => import('./components/chat/DentechChatWidget'));

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
      return;
    }
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

function DeferredChatMount() {
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const windowWithIdle = window as Window & {
      requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    const reveal = () => setReady(true);
    const onInteraction = () => {
      reveal();
      cleanup();
    };

    let idleHandle = 0;
    let usingIdleCallback = false;
    if (windowWithIdle.requestIdleCallback) {
      usingIdleCallback = true;
      idleHandle = windowWithIdle.requestIdleCallback(reveal, { timeout: 4500 });
    } else {
      idleHandle = window.setTimeout(reveal, 3000);
    }

    const cleanup = () => {
      window.removeEventListener('pointerdown', onInteraction);
      window.removeEventListener('keydown', onInteraction);
    };

    window.addEventListener('pointerdown', onInteraction, { once: true });
    window.addEventListener('keydown', onInteraction, { once: true });

    return () => {
      cleanup();
      if (usingIdleCallback && windowWithIdle.cancelIdleCallback) {
        windowWithIdle.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
    };
  }, []);

  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <DentechChatWidget />
    </Suspense>
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
            <DeferredChatMount />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
