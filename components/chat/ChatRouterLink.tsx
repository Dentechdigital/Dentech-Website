import React from 'react';
import { Link } from 'react-router-dom';
import type { ChatLinkComponentProps } from '@dentech/chat-widget';

const ChatRouterLink = React.forwardRef<HTMLAnchorElement, ChatLinkComponentProps>(function ChatRouterLink(
  { to, className, onClick, children },
  ref,
) {
  return (
    <Link ref={ref} to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
});

export default ChatRouterLink;
