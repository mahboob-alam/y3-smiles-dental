import React from "react";
import { Link } from "gatsby";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoogleMap from "@/components/GoogleMap";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { locationConfigs } from "@/data/locationData";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    MapPin,
    Phone,
    Clock,
    CheckCircle,
    Users,
    Heart,
    Shield,
    Star,
    Award
} from "lucide-react";


export const Head = () => (
  <SEO 
    title="Fawkner | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const FawknerPage = () => {
    useScrollAnimation();

    const services = [
        "Family Dentistry: Fillings, dentures, extractions, root canal treatments",
        "Children's Dentistry: Fluoride applications, oral hygiene education, fissure sealants",
        "Cosmetic Dentistry: Veneers, teeth whitening, crowns, reshaping teeth",
        "Gentle Care Options: Designed for anxious or nervous patients",
        "Emergency Dentistry: Prompt care for unexpected pain and injuries",
        "Preventive Care: Regular check-ups and professional cleanings"
    ];

    const whyChooseUs = [
        {
            icon: Users,
            title: "Personalised Care",
            description: "Our dentists take time to listen, review your history, and tailor treatment to your needs."
        },
        {
            icon: Heart,
            title: "Comfortable Environment",
            description: "A calming clinic and caring team ensure your visits are stress-free."
        },
        {
            icon: Shield,
            title: "Comprehensive Services",
            description: "From check-ups and preventative care to cosmetic dentistry and gentle treatment options."
        },
        {
            icon: Award,
            title: "Experienced Team",
            description: "Our skilled dentists stay updated with the latest techniques and technology."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Enhanced Hero Section */}
                <section className="relative bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100 py-32 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary"></div>
                        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-secondary"></div>
                        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-primary"></div>
                        <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full bg-secondary"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center mb-8 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-soft">
                                    <img src="/location.png" alt="Location" className="w-10 h-10 mr-4" />
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-primary uppercase tracking-wider">Fawkner Dentists</p>
                                        <p className="text-lg font-bold text-neutral-800">Fawkner</p>
                                    </div>
                                </div>

                                <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6 leading-tight">
                                    Your Smile,
                                    <span className="block text-primary">
                                        Our Priority
                                    </span>
                                </h1>

                                <p className="text-xl text-neutral-800 mb-12 leading-relaxed max-w-3xl mx-auto">
                                    Experience exceptional dental care near Fawkner. Our state-of-the-art clinic
                                    combines advanced technology with gentle, personalised treatment for the whole family.
                                </p>
                            </div>

                            {/* Enhanced Feature Pills */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <CheckCircle className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Local Fawkner Clinic</span>
                                </div>
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <Award className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Expert Dental Team</span>
                                </div>
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <Heart className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Family Friendly Care</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <CheckCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK APPOINTMENT
                                    </a>
                                </Button>
                                <Button variant="booking" size="xl" asChild>
                                    <Link to="/treatments">
                                        View Our Treatments
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Caring for Fawkner Smiles
                                    </h2>
                                    <p className="text-lg text-neutral-800 mb-6 leading-relaxed">
                                        Y3 Smiles Dental is proud to serve the diverse Fawkner community with
                                        compassionate, professional dental care. Our multilingual team understands
                                        the unique needs of our multicultural neighbourhood.
                                    </p>
                                    <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                                        We believe everyone deserves access to quality dental care. Our practice
                                        welcomes patients from all backgrounds and provides gentle, effective
                                        treatments in a comfortable environment.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>SCHEDULE CONSULTATION</a>
                                    </Button>
                                </div>
                                <div className="relative">
                                    {/* Decorative Frame */}
                                    <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl"></div>
                                    <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                                        <div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden">
                                            <img
                                                src="/fawkner.png"
                                                alt="Happy family at dental clinic near Glenroy"
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Values */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-4">
                                Embracing Fawkner's Community Spirit
                            </h2>
                            <p className="text-xl text-neutral-800 text-center mb-12">
                                We celebrate the diversity and strength of our local community
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-xl shadow-soft text-center">
                                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Cultural Sensitivity</h3>
                                    <p className="text-neutral-800">
                                        Our team respects and embraces cultural diversity. We understand different
                                        backgrounds may have varying perspectives on dental care and work to accommodate
                                        everyone's needs comfortably.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft text-center">
                                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Affordable Care</h3>
                                    <p className="text-neutral-800">
                                        We believe cost shouldn't be a barrier to good oral health. We offer flexible
                                        payment options and work with various insurance providers to make dental care
                                        accessible for all.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft text-center">
                                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Community Focus</h3>
                                    <p className="text-neutral-800">
                                        As part of the Fawkner community, we're committed to supporting local health
                                        initiatives and providing educational resources to promote better oral health
                                        for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap
                    locationName="Fawkner"
                    locationData={locationConfigs.fawkner.locationData}
                    openingHours={locationConfigs.fawkner.openingHours}
                    className="bg-primary/5"
                />

                {/* <Contact /> */}
            </main>
            <Footer />
        </div>
    );
};

export default FawknerPage;