import React, { useMemo, useState } from "react";

interface InsuranceProvider {
  name: string;
  url: string;
  logoUrl?: string;
}

const insuranceProviders: InsuranceProvider[] = [
  { name: "Medibank", url: "https://www.medibank.com.au/" },
  { name: "Bupa", url: "https://www.bupa.com.au/", logoUrl: "https://logo.clearbit.com/bupa.com.au" },
  { name: "HBF", url: "https://www.hbf.com.au/" },
  { name: "HCF", url: "https://www.hcf.com.au/" },
  { name: "Australian Unity", url: "https://www.australianunity.com.au/" },
  { name: "CBHS", url: "https://www.cbhs.com.au/" },
  { name: "nib", url: "https://www.nib.com.au/" },
  { name: "Navy Health", url: "https://navyhealth.com.au/" },
  { name: "St. Lukes Health", url: "https://stlukes.com.au/" },
  { name: "Defence Health", url: "https://www.defencehealth.com.au/" },
  { name: "GMHBA", url: "https://www.gmhba.com.au/" },
  { name: "Frank Health", url: "https://www.frankhealthinsurance.com.au/" },
  { name: "Teachers Health", url: "https://www.teachershealth.com.au/" },
  { name: "HIF", url: "https://www.hif.com.au/" },
  { name: "ahm", url: "https://ahm.com.au/" },
  { name: "GU Health", url: "https://www.guhealth.com.au/" },
  { name: "Peoplecare", url: "https://www.peoplecare.com.au/" },
  { name: "Westfund", url: "https://www.westfund.com.au/" },
];

const ProviderLogo: React.FC<{ name: string; url: string; logoUrl?: string }>= ({ name, url, logoUrl }) => {
  const [idx, setIdx] = useState(0);
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const hostname = useMemo(() => {
    try { return new URL(url).hostname; } catch { return undefined; }
  }, [url]);
  const sources = useMemo(() => {
    const arr = [
      logoUrl,
      hostname ? `https://logo.clearbit.com/${hostname}` : undefined,
      hostname ? `https://www.google.com/s2/favicons?sz=64&domain=${hostname}` : undefined,
      `/logos/${slug}.svg`,
      `/logos/${slug}.png`,
    ].filter(Boolean) as string[];
    return arr;
  }, [logoUrl, slug, hostname]);
  return (
    <div className="flex items-center justify-center h-16 px-8 bg-white rounded-lg border border-neutral-200 hover:border-primary hover:shadow-md transition-all duration-300 group-hover:scale-105">
      {sources[idx] ? (
        <img
          src={sources[idx]}
          alt={name}
          className="h-8 w-auto object-contain select-none"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setIdx((prev) => prev + 1)}
        />
      ) : (
        <span className="text-sm font-semibold text-neutral-700 whitespace-nowrap">{name}</span>
      )}
    </div>
  );
};

const HealthInsuranceTicker = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-gradient-to-r from-neutral-50 via-white to-neutral-50 py-16 overflow-hidden border-y border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
            We Accept All Major Health Funds
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2">
            Claim on the spot with
          </h3>
          <div className="flex justify-center mb-4">
            <img src="/hicaps-logo.svg" alt="HICAPS" className="h-10 w-auto" />
          </div>
          <p className="text-neutral-800 max-w-2xl mx-auto">We work with 100% of Australia's private health insurers.</p>
        </div>

        {/* CSS-animated ticker */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            role="region"
            aria-label="Health funds logos ticker"
            className="overflow-hidden py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`flex items-center gap-6 ${isPaused ? '' : 'animate-ticker'}`}
              style={{
                width: 'max-content',
              }}
            >
              {/* Duplicate the list for seamless looping */}
              {[...insuranceProviders, ...insuranceProviders, ...insuranceProviders].map((provider, index) => (
                <a
                  key={`${provider.name}-${index}`}
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex group flex-shrink-0"
                  aria-label={provider.name}
                  draggable={false}
                >
                  <ProviderLogo name={provider.name} url={provider.url} logoUrl={provider.logoUrl} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthInsuranceTicker;
