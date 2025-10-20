import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const featuredServices = [
    {
      title: "Children's Dentistry (CDBS)",
      description: "Gentle, specialised care for children of all ages in a fun, comfortable environment.",
      image: "https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      link: "/treatments/childrens-dentistry"
    },
    {
      title: "Emergency Dentistry",
      description: "Same day emergency appointments available.",
      image: "https://images.pexels.com/photos/14624608/pexels-photo-14624608.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      link: "/treatments/emergency"
    },
    {
      title: "Comprehensive Examination & Hygiene",
      description: "Thorough checkups and professional cleanings to maintain optimal oral health.",
      image: "https://images.pexels.com/photos/3845746/pexels-photo-3845746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      link: "/treatments/examination-hygiene"
    }
  ];

  return (
    <section id="treatments" className="py-24 bg-background fade-in-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
            Our Treatments
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 text-balance">
            Comprehensive Dental Care Treatments
          </h3>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto">
            Professional dental services designed to give you a beautiful, healthy smile that lasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl shadow-soft hover:shadow-hover transition-gentle overflow-hidden hover-lift flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-gentle"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-4">
                    {service.title}
                  </h4>
                  <p className="text-neutral-800 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Button variant="learn" className="w-full" asChild>
                  <Link to={service.link}>
                    LEARN MORE
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="min-w-[200px] text-primary border-primary hover:gradient-primary hover:text-white hover:border-transparent"
            asChild
          >
            <Link to="/treatments">
              View All Treatments
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;