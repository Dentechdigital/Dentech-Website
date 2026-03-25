import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <SEO title="About Us" description="Learn more about our agency and our mission." />
      <h1 className="text-4xl font-bold text-blue-950 dark:text-white mb-6">About Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
        We are a dedicated team of professionals committed to delivering the best results for our clients.
        Our mission is to help businesses grow and succeed in the digital world.
      </p>
    </div>
  );
};

export default About;
