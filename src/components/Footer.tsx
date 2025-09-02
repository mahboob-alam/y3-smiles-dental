import { Link } from "react-router-dom";
import { Facebook, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-zinc-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <img 
              src={logo} 
              alt="Y3 Smiles Dental Logo" 
              className="h-12 w-auto transition-gentle hover:scale-105 hover:drop-shadow-lg"
            />
            <div className="space-y-2 text-sm">
              <p>
                <span className="uppercase text-[#B4957E]">Phone:</span>{" "}
                <a href="tel:PLACEHOLDER" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">
                  PLACEHOLDER
                </a>
              </p>
              <p>
                <span className="uppercase text-[#B4957E]">Email:</span>{" "}
                <a href="mailto:y3smiles@gmail.com" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">
                  y3smiles@gmail.com
                </a>
              </p>
              <div>
                <p className="uppercase text-[#B4957E] mb-1">Address:</p>
                <p>1/34 KING WILLIAM ST,</p>
                <p>BROADMEADOWS, VIC 3047</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm uppercase mb-4 tracking-wider text-[#B4957E]">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>MONDAY:</span>
                <span>9:00AM-5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>TUESDAY:</span>
                <span>9:00AM-5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>WEDNESDAY:</span>
                <span>9:00AM-5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>THURSDAY:</span>
                <span>9:00AM-5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>FRIDAY:</span>
                <span>9:00AM-5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>SATURDAY:</span>
                <span>By appointment only</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>SUNDAY:</span>
                <span>CLOSED</span>
              </div>
            </div>
          </div>

          {/* Areas We Service */}
          <div>
            <h3 className="text-sm uppercase mb-4 tracking-wider text-[#B4957E]">Areas We Service</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">BROADMEADOWS</Link>
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">GLENROY</Link>
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">GREENVALE</Link>
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">CAMPBELLFIELD</Link>
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">MEADOW HEIGHTS</Link>
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">ROXBURY PARK</Link>
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">CRAIGIEBURN</Link>
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">WESTMEADOWS</Link>
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">MICKLEHAM</Link>
              <Link to="#" className="hover:text-[#B4957E] transition-gentle hover:scale-105 inline-block">FAWKNER</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm uppercase mb-4 tracking-wider text-[#B4957E]">Services</h3>
            <div className="space-y-2 text-sm">
              <Link to="/services/childrens-dentistry" className="block hover:text-[#B4957E] transition-gentle hover:translate-x-2">
                CHILDREN'S DENTISTRY
              </Link>
              <Link to="/services/examination-hygiene" className="block hover:text-[#B4957E] transition-gentle hover:translate-x-2">
                EXAMINATION & HYGIENE
              </Link>
              <Link to="/services/dental-fillings" className="block hover:text-[#B4957E] transition-gentle hover:translate-x-2">
                DENTAL FILLINGS
              </Link>
              <Link to="/services/dentures" className="block hover:text-[#B4957E] transition-gentle hover:translate-x-2">
                DENTURES
              </Link>
              <Link to="/services/emergency" className="block hover:text-[#B4957E] transition-gentle hover:translate-x-2">
                EMERGENCY DENTISTRY
              </Link>
              <Link to="/services/root-canal" className="block hover:text-[#B4957E] transition-gentle hover:translate-x-2">
                ROOT CANAL THERAPY
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-xs text-center">
            COPYRIGHT © 2025 Y3 SMILES DENTAL. ALL RIGHTS RESERVED.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/people/Y3-Smiles-Dental/61579053037448/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#B4957E] transition-gentle transform hover:scale-125 hover:-translate-y-1"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/y3_smilesdental/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#B4957E] transition-gentle transform hover:scale-125 hover:-translate-y-1"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 gradient-accent text-accent-foreground p-2 rounded-full transition-gentle transform hover:scale-110 hover:shadow-hover"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        {/* Powered By */}
        <div className="text-center text-xs mt-8">
          Y3 SMILES DENTAL - YOUR TRUSTED DENTAL CARE PROVIDER
        </div>
      </div>
    </footer>
  );
};

export default Footer;
