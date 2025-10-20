import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";
import {
    Users,
    Phone,
    ArrowRight,
    Smile,
    Award,
    GraduationCap,
    Heart,
    Shield,
    Star
} from "lucide-react";

const OurTeamPage = () => {
    useScrollAnimation();

    const teamMembers = [
        {
            name: "Dr. Sarah Johnson",
            role: "Principal Dentist",
            image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "Dr. Johnson is passionate about providing gentle, comprehensive dental care for the whole family. With over 10 years of experience, she specializes in family dentistry and cosmetic treatments.",
            qualifications: ["Bachelor of Dental Science", "Member of Australian Dental Association", "Advanced Training in Cosmetic Dentistry"],
            specialties: ["Family Dentistry", "Cosmetic Treatments", "Preventive Care"]
        },
        {
            name: "Emma Thompson",
            role: "Oral Health Therapist",
            image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "Emma specialises in preventive care and oral health education, helping patients maintain healthy smiles for life. She has a special interest in children's dental care.",
            qualifications: ["Bachelor of Oral Health", "AHPRA Registration", "Pediatric Dental Care Certification"],
            specialties: ["Preventive Care", "Children's Dentistry", "Oral Health Education"]
        },
        {
            name: "Maria Rodriguez",
            role: "Practice Manager & Receptionist",
            image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "Maria ensures every patient feels welcome from the moment they walk in, managing appointments and patient care coordination. She speaks fluent Spanish and English.",
            qualifications: ["Certificate in Practice Management", "Customer Service Excellence", "Medical Administration"],
            specialties: ["Patient Care", "Appointment Coordination", "Bilingual Services"]
        },
        {
            name: "James Wilson",
            role: "Dental Nurse",
            image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
            description: "James provides expert chairside assistance and ensures all clinical procedures run smoothly and safely. He has extensive experience in dental surgery support.",
            qualifications: ["Certificate IV in Dental Assisting", "Infection Control Certification", "Dental Radiography License"],
            specialties: ["Clinical Support", "Infection Control", "Patient Comfort"]
        }
    ];

    const teamValues = [
        {
            icon: Heart,
            title: "Compassionate Care",
            description: "Every team member is committed to providing gentle, understanding care that puts patients at ease."
        },
        {
            icon: Shield,
            title: "Professional Excellence",
            description: "Our team maintains the highest clinical standards and continues professional development."
        },
        {
            icon: Star,
            title: "Patient-Focused",
            description: "We prioritize clear communication and personalized treatment for every individual."
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
                            <Users className="w-20 h-20 text-primary mx-auto mb-6" />
                            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                                Our Team
                            </h1>
                            <p className="text-xl text-neutral-800 mb-8 leading-relaxed">
                                Meet the dedicated professionals who make Y3 Smiles Dental a place where exceptional care
                                meets genuine compassion. Our experienced team is committed to your comfort and oral health.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK APPOINTMENT
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" asChild>
                                    <Link to="/about">
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        Back to About
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Values */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    What Drives Our Team
                                </h2>
                                <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                                    Our shared values guide everything we do and ensure every patient receives the best possible care
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                {teamValues.map((value, index) => {
                                    const IconComponent = value.icon;
                                    return (
                                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border border-primary/5 hover:border-primary/20 fade-in-section" style={{ transitionDelay: `${index * 150}ms` }}>
                                            <CardContent className="p-8">
                                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                                    <IconComponent className="w-8 h-8 text-primary" />
                                                </div>
                                                <h3 className="text-xl font-bold text-neutral-800 mb-4">
                                                    {value.title}
                                                </h3>
                                                <p className="text-neutral-800 leading-relaxed">
                                                    {value.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Members */}
                <section className="py-24 bg-neutral-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                                    Meet Our Professionals
                                </h2>
                                <p className="text-xl text-neutral-800 max-w-3xl mx-auto">
                                    Our experienced team brings together clinical expertise, genuine care, and a commitment to your wellbeing
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {teamMembers.map((member, index) => (
                                    <Card key={index} className="group hover:shadow-xl transition-all duration-500 border border-primary/5 hover:border-primary/20 fade-in-section" style={{ transitionDelay: `${index * 200}ms` }}>
                                        <CardContent className="p-8">
                                            <div className="flex flex-col md:flex-row gap-6">
                                                {/* Photo */}
                                                <div className="md:w-48 flex-shrink-0">
                                                    <div className="relative">
                                                        <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                            />
                                                        </div>
                                                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                                                            <Smile className="w-6 h-6 text-white" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                                                        {member.name}
                                                    </h3>

                                                    <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-4">
                                                        <span className="text-primary font-semibold text-sm">
                                                            {member.role}
                                                        </span>
                                                    </div>

                                                    <p className="text-neutral-800 leading-relaxed mb-6">
                                                        {member.description}
                                                    </p>

                                                    {/* Qualifications */}
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-neutral-800 mb-2 flex items-center">
                                                            <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                                                            Qualifications
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {member.qualifications.map((qual, qualIndex) => (
                                                                <li key={qualIndex} className="text-sm text-neutral-800 flex items-center">
                                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                                                    {qual}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Specialties */}
                                                    <div>
                                                        <h4 className="font-semibold text-neutral-800 mb-2 flex items-center">
                                                            <Award className="w-4 h-4 mr-2 text-primary" />
                                                            Specialties
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {member.specialties.map((specialty, specIndex) => (
                                                                <span key={specIndex} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                                                                    {specialty}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="text-center mt-16">
                                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-2xl border border-secondary/20 inline-block">
                                    <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                                        Expanding Our Team
                                    </h3>
                                    <p className="text-neutral-800 mb-4">
                                        We're always looking for passionate dental professionals to join our team.
                                        Explore career opportunities with us!
                                    </p>
                                    <Button variant="outline" asChild>
                                        <Link to="/about/join-our-team">
                                            View Career Opportunities
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto">
                            <Phone className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                                Experience Our Team's Expert Care
                            </h2>
                            <p className="text-lg text-neutral-800 mb-8">
                                Our dedicated professionals are ready to help you achieve optimal oral health.
                                Book your appointment and experience the Y3 Smiles difference.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="booking" size="xl" asChild className="group">
                                    <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                                        <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                        BOOK APPOINTMENT
                                    </a>
                                </Button>
                                <Button variant="outline" size="xl" asChild>
                                    <Link to="/treatments">
                                        <ArrowRight className="w-5 h-5 mr-2" />
                                        View Our Services
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default OurTeamPage;