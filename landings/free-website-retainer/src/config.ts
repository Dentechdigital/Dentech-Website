/** Canonical site for OG / meta (set in deploy env). */
export function getSiteUrl(): string {
  return (import.meta.env.VITE_SITE_URL || '').replace(/\/+$/, '');
}

/** Main Dentech marketing site (footer, thank-you). */
export function getMainSiteUrl(): string {
  const raw = import.meta.env.VITE_MAIN_SITE_URL || 'https://dentechdigital.com';
  return raw.replace(/\/+$/, '');
}
