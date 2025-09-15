import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/animations/floating-elements";
import { useTypewriter } from "@/hooks/use-typewriter";

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const displayText = useTypewriter({
    words: ["UI - UX Designer", "Frontend Developer", "Video Editor"],
    delay: 2000,
  });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden section-container py-20">
      <FloatingElements />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up">
            <span className="unified-text-gradient">Trần Đại Quang</span>
          </h1>
          
          <div className="text-2xl md:text-4xl mb-6 fade-in-up-delay">
            <span className="unified-nav-text">I'm a </span>
            <span className="unified-text-gradient font-semibold">
              {displayText}
              <span className="typewriter-cursor">|</span>
            </span>
          </div>
          
          <p className="text-xl md:text-2xl unified-nav-text mb-8 max-w-2xl mx-auto fade-in-up drop-shadow-sm">
            Passionate software developer creating innovative solutions with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay">
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="unified-glass px-8 py-4 rounded-xl font-semibold unified-nav-text hover-lift transition-all duration-500 border border-blue-200/20"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="component-bg px-8 py-4 rounded-xl font-semibold hover-lift transition-all duration-500"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}