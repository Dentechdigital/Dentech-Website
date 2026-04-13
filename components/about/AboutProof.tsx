import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { testimonialPlaceholder } from '../../data/aboutContent';

function PartnerLogo({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [ok, setOk] = useState(true);

  return (
    <div className="flex h-16 w-40 items-center justify-center">
      {ok ? (
        <img
          src={src}
          alt={alt}
          className="max-h-12 w-auto max-w-full rounded-lg object-contain"
          loading="lazy"
          onError={() => setOk(false)}
        />
      ) : (
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{alt}</span>
      )}
    </div>
  );
}

export default function AboutProof() {
  return (
    <section className="bg-[#F5F7FB] py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="about-display text-3xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-4xl">
          Proof & partnerships
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          We are proud to work alongside clinics that expect rigor — and to train continuously with leading platforms.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-600/80 dark:bg-slate-800/90 dark:shadow-lg dark:shadow-black/15">
            <Quote className="h-10 w-10 text-blue-200 dark:text-blue-500/35" />
            <blockquote className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              “{testimonialPlaceholder.quote}”
            </blockquote>
            <footer className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              — {testimonialPlaceholder.attribution}, {testimonialPlaceholder.location}
            </footer>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-dashed border-slate-300 bg-white/50 p-8 dark:border-slate-600 dark:bg-slate-800/40">
            <div>
              <h3 className="font-semibold text-blue-950 dark:text-white">Partner badges</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                We maintain active training and platform partnerships to keep campaign execution aligned with current Google and Meta standards.
                Displayed marks follow each program&apos;s brand-use rules.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <PartnerLogo src={`${import.meta.env.BASE_URL}partners/google-partner.webp`} alt="Google Partner" />
                <PartnerLogo src={`${import.meta.env.BASE_URL}partners/meta-business-partner.webp`} alt="Meta Business Partner" />
              </div>
            </div>
            <Link
              to="/case-studies"
              className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Talk to our team about your practice
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
