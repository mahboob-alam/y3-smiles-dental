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
    Phone,
    Clock,
    CheckCircle,
    Users,
    Heart,
    Shield,
    Star,
    Award
} from "lucide-react";

const MeadowHeightsPage = () => {
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
                                    Meadow Heights Dental Care
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Comprehensive dental services for Meadow Heights residents,
                                delivered with care, precision, and a commitment to your comfort.
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
                                        Your Meadow Heights Smile Experts
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        Y3 Smiles Dental proudly serves the Meadow Heights community with state-of-the-art dental
                                        care in a warm, welcoming environment. Our team is committed to helping you achieve and
                                        maintain optimal oral health.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Whether you need routine preventive care or more complex treatments, we provide personalised
                                        dental solutions that fit your lifestyle and budget. Every patient receives our full attention
                                        and expert care.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">SCHEDULE VISIT</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Professional dental care for Meadow Heights"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-12">
                                Complete Dental Services for Meadow Heights
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <CheckCircle className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Preventive Care</h3>
                                    <p className="text-neutral-600 text-sm">Regular check-ups, cleanings, and preventive treatments</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Heart className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Family Dentistry</h3>
                                    <p className="text-neutral-600 text-sm">Comprehensive care for patients of all ages</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Shield className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Restorative Treatments</h3>
                                    <p className="text-neutral-600 text-sm">Fillings, crowns, and tooth restoration</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Star className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Cosmetic Dentistry</h3>
                                    <p className="text-neutral-600 text-sm">Smile enhancement and aesthetic treatments</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Users className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Children's Dentistry</h3>
                                    <p className="text-neutral-600 text-sm">Specialised care for young patients</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-soft">
                                    <Award className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Emergency Care</h3>
                                    <p className="text-neutral-600 text-sm">Prompt treatment for dental emergencies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap
                    locationName="Meadow Heights"
                    locationData={locationConfigs['meadow-heights'].locationData}
                    openingHours={locationConfigs['meadow-heights'].openingHours}
                    className="bg-primary/5"
                />

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default MeadowHeightsPage;