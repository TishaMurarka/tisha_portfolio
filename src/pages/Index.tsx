
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; 
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="fixed top-1/4 left-4 text-creative-pink text-xl opacity-30 animate-float">✦</div>
      <div className="fixed bottom-1/4 right-8 text-creative-blue text-2xl opacity-30 animate-float" style={{animationDelay: '1s'}}>✦</div>
      <div className="fixed top-1/2 left-1/3 text-creative-yellow text-lg opacity-20 animate-float" style={{animationDelay: '2s'}}>✦</div>
      
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
