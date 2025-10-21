import React from 'react';
import { wrapRootElement as wrap } from './src/wrap-root-element';

// This sets up React for components during SSR
export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  // Add html attributes for dark mode/light mode if used
  setHtmlAttributes({ lang: "en" });
  
  // Initialize client-side variables safely
  if (process.env.NODE_ENV === 'production') {
    setHeadComponents([
      <script
        key="emailjs-init"
        dangerouslySetInnerHTML={{
          __html: `window.__emailjs_initialized = false;`,
        }}
      />,
    ]);
  }
};

// Wrap the root element to ensure React context is available
export const wrapRootElement = wrap;