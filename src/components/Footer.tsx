import React from 'react';
import { Link } from "gatsby";
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
                <span className="uppercase text-[#B59682]">Phone:</span>{" "}
                <a href="tel:03 9022 4442" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">
                  03 9022 4442
                </a>
              </p>
              <p>
                <span className="uppercase text-[#B59682]">Email:</span>{" "}
                <a href="mailto:smile@y3smilesdental.com.au" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">
                  smile@y3smilesdental.com.au
                </a>
              </p>
              <div>
                <p className="uppercase text-[#B59682] mb-1">Address:</p>
                <a
                  href="https://www.google.com/search?sca_esv=de45a14deaa8af91&rlz=1C1CHBF_enAU1057AU1057&sxsrf=AE3TifMcuyWLUIujqzA7WtMLRs3p-Uus2w%3A1760258388705&q=Y3%20Smiles%20Dental&stick=H4sIAAAAAAAAAONgU1I1qDAxMEpMS0xMMzJNSk41NDe3MqhIM7ZMsTA0MrFIMTJJtDRMWcQqEGmsEJybmZNarOCSmleSmAMAQyVofDwAAAA&mat=CUKdJZUYoj6X&ved=2ahUKEwiT3uK_oZ6QAxXc4zgGHVCbFsUQrMcEegQIQRAC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block cursor-pointer"
                >
                  <p>1/34 KING WILLIAM ST,</p>
                  <p>BROADMEADOWS, VIC 3047</p>
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm uppercase mb-4 tracking-wider text-[#B59682]">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>MONDAY:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>TUESDAY:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>WEDNESDAY:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>THURSDAY:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>FRIDAY:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>SATURDAY:</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between hover:bg-white/5 px-2 py-1 rounded transition-gentle">
                <span>SUNDAY:</span>
                <span>CLOSED</span>
              </div>
            </div>
          </div>

          {/* Areas We Service */}
          <div>
            <h3 className="text-sm uppercase mb-4 tracking-wider text-[#B59682]">Areas We Service</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/locations/broadmeadows" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">BROADMEADOWS</Link>
              <Link to="/locations/glenroy" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">GLENROY</Link>
              <Link to="/locations/greenvale" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">GREENVALE</Link>
              <Link to="/locations/campbellfield" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">CAMPBELLFIELD</Link>
              <Link to="/locations/meadow-heights" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">MEADOW HEIGHTS</Link>
              <Link to="/locations/roxburgh-park" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">ROXBURGH PARK</Link>
              <Link to="/locations/craigieburn" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">CRAIGIEBURN</Link>
              <Link to="/locations/westmeadows" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">WESTMEADOWS</Link>
              <Link to="/locations/mickleham" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">MICKLEHAM</Link>
              <Link to="/locations/fawkner" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">FAWKNER</Link>
              <Link to="/locations/gladstone-park" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">GLADSTONE PARK</Link>
              <Link to="/locations/hadfield" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">HADFIELD</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm uppercase mb-4 tracking-wider text-[#B59682]">Treatments</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/treatments/childrens-dentistry" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Children's Dentistry (CDBS)</Link>
              <Link to="/treatments/examination-hygiene" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Comprehensive Examination</Link>
              <Link to="/treatments/crown-bridge" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Crown and Bridge</Link>
              <Link to="/treatments/dental-fillings" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Dental Fillings</Link>
              <Link to="/treatments/dental-implants" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Dental Implants</Link>
              <Link to="/treatments/dentures" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Dentures</Link>
              <Link to="/treatments/emergency" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Emergency Dentistry</Link>
              <Link to="/treatments/fluoride" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Fluoride Treatments</Link>
              <Link to="/treatments/mouthguards" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Mouthguards</Link>
              <Link to="/treatments/periodontal" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Periodontal Therapy</Link>
              <Link to="/treatments/sealants" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Pits and Fissure Sealants</Link>
              <Link to="/treatments/root-canal" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Root Canal Therapy</Link>
              <Link to="/treatments/sedation-dentistry" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Sedation Dentistry</Link>
              <Link to="/treatments/teeth-whitening" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Teeth Whitening</Link>
              <Link to="/treatments/tmd-bruxism" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">TMD and Bruxism</Link>
              <Link to="/treatments/extraction" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Tooth Extraction</Link>
              <Link to="/treatments/wisdom-teeth" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">Wisdom Teeth Removal</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 mb-8" />

        {/* Social Links - Centered */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.facebook.com/people/Y3-Smiles-Dental/61579053037448/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#B59682] transition-gentle transform hover:scale-125 hover:-translate-y-1"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/y3_smilesdental/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#B59682] transition-gentle transform hover:scale-125 hover:-translate-y-1"
            >
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="text-center text-xs space-y-1">
          <div>COPYRIGHT © 2025 Y3 SMILES DENTAL. ALL RIGHTS RESERVED.</div>
          <div className="text-zinc-500">Powered by PSEI Australia</div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-booking-gold text-white p-3 rounded-full transition-gentle transform hover:scale-110 hover:shadow-hover hover:bg-[#A4846F]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
