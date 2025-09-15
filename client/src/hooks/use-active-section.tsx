import { useState, useEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero"); // Default to hero

  useEffect(() => {
    const sections = [
      "hero",
      "about", 
      "experience",
      "portfolio",
      "achievements",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -60% 0px", // More sensitive detection
      threshold: [0.1, 0.3, 0.5] // Multiple thresholds for better detection
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section with highest intersection ratio
      let maxRatio = 0;
      let currentActive = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          currentActive = entry.target.id;
        }
      });

      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const observedElements: Element[] = [];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        observedElements.push(element);
      }
    });

    // Fallback: Check scroll position manually for more accuracy
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Add scroll listener as backup
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      observedElements.forEach((element) => {
        observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}