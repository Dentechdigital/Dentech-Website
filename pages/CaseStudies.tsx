import React from 'react';
import SEO from '../components/SEO';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <SEO title="Case Studies" description="Read our success stories and see how we've helped other clients." />
      <h1 className="text-4xl font-bold text-blue-950 dark:text-white mb-6">Case Studies</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
        Discover how we have transformed businesses across various industries. Real results, real growth.
      </p>
    </div>
  );
};

export default CaseStudies;
