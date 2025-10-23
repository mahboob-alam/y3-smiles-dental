import React from 'react';
import { Link } from "gatsby";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    Crown,
    CheckCircle,
    Phone,
    Clock,
    Shield,
    Star,
    ArrowRight,
    ArrowLeft,
    Users,
    Award,
    TriangleAlert
} from "lucide-react";


export const Head = () => (
  <SEO 
    title="Crown bridge | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const CrownAndBridge = () => {
    useScrollAnimation();

    const benefits = [
        "Natural appearance",
        "Strengthens teeth",
        "Long-lasting",
        "Custom-made"
    ];

    const processSteps = [
        {
            title: "A Friendly Start",
            description: "Every journey begins with a relaxed consultation where we get to know you, understand your dental health, and discuss your goals.",
            icon: Star
        },
        {
            title: "Tooth Preparation",
            description: "The damaged tooth or surrounding teeth are gently shaped and prepared for a crown or bridge.",
            icon: Shield
        },
        {
            title: "Custom Design",
            description: "We take precise impressions so your crown or bridge is made to fit naturally and comfortably.",
            icon: Crown
        },
        {
            title: "Temporary Protection",
            description: "A temporary crown or bridge may be placed while your permanent one is being created.",
            icon: Clock
        },
        {
            title: "Final Placement",
            description: "Once ready, your new crown or bridge is fitted, adjusted, and securely bonded.",
            icon: CheckCircle
        },
        {
            title: "Ongoing Care",
            description: "We guide you on caring for your restoration to keep it strong and lasting.",
            icon: Star
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
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Crown & Bridge
                            </h1>
                            <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                                Crowns and bridges are common treatments used to repair or replace teeth that are damaged, worn, or missing. They not only restore your smile's appearance but also improve chewing, speaking, and overall dental health.
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
                </section>                {/* What is Crown and Bridge */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                                        Restorative Dentistry
                                    </h2>
                                    <h3 className="text-4xl font-bold text-neutral-800 mb-6">
                                        Repair and Replace with Confidence
                                    </h3>
                                    <p className="text-lg text-neutral-800 mb-8 leading-relaxed">
                                        A crown is like a protective "cap" that covers a weakened tooth. It strengthens the tooth and makes it look natural again. A bridge replaces one or more missing teeth by anchoring artificial teeth securely to the neighbouring natural teeth or dental implants.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Natural Appearance</h4>
                                                <p className="text-neutral-800 text-sm">Custom-made to match your natural teeth perfectly</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Strengthens Teeth</h4>
                                                <p className="text-neutral-800 text-sm">Protects and reinforces damaged or weakened teeth</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">Long-lasting Solution</h4>
                                                <p className="text-neutral-800 text-sm">Durable restoration that can last many years with proper care</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                                    <img
                                        src="/crown-and-bridge.jpg"
                                        alt="Dental crown and bridge treatment in progress"
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
                                How the Process Usually Works
                            </h2>
                            <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                                At Y3 Smiles Dental, we make the process gentle, clear, and comfortable — helping you regain confidence in your smile.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {processSteps.map((step, index) => {
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
                                            <p className="text-neutral-800 leading-relaxed">
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
                                    All dental procedures carry potential risks. Before proceeding, you should seek a consultation with your treating dentist to understand the risks, possible complications, recovery considerations, and whether the procedure is suitable for your individual circumstances. Outcomes may vary from patient to patient.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <img src="/crown-and-bridge.png" alt="Crown and Bridge" className="w-16 h-16 mx-auto mb-6" />
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Ready to Restore Your Smile?
                            </h2>
                            <p className="text-lg text-neutral-800 mb-8">
                                Let our experienced team help you regain confidence with custom crowns and bridges that look and feel natural.
                            </p>
                            <Button variant="booking" size="xl" asChild>
                                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                    SCHEDULE CONSULTATION
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* <Contact /> */}
            </main>
            <Footer />
        </div>
    );
};

export default CrownAndBridge;