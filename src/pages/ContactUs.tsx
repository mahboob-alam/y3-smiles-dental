import React from "react";
import { Link } from "gatsby";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import { useState } from "react";
import EmailJSForm from "@/components/EmailJSForm";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowRight,
    MessageCircle,
    Users,
    Calendar,
    CheckCircle
} from "lucide-react";
import Contact from "@/components/Contact";


export const Head = () => (
  <SEO 
    title="Contact Us - Y3 Smiles Dental"
    description="Get in touch with Y3 Smiles Dental. Call us, email us, or visit our clinic in Broadmeadows. We're here to answer your questions and book your next appointment."
  />
);

const ContactUs = () => {
    useScrollAnimation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form submission state handlers
    const handleSubmitStart = () => {
        setIsSubmitting(true);
    };

    const handleSubmitComplete = () => {
        setIsSubmitting(false);
    };

    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            value: "03 9022 4442",
            description: "Available during business hours",
            action: "tel:03 9022 4442",
            color: "bg-blue-50 text-blue-600"
        },
        {
            icon: Mail,
            title: "Email Us",
            value: "smile@y3smilesdental.com.au",
            description: "We'll respond within 24 hours",
            action: "mailto:smile@y3smilesdental.com.au",
            color: "bg-green-50 text-green-600"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "1/34 King William St",
            description: "Broadmeadows, VIC 3047",
            action: "https://www.google.com/search?sca_esv=de45a14deaa8af91&rlz=1C1CHBF_enAU1057AU1057&sxsrf=AE3TifMcuyWLUIujqzA7WtMLRs3p-Uus2w%3A1760258388705&q=Y3%20Smiles%20Dental&stick=H4sIAAAAAAAAAONgU1I1qDAxMEpMS0xMMzJNSk41NDe3MqhIM7ZMsTA0MrFIMTJJtDRMWcQqEGmsEJybmZNarOCSmleSmAMAQyVofDwAAAA&mat=CUKdJZUYoj6X&ved=2ahUKEwiT3uK_oZ6QAxXc4zgGHVCbFsUQrMcEegQIQRAC",
            color: "bg-purple-50 text-purple-600"
        },
        {
            icon: Clock,
            title: "Opening Hours",
            value: "Mon - Fri: 9AM - 5PM",
            description: "Saturday: 9AM - 1PM",
            action: "#opening-hours",
            color: "bg-orange-50 text-orange-600"
        }
    ];

    const whyChooseUs = [
        "Same day emergency appointments",
        "Modern, comfortable facilities",
        "Experienced dental professionals",
        "Comprehensive range of services"
    ];

    return (
        <div className="min-h-screen flex flex-col">

            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-hero py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <MessageCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Contact Us
                            </h1>
                            <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                                We're here to help you achieve the smile you deserve. Get in touch with our friendly team today to book your appointment or ask any questions about our dental services.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {whyChooseUs.map((benefit, index) => (
                                    <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                                        <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK APPOINTMENT
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" asChild>
                                    <a href="tel:03 9022 4442">
                                        <Phone className="w-5 h-5 mr-2" />
                                        CALL NOW
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Methods Grid */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                                Choose the most convenient way to reach us. We're committed to providing prompt, friendly service.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <Card key={index} className="border-0 shadow-soft hover:shadow-medium hover:scale-[1.02] hover:-translate-y-1 transition-smooth fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <CardContent className="p-6 text-center">
                                            <div className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-4`}>
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-xl font-bold text-neutral-800 mb-2">
                                                {method.title}
                                            </h3>
                                            <p className="font-semibold text-neutral-700 mb-1">
                                                {method.value}
                                            </p>
                                            <p className="text-sm text-neutral-800 mb-4">
                                                {method.description}
                                            </p>
                                            <Button variant="outline" size="sm" asChild className="w-full">
                                                <a href={method.action} target={method.action.startsWith('http') ? '_blank' : '_self'} rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}>
                                                    {method.title === "Visit Us" ? "Get Directions" : method.title}
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <Contact />

                {/* Google Map */}
                <GoogleMap />


            </main>
            <Footer />
        </div>
    );
};

export default ContactUs;