import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="This URL is not a published Dentech Digital page. Return home or contact the team."
        noIndex
      />
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-28 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">404</p>
        <h1 className="mt-3 text-3xl font-bold text-blue-950 dark:text-white">Page not found</h1>
        <p className="mt-3 max-w-md text-slate-600 dark:text-slate-300">
          This path is not a live page on dentech.digital. Try Services, Packages, or Contact.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:border-slate-600 dark:text-slate-100"
          >
            Services
          </Link>
          <Link
            to="/packages"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:border-slate-600 dark:text-slate-100"
          >
            Packages
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:border-slate-600 dark:text-slate-100"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
