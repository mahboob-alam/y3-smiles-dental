import React from "react";
import { Link } from "gatsby";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Contact from "@/components/Contact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Users,
  CalendarCheck,
  CreditCard,
  FileText,
  Camera,
  FolderOpen,
  ArrowRight,
  Clock,
  Heart,
  Shield
} from "lucide-react";

export default function PatientsPage() {
  useScrollAnimation();

  const patientServices = [
    {
      icon: <CalendarCheck className="h-8 w-8 text-blue-600" />,
      title: "Your First Visit",
      description: "Everything you need to know for your first appointment with us",
      link: "/patients/your-first-visit",
      features: [
        "What to bring and expect",
        "Comprehensive examination process",
        "Anxiety management tips",
        "New patient special offers"
      ]
    },
    {
      icon: <CreditCard className="h-8 w-8 text-green-600" />,
      title: "Payment Options",
      description: "Flexible payment solutions to make dental care affordable",
      link: "/patients/payment-options",
      features: [
        "Interest-free payment plans",
        "Private health insurance",
        "Medicare & CDBS support",
        "Multiple payment methods"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      title: "Price Guide",
      description: "Transparent pricing for all our dental treatments and services",
      link: "/patients/price-guide",
      features: [
        "Comprehensive treatment costs",
        "No hidden fees policy",
        "Insurance claim estimates",
        "Payment plan options"
      ]
    }
  ];

  const additionalResources = [
    {
      icon: <Camera className="h-6 w-6 text-pink-600" />,
      title: "Smile Gallery",
      description: "See real before and after transformations from our patients",
      link: "/patients/smile-gallery"
    },
    {
      icon: <FolderOpen className="h-6 w-6 text-orange-600" />,
      title: "Case Studies",
      description: "Detailed treatment journeys and success stories",
      link: "/patients/case-studies"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Professional Expertise",
      description: "Comprehensive dental care with modern techniques"
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Patient-Centered Care",
      description: "Your comfort and satisfaction are our top priorities"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Modern Technology",
      description: "Latest dental equipment and treatment techniques"
    }
  ];

  return (
    <></>
  );
}