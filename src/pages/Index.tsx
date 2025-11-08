import Hero from "@/components/Hero";
import CulturalEssence from "@/components/CulturalEssence";
import Problems from "@/components/Problems";
import UserFeatures from "@/components/UserFeatures";
import BusinessFeatures from "@/components/BusinessFeatures";
import Benefits from "@/components/Benefits";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CulturalEssence />
      <Problems />
      <UserFeatures />
      <BusinessFeatures />
      <Benefits />
      <Community />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
