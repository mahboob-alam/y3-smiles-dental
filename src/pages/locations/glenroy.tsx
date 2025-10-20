import { Link } from "react-router-dom";
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
    Award,
    Smile,
    Baby
} from "lucide-react";

const GlenroyPage = () => {
    useScrollAnimation();

    const services = [
        {
            category: "Family Dentistry",
            items: ["Fillings", "Dentures", "Extractions", "Root canal treatments", "TMD support"]
        },
        {
            category: "Children's Dentistry",
            items: ["Fluoride applications", "Oral hygiene education", "Fissure sealants", "Custom-fitted mouthguards"]
        },
        {
            category: "Cosmetic Dentistry",
            items: ["Veneers", "Teeth whitening", "Crowns", "Reshaping teeth", "Full-mouth rehabilitation"]
        },
        {
            category: "Gentle Care Options",
            items: ["Designed for patients who feel anxious", "Nervous about dental visits", "Comfort-focused approach"]
        },
        {
            category: "Emergency Dentistry",
            items: ["Prompt care for unexpected pain", "Injury treatment", "Urgent dental needs"]
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
                                        <p className="text-sm font-medium text-primary uppercase tracking-wider">Glenroy Dentists</p>
                                        <p className="text-lg font-bold text-neutral-800">Glenroy</p>
                                    </div>
                                </div>

                                <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6 leading-tight">
                                    We Smile,
                                    <span className="block text-primary">
                                        When You Smile
                                    </span>
                                </h1>

                                <p className="text-xl text-neutral-800 mb-12 leading-relaxed max-w-3xl mx-auto">
                                    Experience family-focused dental care at Glenroy Dental Clinic where everyone feels welcome.
                                    Our comprehensive approach ensures comfortable visits for all ages.
                                </p>
                            </div>

                            {/* Enhanced Feature Pills */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <Heart className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Family-Focused Care</span>
                                </div>
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <Award className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Professional Team</span>
                                </div>
                                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-soft hover:shadow-medium transition-all duration-300 group">
                                    <Smile className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="font-semibold text-neutral-800">Quality Care</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Smile className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
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
                                            Family-Centered Care
                                        </h2>
                                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 leading-tight">
                                            We Smile When
                                            <span className="block text-primary">You Smile!</span>
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-2xl shadow-soft border-l-4 border-primary">
                                            <p className="text-lg text-neutral-700 leading-relaxed">
                                                At Y3 Smiles Dental, we are committed to making every visit comfortable, caring, and professional.
                                                Our values, patient-first approach, and dedication to quality are reflected in everything we do.
                                            </p>
                                        </div>

                                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-2xl">
                                            <p className="text-lg text-neutral-700 leading-relaxed">
                                                Whatever your dental goals, Y3 Smiles Dental near Glenroy is here to help you achieve
                                                and maintain a healthy, confident smile for the whole family.
                                            </p>
                                        </div>

                                        <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                                            <p className="text-lg text-primary font-semibold leading-relaxed">
                                                ✨ Experience dental care that puts your family's comfort and health first.
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
                                                src="/glenroy.png"
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

                {/* Enhanced Services Section */}
                <section id="services" className="py-32 bg-gradient-to-b from-white to-neutral-50 relative">
                    <div className="container mx-auto px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-20">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Our Services
                                </h2>

                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
                                    Comprehensive Dentistry for
                                    <span className="block text-primary">Glenroy Families</span>
                                </h2>

                                <p className="text-xl text-neutral-800 mb-8 max-w-4xl mx-auto leading-relaxed">
                                    We provide a full range of dental services under one roof. From maintaining healthy teeth
                                    and gums to enhancing smiles with cosmetic treatments, our care is tailored for every
                                    stage of life — children, adults, and seniors.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
                                {services.map((service, index) => (
                                    <div key={index} className="group bg-white p-8 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 relative overflow-hidden">
                                        {/* Background Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300"></div>

                                        <div className="relative z-10">
                                            <div className="flex items-center mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                    {service.category === "Family Dentistry" && <Users className="w-6 h-6 text-primary" />}
                                                    {service.category === "Children's Dentistry" && <Baby className="w-6 h-6 text-primary" />}
                                                    {service.category === "Cosmetic Dentistry" && <Star className="w-6 h-6 text-primary" />}
                                                    {service.category === "Gentle Care Options" && <Heart className="w-6 h-6 text-primary" />}
                                                    {service.category === "Emergency Dentistry" && <Shield className="w-6 h-6 text-primary" />}
                                                </div>
                                                <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                                            </div>

                                            <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-primary transition-colors duration-300">
                                                {service.category}
                                            </h3>

                                            <ul className="space-y-3">
                                                {service.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                                        <span className="text-neutral-800 leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Hover Effect */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Enhanced CTA Section */}
                            <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-12 rounded-3xl border border-primary/20 text-center">
                                <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                                    Ready for Family-Focused Dental Care?
                                </h3>
                                <p className="text-lg text-neutral-800 mb-8 max-w-2xl mx-auto">
                                    Experience comprehensive dental services designed for every member of your family
                                    in a welcoming, comfortable environment.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button variant="booking" size="xl" asChild className="group">
                                        <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                            <Smile className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                            BOOK FAMILY CONSULTATION
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
                    locationName="Glenroy"
                    locationData={locationConfigs.glenroy.locationData}
                    openingHours={locationConfigs.glenroy.openingHours}
                    className="bg-primary/5"
                />

                {/* <Contact /> */}
            </main>
            <Footer />
        </div>
    );
};

export default GlenroyPage;