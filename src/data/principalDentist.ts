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
  name: "Dr Fatima Kurnaz DDS (MELB) DEN0001925511",
  role: "Principal Dentist & Founder",
  // Official portrait of Dr. Fatima Kurnaz
  image: "/dr-fatima-portrait.png",
  // No formal degree list provided in the source document; update when available
  qualifications: [],
  // Broad areas of focus reflected across the site; adjust if needed
  specialties: ["Family Dentistry", "Preventive Care", "Cosmetic Dentistry"],
  bio:
    "Dr Fatima Kurnaz is passionate about creating positive dental experiences and building long-term relationships with her patients. After completing her dental training, she gained valuable experience across regional and metropolitan clinics, shaping a philosophy that dentistry should be as much about compassion and understanding as it is about clinical excellence. Now, as the Principal Dentist and Founder of Y3 Smiles Dental, Dr Fatima is proud to care for families in her own community of Hume — the place she grew up and still calls home. She provides modern, gentle and ethical dentistry where every patient feels heard, respected and supported. Her calm, friendly approach helps even the most anxious patients feel at ease, and she takes the time to explain each step and tailor care to individual needs. Outside the clinic, Dr Fatima loves to bake, spend quality time with her family and explore the outdoors.",
  shortBio:
    "Principal Dentist & Founder caring for the Hume community with gentle, modern and compassionate dentistry.",
  bookingCta: "Book with Dr Fatima Kurnaz",
};
