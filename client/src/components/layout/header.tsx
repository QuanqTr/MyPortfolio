import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollHeader } from "@/hooks/use-scroll-header";
import { useActiveSection } from "@/hooks/use-active-section";
import ThemeToggle from "@/components/ui/theme-toggle";

const navigation = [
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Experience", href: "#experience", sectionId: "experience" },
  { name: "Portfolio", href: "#portfolio", sectionId: "portfolio" },
  { name: "Achievements", href: "#achievements", sectionId: "achievements" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const { scrolled } = useScrollHeader();
  const activeSection = useActiveSection();

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const isNavActive = (item: any) => {
    if (item.href.startsWith("#")) {
      return activeSection === item.sectionId;
    }
    return location === item.href;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
      scrolled 
        ? 'unified-glass-scrolled backdrop-blur-2xl border-b border-white/10' 
        : 'unified-glass backdrop-blur-xl'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="relative cursor-pointer transition-all duration-300 hover:scale-105" data-testid="link-home">
            <img 
              src="/Logo.png" 
              alt="Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="absolute left-9 top-1/2 transform -translate-y-1/2 text-2xl font-bold unified-text-gradient drop-shadow-lg whitespace-nowrap hidden lg:block">
              uang.tr
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            item.href.startsWith("#") ? (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-all duration-300 nav-underline-effect drop-shadow-sm ${
                  isNavActive(item) 
                    ? 'text-blue-500 dark:text-blue-400 nav-active' 
                    : 'unified-nav-text hover:text-blue-400 dark:hover:text-blue-300'
                }`}
                data-testid={`button-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </button>
            ) : (
              <Link key={item.name} href={item.href}>
                <span 
                  className={`relative font-medium transition-all duration-300 cursor-pointer nav-underline-effect drop-shadow-sm ${
                    isNavActive(item) 
                      ? 'text-blue-500 dark:text-blue-400 nav-active' 
                      : 'unified-nav-text hover:text-blue-400 dark:hover:text-blue-300'
                  }`}
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </span>
              </Link>
            )
          ))}
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="unified-nav-text hover:bg-white/10 dark:hover:bg-white/5"
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden unified-glass border-t border-white/10 dark:border-white/5">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navigation.map((item) => (
              item.href.startsWith("#") ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-medium unified-nav-text hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 py-2"
                  data-testid={`button-mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </button>
              ) : (
                <Link key={item.name} href={item.href}>
                  <span 
                    className="block font-medium unified-nav-text hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 cursor-pointer py-2"
                    onClick={() => setIsOpen(false)}
                    data-testid={`link-mobile-nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </span>
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
