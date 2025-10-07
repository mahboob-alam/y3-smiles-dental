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

const CampbellfieldPage = () => {
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
                                    Campbellfield Dentists
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Y3 Smiles Dental serves residents of Campbellfield with professional,
                                family-oriented dental care in a comfortable and welcoming environment.
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
                                        Quality Dental Care for Campbellfield Families
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        At Y3 Smiles, we're dedicated to providing exceptional dental care for the Campbellfield community.
                                        Our experienced team focuses on preventive care, gentle treatments, and building long-term relationships
                                        with our patients.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        From comprehensive check-ups to advanced treatments, we ensure every visit is comfortable and tailored
                                        to your individual needs. Your oral health and satisfaction are our top priorities.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">SCHEDULE CONSULTATION</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3845746/pexels-photo-3845746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Dental care for Campbellfield residents"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap showTitle={false} className="bg-primary/5" />

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default CampbellfieldPage;