import React from "react";
import { Link } from "gatsby";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    BookOpen,
    Star,
    Clock,
    ArrowLeft,
    Smile,
    Heart,
    Users
} from "lucide-react";


export const Head = () => (
  <SEO 
    title="Blog | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const BlogPage = () => {
    useScrollAnimation();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100 py-32 overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary"></div>
                        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-secondary"></div>
                        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-primary"></div>
                        <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full bg-secondary"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <Button variant="outline" asChild className="mb-8 group">
                                <Link to="/about">
                                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                    Back to About
                                </Link>
                            </Button>

                            <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6 leading-tight">
                                Y3 Smiles Dental
                                <span className="block text-primary">Blog</span>
                            </h1>
                            <p className="text-xl text-neutral-800 mb-12 leading-relaxed">
                                Stay informed with dental care tips, patient stories, and oral health insights.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Coming Soon Content */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <Card className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 border border-primary/20 hover:shadow-xl transition-shadow">
                                <CardContent className="p-12">
                                    <BookOpen className="w-20 h-20 text-primary mx-auto mb-8" />

                                    <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                        We're working on something special!
                                    </h2>

                                    <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                                        Stay tuned for our blog launch filled with patient-focused dental care information.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div className="flex flex-col items-center p-4">
                                            <Smile className="w-12 h-12 text-primary mb-4" />
                                            <h3 className="font-semibold text-neutral-800 mb-2">Oral Health Tips</h3>
                                            <p className="text-sm text-neutral-800 text-center">
                                                Expert advice for maintaining healthy teeth and gums
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-center p-4">
                                            <Heart className="w-12 h-12 text-primary mb-4" />
                                            <h3 className="font-semibold text-neutral-800 mb-2">Patient Stories</h3>
                                            <p className="text-sm text-neutral-800 text-center">
                                                Real experiences from our Y3 Smiles Dental family
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-center p-4">
                                            <Users className="w-12 h-12 text-primary mb-4" />
                                            <h3 className="font-semibold text-neutral-800 mb-2">Family Care</h3>
                                            <p className="text-sm text-neutral-800 text-center">
                                                Dental care guidance for every family member
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl border border-primary/10 mb-8">
                                        <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                                            Coming Soon
                                        </h3>
                                        <p className="text-neutral-800">
                                            Our team is preparing comprehensive, patient-focused content to help you make informed decisions about your oral health.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button variant="booking" size="lg" asChild className="group">
                                            <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                                <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                                BOOK APPOINTMENT
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="lg" asChild>
                                            <Link to="/treatments">
                                                View Our Treatments
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup Placeholder */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                                Stay in the Loop
                            </h2>
                            <p className="text-neutral-800 mb-8">
                                Be the first to know when our blog launches and receive updates on dental health tips and clinic news.
                            </p>

                            <div className="bg-white p-6 rounded-xl shadow-soft border border-primary/10">
                                <p className="text-neutral-800 mb-4">
                                    Newsletter signup coming soon! In the meantime, follow us on social media or
                                    contact our clinic directly for any dental health questions.
                                </p>

                                <Button variant="booking" asChild>
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        Contact Us Today
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <Contact /> */}
            </main>
            <Footer />
        </div>
    );
};

export default BlogPage;