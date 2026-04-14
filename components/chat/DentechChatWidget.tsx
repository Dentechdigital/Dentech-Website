import React from 'react';
import { useLocation } from 'react-router-dom';
import { MountChatWidget } from '@dentech/chat-widget';
import { dentechChatRuntimeConfig } from './dentechChatConfig';

export default function DentechChatWidget() {
  const { pathname, hash } = useLocation();
  return <MountChatWidget config={dentechChatRuntimeConfig} routeKey={`${pathname}${hash}`} />;
}
