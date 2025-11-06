import React from "react";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { BookOpen, Calendar, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "gatsby";
import { BOOKING_URL, LINK_ATTRIBUTES } from "@/lib/config";


export const Head = () => (
  <SEO 
    title="Index | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <BookOpen className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-4xl font-bold mb-6">Dental Health Blog</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Our comprehensive dental health blog is coming soon. We'll be sharing expert advice,
              treatment insights, oral health tips, and the latest developments in dental care
              from our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" asChild>
                <a href={BOOKING_URL} {...LINK_ATTRIBUTES}>
                  Ask Our Experts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/treatments">Explore Treatments</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Regular health tips & updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Expert advice from our team</span>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;