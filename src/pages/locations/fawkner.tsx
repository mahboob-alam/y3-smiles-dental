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

const FawknerPage = () => {
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
                                    Fawkner Dentists
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Trusted dental care for the Fawkner community.
                                Quality treatments with a personal touch.
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
                                        Caring for Fawkner Smiles
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        Y3 Smiles Dental is proud to serve the diverse Fawkner community with
                                        compassionate, professional dental care. Our multilingual team understands
                                        the unique needs of our multicultural neighbourhood.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        We believe everyone deserves access to quality dental care. Our practice
                                        welcomes patients from all backgrounds and provides gentle, effective
                                        treatments in a comfortable environment.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">SCHEDULE CONSULTATION</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Multicultural dental care for Fawkner residents"
                                        className="w-full h-full object-cover"
                                    />
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
                            <p className="text-xl text-neutral-600 text-center mb-12">
                                We celebrate the diversity and strength of our local community
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-xl shadow-soft text-center">
                                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Cultural Sensitivity</h3>
                                    <p className="text-neutral-600">
                                        Our team respects and embraces cultural diversity. We understand different
                                        backgrounds may have varying perspectives on dental care and work to accommodate
                                        everyone's needs comfortably.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft text-center">
                                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Affordable Care</h3>
                                    <p className="text-neutral-600">
                                        We believe cost shouldn't be a barrier to good oral health. We offer flexible
                                        payment options and work with various insurance providers to make dental care
                                        accessible for all.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft text-center">
                                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Community Focus</h3>
                                    <p className="text-neutral-600">
                                        As part of the Fawkner community, we're committed to supporting local health
                                        initiatives and providing educational resources to promote better oral health
                                        for everyone.
                                    </p>
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

export default FawknerPage;