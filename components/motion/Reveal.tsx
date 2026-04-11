import React from 'react';
import { useInView } from '../../hooks/useInView';

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Additional classes when visible (e.g. grid spans) */
  visibleClassName?: string;
  as?: 'div' | 'section' | 'article' | 'span' | 'p' | 'h2' | 'h3' | 'ul' | 'li';
  delayMs?: number;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

/**
 * Fade + slight translate when element enters viewport.
 * Reduced motion: see `.reveal-motion` rules in index.html.
 */
export default function Reveal({
  children,
  className = '',
  visibleClassName = '',
  as: Tag = 'div',
  delayMs = 0,
  once = true,
  rootMargin,
  threshold,
}: RevealProps) {
  const { ref, isInView } = useInView({ once, rootMargin, threshold });

  const style: React.CSSProperties =
    delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : {};

  const baseMotion =
    'reveal-motion will-change-transform transition-all duration-700 ease-out';

  const motionClass = isInView
    ? `opacity-100 translate-y-0 ${visibleClassName}`.trim()
    : 'opacity-0 translate-y-4';

  return React.createElement(
    Tag,
    {
      ref,
      style,
      className: `${baseMotion} ${motionClass} ${className}`.trim(),
    },
    children
  );
}
