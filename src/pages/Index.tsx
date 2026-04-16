import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import ProblemSolution from "@/components/ProblemSolution";
import Vision from "@/components/Vision";
import FeaturesDetail from "@/components/FeaturesDetail";
import ValidationMVP from "@/components/ValidationMVP";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-balance">
      <Navbar />
      <main>
        {/* LA HISTORIA COMPLETA (Manifiesto MuchIQ) */}
        <Hero />
        <ImpactSection />
        <ProblemSolution />
        <Vision />
        <FeaturesDetail />
        <ValidationMVP />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
