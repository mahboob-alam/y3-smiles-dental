import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoogleMap from "@/components/GoogleMap";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { locationConfigs } from "@/data/locationData";
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
                {/* Hero Section */}
                <section className="bg-gradient-hero py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="flex items-center justify-center mb-6">
                                <MapPin className="w-8 h-8 text-primary mr-3" />
                                <h1 className="text-5xl md:text-6xl font-bold text-neutral-800">
                                    Glenroy Dentists
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Y3 Smiles Dental serves residents of Glenroy with comprehensive,
                                family-focused dental care in a comfortable environment.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-12">
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                    <span className="text-sm font-medium text-neutral-700">Near Glenroy</span>
                                </div>
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                    <span className="text-sm font-medium text-neutral-700">Professional Team</span>
                                </div>
                                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                    <span className="text-sm font-medium text-neutral-700">Quality Care</span>
                                </div>
                            </div>
                            <Button variant="booking" size="xl" asChild>
                                <Link to="/#contact">BOOK APPOINTMENT</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* We Smile When You Smile */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3779649/pexels-photo-3779649.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Happy family at dental clinic near Glenroy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center mb-6">
                                        <Smile className="w-8 h-8 text-primary mr-3" />
                                        <h2 className="text-4xl font-bold text-neutral-800">
                                            We Smile When You Smile!
                                        </h2>
                                    </div>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        At Y3 Smiles, we are committed to making every visit comfortable, caring, and professional.
                                        Our values, patient-first approach, and dedication to quality are reflected in everything we do.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Whatever your dental goals, Y3 Smiles Dental near Glenroy is here to help you achieve
                                        and maintain a healthy, confident smile.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">BOOK CONSULTATION</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comprehensive Dentistry */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Comprehensive Dentistry for Families in and around Glenroy
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-4xl mx-auto">
                                We provide a full range of dental services under one roof. From maintaining healthy teeth
                                and gums to enhancing smiles with cosmetic treatments, our care is tailored for every
                                stage of life — children, adults, and seniors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth">
                                    <div className="flex items-center mb-6">
                                        {service.category === "Family Dentistry" && <Users className="w-8 h-8 text-primary mr-3" />}
                                        {service.category === "Children's Dentistry" && <Baby className="w-8 h-8 text-primary mr-3" />}
                                        {service.category === "Cosmetic Dentistry" && <Star className="w-8 h-8 text-primary mr-3" />}
                                        {service.category === "Gentle Care Options" && <Heart className="w-8 h-8 text-primary mr-3" />}
                                        {service.category === "Emergency Dentistry" && <Shield className="w-8 h-8 text-primary mr-3" />}
                                        <h3 className="text-xl font-bold text-neutral-800">
                                            {service.category}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-neutral-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <GoogleMap
                    locationName="Glenroy"
                    locationData={locationConfigs.glenroy.locationData}
                    openingHours={locationConfigs.glenroy.openingHours}
                    className="bg-primary/5"
                />

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default GlenroyPage;