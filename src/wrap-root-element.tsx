import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';

export const wrapRootElement = ({ element }) => (
  <React.StrictMode>
    <HelmetProvider>
      <div id="radix-root">
        {element}
        {typeof window !== 'undefined' && <Toaster />}
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
