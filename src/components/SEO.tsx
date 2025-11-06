import React from 'react';
import { Helmet } from 'react-helmet-async';
import { locationConfigs } from '@/data/locationData';

interface PageProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  canonicalUrl?: string;
}

export const SEO: React.FC<PageProps> = ({ title, description, children, canonicalUrl }) => {
  const defaultTitle = "Y3 Smiles Dental - Your Trusted Local Dentist";
  const defaultDescription = "Welcome to Y3 Smiles Dental. We offer a wide range of dental services from general checkups to cosmetic dentistry. Book your appointment today!";

  // Canonical site base used for structured data and fallbacks
  const siteBase = 'https://y3smilesdental.com.au';

  // LocalBusiness (Dentist) JSON-LD structured data (AU-focused)
  const primary = locationConfigs?.broadmeadows?.locationData;
  const opening = (locationConfigs?.broadmeadows?.openingHours || []).map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.day, // schema.org allows full day names
    opens: h.hours.includes('Closed') ? undefined : h.hours.split(' - ')[0]?.replace(' ', ''),
    closes: h.hours.includes('Closed') ? undefined : h.hours.split(' - ')[1]?.replace(' ', ''),
  }));

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Y3 Smiles Dental',
    url: siteBase,
    telephone: '+61390224442',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1/34 King William St',
      addressLocality: 'Broadmeadows',
      addressRegion: 'VIC',
      postalCode: '3047',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -37.6790611,
      longitude: 144.8419854,
    },
    hasMap: primary?.mapUrl || 'https://maps.app.goo.gl/XCeiAYziTDqGdJpc8',
    sameAs: [
      'https://www.facebook.com/people/Y3-Smiles-Dental/61579053037448/',
      'https://www.instagram.com/y3_smilesdental/',
    ],
    areaServed: [
      'Broadmeadows',
      'Glenroy',
      'Greenvale',
      'Campbellfield',
      'Meadow Heights',
      'Roxburgh Park',
      'Craigieburn',
      'Westmeadows',
      'Mickleham',
      'Fawkner',
      'Gladstone Park',
      'Hadfield',
    ],
    openingHoursSpecification: opening,
  } as const;

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Performance optimizations */}
      <link rel="preconnect" href="https://app.principle.dental" />
      <link rel="dns-prefetch" href="https://app.principle.dental" />
      
      <meta name="geo.region" content="AU-VIC" />
      <meta name="geo.placename" content="Broadmeadows" />
      <meta name="geo.position" content="-37.6790611;144.8419854" />
      <meta name="ICBM" content="-37.6790611, 144.8419854" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Y3 Smiles Dental" />
      <meta property="og:locale" content="en_AU" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" sizes="500x500" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      {/* LocalBusiness JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      {children}
    </Helmet>
  );
};

export default SEO;