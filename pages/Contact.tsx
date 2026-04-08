import React from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <SEO title="Contact Us" description="Get in touch with our team today." />
      <h1 className="text-4xl font-bold text-blue-950 dark:text-white mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
        Ready to start your next project? We'd love to hear from you.
      </p>
      
      <form className="max-w-xl space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-blue-950 dark:text-gray-300">Name</label>
          <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-blue-950 dark:text-gray-300">Email</label>
          <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-blue-950 dark:text-gray-300">Message</label>
          <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"></textarea>
        </div>
        <button type="button" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
