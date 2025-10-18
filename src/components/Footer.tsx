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
                <span className="uppercase text-[#B59682]">Phone:</span>{" "}
                <a href="tel:0390224442" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">
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
                <span>9:00AM-1:00 PM</span>
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
              <Link to="/locations/roxbury-park" className="hover:text-[#B59682] transition-gentle hover:scale-105 inline-block">ROXBURY PARK</Link>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              color="white"
              fill="#a1a1aa"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 8.437 11.45c-.117-.97-.223-2.46.047-3.523.244-1.004 1.573-6.42 1.573-6.42s-.4-.8-.4-1.98c0-1.85 1.074-3.23 2.41-3.23 1.137 0 1.687.853 1.687 1.875 0 1.14-.726 2.845-1.1 4.427-.312 1.32.66 2.4 1.957 2.4 2.35 0 3.938-2.478 3.938-6.05 0-3.164-2.275-5.382-5.524-5.382-3.766 0-5.977 2.823-5.977 5.74 0 1.14.44 2.363.99 3.028a.4.4 0 0 1 .092.384c-.1.422-.33 1.32-.373 1.5-.06.24-.19.3-.44.18-1.637-.75-2.662-3.097-2.662-4.98 0-4.058 2.953-7.786 8.522-7.786 4.473 0 7.957 3.186 7.957 7.45 0 4.447-2.8 8.04-6.688 8.04-1.308 0-2.54-.678-2.963-1.48l-.806 3.07c-.29 1.12-1.086 2.52-1.62 3.37A11.98 11.98 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            {/* <a
              href="https://pinterest.com/y3smiles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-[#B59682] transition-gentle transform hover:scale-125 hover:-translate-y-1"
            >
              
            </a> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs">
          COPYRIGHT © 2025 Y3 SMILES DENTAL. ALL RIGHTS RESERVED.
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
    </footer>
  );
};

export default Footer;
