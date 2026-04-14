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
  /** Accessible label for the decorative hero image when `heroImageSrc` is set. */
  heroImageAlt?: string;
  /**
   * Extra Tailwind classes for the hero `<img>` positioning (after base layout classes).
   * Example: `object-left` when the artboard has a dark/empty left and artwork on the right.
   */
  heroImageClassName?: string;
  /**
   * `editorialPhoto`: full-bleed photo with a strong left scrim so headings stay readable
   * (e.g. blog heroes with Unsplash art). `default`: existing site gradient + dots.
   */
  heroVariant?: 'default' | 'editorialPhoto';
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
  heroImageAlt = '',
  heroImageClassName,
  heroVariant = 'default',
}: PageHeroAboutStyleProps) {
  const isEditorial = heroVariant === 'editorialPhoto';
  const bgSrc = heroImageSrc ?? aboutHeroBgUrl;
  const bgPosition =
    heroImageClassName && heroImageClassName.trim()
      ? heroImageClassName.trim()
      : isEditorial
        ? 'object-cover object-center'
        : 'object-cover object-[72%_center] sm:object-right';

  return (
    <section
      className={`relative overflow-hidden border-b pb-20 pt-28 transition-colors duration-300 md:pb-24 md:pt-32 ${
        isEditorial
          ? 'border-slate-800/80 bg-slate-950'
          : 'border-slate-200/70 bg-[#FAFAF9] dark:border-slate-800 dark:bg-slate-950'
      }`}
    >
      <ResponsiveHeroPicture
        src={bgSrc}
        alt={heroImageAlt}
        className={`pointer-events-none absolute inset-0 z-0 h-full min-h-[420px] w-full transition-opacity duration-300 motion-safe:scale-105 ${
          isEditorial
            ? 'opacity-100 dark:opacity-95'
            : 'opacity-90 dark:opacity-[0.82]'
        } ${bgPosition}`}
        decoding="async"
        fetchPriority="high"
      />

      {isEditorial ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-slate-950/92 via-slate-900/72 to-slate-800/35 sm:bg-gradient-to-r sm:from-slate-950/94 sm:via-slate-900/55 sm:to-slate-950/20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/25"
          />
        </>
      ) : (
        <>
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

          <div
            className="pointer-events-none absolute inset-0 z-[2] opacity-50 transition-opacity duration-300 dark:opacity-[0.22]"
            style={{
              maskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 22% 28%, black 42%, transparent 80%)',
            }}
          >
            <DynamicDots />
          </div>
        </>
      )}

      <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${isEditorial ? 'drop-shadow-sm' : ''}`}>
        {breadcrumb ? <div className="mb-8">{breadcrumb}</div> : null}

        <div className="w-full lg:w-2/3 lg:max-w-none">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide shadow-sm transition-colors duration-300 ${
              isEditorial
                ? 'border-white/20 bg-white/10 text-white backdrop-blur-md'
                : 'border-gray-200 bg-white text-gray-500 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-400'
            }`}
          >
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-blue-400" />
            <span>{badge}</span>
          </div>

          <div
            className={`mt-8 border-l-2 pl-6 md:pl-8 ${
              isEditorial ? 'border-blue-400/70' : 'border-blue-500/35 dark:border-blue-400/30'
            }`}
          >
            <h1
              className={`about-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.06] ${
                isEditorial ? 'text-white' : 'text-blue-950 dark:text-white'
              }`}
            >
              {title}
            </h1>
          </div>

          <div
            className={`mt-6 max-w-3xl text-lg leading-relaxed ${
              isEditorial ? 'text-slate-100/95' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            {description}
          </div>

          {afterDescription ? (
            <div className={`mt-6 max-w-3xl ${isEditorial ? 'text-slate-200 [&_li]:text-slate-200 [&_svg]:text-blue-300' : ''}`}>
              {afterDescription}
            </div>
          ) : null}

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
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold backdrop-blur transition ${
                  isEditorial
                    ? 'border-white/35 bg-white/10 text-white hover:border-white/55 hover:bg-white/15'
                    : 'border-slate-300 bg-white/80 text-slate-800 hover:border-blue-300 hover:text-blue-700 dark:border-slate-500/60 dark:bg-slate-800/90 dark:text-slate-100 dark:backdrop-blur-md dark:hover:border-blue-400/50 dark:hover:bg-slate-700/90 dark:hover:text-blue-200'
                }`}
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
