import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DynamicDots from './DynamicDots';
import ResponsiveHeroPicture from './ResponsiveHeroPicture';

const aboutHeroBgUrl = `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}hero-background.webp`;

export type PageHeroAboutStyleProps = {
  /** Small pill text (e.g. Since 2017 · Ottawa) */
  badge: string;
  title: string;
  /** Main supporting copy */
  description: React.ReactNode;
  /** Inserted after description, before CTAs (e.g. checklist) */
  afterDescription?: React.ReactNode;
  primaryCta: { to: string; label: string };
  secondaryCta?: { to: string; label: string };
  /** Optional row above badge (breadcrumbs) */
  breadcrumb?: React.ReactNode;
  /**
   * Optional full-bleed hero image (path under public or absolute URL).
   * Defaults to site-wide hero-background.webp when omitted.
   */
  heroImageSrc?: string;
  /**
   * Extra Tailwind classes for the hero `<img>` positioning (after base layout classes).
   * Example: `object-left` when the artboard has a dark/empty left and artwork on the right.
   */
  heroImageClassName?: string;
  /** When true, omit the photo background and use a simple gradient (e.g. service pages). */
  plainBackground?: boolean;
};

/**
 * Full-bleed hero matching About: hero-background.webp, gradients, DynamicDots,
 * max-w-7xl padding, copy column lg:w-2/3 (art shows right), Fraunces via .about-display
 */
export default function PageHeroAboutStyle({
  badge,
  title,
  description,
  afterDescription,
  primaryCta,
  secondaryCta,
  breadcrumb,
  heroImageSrc,
  heroImageClassName,
  plainBackground = false,
}: PageHeroAboutStyleProps) {
  const bgSrc = heroImageSrc ?? aboutHeroBgUrl;
  const bgPosition =
    heroImageClassName && heroImageClassName.trim()
      ? heroImageClassName.trim()
      : 'object-cover object-[72%_center] sm:object-right';

  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-[#FAFAF9] pb-20 pt-28 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 md:pb-24 md:pt-32">
      {plainBackground ? (
        <>
          <div className="pointer-events-none absolute inset-0 z-0 bg-[#FAFAF9] dark:bg-slate-950" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-1/4 z-0 h-[min(28rem,70vw)] w-[min(28rem,70vw)] rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/30"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 bottom-0 z-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-900/20"
          />
        </>
      ) : (
        <>
          <ResponsiveHeroPicture
            src={bgSrc}
            alt=""
            className={`pointer-events-none absolute inset-0 z-0 h-full min-h-[420px] w-full opacity-90 transition-opacity duration-300 dark:opacity-[0.82] ${bgPosition}`}
            decoding="async"
            fetchPriority="high"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] dark:hidden"
            style={{
              background:
                'linear-gradient(to right, #FAFAF9 0%, #FAFAF9 22%, rgba(250,250,249,0.88) 38%, rgba(250,250,249,0.25) 52%, transparent 60%, transparent 100%)',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] hidden dark:block"
            style={{
              background:
                'linear-gradient(to right, rgb(2 6 23) 0%, rgb(2 6 23) 20%, rgba(2,6,23,0.88) 36%, rgba(2,6,23,0.28) 50%, transparent 58%, transparent 100%)',
            }}
          />
        </>
      )}

      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-50 transition-opacity duration-300 dark:opacity-[0.22]"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
        }}
      >
        <DynamicDots />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumb ? <div className="mb-8">{breadcrumb}</div> : null}

        <div className="w-full lg:w-2/3 lg:max-w-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-gray-500 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-400">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-blue-500" />
            <span>{badge}</span>
          </div>

          <div className="mt-8 border-l-2 border-blue-500/35 pl-6 dark:border-blue-400/30 md:pl-8">
            <h1 className="about-display text-4xl font-semibold leading-[1.08] tracking-tight text-blue-950 dark:text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
              {title}
            </h1>
          </div>

          <div className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{description}</div>

          {afterDescription ? <div className="mt-6 max-w-3xl">{afterDescription}</div> : null}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to={primaryCta.to}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-xl dark:shadow-blue-900/40"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryCta ? (
              <Link
                to={secondaryCta.to}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-500/60 dark:bg-slate-800/90 dark:text-slate-100 dark:backdrop-blur-md dark:hover:border-blue-400/50 dark:hover:bg-slate-700/90 dark:hover:text-blue-200"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
