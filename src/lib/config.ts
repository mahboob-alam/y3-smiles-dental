/**
 * Application Configuration Constants
 * 
 * This file contains all global configuration constants used throughout the application.
 * Follow best practices by centralizing configuration in one place for easy maintenance.
 */

// Booking Configuration
export const BOOKING_CONFIG = {
    // Primary booking portal URL for Principle Dental
    PORTAL_URL: 'https://app.principle.dental/portal/booking/X0bZkaby3TQEzje3C0Im',

    // Default link attributes for external booking links
    LINK_ATTRIBUTES: {
        target: '_blank',
        rel: 'noopener noreferrer'
    }
} as const;

// Contact Information
export const CONTACT_CONFIG = {
    PHONE: '(03) 9309 2111',
    EMAIL: 'info@y3dental.com.au'
} as const;

// Navigation Configuration
export const NAV_CONFIG = {
    // Internal navigation routes
    ROUTES: {
        HOME: '/',
        ABOUT: '/about',
        TREATMENTS: '/treatments',
        LOCATIONS: '/locations',
        BLOG: '/blog',
        CONTACT: '/#contact'
    }
} as const;

// Export individual constants for convenience
export const { PORTAL_URL, LINK_ATTRIBUTES } = BOOKING_CONFIG;
export const BOOKING_URL = BOOKING_CONFIG.PORTAL_URL;