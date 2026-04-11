import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import LeadInquiryForm from './LeadInquiryForm';
import { SITE_CONTACT } from '../data/siteContact';

export default function ContactSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAFAF9] py-24 transition-colors duration-300 dark:bg-slate-950"
      id="contact"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 -skew-x-12 translate-x-1/4 transform bg-blue-50/50 dark:bg-blue-900/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl">
              Ready to grow your <br />
              <span className="text-blue-600 dark:text-blue-400">patient base?</span>
            </h2>
            <p className="mb-10 max-w-lg text-lg text-gray-600 dark:text-gray-300">
              Get in touch with our team today for a free practice audit and discover how we can help you dominate your local market.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Call us directly
                  </h4>
                  <a
                    href={`tel:${SITE_CONTACT.phoneTel}`}
                    className="text-xl font-bold text-blue-950 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                  >
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Email us
                  </h4>
                  <a
                    href={`mailto:${SITE_CONTACT.email}`}
                    className="text-xl font-bold text-blue-950 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                  >
                    {SITE_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Office location
                  </h4>
                  <p className="text-lg font-medium text-blue-950 dark:text-white">{SITE_CONTACT.addressSingleLine}</p>
                </div>
              </div>
            </div>
          </div>

          <LeadInquiryForm />
        </div>
      </div>
    </section>
  );
}
