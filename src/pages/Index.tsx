import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import ValidationMVP from "@/components/ValidationMVP";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-balance">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <ValidationMVP />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
