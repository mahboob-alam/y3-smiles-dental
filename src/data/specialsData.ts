import { Star, Gift } from "lucide-react";

export const specialOffers = [
  {
    id: 1,
    badge: "New Patient Special",
    title: "Check-Up, Clean & X-Rays",
    price: "$229",
    originalPrice: "$540",
    savings: "Save $311",
    description: "Comprehensive examination, professional clean & necessary X-rays",
    eligibility: "Eligibility Applies",
    icon: Star,
    bgGradient: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    iconColor: "text-primary",
    badgeColor: "bg-primary",
    features: [
      "Comprehensive oral examination",
      "Oral cancer and pathology screening",
      "Gum assessment",
      "Intraoral photos",
      "Intraoral x-rays (as necessary)",
      "Full mouth x-ray (as necessary)",
      "Professional scale and clean",
      "Fluoride treatment",
      "Personalised quote and treatment plan"
    ]
  },
  {
    id: 2,
    badge: "Kids Dental",
    title: "Up to $1,132 FREE with Medicare CDBS",
    price: "FREE*",
    originalPrice: null,
    savings: "100% FREE",
    description: "Comprehensive dental care for eligible children aged 0-17 years",
    eligibility: "Medicare Eligibility Required",
    icon: Gift,
    bgGradient: "from-primary/5 to-primary/10",
    borderColor: "border-primary/20",
    iconColor: "text-primary",
    badgeColor: "bg-primary",
    features: [
      "No out-of-pocket costs — we bulk bill directly to Medicare",
      "Covers check-ups, cleans, X-rays, fissure seals, fillings, and extractions",
      "Easy appointment booking — just bring your Medicare card",
      "We can check your child's eligibility instantly in-clinic",
      "Friendly, gentle care designed to make dental visits positive for kids",
      "Available now at Y3 Smiles Dental, Melbourne's northern suburbs"
    ]
  }
];
