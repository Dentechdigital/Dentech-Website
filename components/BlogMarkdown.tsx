import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';

type Props = {
  markdown: string;
  className?: string;
};

function MarkdownImg({
  src,
  alt,
  className,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src}
      alt={alt ?? ''}
      loading="lazy"
      decoding="async"
      className={`my-8 w-full rounded-2xl border border-slate-200/80 shadow-sm dark:border-slate-700 ${className ?? ''}`}
      {...rest}
    />
  );
}

function MarkdownLink({
  href,
  children,
  className,
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children?: React.ReactNode }) {
  if (href?.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function BlogMarkdown({ markdown, className }: Props) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: MarkdownLink,
          img: MarkdownImg,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
