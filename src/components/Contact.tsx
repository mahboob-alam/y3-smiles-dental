import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EmailJSForm from "./EmailJSForm";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmitStart = () => {
    setIsSubmitting(true);
  };

  const handleSubmitComplete = () => {
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50 fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
              Contact Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              Discover the Smile You Deserve.
            </h3>
            <p className="text-lg text-neutral-800">
              Book your appointment today and smile brighter with Y3 Smiles Dental.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Card className="shadow-medium hover-lift transition-gentle slide-in-left">
              <CardContent className="pt-10 px-8 pb-8">
                <h4 className="text-2xl font-bold text-neutral-800 mb-6">
                  Get in Touch
                </h4>

                <div className="space-y-6">
                  <a
                    href="tel:03 9022 4442"
                    className="flex items-start space-x-4 hover-scale transition-gentle group cursor-pointer"
                  >
                    <div className="w-5 h-5 text-primary mt-1 group-hover:text-primary/80">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-800 group-hover:text-primary transition-gentle">03 9022 4442</p>
                      <p className="text-neutral-800 group-hover:text-primary/70 transition-gentle">Call us today</p>
                    </div>
                  </a>

                  <a
                    href="mailto:smile@y3smilesdental.com.au"
                    className="flex items-start space-x-4 hover-scale transition-gentle group cursor-pointer"
                  >
                    <div className="w-5 h-5 text-primary mt-1 group-hover:text-primary/80">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-800 group-hover:text-primary transition-gentle">smile@y3smilesdental.com.au</p>
                      <p className="text-neutral-800 group-hover:text-primary/70 transition-gentle">Email us anytime</p>
                    </div>
                  </a>

                  <a
                    href="https://www.google.com/search?sca_esv=de45a14deaa8af91&rlz=1C1CHBF_enAU1057AU1057&sxsrf=AE3TifMcuyWLUIujqzA7WtMLRs3p-Uus2w%3A1760258388705&q=Y3%20Smiles%20Dental&stick=H4sIAAAAAAAAAONgU1I1qDAxMEpMS0xMMzJNSk41NDe3MqhIM7ZMsTA0MrFIMTJJtDRMWcQqEGmsEJybmZNarOCSmleSmAMAQyVofDwAAAA&mat=CUKdJZUYoj6X&ved=2ahUKEwiT3uK_oZ6QAxXc4zgGHVCbFsUQrMcEegQIQRAC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 hover-scale transition-gentle group cursor-pointer"
                  >
                    <div className="w-5 h-5 text-primary mt-1 group-hover:text-primary/80">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-800 group-hover:text-primary transition-gentle">1/34 King William St</p>
                      <p className="text-neutral-800 group-hover:text-primary/70 transition-gentle">Broadmeadows, VIC 3047</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h5 className="font-semibold text-neutral-800 mb-4">Opening Hours</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between hover:bg-primary/5 px-2 py-1 rounded transition-gentle">
                      <span className="text-neutral-800">Monday - Friday</span>
                      <span className="text-neutral-800">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between hover:bg-primary/5 px-2 py-1 rounded transition-gentle">
                      <span className="text-neutral-800">Saturday</span>
                      <span className="text-neutral-800">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between hover:bg-primary/5 px-2 py-1 rounded transition-gentle">
                      <span className="text-neutral-800">Sunday</span>
                      <span className="text-neutral-800">Closed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card className="shadow-medium hover-lift transition-gentle slide-in-right">
              <CardContent className="pt-10 px-8 pb-8">
                <h4 className="text-2xl font-bold text-neutral-800 mb-6">
                  Submit An Enquiry
                </h4>

                <EmailJSForm
                  onSubmitStart={handleSubmitStart}
                  onSubmitComplete={handleSubmitComplete}
                  className="space-y-6"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;