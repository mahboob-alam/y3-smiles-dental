import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = "At Y3 Smiles Dental, we believe a healthy smile is the foundation of confidence, wellbeing, and quality of life. Located in Melbourne's northern suburbs, our family-focused clinic provides high-quality dental care in a welcoming and modern environment.";

  const fullText = "At Y3 Smiles Dental, we believe a healthy smile is the foundation of confidence, wellbeing, and quality of life. Located in Melbourne's northern suburbs, our family-focused clinic provides high-quality dental care in a welcoming and modern environment. We also recognise that a healthy mouth supports a healthy body — which is why we say: healthy smiles, healthy lives — it begins with you. Our services cover all stages of dental care, including routine check-ups, preventative treatments, children's dentistry, aesthetic options such as teeth whitening, veneers, and clear aligners, as well as emergency and surgical procedures. Whatever your needs, our experienced team is here to support you and your family. What makes us different is our patient-centred approach. We take the time to listen, explain, and personalise every treatment plan. Patient comfort is our priority — we create a calm, supportive environment so every visit feels comfortable and positive. At Y3 Smiles Dental, your health and your smile always come first.";

  const additionalText = fullText.substring(shortText.length);

  return (
    <section id="about" className="py-16 bg-gradient-hero fade-in-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-primary uppercase tracking-widest mb-4">
              About
            </h2>
            {/* <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 text-balance">
              Compassionate Care for over 40 Years
            </h3> */}
            <div className="text-lg text-neutral-800 leading-relaxed max-w-6xl mx-auto">
              <p>
                {shortText}
                {!isExpanded && (
                  <span>
                    ...{" "}
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-primary hover:text-primary/80 font-medium underline transition-all duration-300 hover:scale-105 transform"
                    >
                      Read more
                    </button>
                  </span>
                )}
              </p>

              <div
                className={`transition-all duration-700 ease-in-out transform ${isExpanded
                    ? 'opacity-100 translate-y-0 max-h-[1000px]'
                    : 'opacity-0 max-h-0 overflow-hidden -translate-y-4'
                  }`}
              >
                <p className="mt-4">{additionalText}</p>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-primary hover:text-primary/80 font-medium underline transition-all duration-300 mt-2 inline-block hover:scale-105 transform"
                >
                  ... show less
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;