import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = { children: ReactNode };
type State = { hasError: boolean };

/**
 * Catches render errors in lazy-loaded routes (and their subtrees) so a failed chunk
 * or runtime bug does not leave users with an empty root.
 */
export default class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[AppErrorBoundary]', error.message, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <h1 className="text-xl font-semibold text-blue-950 dark:text-white">This page could not be shown</h1>
          <p className="max-w-md text-slate-600 dark:text-slate-400">
            Something went wrong while loading this screen. If you opened the site right after an update, try
            refreshing once so the latest files load.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
              onClick={() => window.location.reload()}
            >
              Refresh page
            </button>
            <Link
              to="/"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-300 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            >
              Back to home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
