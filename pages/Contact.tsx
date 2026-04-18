import React, { useCallback, useState } from 'react';
import {
  Check,
  Clock,
  Copy,
  ExternalLink,
  Lock,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHeroAboutStyle from '../components/PageHeroAboutStyle';
import { SectionGradientEmphasis } from '../components/SectionGradientEmphasis';
import ContactTrustBadges from '../components/contact/ContactTrustBadges';
import LeadInquiryForm from '../components/LeadInquiryForm';
import {
  CONTACT_PAGE_HERO_IMAGE_CLASS,
  CONTACT_PAGE_HERO_PATH,
  SITE_CONTACT,
  googleMapsEmbedUrl,
  googleMapsExternalUrl,
} from '../data/siteContact';

function mediaUrl(src: string): string {
  if (src.startsWith('http')) return src;
  const base = import.meta.env.BASE_URL;
  return `${base}${src.replace(/^\//, '')}`;
}

type CopyKey = 'email' | 'address' | null;

function ContactChannelCard({
  icon,
  eyebrow,
  children,
  footer,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-slate-50/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200/80 hover:shadow-md dark:border-slate-700/90 dark:from-slate-900/70 dark:via-slate-900/55 dark:to-slate-800/50 dark:hover:border-blue-500/35">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner dark:bg-blue-500/15 dark:text-blue-300">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{eyebrow}</p>
          <div className="mt-1">{children}</div>
          {footer ? <div className="mt-3">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<CopyKey>(null);

  const flashCopied = useCallback((key: Exclude<CopyKey, null>) => {
    setCopied(key);
    window.setTimeout(() => setCopied(null), 2200);
  }, []);

  const copyEmail = useCallback(() => {
    void navigator.clipboard
      .writeText(SITE_CONTACT.email)
      .then(() => flashCopied('email'))
      .catch(() => {});
  }, [flashCopied]);

  const copyAddress = useCallback(() => {
    void navigator.clipboard
      .writeText(SITE_CONTACT.addressSingleLine)
      .then(() => flashCopied('address'))
      .catch(() => {});
  }, [flashCopied]);

  return (
    <>
      <SEO
        title="Contact Dentech Digital | Ottawa Dental Marketing Team"
        description="Contact our Ottawa dental marketing team to discuss your growth goals. Book a strategy call, share project scope, or visit our Preston Street studio."
      />

      <div className="min-h-screen bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
        <PageHeroAboutStyle
          badge="Ottawa · Hybrid team"
          title={
            <>
              Let’s build your <SectionGradientEmphasis>growth system</SectionGradientEmphasis>
            </>
          }
          description={
            <>
              Book a strategy call, send specs, or stop by the Preston studio—whichever fits your week. We reply to every serious inquiry within one business day.
            </>
          }
          primaryCta={{ to: '#lead-form', label: 'Start the form' }}
          secondaryCta={{ to: '/services', label: 'Browse services' }}
          heroImageSrc={mediaUrl(CONTACT_PAGE_HERO_PATH)}
          heroImageClassName={CONTACT_PAGE_HERO_IMAGE_CLASS}
        />

        <ContactTrustBadges />

        <section
          id="lead-form"
          className="relative scroll-mt-28 border-t border-slate-200/70 bg-gradient-to-b from-white via-[#FAFAF9] to-[#FAFAF9] py-16 dark:border-slate-800 dark:from-slate-900/50 dark:via-slate-950 dark:to-slate-950 md:py-24"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent dark:via-blue-500/20" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200">
                <Sparkles className="h-3.5 w-3.5" />
                Strategy intake form
              </span>
            </div>

            <div className="grid gap-14 lg:grid-cols-12 lg:items-stretch lg:gap-16">
              <div className="flex flex-col lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Contact</p>
                <h2 className="about-display mt-2 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl">
                  Every channel, <SectionGradientEmphasis>one team</SectionGradientEmphasis>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  Call the desk, email deliverables, or plan a visit. Use the step-by-step form when you are ready to share goals and budget—we will match you with the right strategist.
                </p>

                <div className="mt-10 space-y-4">
                  <ContactChannelCard
                    icon={<Phone className="h-5 w-5" strokeWidth={2} />}
                    eyebrow="Phone"
                    footer={
                      <p className="text-xs text-slate-500 dark:text-slate-400">{SITE_CONTACT.hoursShort}</p>
                    }
                  >
                    <a
                      href={`tel:${SITE_CONTACT.phoneTel}`}
                      className="text-lg font-semibold text-blue-950 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-300"
                    >
                      {SITE_CONTACT.phoneDisplay}
                    </a>
                  </ContactChannelCard>

                  <ContactChannelCard
                    icon={<Mail className="h-5 w-5" strokeWidth={2} />}
                    eyebrow="Email"
                    footer={
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                      >
                        {copied === 'email' ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-500" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            Copy email
                          </>
                        )}
                      </button>
                    }
                  >
                    <a
                      href={`mailto:${SITE_CONTACT.email}`}
                      className="break-all text-lg font-semibold text-blue-950 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-300"
                    >
                      {SITE_CONTACT.email}
                    </a>
                  </ContactChannelCard>

                  <ContactChannelCard
                    icon={<MapPin className="h-5 w-5" strokeWidth={2} />}
                    eyebrow="Studio"
                    footer={
                      <button
                        type="button"
                        onClick={copyAddress}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                      >
                        {copied === 'address' ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-500" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            Copy full address
                          </>
                        )}
                      </button>
                    }
                  >
                    <p className="text-base font-semibold leading-snug text-blue-950 dark:text-white">
                      {SITE_CONTACT.addressLine1}
                      <br />
                      {SITE_CONTACT.addressLine2}
                      <br />
                      {SITE_CONTACT.addressCountry}
                    </p>
                  </ContactChannelCard>

                  <div className="flex items-start gap-3 rounded-2xl border border-dashed border-slate-300/90 bg-slate-50/80 px-4 py-3 dark:border-slate-600 dark:bg-slate-900/40">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-slate-500 dark:text-slate-400" />
                    <div>
                      <p className="text-sm font-semibold text-blue-950 dark:text-white">{SITE_CONTACT.hoursShort}</p>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{SITE_CONTACT.availabilityNote}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex h-full min-h-0 lg:col-span-7">
                <LeadInquiryForm className="h-full min-h-0 w-full" formTitle="Request a free audit" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="client-portal"
          className="scroll-mt-28 border-t border-slate-200/70 bg-gray-50 py-16 dark:border-slate-800 dark:bg-slate-950 md:py-20"
          aria-labelledby="client-portal-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md">
              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                  <Lock className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden />
                </div>
              </div>
              <h2
                id="client-portal-heading"
                className="about-display mt-6 text-center text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl"
              >
                Client <SectionGradientEmphasis>portal</SectionGradientEmphasis>
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                Sign in to access your dashboard and communications.
              </p>

              <div className="mt-8 rounded-lg border border-transparent bg-white py-8 px-4 shadow sm:px-10 dark:border-slate-700 dark:bg-slate-800">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="portal-email" className="block text-sm font-medium text-blue-950 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="portal-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="portal-password" className="block text-sm font-medium text-blue-950 dark:text-gray-300">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="portal-password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="portal-remember"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700"
                      />
                      <label htmlFor="portal-remember" className="ml-2 block text-sm text-blue-950 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section
          id="studio-map"
          className="border-t border-slate-200/70 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">Visit</p>
                <h2 className="about-display mt-2 text-3xl font-bold tracking-tight text-blue-950 dark:text-white md:text-5xl">
                  Preston Street <SectionGradientEmphasis>studio</SectionGradientEmphasis>
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                  Pan and zoom the live map, then open directions in Google Maps for turn-by-turn routing. Street parking and LRT connections vary by time of day—we will confirm details when we schedule.
                </p>

                <address className="mt-8 not-italic rounded-2xl border border-slate-200/90 bg-[#FAFAF9] p-6 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200">
                  <span className="font-semibold text-blue-950 dark:text-white">Dentech Digital</span>
                  <br />
                  {SITE_CONTACT.addressLine1}
                  <br />
                  {SITE_CONTACT.addressLine2}, {SITE_CONTACT.addressCountry}
                </address>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={googleMapsExternalUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 dark:shadow-blue-900/40"
                  >
                    <Navigation className="h-4 w-4" />
                    Directions in Google Maps
                  </a>
                  <a
                    href={googleMapsExternalUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-blue-400/50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open larger map
                  </a>
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-slate-200/90 bg-slate-100 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5 dark:border-slate-700 dark:bg-slate-800 dark:shadow-black/40 dark:ring-white/10 lg:min-h-[420px]">
                <iframe
                  title="Dentech Digital office — 499 Preston Street, Ottawa"
                  src={googleMapsEmbedUrl()}
                  className="absolute inset-0 h-full min-h-[320px] w-full border-0 lg:min-h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
