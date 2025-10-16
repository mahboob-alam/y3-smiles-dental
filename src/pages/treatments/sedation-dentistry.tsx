import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    Moon,
    FileText,
    Settings,
    Shield,
    Clock,
    Phone,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    Users,
    Award,
    TriangleAlert
} from "lucide-react"; const SedationDentistry = () => {
    useScrollAnimation();

    const benefits = [
        "Reduce anxiety",
        "Pain-free procedures",
        "Various options",
        "Safe monitoring"
    ];

    const sedationProcess = [
        {
            title: "Consultation & Medical History",
            description: "Your dentist will review your medical history and discuss whether sedation is suitable for you. They will explain the options, risks, and recovery considerations.",
            icon: FileText
        },
        {
            title: "Choosing the Sedation Type",
            description: "Options may include oral medication, inhalation sedation (nitrous oxide/laughing gas), or IV sedation. The choice depends on your needs and suitability.",
            icon: Settings
        },
        {
            title: "During the Procedure",
            description: "You remain conscious but deeply relaxed. Your dentist monitors you closely throughout treatment to ensure safety and comfort.",
            icon: Shield
        },
        {
            title: "Recovery",
            description: "Recovery times vary depending on the type of sedation used. Some patients feel alert quickly, while others may need a little longer before going home.",
            icon: Clock
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
                            <Moon className="w-20 h-20 text-primary mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Sedation Dentistry
                            </h1>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Sedation dentistry is designed to help patients feel calm and comfortable during dental treatment. It can be helpful for those who experience dental anxiety, have a strong gag reflex, or require longer procedures. Sedation does not replace local anaesthetic (which numbs the treatment area) but works alongside it to reduce stress and create a more relaxed experience.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                        <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <Button variant="booking" size="xl" asChild>
                                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>BOOK CONSULTATION</a>
                            </Button>
                        </div>
                    </div>
                </section>        {/* What is Sedation Dentistry */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Comfortable Care
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Anxiety-Free Dental Treatment
                                    </h3>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Sedation dentistry may help patients receive the care they need in a more comfortable, stress-free way.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Reduce Anxiety</h4>
                                                <p className="text-neutral-600 text-sm">Helps nervous patients feel calm and relaxed during treatment</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Pain-Free Procedures</h4>
                                                <p className="text-neutral-600 text-sm">Works alongside local anaesthetic for maximum comfort</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Safe Monitoring</h4>
                                                <p className="text-neutral-600 text-sm">Continuous professional monitoring ensures your safety throughout</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/8260446/pexels-photo-8260446.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Calm and comfortable dental sedation environment"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sedation Process */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                The Sedation Process (Simplified)
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                A step-by-step approach to ensure your comfort and safety throughout your dental treatment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {sedationProcess.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardHeader>
                                            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                                                {step.title}
                                            </CardTitle>
                                            <p className="text-neutral-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </CardHeader>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                                    <TriangleAlert className="w-5 h-5 mr-2" />
                                    Disclaimer
                                </h3>
                                <p className="text-yellow-700 text-sm leading-relaxed">
                                    All dental treatments carry risks. Please consult with your treating dentist to assess suitability and understand risks and recovery considerations before proceeding.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-r from-primary/10 via-white to-secondary/10">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Ready for Comfortable Dental Care?
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                                Don't let anxiety prevent you from getting the dental care you need. Explore our sedation options for a more relaxed experience.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK CONSULTATION
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" asChild>
                                    <Link to="/treatments">View All Treatments</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default SedationDentistry;