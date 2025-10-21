import React from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Head = () => <SEO title="Page Not Found" />;

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-8 text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-neutral-700">Sorry, we couldn’t find what you were looking for.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
