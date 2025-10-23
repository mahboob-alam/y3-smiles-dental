import React from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, Phone } from "lucide-react";

export const Head = () => (
  <SEO 
    title="Book Appointment | Y3 Smiles Dental"
    description="Book your dental appointment online at Y3 Smiles Dental. Quick, easy, and secure online booking for all dental services in Broadmeadows."
  />
);

const BookingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
                Book Your Appointment
              </h1>
              <p className="text-lg text-neutral-800 mb-6">
                Use our secure online booking form to pick a time that works for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm font-medium text-neutral-700">Choose your preferred date</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm font-medium text-neutral-700">Select available time</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <Phone className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm font-medium text-neutral-700">We'll confirm your appointment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Card className="border-0 shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-neutral-800 text-center mb-2">
                    Online Booking Portal
                  </h2>
                  <p className="text-sm text-neutral-700 text-center">
                    Complete the form below to book your appointment. Prefer to call? Contact us on{" "}
                    <a href="tel:0390224442" className="text-primary font-semibold hover:underline">
                      03 9022 4442
                    </a>
                  </p>
                </CardHeader>
                <CardContent>
                  {/* Booking iframe */}
                  <div className="w-full">
                    <iframe
                      title="Online booking"
                      src="https://app.principle.dental/portal/booking/X0bZkaby3TQEzje3C0Im"
                      className="w-full h-[800px] md:h-[900px] border-0 rounded-lg"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-sm text-neutral-600 text-center mt-4">
                    If the form doesn't load,{" "}
                    <a 
                      className="text-primary font-semibold hover:underline" 
                      href="https://app.principle.dental/portal/booking/X0bZkaby3TQEzje3C0Im" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      open the booking portal in a new window
                    </a>
                    .
                  </p>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-soft text-center">
                  <CardContent className="pt-6">
                    <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Flexible Scheduling</h3>
                    <p className="text-sm text-neutral-600">
                      Choose from available time slots that fit your schedule
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-soft text-center">
                  <CardContent className="pt-6">
                    <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Same Day Available</h3>
                    <p className="text-sm text-neutral-600">
                      Emergency appointments available for urgent dental care
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-soft text-center">
                  <CardContent className="pt-6">
                    <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-neutral-800 mb-2">Instant Confirmation</h3>
                    <p className="text-sm text-neutral-600">
                      Receive confirmation via SMS and email immediately
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
