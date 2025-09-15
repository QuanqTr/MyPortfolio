import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Portfolio from "@/components/sections/portfolio";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";
import BlogPreview from "@/components/sections/blog-preview";
import FloatingNav from "@/components/ui/floating-nav";
import LoadingScreen from "@/components/ui/loading-screen";
import ParallaxSection from "@/components/animations/parallax-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden background-pattern">
      <LoadingScreen />
      <FloatingNav />
      <Header />
      
      <main>
        <Hero />
        
        {/* <ParallaxSection>
          <div className="section-divider" />
        </ParallaxSection> */}
        
        <About />
        <Experience />
        <Portfolio />
        <Achievements />
        <Contact />
        <BlogPreview />
      </main>
      
      <Footer />
    </div>
  );
}
