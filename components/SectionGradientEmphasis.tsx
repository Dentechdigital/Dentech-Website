import React from 'react';

/** Same treatment as “grow your practice” on the Services section */
export const SECTION_GRADIENT_TEXT_CLASS =
  'bg-gradient-to-r from-blue-600 via-teal-400 to-emerald-500 bg-clip-text text-transparent';

export function SectionGradientEmphasis({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={[SECTION_GRADIENT_TEXT_CLASS, className].filter(Boolean).join(' ')}>{children}</span>;
}
