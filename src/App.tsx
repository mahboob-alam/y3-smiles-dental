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
const FreshBreathTreatment = lazy(() => import("./pages/treatments/fresh-breath"));
const PeriodontalCare = lazy(() => import("./pages/treatments/periodontal"));
const PitsAndFissureSealants = lazy(() => import("./pages/treatments/sealants"));
const RootCanalTherapy = lazy(() => import("./pages/treatments/root-canal"));
const TMDandBruxism = lazy(() => import("./pages/treatments/tmd-bruxism"));
const ToothExtraction = lazy(() => import("./pages/treatments/extraction"));
const WisdomTeethRemoval = lazy(() => import("./pages/treatments/wisdom-teeth"));

// Lazy load other pages
const PatientsPage = lazy(() => import("./pages/patients"));
const SmileGalleryPage = lazy(() => import("./pages/patients/smile-gallery"));
const CaseStudiesPage = lazy(() => import("./pages/patients/case-studies"));
const TreatmentsPage = lazy(() => import("./pages/treatments"));
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
          <Route path="/treatments/fresh-breath" element={
            <Suspense fallback={<LoadingSpinner />}>
              <FreshBreathTreatment />
            </Suspense>
          } />
          <Route path="/treatments/periodontal" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PeriodontalCare />
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

          {/* Other Main Routes */}
          <Route path="/treatments" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TreatmentsPage />
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
