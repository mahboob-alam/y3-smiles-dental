import React from 'react';
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

type NavigationProps = React.HTMLAttributes<HTMLDivElement>;

const navigationItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about/y3-smiles-dental",
    subItems: [
      {
        title: "About Y3 Smiles Dental",
        items: [
          { title: "Y3 Smiles Dental", path: "/about/y3-smiles-dental" },
          // Commented for future use. [Under development]
          // { title: "Our Team", path: "/about/our-team" },
          // { title: "Join Our Team", path: "/about/join-our-team" },
          // { title: "Blog", path: "/about/blog" }
        ]
      }
    ]
  },
  {
    title: "Treatments",
    path: "/treatments",
    subItems: [
      {
        title: "View All Treatments",
        path: "/treatments",
        items: [
          { title: "Children's Dentistry (CDBS)", path: "/treatments/childrens-dentistry" },
          { title: "Comprehensive Examination & Dental Hygiene", path: "/treatments/examination-hygiene" },
          { title: "Crown and Bridge", path: "/treatments/crown-bridge" },
          { title: "Dental Fillings", path: "/treatments/dental-fillings" },
          { title: "Dental Implants", path: "/treatments/dental-implants" },
          { title: "Dentures", path: "/treatments/dentures" },
          { title: "Emergency Dentistry", path: "/treatments/emergency" },
          { title: "Fluoride Treatments", path: "/treatments/fluoride" },
          { title: "Mouthguards", path: "/treatments/mouthguards" },
          { title: "Periodontal Therapy", path: "/treatments/periodontal" },
          { title: "Pits and Fissure Sealants", path: "/treatments/sealants" },
          { title: "Root Canal Therapy", path: "/treatments/root-canal" },
          { title: "Sedation Dentistry", path: "/treatments/sedation-dentistry" },
          { title: "Teeth Whitening", path: "/treatments/teeth-whitening" },
          { title: "TMD and Bruxism Treatment", path: "/treatments/tmd-bruxism" },
          { title: "Tooth Extraction", path: "/treatments/extraction" },
          { title: "Wisdom Teeth Removal", path: "/treatments/wisdom-teeth" }
        ]
      }
    ]
  },
  {
    title: "Specials",
    path: "/specials"
  },
  {
    title: "For Patients",
    path: "/patients",
    subItems: [
      {
        title: "Patient Resources",
        items: [
          // { title: "Your First Visit", path: "/patients/your-first-visit" },
          { title: "Payment Options", path: "/patients/payment-options" },
          // { title: "Price Guide", path: "/patients/price-guide" }
        ]
      }
    ]
  },
  {
    title: "Contact Us",
    path: "/contact"
  }
];

const NavItem = ({ item, isSubmenu = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  if (item.subItems) {
    return (
      <div className="space-y-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "group flex items-center w-full text-left px-4 py-2.5 text-sm font-medium transition-gentle",
            "hover:gradient-accent hover:text-accent-foreground active:gradient-accent-hover rounded-lg transform hover:scale-[1.02]",
            isSubmenu && "pl-8"
          )}
        >
          <span className="flex-1">{item.title}</span>
          <svg
            className={cn(
              "h-4 w-4 text-muted-foreground transition-gentle group-hover:text-accent-foreground",
              isOpen && "rotate-180"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="ml-4 space-y-1 border-l-2 border-border pl-4 animate-fade-in">
            {item.subItems.map((subItem, index) => (
              <NavItem key={index} item={subItem} isSubmenu={true} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (item.items) {
    return (
      <div className="space-y-2">
        {item.path ? (
          <Link
            to={item.path}
            className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
          >
            {item.title}
          </Link>
        ) : (
          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {item.title}
          </div>
        )}
        <div className="space-y-1">
          {item.items.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.path}
              className={cn(
                "block px-4 py-2 text-sm transition-gentle rounded-lg transform hover:scale-[1.02] relative overflow-hidden",
                "hover:gradient-accent hover:text-accent-foreground active:gradient-accent-hover",
                location.pathname === subItem.path && "gradient-primary text-primary-foreground font-medium shadow-medium",
                isSubmenu && "pl-8"
              )}
            >
              <span className="relative z-10">{subItem.title}</span>
              {location.pathname === subItem.path && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent animate-fade-in"></div>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className={cn(
        "block px-4 py-2.5 text-sm transition-gentle rounded-lg transform hover:scale-[1.02] relative overflow-hidden",
        "hover:gradient-accent hover:text-accent-foreground active:gradient-accent-hover",
        location.pathname === item.path && "gradient-primary text-primary-foreground font-medium shadow-medium",
        isSubmenu && "pl-8"
      )}
    >
      <span className="relative z-10">{item.title}</span>
      {location.pathname === item.path && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent animate-fade-in"></div>
      )}
    </Link>
  );
};

export function Navigation({ className }: NavigationProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group flex items-center justify-center hover:gradient-accent hover:text-accent-foreground transition-gentle transform hover:scale-110"
        >
          <Menu className="h-6 w-6 transition-gentle group-hover:scale-110 group-hover:rotate-180" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] lg:w-[500px] overflow-y-auto border-r animate-slide-in-left"
      >
        <div className="mb-4">
          {/* <h2 className="text-lg font-semibold mb-2">Menu</h2>
          <p className="text-sm text-muted-foreground">
            Explore our services and treatments
          </p> */}
        </div>
        <nav className={cn("flex flex-col space-y-6", className)}>
          {navigationItems.map((item, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <NavItem item={item} />
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}