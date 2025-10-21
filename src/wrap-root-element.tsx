import React from 'react';
import { Toaster } from '@/components/ui/toaster';

export const wrapRootElement = ({ element }) => (
  <React.StrictMode>
    <div id="radix-root">
      {element}
      {typeof window !== 'undefined' && <Toaster />}
    </div>
  </React.StrictMode>
);
