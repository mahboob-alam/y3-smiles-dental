import React from 'react';
import './src/index.css';
import { wrapRootElement as wrap } from './src/wrap-root-element';

export const wrapRootElement = wrap;

// Gatsby browser APIs to handle client-side functionality
export const onRouteUpdate = () => {
  if (typeof window !== 'undefined') {
    // Initialize any client-side services here
    window.__emailjs_initialized = false;
  }
};

// Add emailjs to the browser only
export const onClientEntry = () => {
  if (typeof window === 'undefined') return;
  
  window.__emailjs_initialized = false;
  
  // Function to initialize EmailJS
  const initializeEmailJS = () => {
    import('@emailjs/browser').then(module => {
      const emailjs = module.default;
      emailjs.init({
        publicKey: '69eRgUdIdFe9Hq-4C',
      });
      window.emailjs = emailjs;
      window.__emailjs_initialized = true;
      console.log('EmailJS initialized successfully');
    }).catch(error => {
      console.error('Error loading emailjs:', error);
    });
  };
  
  // Check if DOM is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEmailJS);
  } else {
    // DOM is already loaded, initialize immediately
    initializeEmailJS();
  }
};