import React from 'react';
import SEO from '../components/SEO';
import GrowthPackages from '../components/GrowthPackages';

export default function Packages() {
  return (
    <>
      <SEO
        title="Dental Marketing Packages | Ontario & Quebec"
        description="Three dental growth packages for Ontario and Quebec clinics: Core Patient Engine, Brand Dominance, and Practice Expansion—scoped on a strategy call."
      />
      <div className="pt-8">
        <GrowthPackages />
      </div>
    </>
  );
}
