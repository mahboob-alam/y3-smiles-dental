import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Settings, Cookie } from 'lucide-react';

// Extend window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface CookieConsentProps {
  onAccept?: (preferences: CookiePreferences) => void;
  onReject?: () => void;
}

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsentBanner: React.FC<CookieConsentProps> = ({
  onAccept,
  onReject
}) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      // Apply saved preferences
      applyCookiePreferences(savedPreferences);
    }
  }, []);

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Essential cookies are always enabled
    if (prefs.analytics) {
      // Enable analytics (Google Analytics, etc.)
      enableAnalytics();
    } else {
      disableAnalytics();
    }

    if (prefs.marketing) {
      // Enable marketing cookies
      enableMarketing();
    } else {
      disableMarketing();
    }
  };

  const enableAnalytics = () => {
    // Load Google Analytics or other analytics scripts
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const disableAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  const enableMarketing = () => {
    // Enable marketing cookies and tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }
  };

  const disableMarketing = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  };

  const handleAcceptAll = () => {
    const allPreferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(allPreferences));
    applyCookiePreferences(allPreferences);
    setShowBanner(false);
    onAccept?.(allPreferences);
  };

  const handleAcceptEssential = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(essentialOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    applyCookiePreferences(essentialOnly);
    setShowBanner(false);
    onAccept?.(essentialOnly);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    applyCookiePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
    onAccept?.(preferences);
  };

  const handleReject = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(essentialOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    applyCookiePreferences(essentialOnly);
    setShowBanner(false);
    onReject?.();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto shadow-lg border-2">
        <CardContent className="p-6">
          {!showSettings ? (
            // Main consent banner
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex-shrink-0">
                <Cookie className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  Cookie Preferences
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  We use cookies to enhance your experience, analyze site usage, and provide personalized content.
                  Essential cookies are required for the website to function properly.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={handleAcceptAll}
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </Button>
                  <Button
                    onClick={handleAcceptEssential}
                    variant="outline"
                    size="sm"
                  >
                    Essential Only
                  </Button>
                  <Button
                    onClick={handleReject}
                    variant="ghost"
                    size="sm"
                  >
                    Reject All
                  </Button>
                </div>
              </div>
              <Button
                onClick={() => setShowBanner(false)}
                variant="ghost"
                size="sm"
                className="flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            // Detailed settings
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-800">
                  Cookie Settings
                </h3>
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="ghost"
                  size="sm"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-800">Essential Cookies</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Always Active
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600">
                    These cookies are necessary for the website to function and cannot be disabled.
                    They include security, session management, and basic functionality.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="analytics" className="font-medium text-neutral-800 cursor-pointer">
                      Analytics Cookies
                    </label>
                    <input
                      type="checkbox"
                      id="analytics"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        analytics: e.target.checked
                      }))}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                  <p className="text-sm text-neutral-600">
                    Help us understand how visitors interact with our website by collecting and
                    reporting information anonymously. This helps us improve our services.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="marketing" className="font-medium text-neutral-800 cursor-pointer">
                      Marketing Cookies
                    </label>
                    <input
                      type="checkbox"
                      id="marketing"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences(prev => ({
                        ...prev,
                        marketing: e.target.checked
                      }))}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                  </div>
                  <p className="text-sm text-neutral-600">
                    Used to deliver personalized advertisements and track the effectiveness of
                    our marketing campaigns across different websites and platforms.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <Button onClick={handleSaveSettings} size="sm">
                  Save Settings
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsentBanner;