import React from 'react';
import SEO from '@/components/SEO';

interface SeoLayoutProps {
  children: React.ReactNode;
  pageProps?: any;
}

// Provides a default SEO tag set across all pages (Gatsby v3 friendly)
export const SeoLayout: React.FC<SeoLayoutProps> = ({ children }) => {
  return (
    <>
      <SEO />
      {children}
    </>
  );
};

export default SeoLayout;
