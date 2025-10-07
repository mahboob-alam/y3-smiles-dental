import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

                {/* Location Info */}
                <section className="py-24 bg-primary/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-neutral-800 mb-12">
                                Serving Campbellfield Community
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="bg-white p-6 rounded-2xl shadow-soft">
                                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Address</h3>
                                    <p className="text-neutral-600 text-sm">
                                        1/34 King William Street<br />
                                        Broadmeadows, VIC 3047<br />
                                        <span className="text-primary font-medium">Serving Campbellfield</span>
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-soft">
                                    <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Phone</h3>
                                    <p className="text-neutral-600 text-sm">
                                        <a href="tel:PLACEHOLDER" className="hover:text-primary transition-gentle">
                                            PLACEHOLDER
                                        </a>
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-soft">
                                    <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Hours</h3>
                                    <p className="text-neutral-600 text-sm">
                                        Mon-Fri: 9:00AM-5:00PM<br />
                                        Sat: By appointment
                                    </p>
                                </div>
                            </div>

                            <div className="bg-neutral-100 rounded-2xl p-12 mb-8">
                                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                                <p className="text-neutral-600">
                                    Interactive map showing Campbellfield area coverage
                                </p>
                            </div>

                            <Button variant="booking" size="xl" asChild>
                                <Link to="/#contact">BOOK YOUR VISIT</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default CampbellfieldPage;