import React from 'react';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <SEO title="Blog" description="Read the latest insights, tips, and news from our team." />
      <h1 className="text-4xl font-bold text-blue-950 dark:text-white mb-6">Our Blog</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-12">
        Insights and strategies to help you stay ahead of the curve.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder Blog Posts */}
        {[1, 2, 3].map((post) => (
          <div key={post} className="border border-gray-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-shadow">
            <div className="h-48 bg-gray-100 dark:bg-slate-800 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">How to Grow Your Business in 2026</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Discover the top strategies for scaling your operations and increasing revenue this year.</p>
            <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer">Read more &rarr;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
