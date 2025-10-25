import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  canonicalUrl?: string;
}

export const SEO: React.FC<PageProps> = ({ title, description, children, canonicalUrl }) => {
  const defaultTitle = "Y3 Smiles Dental - Your Trusted Local Dentist";
  const defaultDescription = "Welcome to Y3 Smiles Dental. We offer a wide range of dental services from general checkups to cosmetic dentistry. Book your appointment today!";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Y3 Smiles Dental" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {children}
    </Helmet>
  );
};

export default SEO;