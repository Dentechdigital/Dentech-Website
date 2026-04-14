import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeroAboutStyle from '../components/PageHeroAboutStyle';
import { blogIndexMeta } from '../data/blogStructuredData';
import { blogPosts } from '../data/blogPosts';

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(iso + 'T12:00:00'));
  } catch {
    return iso;
  }
}

const Blog: React.FC = () => {
  return (
    <>
      <SEO title={blogIndexMeta.metaTitle} description={blogIndexMeta.metaDescription} />

      <div className="min-h-screen bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
        <PageHeroAboutStyle
          badge="Blog · Dental growth"
          title="Insights for Canadian dental clinics"
          description={
            <>
              Practical articles on <strong>local SEO</strong>, <strong>GEO</strong>, paid media, websites, and
              operations—from <strong>Dentech Digital</strong> in <strong>Ottawa</strong>, serving practices across{' '}
              <strong>Canada</strong>. No hype—just frameworks you can use with your team.
            </>
          }
          primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
          secondaryCta={{ to: '/services', label: 'Explore services' }}
        />

        <section className="border-t border-slate-200/70 bg-white py-14 dark:border-slate-800 dark:bg-slate-900/35 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-blue-950 dark:text-white md:text-3xl">
                Latest articles
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Articles on marketing, discovery, and measurement for dental teams—updated as we publish new guides.
              </p>
            </div>

            <ul className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-700/50">
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3.5 w-3.5" aria-hidden />
                        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-blue-950 dark:text-white">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="transition hover:text-blue-600 dark:hover:text-blue-300"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {post.excerpt ?? post.metaDescription}
                      </p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400"
                      >
                        Read article
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
