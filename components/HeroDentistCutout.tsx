import React from 'react';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/**
 * Hero LCP image only — tiny module so the cutout can paint without waiting for dashboard chrome + lucide.
 */
export default function HeroDentistCutout() {
  return (
    <div className="relative z-10 flex-1 w-full flex items-start justify-center">
      <img
        src={`${base}dentist-cutout.webp`}
        srcSet={`${base}dentist-cutout-480w.webp 480w, ${base}dentist-cutout-640w.webp 640w, ${base}dentist-cutout-800w.webp 800w, ${base}dentist-cutout.webp 1000w`}
        sizes="(max-width: 640px) 88vw, (max-width: 1024px) min(380px, 42vw), min(420px, 26vw)"
        alt="Professional Dentist"
        width={1000}
        height={1000}
        className="h-auto w-full scale-[1.1] object-contain object-top drop-shadow-2xl origin-top"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
