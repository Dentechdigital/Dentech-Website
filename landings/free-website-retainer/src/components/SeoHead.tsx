import { Helmet } from 'react-helmet-async';
import { getSiteUrl } from '../config';

const TITLE = 'Free practice website with 6-month marketing retainer | Dentech Digital';
const DESCRIPTION =
  'Professional 5-page clinic website included at no build fee with a 6-month growth marketing retainer. Single-language site, booking requests, mobile-first. Hosting & maintenance ($150/mo) included in the retainer. Ottawa-based.';

export default function SeoHead() {
  const siteUrl = getSiteUrl();
  const canonical = siteUrl ? `${siteUrl}/` : undefined;
  const ogImage = siteUrl ? `${siteUrl}/hero-mockup.webp` : undefined;

  return (
    <Helmet>
      <html lang="en-CA" />
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
