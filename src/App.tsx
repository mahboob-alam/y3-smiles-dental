import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Lazy load treatment pages
const ChildrensDentistry = lazy(() => import("./pages/treatments/childrens-dentistry"));
const ExaminationHygiene = lazy(() => import("./pages/treatments/examination-hygiene"));
const DentalFillings = lazy(() => import("./pages/treatments/dental-fillings"));
const Dentures = lazy(() => import("./pages/treatments/dentures"));
const EmergencyDentistry = lazy(() => import("./pages/treatments/emergency"));
const FluorideTreatments = lazy(() => import("./pages/treatments/fluoride"));
const PeriodontalTherapy = lazy(() => import("./pages/treatments/periodontal"));
const CrownAndBridge = lazy(() => import("./pages/treatments/crown-bridge"));
const DentalImplants = lazy(() => import("./pages/treatments/dental-implants"));
const SedationDentistry = lazy(() => import("./pages/treatments/sedation-dentistry"));
const Mouthguards = lazy(() => import("./pages/treatments/mouthguards"));
const TeethWhitening = lazy(() => import("./pages/treatments/teeth-whitening"));
const PitsAndFissureSealants = lazy(() => import("./pages/treatments/sealants"));
const RootCanalTherapy = lazy(() => import("./pages/treatments/root-canal"));
const TMDandBruxism = lazy(() => import("./pages/treatments/tmd-bruxism"));
const ToothExtraction = lazy(() => import("./pages/treatments/extraction"));
const WisdomTeethRemoval = lazy(() => import("./pages/treatments/wisdom-teeth"));

// Lazy load other pages
const TreatmentsPage = lazy(() => import("./pages/treatments"));
const PricesPage = lazy(() => import("./pages/prices"));
const SpecialsPage = lazy(() => import("./pages/specials"));

// Lazy load About pages
const AboutPage = lazy(() => import("./pages/about"));
const Y3SmilesDentalPage = lazy(() => import("./pages/about/y3-smiles-dental"));
const OurTeamPage = lazy(() => import("./pages/about/our-team"));
const JoinOurTeamPage = lazy(() => import("./pages/about/join-our-team"));
const BlogPage = lazy(() => import("./pages/about/blog"));

// Lazy load Patient pages
const PatientsPage = lazy(() => import("./pages/patients"));
const YourFirstVisitPage = lazy(() => import("./pages/patients/your-first-visit"));
const PaymentOptionsPage = lazy(() => import("./pages/patients/payment-options"));
const PriceGuidePage = lazy(() => import("./pages/patients/price-guide"));
const SmileGalleryPage = lazy(() => import("./pages/patients/smile-gallery"));
const CaseStudiesPage = lazy(() => import("./pages/patients/case-studies"));

// Contact Us page
const ContactUsPage = lazy(() => import("./pages/ContactUs"));

// Lazy load location pages
const BroadmeadowsPage = lazy(() => import("./pages/locations/broadmeadows"));
const GlenroyPage = lazy(() => import("./pages/locations/glenroy"));
const GreenvalePage = lazy(() => import("./pages/locations/greenvale"));
const CampbellfieldPage = lazy(() => import("./pages/locations/campbellfield"));
const MeadowHeightsPage = lazy(() => import("./pages/locations/meadow-heights"));
const RoxburghParkPage = lazy(() => import("./pages/locations/roxburgh-park"));
const CraigieburnPage = lazy(() => import("./pages/locations/craigieburn"));
const WestmeadowsPage = lazy(() => import("./pages/locations/westmeadows"));
const MicklehamPage = lazy(() => import("./pages/locations/mickleham"));
const FawknerPage = lazy(() => import("./pages/locations/fawkner"));
const GladstoneParkPage = lazy(() => import("./pages/locations/gladstone-park"));
const HadfieldPage = lazy(() => import("./pages/locations/hadfield"));

const queryClient = new QueryClient();

const App = () => {
  // Initialize useScrollToHash for handling URL hash navigation
  useScrollToHash();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Treatment Routes */}
          <Route path="/treatments/childrens-dentistry" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ChildrensDentistry />
            </Suspense>
          } />
          <Route path="/treatments/examination-hygiene" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ExaminationHygiene />
            </Suspense>
          } />
          <Route path="/treatments/dental-fillings" element={
            <Suspense fallback={<LoadingSpinner />}>
              <DentalFillings />
            </Suspense>
          } />
          <Route path="/treatments/dentures" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Dentures />
            </Suspense>
          } />
          <Route path="/treatments/emergency" element={
            <Suspense fallback={<LoadingSpinner />}>
              <EmergencyDentistry />
            </Suspense>
          } />
          <Route path="/treatments/fluoride" element={
            <Suspense fallback={<LoadingSpinner />}>
              <FluorideTreatments />
            </Suspense>
          } />
          <Route path="/treatments/periodontal" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PeriodontalTherapy />
            </Suspense>
          } />
          <Route path="/treatments/sealants" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PitsAndFissureSealants />
            </Suspense>
          } />
          <Route path="/treatments/root-canal" element={
            <Suspense fallback={<LoadingSpinner />}>
              <RootCanalTherapy />
            </Suspense>
          } />
          <Route path="/treatments/tmd-bruxism" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TMDandBruxism />
            </Suspense>
          } />
          <Route path="/treatments/extraction" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ToothExtraction />
            </Suspense>
          } />
          <Route path="/treatments/wisdom-teeth" element={
            <Suspense fallback={<LoadingSpinner />}>
              <WisdomTeethRemoval />
            </Suspense>
          } />
          <Route path="/treatments/crown-bridge" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CrownAndBridge />
            </Suspense>
          } />
          <Route path="/treatments/dental-implants" element={
            <Suspense fallback={<LoadingSpinner />}>
              <DentalImplants />
            </Suspense>
          } />
          <Route path="/treatments/sedation-dentistry" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SedationDentistry />
            </Suspense>
          } />
          <Route path="/treatments/mouthguards" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Mouthguards />
            </Suspense>
          } />
          <Route path="/treatments/teeth-whitening" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TeethWhitening />
            </Suspense>
          } />

          {/* Other Main Routes */}
          <Route path="/treatments" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TreatmentsPage />
            </Suspense>
          } />

          {/* About Routes */}
          <Route path="/about" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Y3SmilesDentalPage />
            </Suspense>
          } />
          <Route path="/about/y3-smiles-dental" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Y3SmilesDentalPage />
            </Suspense>
          } />
          <Route path="/about/our-team" element={
            <Suspense fallback={<LoadingSpinner />}>
              <OurTeamPage />
            </Suspense>
          } />
          <Route path="/about/join-our-team" element={
            <Suspense fallback={<LoadingSpinner />}>
              <JoinOurTeamPage />
            </Suspense>
          } />
          <Route path="/about/blog" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPage />
            </Suspense>
          } />

          {/* Patient Routes */}
          <Route path="/patients" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PatientsPage />
            </Suspense>
          } />
          <Route path="/patients/your-first-visit" element={
            <Suspense fallback={<LoadingSpinner />}>
              <YourFirstVisitPage />
            </Suspense>
          } />
          <Route path="/patients/payment-options" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PaymentOptionsPage />
            </Suspense>
          } />
          <Route path="/patients/price-guide" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PriceGuidePage />
            </Suspense>
          } />
          <Route path="/patients/smile-gallery" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SmileGalleryPage />
            </Suspense>
          } />
          <Route path="/patients/case-studies" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CaseStudiesPage />
            </Suspense>
          } />

          {/* Contact Us Route */}
          <Route path="/contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactUsPage />
            </Suspense>
          } />

          <Route path="/prices" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PricesPage />
            </Suspense>
          } />

          <Route path="/specials" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SpecialsPage />
            </Suspense>
          } />

          {/* Location Routes */}
          <Route path="/locations/broadmeadows" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BroadmeadowsPage />
            </Suspense>
          } />
          <Route path="/locations/glenroy" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GlenroyPage />
            </Suspense>
          } />
          <Route path="/locations/greenvale" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GreenvalePage />
            </Suspense>
          } />
          <Route path="/locations/campbellfield" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CampbellfieldPage />
            </Suspense>
          } />
          <Route path="/locations/meadow-heights" element={
            <Suspense fallback={<LoadingSpinner />}>
              <MeadowHeightsPage />
            </Suspense>
          } />
          <Route path="/locations/roxburgh-park" element={
            <Suspense fallback={<LoadingSpinner />}>
              <RoxburghParkPage />
            </Suspense>
          } />
          <Route path="/locations/craigieburn" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CraigieburnPage />
            </Suspense>
          } />
          <Route path="/locations/westmeadows" element={
            <Suspense fallback={<LoadingSpinner />}>
              <WestmeadowsPage />
            </Suspense>
          } />
          <Route path="/locations/mickleham" element={
            <Suspense fallback={<LoadingSpinner />}>
              <MicklehamPage />
            </Suspense>
          } />
          <Route path="/locations/fawkner" element={
            <Suspense fallback={<LoadingSpinner />}>
              <FawknerPage />
            </Suspense>
          } />
          <Route path="/locations/gladstone-park" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GladstoneParkPage />
            </Suspense>
          } />
          <Route path="/locations/hadfield" element={
            <Suspense fallback={<LoadingSpinner />}>
              <HadfieldPage />
            </Suspense>
          } />

          {/* Redirects from old service routes to new treatment routes */}
          <Route path="/services" element={<Navigate to="/treatments" replace />} />
          <Route path="/services/*" element={<Navigate to="/treatments" replace />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
