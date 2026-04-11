import { useEffect, useRef, useState } from 'react';

export type UseInViewOptions = {
  rootMargin?: string;
  threshold?: number;
  /** If true, observer disconnects after first intersect */
  once?: boolean;
};

/**
 * IntersectionObserver hook for scroll-triggered reveals.
 */
export function useInView(options: UseInViewOptions = {}) {
  const { rootMargin = '0px 0px -6% 0px', threshold = 0.12, once = true } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setIsInView(false);
          }
        });
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, isInView };
}
