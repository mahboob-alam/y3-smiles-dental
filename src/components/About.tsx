const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-hero fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              About
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 text-balance">
              Compassionate Care for over 40 Years
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              DENTL East Melbourne, formerly located within the esteemed St. Vincent's Hospital as SV Dental Centre, 
              now offers a calming, sanctuary-like clinic for even the most complex treatments and anxious patients. 
              With in-house general anaesthesia, we ensure your comfort every step of the way.
            </p>
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 hover-lift transition-gentle" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary mb-2">40+</div>
              <div className="text-neutral-600">Years of Experience</div>
            </div>
            <div className="text-center p-6 hover-lift transition-gentle" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-neutral-600">Happy Patients</div>
            </div>
            <div className="text-center p-6 hover-lift transition-gentle" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-neutral-600">Patient Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;