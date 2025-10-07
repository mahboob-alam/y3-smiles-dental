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

const RoxburyParkPage = () => {
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
                                    Roxbury Park Dentists
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Excellence in dental care for Roxbury Park families.
                                Your comfort, health, and smile are our passion.
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
                                        Premier Dental Care in Roxbury Park
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        Y3 Smiles Dental is proud to provide exceptional dental services to the Roxbury Park
                                        community. Our experienced team combines advanced technology with gentle, personalised
                                        care to ensure your dental experience is comfortable and effective.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        From routine cleanings to complex treatments, we're committed to helping you maintain
                                        a healthy, beautiful smile for life. Our patient-first approach means you receive the
                                        individual attention you deserve.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">SCHEDULE CONSULTATION</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Quality dental care for Roxbury Park residents"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-12">
                                Why Roxbury Park Families Choose Y3 Smiles
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-xl shadow-soft">
                                    <Shield className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Comprehensive Care</h3>
                                    <p className="text-neutral-600">
                                        From preventive treatments to advanced procedures, we offer complete dental
                                        solutions under one roof. Our team handles everything from routine check-ups
                                        to complex restorative work.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft">
                                    <Heart className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Gentle Approach</h3>
                                    <p className="text-neutral-600">
                                        We understand dental anxiety is common. Our compassionate team takes extra care
                                        to ensure your comfort throughout every visit, using gentle techniques and clear
                                        communication.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft">
                                    <Star className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Modern Technology</h3>
                                    <p className="text-neutral-600">
                                        We invest in the latest dental technology to provide precise, efficient treatments.
                                        Digital X-rays, advanced sterilisation, and modern equipment ensure the best
                                        possible care.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft">
                                    <Users className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Family-Friendly</h3>
                                    <p className="text-neutral-600">
                                        Our practice welcomes patients of all ages. From children's first visits to senior
                                        dental care, we create a comfortable environment where the whole family feels
                                        welcome.
                                    </p>
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
                                Serving the Roxbury Park Community
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="bg-white p-6 rounded-2xl shadow-soft">
                                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                                    <h3 className="font-bold text-neutral-800 mb-2">Address</h3>
                                    <p className="text-neutral-600 text-sm">
                                        1/34 King William Street<br />
                                        Broadmeadows, VIC 3047<br />
                                        <span className="text-primary font-medium">Serving Roxbury Park</span>
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

export default RoxburyParkPage;