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

const MicklehamPage = () => {
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
                                    Mickleham Dental Care
                                </h1>
                            </div>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Comprehensive dental solutions for Mickleham residents.
                                Your oral health journey starts here.
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
                                        Your Mickleham Dental Health Partners
                                    </h2>
                                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                        Y3 Smiles Dental proudly serves the growing Mickleham community with modern,
                                        comprehensive dental care. Our team understands the unique needs of families
                                        in this vibrant area and provides tailored solutions for every patient.
                                    </p>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        From preventive care that keeps problems at bay to advanced treatments that
                                        restore your smile, we're committed to being your trusted dental health partners
                                        for years to come.
                                    </p>
                                    <Button variant="booking" size="lg" asChild>
                                        <Link to="/#contact">SCHEDULE VISIT</Link>
                                    </Button>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3845746/pexels-photo-3845746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Quality dental care for Mickleham families"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Focus */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-bold text-center text-neutral-800 mb-4">
                                Supporting Mickleham's Growing Community
                            </h2>
                            <p className="text-xl text-neutral-600 text-center mb-12">
                                As Mickleham continues to grow, we're here to support your family's dental health needs
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-xl shadow-soft">
                                    <Users className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">New Families Welcome</h3>
                                    <p className="text-neutral-600 mb-4">
                                        Moving to Mickleham? We understand the challenges of settling into a new area.
                                        Our welcoming team makes it easy to establish ongoing dental care for your family.
                                    </p>
                                    <ul className="text-sm text-neutral-600 space-y-2">
                                        <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Easy appointment scheduling</li>
                                        <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Comprehensive new patient exams</li>
                                        <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Flexible payment options</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-8 rounded-xl shadow-soft">
                                    <Heart className="w-12 h-12 text-primary mb-4" />
                                    <h3 className="text-xl font-bold text-neutral-800 mb-4">Children's Dental Care</h3>
                                    <p className="text-neutral-600 mb-4">
                                        With many young families in Mickleham, we specialise in creating positive
                                        dental experiences for children that set them up for a lifetime of healthy habits.
                                    </p>
                                    <ul className="text-sm text-neutral-600 space-y-2">
                                        <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Fun, engaging visits for kids</li>
                                        <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Preventive treatments</li>
                                        <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" />Parent education and support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <GoogleMap
                    locationName="Mickleham"
                    locationData={locationConfigs.mickleham.locationData}
                    openingHours={locationConfigs.mickleham.openingHours}
                    className="bg-primary/5"
                />

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default MicklehamPage;