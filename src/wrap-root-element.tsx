import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import CookieConsentBanner from '@/components/CookieConsentBanner';

// Note: HelmetProvider is automatically provided by gatsby-plugin-react-helmet-async
// No need to wrap manually - the plugin handles SSR context
export const wrapRootElement = ({ element }) => (
  <React.StrictMode>
    <div id="radix-root">
      {element}
      {typeof window !== 'undefined' && <Toaster />}
      {typeof window !== 'undefined' && <CookieConsentBanner />}
    </div>
  </React.StrictMode>
);
