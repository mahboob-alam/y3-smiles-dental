export type PrincipalDentistProfile = {
  name: string;
  role: string;
  image: string;
  qualifications: string[];
  specialties: string[];
  bio: string;
  shortBio: string;
  bookingCta?: string;
};

// NOTE: Update these details with the real Principal Dentist info when available.
export const principalDentist: PrincipalDentistProfile = {
  name: "Dr. Sarah Johnson",
  role: "Principal Dentist",
  // Replace with a real clinic photo when available
  image:
    "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
  qualifications: [
    "BDSc (Melb)",
    "Member, Australian Dental Association",
    "Advanced Training in Cosmetic & Restorative Dentistry",
  ],
  specialties: [
    "Family Dentistry",
    "Cosmetic Dentistry",
    "Preventive Care",
  ],
  bio:
    "Dr. Johnson leads Y3 Smiles Dental with a gentle, patient-first approach. She enjoys helping families feel confident about their oral health, with a focus on prevention, minimally invasive treatments, and natural-looking results. Dr. Johnson is committed to clear communication and personalised care for every patient.",
  shortBio:
    "Gentle, preventative family dentistry with a focus on natural, long-lasting results.",
  bookingCta: "Book with the Principal Dentist",
};
