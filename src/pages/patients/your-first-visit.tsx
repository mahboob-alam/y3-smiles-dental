import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    Clock,
    CheckCircle,
    Users,
    Heart,
    Phone,
    ArrowLeft,
    FileText,
    Smile,
    Star
} from "lucide-react";

const YourFirstVisitPage = () => {
    useScrollAnimation();

    const whatToExpect = [
        {
            step: "1",
            title: "Welcome & Check-in",
            description: "Our friendly reception team will greet you and help you complete any necessary paperwork.",
            duration: "10 minutes"
        },
        {
            step: "2",
            title: "Initial Consultation",
            description: "Meet with your dentist to discuss your dental history, concerns, and treatment goals.",
            duration: "15 minutes"
        },
        {
            step: "3",
            title: "Comprehensive Examination",
            description: "Thorough oral examination including digital X-rays if needed to assess your oral health.",
            duration: "20 minutes"
        },
        {
            step: "4",
            title: "Treatment Discussion",
            description: "Review findings and discuss personalized treatment options and recommendations.",
            duration: "15 minutes"
        }
    ];

    const whatToBring = [
        "Valid photo ID (driver's licence or passport)",
        "Health insurance cards (if applicable)",
        "List of current medications",
        "Previous dental records or X-rays (if available)",
        "Completed patient forms (if sent beforehand)",
        "Payment method for any applicable fees"
    ];

    const preparation = [
        "Arrive 15 minutes early for check-in",
        "Brush and floss as normal before your visit",
        "Write down any questions or concerns",
        "Inform us of any anxiety or special needs",
        "Bring a list of your current medications",
        "Wear comfortable clothing"
    ];

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
                                <Link to="/patients">
                                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                    Back to For Patients
                                </Link>
                            </Button>

                            <h1 className="text-6xl md:text-7xl font-bold text-neutral-800 mb-6 leading-tight">
                                Your First
                                <span className="block text-primary">Visit</span>
                            </h1>
                            <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                                Learn what to expect during your initial consultation and how to prepare for your first appointment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What to Expect */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Your First Visit
                                </h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    What to Expect
                                </h3>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                    Your first visit typically takes about 60 minutes. Here's what you can expect:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {whatToExpect.map((item, index) => (
                                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20">
                                        <CardContent className="p-8">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                                                    {item.step}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h4 className="text-xl font-bold text-neutral-800 group-hover:text-primary transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                                                            {item.duration}
                                                        </span>
                                                    </div>
                                                    <p className="text-neutral-600 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* What to Bring */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Preparation
                                </h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    What to Bring
                                </h3>
                            </div>

                            <Card className="bg-gradient-to-r from-primary/5 via-white to-secondary/5 border border-primary/20">
                                <CardContent className="p-8">
                                    <FileText className="w-12 h-12 text-primary mb-6" />
                                    <h4 className="text-2xl font-bold text-neutral-800 mb-6">
                                        Required Items
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {whatToBring.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-neutral-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* How to Prepare */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                                    Getting Ready
                                </h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    How to Prepare
                                </h3>
                            </div>

                            <Card className="bg-white border border-primary/5 hover:shadow-lg transition-shadow">
                                <CardContent className="p-8">
                                    <Smile className="w-12 h-12 text-primary mb-6" />
                                    <h4 className="text-2xl font-bold text-neutral-800 mb-6">
                                        Before Your Visit
                                    </h4>
                                    <div className="space-y-4">
                                        {preparation.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <Star className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                                                <span className="text-neutral-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Comfort & Anxiety */}
                <section className="py-24 bg-gradient-to-r from-primary/10 via-white to-secondary/10">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <Heart className="w-16 h-16 text-primary mx-auto mb-8" />
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Feeling Nervous? We Understand
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Dental anxiety is completely normal. Our team is experienced in helping nervous patients
                                feel comfortable and relaxed. We'll take things at your pace and explain everything
                                we're doing.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="flex flex-col items-center p-4">
                                    <Clock className="w-10 h-10 text-secondary mb-3" />
                                    <h4 className="font-semibold text-neutral-800 mb-2">Take Your Time</h4>
                                    <p className="text-sm text-neutral-600 text-center">No rushing - we'll go at your pace</p>
                                </div>
                                <div className="flex flex-col items-center p-4">
                                    <Users className="w-10 h-10 text-secondary mb-3" />
                                    <h4 className="font-semibold text-neutral-800 mb-2">Gentle Team</h4>
                                    <p className="text-sm text-neutral-600 text-center">Caring professionals who understand</p>
                                </div>
                                <div className="flex flex-col items-center p-4">
                                    <Heart className="w-10 h-10 text-secondary mb-3" />
                                    <h4 className="font-semibold text-neutral-800 mb-2">Comfort First</h4>
                                    <p className="text-sm text-neutral-600 text-center">Your comfort is our priority</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="lg" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK YOUR FIRST VISIT
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <Link to="/treatments">View Our Treatments</Link>
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

export default YourFirstVisitPage;