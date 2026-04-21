import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import './global.css';
import App from './App';

/** Defer SW install until after load + idle so first paint / hydration stay responsive (mobile TBT). */
if (typeof window !== 'undefined') {
  window.addEventListener(
    'load',
    () => {
      const w = window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };
      const run = () => registerSW({ immediate: true });
      if (w.requestIdleCallback) {
        w.requestIdleCallback(run, { timeout: 6000 });
      } else {
        window.setTimeout(run, 3000);
      }
    },
    { once: true },
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);