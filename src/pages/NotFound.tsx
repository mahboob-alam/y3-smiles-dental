import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export const Head = () => (
  <SEO 
    title="NotFound | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
            <a href="/" className="text-blue-500 hover:text-blue-700 underline">
              Return to Home
            </a>
          </div>
        </div>
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
