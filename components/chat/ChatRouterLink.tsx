import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { ChatLinkComponentProps } from '@dentech/chat-widget';

const ChatRouterLink = React.forwardRef<HTMLAnchorElement, ChatLinkComponentProps>(function ChatRouterLink(
  { to, className, onClick, children },
  ref,
) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Link
      ref={ref}
      to={to}
      className={className}
      onClick={(event) => {
        onClick?.();

        const hashIndex = to.indexOf('#');
        if (hashIndex === -1) return;

        const pathPart = to.slice(0, hashIndex);
        const pathname = pathPart === '' ? '/' : pathPart;
        const rawHash = to.slice(hashIndex + 1);
        if (!rawHash) return;

        if (pathname !== location.pathname) return;

        event.preventDefault();
        navigate({ pathname, hash: rawHash });
        const scrollToTarget = () =>
          document.getElementById(rawHash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        requestAnimationFrame(() => requestAnimationFrame(scrollToTarget));
      }}
    >
      {children}
    </Link>
  );
});

export default ChatRouterLink;
