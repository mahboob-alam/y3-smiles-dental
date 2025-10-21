import React from 'react';
import { Button } from "@/components/ui/button";
import { Navigation } from "./Navigation";
import { Link } from "gatsby";
import logo from "@/assets/logo.svg";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-gentle">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Hamburger Menu & Logo */}
          <div className="flex items-center space-x-6">
            <Navigation />
            <Link to="/" className="flex items-center transition-gentle hover:scale-105">
              <img
                src={logo}
                alt="Y3 Smiles Dental Logo"
                className="h-12 w-auto transition-gentle hover:drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Right Section - Navigation Links & CTA */}
          <div className="flex items-center justify-end space-x-6">
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link
                to="/about"
                className="text-neutral-700 hover:text-primary transition-gentle font-medium hover:scale-105 text-lg"
              >
                About
              </Link>
              <Link
                to="/treatments"
                className="text-neutral-700 hover:text-primary transition-gentle font-medium hover:scale-105 text-lg"
              >
                Treatments
              </Link>
            </nav>

            {/* Phone & CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a href="tel:03 9022 4442" className="hidden md:block text-neutral-800 hover:text-primary transition-gentle font-medium hover:scale-105 text-lg">
                03 9022 4442
              </a>
              <Button variant="booking" size="lg" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  BOOK ONLINE
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;