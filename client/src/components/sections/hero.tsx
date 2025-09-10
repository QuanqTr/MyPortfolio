import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Eye } from "lucide-react";
import FloatingElements from "@/components/animations/floating-elements";

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      <FloatingElements />
      
      <div className="text-center z-10 parallax-element px-6">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 animate-pulse-slow">
          Creative
          <span className="block text-gradient">Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Bringing ideas to life through innovative design and cutting-edge technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToPortfolio}
            className="neumorphic px-8 py-4 rounded-xl font-semibold text-primary hover-3d transition-all duration-300"
            data-testid="button-view-work"
          >
            <Eye className="h-4 w-4 mr-2" />
            View My Work
          </Button>
          <Button 
            variant="outline"
            className="glass-card px-8 py-4 rounded-xl font-semibold text-white hover-3d transition-all duration-300 border-white/20"
            data-testid="button-download-cv"
          >
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
