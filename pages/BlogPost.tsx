import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeroAboutStyle from '../components/PageHeroAboutStyle';
import FaqAccordion from '../components/FaqAccordion';
import BlogMarkdown from '../components/BlogMarkdown';
import { buildBlogArticleJsonLd } from '../data/blogStructuredData';
import { getBlogPostBySlug } from '../data/blogPosts';

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso + 'T12:00:00'));
  } catch {
    return iso;
  }
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] px-4 pb-24 pt-28 dark:bg-slate-950">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold text-blue-950 dark:text-white">Article not found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">This URL does not match a published article.</p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const structuredData = buildBlogArticleJsonLd(post);

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        faqStructuredData={post.faq}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-[#FAFAF9] transition-colors duration-300 dark:bg-slate-950">
        <PageHeroAboutStyle
          badge={`Blog · Published ${formatDate(post.publishedAt)}`}
          title={post.title}
          description={post.metaDescription}
          breadcrumb={
            <nav aria-label="Breadcrumb" className="text-sm text-slate-600 dark:text-slate-400">
              <Link to="/" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <span className="mx-2 text-slate-400">/</span>
              <Link to="/blog" className="font-medium hover:text-blue-600 dark:hover:text-blue-400">
                Blog
              </Link>
            </nav>
          }
          primaryCta={{ to: '/contact', label: 'Book a strategy call' }}
          secondaryCta={{ to: '/blog', label: 'More articles' }}
        />

        <article className="border-t border-slate-200/70 bg-white py-12 dark:border-slate-800 dark:bg-slate-900/35 md:py-16">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <BlogMarkdown
              markdown={post.bodyMarkdown}
              className="prose prose-lg prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-blue-400 prose-strong:text-blue-950 dark:prose-strong:text-white"
            />

            {post.keyTakeaways.length > 0 ? (
              <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/80 p-6 dark:border-blue-900/40 dark:bg-blue-950/30">
                <h2 className="text-lg font-semibold text-blue-950 dark:text-white">Key takeaways</h2>
                <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
                  {post.keyTakeaways.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden />
                      <BlogMarkdown
                        markdown={item}
                        className="prose prose-sm max-w-none dark:prose-invert prose-p:my-0 prose-a:text-blue-600 dark:prose-a:text-blue-400"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-12">
              <FaqAccordion
                idPrefix={`blog-${post.slug}`}
                heading="Frequently asked questions"
                subheading="Quick answers related to this topic."
                items={post.faq}
                embedded
              />
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-700">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                All articles
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Talk to Dentech
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
