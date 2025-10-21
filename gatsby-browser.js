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
  
  // Wait for DOM to be ready
  window.addEventListener('DOMContentLoaded', () => {
    import('@emailjs/browser').then(emailjs => {
      emailjs.default.init({
        publicKey: '69eRgUdIdFe9Hq-4C',
      });
      window.__emailjs_initialized = true;
    }).catch(error => {
      console.error('Error loading emailjs:', error);
    });
  });
};