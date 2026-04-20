import { Helmet } from 'react-helmet-async';
import { getSiteUrl } from '../config';

const TITLE = "We'll Build Your $3,000 Website for Free | Dentech Digital";
const DESCRIPTION =
  'Starter practice website at no separate build fee—focus your budget on patient demand—with 6-month Signature Marketing ($2,500/mo). 5 pages, mobile-first. Hosting & maintenance ($150/mo) included in the retainer. Ottawa-based.';

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
