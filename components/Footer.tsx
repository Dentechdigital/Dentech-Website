import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarClock, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Contact', to: '/contact' },
  ];

  const coreServices = [
    'Local SEO & Maps',
    'Google + Meta Ads',
    'Custom Dental Websites',
    'Social Content Systems',
    'AI Reception & Automation',
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/15" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-blue-100/40 backdrop-blur md:p-10 dark:border-slate-700/70 dark:bg-slate-950/75 dark:shadow-blue-900/20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Link to="/" className="inline-flex items-center">
                <img
                  src={theme === 'dark' ? `${import.meta.env.BASE_URL}logo-dark.svg?v=2` : `${import.meta.env.BASE_URL}logo-light.svg?v=2`}
                  alt="Dentech Digital"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                We help dental businesses build stronger brands, capture more qualified patients, and scale predictable revenue with modern marketing and AI systems.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200">
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  Growth Partner for Clinics
                </span>
                <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-200">
                  SEO, Paid Ads, AI Automation
                </span>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Explore</h4>
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Core Services</h4>
              <ul className="mt-4 space-y-2.5">
                {coreServices.map((service) => (
                  <li key={service} className="text-sm text-slate-700 dark:text-slate-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Contact</h4>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-300" />
                  <span>499 Preston St Ottawa, ON, Canada</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Phone className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-300" />
                  <a href="tel:6138693121" className="transition-colors hover:text-blue-600 dark:hover:text-blue-300">
                    (613) 869-3121
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Mail className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-300" />
                  <a href="mailto:hello@dentech.digital" className="transition-colors hover:text-blue-600 dark:hover:text-blue-300">
                    hello@dentech.digital
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <CalendarClock className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-300" />
                  <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 md:flex-row md:items-center md:justify-between dark:border-slate-700 dark:bg-slate-950/75">
            <div>
              <p className="text-base font-semibold text-slate-900 dark:text-white">Ready to scale your clinic with a predictable growth system?</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Book a strategy call and get a tailored growth roadmap for your market.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Dentech Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
            <Link to="/privacy" className="transition-colors hover:text-slate-700 dark:hover:text-slate-200">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-slate-700 dark:hover:text-slate-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
