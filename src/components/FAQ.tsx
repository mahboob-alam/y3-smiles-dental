import { useState } from "react";
import { ChevronDown, ChevronUp, CreditCard, Calendar } from "lucide-react";

const FAQ = () => {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const faqData = {
        "Booking & Payment": [
            {
                question: "Do you accept my health fund?",
                answer: "Yes, we accept all major Australian health funds including Bupa, Medibank, HCF, and many others. We offer instant HICAPS claims processing so you can receive your rebates on the spot, making your visit more affordable and convenient."
            },
            {
                question: "Is kids dental really free with CDBS?",
                answer: "Yes (Eligibility Applies). Eligible children aged 0-17 years can receive FREE dental treatment under the Australian Government's Child Dental Benefits Schedule (CDBS). To qualify, your child must be Medicare eligible and you must receive certain government payments."
            },
            {
                question: "What payment plans are available?",
                answer: "We offer flexible payment options including interest-free payment plans up to 12 months for treatments over $300, and extended payment plans up to 24 months with low interest rates. We also accept cash, credit/debit cards, and EFTPOS for your convenience."
            },
            {
                question: "Do you have same-day appointments?",
                answer: "Yes, we offer same-day appointments, especially for urgent and emergency dental cases. Call us at 03 9022 4442 and we'll do our best to accommodate you on the same day, particularly for dental emergencies requiring immediate attention."
            }
        ],
        "Treatment": [
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
                answer: "Dental emergencies include severe tooth pain, knocked-out or loose teeth, broken teeth with sharp edges, facial swelling, bleeding that won't stop, dental abscesses, and any trauma to teeth or mouth. If you're experiencing severe pain or injury, call at 03 9022 4442"
            }
        ]
    };

    // Transform data for rendering with proper structure
    const faqCategories = [
        {
            title: "Booking & Payment",
            imageSrc: "/atm-card.png",
            faqs: faqData["Booking & Payment"].map((faq, index) => ({
                id: `booking-${index}`,
                question: faq.question,
                answer: faq.answer
            }))
        },
        {
            title: "Treatment",
            imageSrc: "/dental-care.png",
            faqs: faqData["Treatment"].map((faq, index) => ({
                id: `treatment-${index}`,
                question: faq.question,
                answer: faq.answer
            }))
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
                        FAQ
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                        Comprehensive Coverage – Frequently Asked Questions
                    </h3>
                    <p className="text-lg text-neutral-800 max-w-3xl mx-auto">
                        Get answers to the most common questions about our dental services,
                        payment options, and what to expect during your visit.
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {faqCategories.map((category, categoryIndex) => {
                        // const IconComponent = category.icon;

                        return (
                            <div key={categoryIndex} className="space-y-6">
                                {/* Category Header */}
                                <div className="flex items-center space-x-3 mb-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <img src={category.imageSrc} alt={category.title} className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-neutral-800">{category.title} FAQs</h4>
                                </div>

                                {/* FAQ Items */}
                                <div className="space-y-4">
                                    {category.faqs.map((faq, faqIndex) => {
                                        const isOpen = openItems.includes(faq.id);

                                        return (
                                            <div
                                                key={faq.id}
                                                className="bg-white rounded-2xl border border-neutral-100 shadow-soft hover:shadow-md transition-gentle overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => toggleItem(faq.id)}
                                                    className="w-full text-left p-6 flex items-center justify-between hover:bg-neutral-50 transition-gentle focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                    aria-expanded={isOpen}
                                                >
                                                    <span className="text-lg font-semibold text-neutral-800 pr-4">
                                                        {faq.question}
                                                    </span>
                                                    <div className="flex-shrink-0">
                                                        {isOpen ? (
                                                            <ChevronUp className="w-5 h-5 text-primary transition-transform duration-200" />
                                                        ) : (
                                                            <ChevronDown className="w-5 h-5 text-primary transition-transform duration-200" />
                                                        )}
                                                    </div>
                                                </button>

                                                <div
                                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                        }`}
                                                >
                                                    <div className="px-6 pb-6 pt-0">
                                                        <div className="border-t border-neutral-100 pt-4">
                                                            <p className="text-neutral-800 leading-relaxed">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                {/* <div className="text-center mt-16">
                    <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h4 className="text-xl font-bold text-neutral-800 mb-4">
                            Still have questions?
                        </h4>
                        <p className="text-neutral-800 mb-6">
                            Our friendly team is here to help. Call us or book a consultation
                            to discuss your specific needs and treatment options.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:03 9022 4442"
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-gentle"
                            >
                                Call (03) 9022 4442
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-gentle"
                            >
                                Book Consultation
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default FAQ;