import { useEffect } from 'react';

export const useScrollToHash = () => {
  const scrollToElement = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      // Small delay to ensure the element is rendered
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Handle initial load
  useEffect(() => {
    if (window.location.hash) {
      scrollToElement(window.location.hash);
    }
  }, []); // Only run on mount

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        scrollToElement(window.location.hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
};
