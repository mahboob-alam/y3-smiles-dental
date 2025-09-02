import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useScrollToHash } from "@/hooks/useScrollToHash";
import LoadingSpinner from "@/components/ui/loading-spinner";

// Lazy load service pages
const ChildrensDentistry = lazy(() => import("./pages/services/childrens-dentistry"));
const ExaminationHygiene = lazy(() => import("./pages/services/examination-hygiene"));
const DentalFillings = lazy(() => import("./pages/services/dental-fillings"));
const Dentures = lazy(() => import("./pages/services/dentures"));
const EmergencyDentistry = lazy(() => import("./pages/services/emergency"));
const FluorideTreatments = lazy(() => import("./pages/services/fluoride"));
const FreshBreathTreatment = lazy(() => import("./pages/services/fresh-breath"));
const PeriodontalCare = lazy(() => import("./pages/services/periodontal"));
const PitsAndFissureSealants = lazy(() => import("./pages/services/sealants"));
const RootCanalTherapy = lazy(() => import("./pages/services/root-canal"));
const TMDandBruxism = lazy(() => import("./pages/services/tmd-bruxism"));
const ToothExtraction = lazy(() => import("./pages/services/extraction"));
const WisdomTeethRemoval = lazy(() => import("./pages/services/wisdom-teeth"));

// Lazy load other pages
const PatientsPage = lazy(() => import("./pages/patients"));
const SmileGalleryPage = lazy(() => import("./pages/patients/smile-gallery"));
const CaseStudiesPage = lazy(() => import("./pages/patients/case-studies"));
const ServicesPage = lazy(() => import("./pages/services"));
const PricesPage = lazy(() => import("./pages/prices"));
const SpecialsPage = lazy(() => import("./pages/specials"));
const BlogPage = lazy(() => import("./pages/blog"));

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
          
          {/* Service Routes */}
          <Route path="/services/childrens-dentistry" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ChildrensDentistry />
            </Suspense>
          } />
          <Route path="/services/examination-hygiene" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ExaminationHygiene />
            </Suspense>
          } />
          <Route path="/services/dental-fillings" element={
            <Suspense fallback={<LoadingSpinner />}>
              <DentalFillings />
            </Suspense>
          } />
          <Route path="/services/dentures" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Dentures />
            </Suspense>
          } />
          <Route path="/services/emergency" element={
            <Suspense fallback={<LoadingSpinner />}>
              <EmergencyDentistry />
            </Suspense>
          } />
          <Route path="/services/fluoride" element={
            <Suspense fallback={<LoadingSpinner />}>
              <FluorideTreatments />
            </Suspense>
          } />
          <Route path="/services/fresh-breath" element={
            <Suspense fallback={<LoadingSpinner />}>
              <FreshBreathTreatment />
            </Suspense>
          } />
          <Route path="/services/periodontal" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PeriodontalCare />
            </Suspense>
          } />
          <Route path="/services/sealants" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PitsAndFissureSealants />
            </Suspense>
          } />
          <Route path="/services/root-canal" element={
            <Suspense fallback={<LoadingSpinner />}>
              <RootCanalTherapy />
            </Suspense>
          } />
          <Route path="/services/tmd-bruxism" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TMDandBruxism />
            </Suspense>
          } />
          <Route path="/services/extraction" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ToothExtraction />
            </Suspense>
          } />
          <Route path="/services/wisdom-teeth" element={
            <Suspense fallback={<LoadingSpinner />}>
              <WisdomTeethRemoval />
            </Suspense>
          } />

          {/* Other Main Routes */}
          <Route path="/services" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ServicesPage />
            </Suspense>
          } />
          
          <Route path="/patients" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PatientsPage />
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
          <Route path="/blog" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPage />
            </Suspense>
          } />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
