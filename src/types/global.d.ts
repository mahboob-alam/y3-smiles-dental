declare global {
  interface Window {
    __emailjs_initialized?: boolean;
    emailjs?: any;
  }
}

export {};