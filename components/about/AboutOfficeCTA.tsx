import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, PhoneCall } from 'lucide-react';
import { SectionGradientEmphasis } from '../SectionGradientEmphasis';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=499+Preston+St+Ottawa+ON+Canada';

export default function AboutOfficeCTA() {
  return (
    <section className="bg-gradient-to-b from-blue-950 to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="about-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Visit us in <SectionGradientEmphasis>Ottawa</SectionGradientEmphasis>
            </h2>
            <p className="mt-4 text-lg text-blue-100/90">
              Dentech Digital is headquartered in the heart of Ottawa. Book a call or stop by — we&apos;ll confirm
              availability for in-person meetings.
            </p>
            <div className="mt-8 flex w-full flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-left backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <span>
                  <span className="block font-semibold">499 Preston Street</span>
                  <span className="block text-sm text-blue-100/80">Ottawa, ON, Canada</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 px-3 py-1.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
                >
                  Open in Maps
                </a>
                <a
                  href="tel:+16138693121"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-3 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  613-869-3121
                </a>
              </div>
            </div>
            <p className="mt-6 text-sm text-blue-200/80">Mon – Fri, 9:00 AM – 6:00 PM (as listed on our contact page)</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Next step</p>
            <p className="about-display mt-3 text-2xl font-semibold leading-snug md:text-3xl">
              Ready to tighten your growth system?
            </p>
            <p className="mt-4 text-blue-100/85">
              Tell us about your practice goals — we&apos;ll map a practical path across web, creative, and paid media.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-950 shadow-lg transition hover:bg-blue-50"
            >
              Book a strategy call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
