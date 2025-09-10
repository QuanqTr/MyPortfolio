import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Eye } from "lucide-react";
import FloatingElements from "@/components/animations/floating-elements";
import { useTypewriter } from "@/hooks/use-typewriter";

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const typewriterText = useTypewriter({
    words: ["Developer", "Designer", "Creator", "Innovator"],
    delay: 1500,
    speed: 150
  });

  return (
    <section id="hero" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      <FloatingElements />
      
      {/* Mirror effect layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 backdrop-blur-sm"></div>
      
      <div className="text-center z-10 parallax-element px-6">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 text-glow">
          Creative
          <span className="block text-gradient typewriter-container">
            {typewriterText}
            <span className="typewriter-cursor">|</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto fade-in-up">
          Bringing ideas to life through innovative design and cutting-edge technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay">
          <Button 
            onClick={scrollToPortfolio}
            className="neumorphic px-8 py-4 rounded-xl font-semibold text-primary hover-lift transition-all duration-500"
            data-testid="button-view-work"
          >
            <Eye className="h-4 w-4 mr-2" />
            View My Work
          </Button>
          <Button 
            variant="outline"
            className="glass-card px-8 py-4 rounded-xl font-semibold text-white hover-lift transition-all duration-500 border-white/20"
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
