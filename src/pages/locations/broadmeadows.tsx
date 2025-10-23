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
    CheckCircle,
    Users,
    Heart,
    Shield,
    Star,
    Award
} from "lucide-react";


export const Head = () => (
  <SEO 
    title="Broadmeadows | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const BroadmeadowsPage = () => {
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
                                        <p className="text-sm font-medium text-primary uppercase tracking-wider">Broadmeadows Dentists</p>
                                        <p className="text-lg font-bold text-neutral-800">Broadmeadows</p>
                                    </div>
                                </div>

                                <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6 leading-tight">
                                    Your Smile,
                                    {/* <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> */}
                                    <span className="block text-primary">
                                        Our Priority
                                    </span>
                                </h1>

                                <p className="text-xl text-neutral-800 mb-12 leading-relaxed max-w-3xl mx-auto">
                                    Experience exceptional dental care at Broadmeadows Dental Clinic. Our state-of-the-art clinic
                                    combines advanced technology with gentle, personalised treatment for the whole family.
                                </p>
                            </div>

                            {/* Enhanced Feature Pills */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <CheckCircle className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Local Broadmeadows Clinic</span>
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

                {/* Enhanced About Section */}
                <section className="py-32 bg-gradient-to-b from-white to-neutral-50 relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>

                    <div className="container mx-auto px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                            Patient-Centered Care
                                        </h2>
                                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 leading-tight">
                                            We Care About
                                            <span className="block text-primary">Your Smile</span>
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-2xl shadow-soft border-l-4 border-primary">
                                            <p className="text-lg text-neutral-700 leading-relaxed">
                                                At Y3 Smiles Dental in Broadmeadows, we believe good dental care is more than just brushing
                                                and flossing. Regular check-ups are essential for maintaining healthy teeth and gums.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-2xl">
                                            <p className="text-lg text-neutral-700 leading-relaxed">
                                                We're committed to affordable, gentle, and effective dentistry for the whole family.
                                                Our modern approach combines cutting-edge technology with compassionate care.
                                            </p>
                                        </div>

                                        <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                                            <p className="text-lg text-primary font-semibold leading-relaxed">
                                                Book your appointment today — whether you need a check-up, restorative care,
                                                or want to enhance your smile, we're here to help.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button variant="booking" size="lg" asChild className="group">
                                            <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                                <CheckCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                                BOOK CONSULTATION
                                            </a>
                                        </Button>
                                        <Button variant="booking" size="lg" asChild>
                                            <Link to="#services">Learn More About Our Services</Link>
                                        </Button>
                                    </div>
                                </div>

                                <div className="relative">
                                    {/* Decorative Frame */}
                                    <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl"></div>
                                    <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                                        <div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden">
                                            <img
                                                src="/broadmeadows.png"
                                                alt="Modern dental office in Broadmeadows"
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Floating Stats */}
                                    {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-primary/10">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-primary">500+</div>
                                            <div className="text-sm text-neutral-800 font-medium">Happy Patients</div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced Why Choose Us Section */}
                <section className="py-32 bg-gradient-to-br from-neutral-50 to-primary/5 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <defs>
                                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#grid)" className="text-primary" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-20">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Excellence in Care
                                </h2>

                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
                                    Why Choose
                                    <span className="block text-primary">
                                        Y3 Smiles Dental?
                                    </span>
                                </h2>

                                <p className="text-xl text-neutral-800 max-w-4xl mx-auto leading-relaxed">
                                    Experience the difference that expert care, modern technology, and genuine compassion
                                    make for Broadmeadows families. Here's what sets us apart.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {whyChooseUs.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={index} className="group bg-white p-8 rounded-3xl shadow-soft hover:shadow-2xl transition-all duration-500 border border-primary/5 hover:border-primary/20 relative overflow-hidden">
                                            {/* Background Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500"></div>

                                            <div className="relative z-10">
                                                <div className="flex items-center mb-6">
                                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                                                        <IconComponent className="w-8 h-8" />
                                                    </div>
                                                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-16 transition-all duration-300"></div>
                                                </div>

                                                <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-primary transition-colors duration-300">
                                                    {item.title}
                                                </h3>                                                <p className="text-neutral-800 leading-relaxed text-lg">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Decorative Element */}
                                            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full group-hover:scale-125 transition-transform duration-500 opacity-50"></div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Call to Action */}
                            <div className="text-center mt-16">
                                <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                                    <Button variant="booking" size="xl" asChild className="group">
                                        <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                            <Heart className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform" />
                                            EXPERIENCE THE DIFFERENCE
                                        </a>
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enhanced Services Section */}
                <section id="services" className="py-32 bg-gradient-to-b from-white to-neutral-50 relative">
                    <div className="container mx-auto px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-20">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Our Treatments
                                </h2>

                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
                                    Our Dental Services in
                                    <span className="block text-primary">Broadmeadows</span>
                                </h2>

                                <p className="text-xl text-neutral-800 mb-8 max-w-4xl mx-auto leading-relaxed">
                                    From routine check-ups to advanced treatments, we provide comprehensive dental
                                    care for every member of your family in a comfortable, modern environment.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {services.map((service, index) => {
                                    const [title, description] = service.split(': ');
                                    return (
                                        <div key={index} className="group bg-white p-8 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 relative overflow-hidden">
                                            {/* Background Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="flex items-center mb-6">
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                        <CheckCircle className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                                                </div>

                                                <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors duration-300">
                                                    {title}
                                                </h3>

                                                <p className="text-neutral-800 leading-relaxed">
                                                    {description}
                                                </p>
                                            </div>

                                            {/* Hover Effect */}
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Enhanced CTA Section */}
                            <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-12 rounded-3xl border border-primary/20 text-center">
                                <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                                    Ready to Transform Your Smile?
                                </h3>
                                <p className="text-lg text-neutral-800 mb-8 max-w-2xl mx-auto">
                                    Discover our complete range of dental treatments designed to give you
                                    the healthy, beautiful smile you deserve.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button variant="booking" size="xl" asChild className="group">
                                        <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                            <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                            BOOK YOUR CONSULTATION
                                        </a>
                                    </Button>
                                    <Button variant="booking" size="xl" asChild>
                                        <Link to="/treatments">
                                            <Shield className="w-5 h-5 mr-2" />
                                            VIEW ALL TREATMENTS
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap
                    locationName="Broadmeadows"
                    locationData={locationConfigs.broadmeadows.locationData}
                    openingHours={locationConfigs.broadmeadows.openingHours}
                    className="bg-primary/5"
                />

                {/* <Contact /> */}
            </main>
            <Footer />
        </div>
    );
};

export default BroadmeadowsPage;