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
    Zap,
    FileText,
    Settings,
    Heart,
    Shield,
    Phone,
    CheckCircle,
    ArrowRight,
    ArrowLeft,
    Users,
    Award,
    TriangleAlert
} from "lucide-react"; const DentalImplants = () => {
    useScrollAnimation();

    const benefits = [
        "Permanent solution",
        "Natural feel",
        "Bone preservation",
        "High success rate"
    ];

    const implantProcess = [
        {
            title: "Consultation, Medical History & X-Rays",
            description: "At your consultation, we review your medical history, take X-rays, and assess suitability for treatment.",
            icon: FileText
        },
        {
            title: "Placement",
            description: "The implant is gently positioned into the jawbone under local anaesthetic.",
            icon: Settings
        },
        {
            title: "Healing",
            description: "Over several weeks or months, the bone bonds with the implant through a process called osseointegration, creating a strong foundation.",
            icon: Heart
        },
        {
            title: "Restoration",
            description: "Once healing is complete, a custom crown, bridge, or denture is attached, designed to match your natural teeth.",
            icon: Zap
        },
        {
            title: "Care",
            description: "Daily brushing, flossing, and regular dental visits help maintain the implant long term.",
            icon: Shield
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
                            <Zap className="w-20 h-20 text-primary mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Dental Implants
                            </h1>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                Dental implants are a modern option for replacing missing teeth. They are small titanium posts placed into the jawbone, acting like the root of a natural tooth. Once healed, a custom crown, bridge, or denture is attached, creating a secure, natural-looking replacement that blends with your smile.
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
                </section>                {/* What are Dental Implants */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Modern Tooth Replacement
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Restoring Smiles with Confidence
                                    </h3>
                                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                        Dental implants may help restore chewing, speech, and confidence. However, suitability depends on medical history, bone density, gum health, and overall wellbeing.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Permanent Solution</h4>
                                                <p className="text-neutral-600 text-sm">Long-lasting tooth replacement that can last a lifetime</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Natural Feel</h4>
                                                <p className="text-neutral-600 text-sm">Functions and feels like your natural teeth</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Bone Preservation</h4>
                                                <p className="text-neutral-600 text-sm">Helps maintain jawbone structure and facial support</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                        alt="Dental implant procedure and results"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Treatment Process */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                The Implant Process (Simplified)
                            </h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                A comprehensive approach to ensure the best possible outcome for your dental implant treatment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {implantProcess.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardHeader>
                                            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <CardTitle className="text-xl font-bold text-neutral-800 mb-2">
                                                {step.title}
                                            </CardTitle>
                                            <p className="text-neutral-600 leading-relaxed text-sm">
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
                                    All dental treatments carry risks. Please consult with your treating dentist to understand whether dental implants are appropriate for your individual situation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Interested in Dental Implants?
                            </h2>
                            <p className="text-lg text-neutral-600 mb-8">
                                Schedule a consultation to discuss whether dental implants are the right solution for your individual needs.
                            </p>
                            <Button variant="booking" size="xl" asChild>
                                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                    SCHEDULE CONSULTATION
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default DentalImplants;