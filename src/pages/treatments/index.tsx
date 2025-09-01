import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  Heart, 
  Shield, 
  Sparkles, 
  Stethoscope, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const TreatmentsPage = () => {
  const treatmentCategories = [
    {
      title: "Sedation Dentistry",
      description: "Comfortable, anxiety-free dental care with advanced sedation options",
      icon: Shield,
      color: "bg-blue-50 text-blue-600",
      treatments: [
        { name: "General Anaesthesia", path: "/treatments/sedation/general-anaesthesia" },
        { name: "Sedation Dentistry", path: "/treatments/sedation-dentistry" }
      ]
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions with cutting-edge technology",
      icon: Award,
      color: "bg-green-50 text-green-600",
      treatments: [
        { name: "All-Teeth-On-Four", path: "/treatments/implants/all-teeth-on-four" },
        { name: "3D Guided Dental Implants", path: "/treatments/implants/3d-guided-implants" },
        { name: "Single or Multiple Dental Implants", path: "/treatments/implants/single-multiple-implants" },
        { name: "Bone Augmentation", path: "/treatments/implants/bone-augmentation" },
        { name: "Sinus Graft", path: "/treatments/implants/sinus-graft" }
      ]
    },
    {
      title: "Aesthetic Dentistry",
      description: "Transform your smile with our advanced cosmetic treatments",
      icon: Sparkles,
      color: "bg-purple-50 text-purple-600",
      treatments: [
        { name: "Full Mouth Rehabilitation", path: "/treatments/aesthetic/full-mouth-rehabilitation" },
        { name: "Smile Makeover", path: "/treatments/aesthetic/smile-makeover" },
        { name: "Dental Veneers", path: "/treatments/aesthetic/dental-veneers" },
        { name: "Invisalign", path: "/treatments/aesthetic/invisalign" },
        { name: "Crown Lengthening", path: "/treatments/aesthetic/crown-lengthening" },
        { name: "Dental CEREC Crowns", path: "/treatments/aesthetic/cerec-crowns" },
        { name: "Inlays and Onlays", path: "/treatments/aesthetic/inlays-onlays" },
        { name: "Teeth Reshaping", path: "/treatments/aesthetic/teeth-reshaping" },
        { name: "Teeth Whitening", path: "/treatments/aesthetic/teeth-whitening" }
      ]
    },
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for you and your family",
      icon: Stethoscope,
      color: "bg-teal-50 text-teal-600",
      treatments: [
        { name: "Children's Dentistry", path: "/treatments/general/children-dentistry" },
        { name: "Comprehensive Examination and Dental Hygiene", path: "/treatments/general/examination-hygiene" },
        { name: "Dental Fillings", path: "/treatments/general/dental-fillings" },
        { name: "Dentures", path: "/treatments/general/dentures" },
        { name: "Emergency Dentistry", path: "/treatments/general/emergency" },
        { name: "Tooth Extraction", path: "/treatments/general/extraction" },
        { name: "Fluoride Treatments", path: "/treatments/general/fluoride" },
        { name: "Fresh Breath Treatment", path: "/treatments/general/fresh-breath" },
        { name: "Periodontal Care", path: "/treatments/general/periodontal" },
        { name: "Pits and Fissure Sealants", path: "/treatments/general/sealants" },
        { name: "Root Canal Therapy", path: "/treatments/general/root-canal" },
        { name: "TMD and Bruxism Treatment", path: "/treatments/general/tmd-bruxism" },
        { name: "Wisdom Teeth Removal", path: "/treatments/general/wisdom-teeth" }
      ]
    },
    {
      title: "Preventative Dentistry",
      description: "Proactive care to maintain your oral health",
      icon: Heart,
      color: "bg-red-50 text-red-600",
      treatments: [
        { name: "Dental Sealants", path: "/treatments/preventative/sealants" },
        { name: "Dietary Advice", path: "/treatments/preventative/dietary-advice" },
        { name: "Custom Fitted Mouthguards", path: "/treatments/preventative/mouthguards" },
        { name: "Oral Hygiene Education", path: "/treatments/preventative/oral-hygiene" },
        { name: "Regular Dental Examination", path: "/treatments/preventative/examination" }
      ]
    }
  ];

  const benefits = [
    "40+ Years of Experience",
    "In-House General Anaesthesia",
    "Latest Technology & Equipment",
    "Comfortable, Anxiety-Free Environment"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mb-6">
                Comprehensive Dental Treatments
              </h1>
              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                Discover our full range of advanced dental treatments designed to give you 
                a beautiful, healthy smile that lasts a lifetime.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Categories */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Treatment Categories
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                Specialized Care for Every Need
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {treatmentCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="group hover:shadow-medium transition-smooth border-0 shadow-soft">
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-neutral-800 mb-2">
                        {category.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed">
                        {category.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {category.treatments.slice(0, 4).map((treatment, treatmentIndex) => (
                          <Link
                            key={treatmentIndex}
                            to={treatment.path}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 transition-smooth group/item"
                          >
                            <span className="text-sm font-medium text-neutral-700 group-hover/item:text-primary transition-smooth">
                              {treatment.name}
                            </span>
                            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover/item:text-primary group-hover/item:translate-x-1 transition-smooth" />
                          </Link>
                        ))}
                        {category.treatments.length > 4 && (
                          <div className="pt-2">
                            <span className="text-xs text-neutral-500">
                              +{category.treatments.length - 4} more treatments
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our experienced team is here to help you achieve the healthy, beautiful smile you deserve. 
                Book your consultation today and discover the DENTL difference.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#contact">BOOK CONSULTATION</Link>
              </Button>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default TreatmentsPage;