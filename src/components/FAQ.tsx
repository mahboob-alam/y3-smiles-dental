import React from 'react';
import { Phone, Calendar, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BOOKING_URL } from "@/lib/config";

const FAQ = () => {

    const faqSections = [
        {
            title: "Booking & Payment",
            imageSrc: "/payment-plan.png",
            faqs: [
                {
                    question: "Do you accept my health fund?",
                    answer: "Yes, we accept all major Australian health funds including Bupa, Medibank, HCF, and many others. We offer instant HICAPS claims processing so you can receive your rebates on the spot, making your visit more affordable and convenient."
                },
                {
                    question: "Is kids dental really free with CDBS?",
                    answer: "Yes! Eligible children aged 0-17 years can receive FREE dental treatment under the Australian Government's Child Dental Benefits Schedule (CDBS). To qualify, your child must be Medicare eligible and you must receive certain government payments. We can check eligibility and process claims directly - eligible children may receive FREE treatment under CDBS."
                },
                {
                    question: "What payment plans are available?",
                    answer: "We offer flexible payment options including interest-free payment plans up to 12 months for treatments over $300, and extended payment plans up to 24 months with low interest rates. We also accept cash, credit/debit cards, and EFTPOS for your convenience."
                },
                {
                    question: "Do you have same-day appointments?",
                    answer: "Yes, we offer same-day appointments, especially for urgent and emergency dental cases. Call us at <a href='tel:0390224442' class='text-primary hover:text-primary/80 transition-colors font-semibold'>03 9022 4442</a> and we'll do our best to accommodate you on the same day, particularly for dental emergencies requiring immediate attention."
                }
            ]
        },
        {
            title: "Treatment",
            imageSrc: "/dental-care.png",
            faqs: [
                {
                    question: "How often should I get a check-up?",
                    answer: "We recommend regular dental check-ups and cleanings every 6 months for both adults and children. This helps prevent problems before they become serious. Some patients with higher cavity risk or specific dental conditions may need more frequent visits as determined by their dentist."
                },
                {
                    question: "What's covered under CDBS for children?",
                    answer: "The Child Dental Benefits Schedule covers basic dental services including examinations, cleaning, X-rays, fillings, extractions, and other essential treatments. Eligible children receive up to $1,000 in benefits over 2 calendar years. Cosmetic treatments are generally not covered."
                },
                {
                    question: "When should kids first visit the dentist?",
                    answer: "Children should have their first dental visit by age 1 or within 6 months of their first tooth appearing. Early visits help establish good oral hygiene habits, allow us to monitor development, and help children become comfortable with dental care in a fun, supportive environment."
                },
                {
                    question: "What counts as a dental emergency?",
                    answer: "Dental emergencies include severe tooth pain, knocked-out or loose teeth, broken teeth with sharp edges, facial swelling, bleeding that won't stop, dental abscesses, and any trauma to teeth or mouth. If you're experiencing severe pain or injury, call our emergency line at <a href='tel:0390224442' class='text-primary hover:text-primary/80 transition-colors font-semibold'>03 9022 4442</a> immediately."
                }
            ]
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest">
                    FAQ
                </h2>
            </div>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-neutral-800 max-w-2xl mx-auto">
                        Find answers to common questions about our dental services, payment options, and appointment booking.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {faqSections.map((section, sectionIndex) => {
                            return (
                                <div key={sectionIndex} className="space-y-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                                <img src={section.imageSrc} alt={section.title} className="w-6 h-6" />
                                            </div>
                                            <h4 className="text-2xl font-bold text-neutral-800">{section.title} FAQs</h4>
                                        </div>
                                    </div>
                                    <Accordion
                                        type="single"
                                        className="w-full space-y-4"
                                    >
                                        {section.faqs.map((faq, index) => (
                                            <AccordionItem
                                                key={index}
                                                value={`${sectionIndex}-${index}`}
                                                className="bg-white rounded-lg shadow-soft border-0"
                                            >
                                                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                                                    <span className="text-lg text-neutral-800">{faq.question}</span>
                                                </AccordionTrigger>
                                                <AccordionContent className="px-6 pb-4">
                                                    <div
                                                        className="text-neutral-800 leading-relaxed"
                                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                                    />
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default FAQ;