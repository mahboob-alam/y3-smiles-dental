import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Treatments = () => {
  const featuredTreatments = [
    {
      title: "Comprehensive check-ups and hygiene",
      subheading: "General Dentistry",
      description: "Regular check ups mean early detection, personalised care, and peace of mind for every patient.",
      image: "https://images.pexels.com/photos/3845746/pexels-photo-3845746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      link: "/treatments/examination-hygiene"
    },
    {
      title: "Emergency",
      subheading: "Immediate Care",
      description: "We understand emergencies are stressful — we'll endeavour to provide urgent care and comfort quickly.",
      image: "https://images.pexels.com/photos/14624608/pexels-photo-14624608.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      link: "/treatments/emergency"
    },
    {
      title: "Aesthetic",
      subheading: "Where happy, confident smiles begin",
      description: "Get the smile you love with gentle care, tailored treatments, and lasting confidence.",
      image: "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      link: "/treatments/dental-fillings"
    },
    {
      title: "Children Dentistry",
      subheading: "Early Age Dental Care",
      description: "At Y3 Smiles Dental, we create positive early dental experiences through gentle check-ups, preventative care, and fun education — helping children build strong habits and healthy smiles for life.",
      image: "https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      link: "/treatments/childrens-dentistry"
    },
    {
      title: "Trauma",
      subheading: "Tooth trauma and repair",
      description: "Whether from sport, falls, or accidents, we provide immediate repair to protect and restore smiles.",
      image: "https://images.pexels.com/photos/6627655/pexels-photo-6627655.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      link: "/treatments/emergency"
    },
    {
      title: "Dental restoration",
      subheading: "Repair. Protect. Restore.",
      description: "Y3 Smiles Dental offers gentle treatments to repair worn or damaged teeth, along with preventative care that keeps your family's smiles healthy and protected for the future.",
      image: "https://images.pexels.com/photos/6627329/pexels-photo-6627329.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      link: "/treatments/dentures"
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
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Professional dental services designed to give you a beautiful, healthy smile that lasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredTreatments.map((treatment, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl shadow-soft hover:shadow-hover transition-gentle overflow-hidden hover-lift flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-gentle"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-neutral-800 mb-2">
                    {treatment.title}
                  </h4>
                  <p className="text-sm font-medium text-primary mb-4">
                    {treatment.subheading}
                  </p>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
                {/* <Button variant="learn" className="w-full" asChild>
                  <Link to={treatment.link}>
                    LEARN MORE
                  </Link>
                </Button> */}
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="min-w-[200px]"
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

export default Treatments;