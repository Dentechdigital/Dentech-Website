import React from 'react';
import Reveal from './Reveal';

export type RevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  staggerMs?: number;
  /** Passed to each Reveal wrapper */
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

/**
 * Wraps each direct child in Reveal with `index * staggerMs` delay. Useful for grids/lists.
 */
export default function RevealStagger({
  children,
  className,
  staggerMs = 75,
  once = true,
  rootMargin,
  threshold,
}: RevealStaggerProps) {
  const items = React.Children.toArray(children).filter((c) => c != null);

  return (
    <div className={className}>
      {items.map((child, index) => (
        <Reveal
          key={index}
          delayMs={index * staggerMs}
          once={once}
          rootMargin={rootMargin}
          threshold={threshold}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}
