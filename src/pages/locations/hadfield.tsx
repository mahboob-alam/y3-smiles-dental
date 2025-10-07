import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoogleMap from "@/components/GoogleMap";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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

const HadfieldPage = () => {
    useScrollAnimation();

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
                                    Hadfield Dentists
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Dedicated dental care for Hadfield residents.
                                Your local partners in oral health and wellness.
                            </p>
                            <Button variant="booking" size="xl" asChild>
                                <Link to="/#contact">BOOK APPOINTMENT</Link>
                            </Button>
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
                                        Your Trusted Hadfield Dental Team
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        Y3 Smiles Dental proudly serves the close-knit Hadfield community with personalised,
                                        comprehensive dental care. We understand the importance of building lasting relationships
                                        with our patients and providing consistent, reliable service.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Our commitment goes beyond just treating teeth – we focus on your overall oral health
                                        and well-being. With gentle techniques and modern technology, we make dental care
                                        comfortable and effective for the whole family.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">SCHEDULE CONSULTATION</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Trusted dental care for Hadfield community"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local Connection */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-4">
                                Deeply Connected to Hadfield
                            </h2>
                            <p className="text-xl text-neutral-600 text-center mb-12">
                                Understanding our community's needs and providing personalised care
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="bg-white p-8 rounded-xl shadow-soft">
                                    <Heart className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">Local Relationships</h3>
                                    <p className="text-neutral-600 mb-4">
                                        As part of the Hadfield community, we understand the unique characteristics and
                                        needs of our neighbourhood. We build genuine relationships with our patients,
                                        often caring for multiple generations of the same family.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm text-neutral-600">
                                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                            Multi-generational family care
                                        </div>
                                        <div className="flex items-center text-sm text-neutral-600">
                                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                            Personalised treatment approaches
                                        </div>
                                        <div className="flex items-center text-sm text-neutral-600">
                                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                            Long-term oral health planning
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft">
                                    <Shield className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">Comprehensive Care</h3>
                                    <p className="text-neutral-600 mb-4">
                                        From routine maintenance to complex treatments, we provide complete dental
                                        solutions for Hadfield residents. Our goal is to be your dental home for life,
                                        adapting our services as your needs change over time.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm text-neutral-600">
                                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                            Preventive and restorative dentistry
                                        </div>
                                        <div className="flex items-center text-sm text-neutral-600">
                                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                            Emergency dental services
                                        </div>
                                        <div className="flex items-center text-sm text-neutral-600">
                                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                                            Cosmetic smile enhancements
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap locationName="Hadfield" className="bg-primary/5" />

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default HadfieldPage;