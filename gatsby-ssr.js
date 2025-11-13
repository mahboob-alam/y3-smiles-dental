import React from 'react';
import { wrapRootElement as wrap } from './src/wrap-root-element';
import { SeoLayout } from './src/layouts/SeoLayout';

// This sets up React for components during SSR
export const onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }) => {
  // Add html attributes for dark mode/light mode if used
  setHtmlAttributes({ lang: "en-AU" });
  
  // Initialize client-side variables safely
  if (process.env.NODE_ENV === 'production') {
    setHeadComponents([
      // Google Analytics (gtag.js) - G-5LLSTRZWS9
      <script
        key="gtag-js"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5LLSTRZWS9"
      />,
      <script
        key="gtag-config"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5LLSTRZWS9');
          `,
        }}
      />,
      // Google Tag Manager - as high as possible in <head>
      <script
        key="gtm-head"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-5RWKHBFL');`,
        }}
      />,
      // Existing lightweight init script
      <script
        key="emailjs-init"
        dangerouslySetInnerHTML={{
          __html: `window.__emailjs_initialized = false;`,
        }}
      />,
    ]);

    // Google Tag Manager (noscript) - immediately after opening <body>
    setPreBodyComponents([
      <noscript key="gtm-body">
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5RWKHBFL"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    ]);
  }
};

// Wrap the root element to ensure React context is available
export const wrapRootElement = wrap;

// Wrap each page to ensure default SEO on SSR
export const wrapPageElement = ({ element, props }) => (
  <SeoLayout pageProps={props}>{element}</SeoLayout>
);