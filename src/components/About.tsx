import React from 'react';
import { Link } from 'gatsby';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-hero fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
            About Us
          </h2>
          <p className="text-base text-neutral-800 leading-relaxed mb-6">
            At Y3 Smiles Dental, we believe a healthy smile is the foundation of confidence, wellbeing, and quality of life. Located in Melbourne's northern suburbs, our family-focused clinic provides high-quality dental care in a welcoming and modern environment.
          </p>
          <Button variant="outline" size="default" asChild>
            <Link to="/about/y3-smiles-dental">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;