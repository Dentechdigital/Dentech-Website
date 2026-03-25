import React from 'react';
import SEO from '../components/SEO';
import ServicesComponent from '../components/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF9] dark:bg-slate-900 pt-24 transition-colors duration-300">
      <SEO title="Our Services" description="Explore the 6 core services we offer to help your business thrive." />
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-950 dark:text-white mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          We offer a comprehensive suite of services designed to elevate your brand and drive measurable growth.
        </p>
      </div>
      <ServicesComponent />
    </div>
  );
};

export default ServicesPage;
