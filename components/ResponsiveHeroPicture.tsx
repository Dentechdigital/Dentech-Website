import React from 'react';

type ResponsiveHeroPictureProps = {
  src: string;
  alt?: string;
  className?: string;
  decoding?: 'async' | 'auto' | 'sync';
  fetchPriority?: 'high' | 'low' | 'auto';
};

/**
 * Serves WebP when `src` is .png/.jpg and a sibling `.webp` exists (generated at build time).
 */
export default function ResponsiveHeroPicture({
  src,
  alt = '',
  className = '',
  decoding = 'async',
  fetchPriority = 'high',
}: ResponsiveHeroPictureProps) {
  const match = src.match(/\.(png|jpe?g)$/i);
  if (!match) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    );
  }

  const webpSrc = src.replace(/\.(png|jpe?g)$/i, '.webp');

  /* `contents` keeps layout on the inner img (e.g. absolute inset-0 hero). */
  return (
    <picture className="contents">
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
