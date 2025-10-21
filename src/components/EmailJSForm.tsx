import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface EmailJSFormProps {
    className?: string;
    onSubmitStart?: () => void;
    onSubmitComplete?: () => void;
}

const EmailJSForm: React.FC<EmailJSFormProps> = ({
    className,
    onSubmitStart,
    onSubmitComplete,
}) => {
    const [emailjs, setEmailjs] = useState<any>(null);
    const [submitting, setSubmitting] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        if (typeof window !== 'undefined' && !window.__emailjs_initialized) {
            const checkInit = setInterval(() => {
                if (window.__emailjs_initialized && window.emailjs) {
                    setEmailjs(window.emailjs);
                    clearInterval(checkInit);
                }
            }, 100);

            // Clear interval after 10 seconds if emailjs hasn't loaded
            setTimeout(() => clearInterval(checkInit), 10000);

            return () => clearInterval(checkInit);
        } else if (typeof window !== 'undefined' && window.__emailjs_initialized) {
            setEmailjs(window.emailjs);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!emailjs) {
            toast({
                title: "Error",
                description: "Email service not loaded. Please try again.",
                variant: "destructive",
            });
            return;
        }

        onSubmitStart?.();
        setSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            const templateParams = {
                from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
                from_email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message'),
                to_name: 'Y3 Smiles Dental',
            };

            await emailjs.send(
                'service_xbm50e4',
                'template_nfwl5um',
                templateParams,
                '69eRgUdIdFe9Hq-4C'
            );

            toast({
                title: "Message Sent Successfully!",
                description: "Thank you for contacting Y3 Smiles Dental. We'll get back to you soon.",
            });

            // Reset form
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.error('Failed to send email:', error);
            toast({
                title: "Error Sending Message",
                description: "Please try again or call us directly at your convenience.",
                variant: "destructive",
            });
        } finally {
            onSubmitComplete?.();
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={className}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
            </div>

            <div className="mt-4 space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>

            <div className="mt-4 space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
            </div>

            <div className="mt-4 space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Required
                </label>
                <select
                    id="service"
                    name="service"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                >
                    <option value="">Select a service...</option>
                    <option value="Children's Dentistry (CDBS)">Children's Dentistry (CDBS)</option>
                    <option value="Comprehensive Examination & Dental Hygiene">Comprehensive Examination & Dental Hygiene</option>
                    <option value="Crown and Bridge">Crown and Bridge</option>
                    <option value="Dental Fillings">Dental Fillings</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Dentures">Dentures</option>
                    <option value="Emergency Dentistry">Emergency Dentistry</option>
                    <option value="Fluoride Treatments">Fluoride Treatments</option>
                    <option value="Mouthguards">Mouthguards</option>
                    <option value="Periodontal Therapy">Periodontal Therapy</option>
                    <option value="Pits and Fissure Sealants">Pits and Fissure Sealants</option>
                    <option value="Root Canal Therapy">Root Canal Therapy</option>
                    <option value="TMD and Bruxism Treatment">TMD and Bruxism Treatment</option>
                    <option value="Tooth Extraction">Tooth Extraction</option>
                    <option value="Wisdom Teeth Removal">Wisdom Teeth Removal</option>
                    <option value="Teeth Whitening">Teeth Whitening</option>
                    <option value="Sedation Dentistry">Sedation Dentistry</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="mt-4 space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                ></textarea>
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 px-4 bg-booking-gold text-white font-semibold rounded-lg hover:bg-[#A4846F] transition-gentle disabled:opacity-50"
                >
                    {submitting ? 'Sending...' : 'Send Enquiry'}
                </button>
            </div>
        </form>
    );
};

export default EmailJSForm;