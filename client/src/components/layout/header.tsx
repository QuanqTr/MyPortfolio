import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "@/components/ui/theme-toggle";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-card">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold text-gradient cursor-pointer" data-testid="link-home">
            Portfolio
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            item.href.startsWith("#") ? (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-primary transition-colors duration-300"
                data-testid={`button-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </button>
            ) : (
              <Link key={item.name} href={item.href}>
                <span 
                  className="hover:text-primary transition-colors duration-300 cursor-pointer"
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
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-border">
          <div className="container mx-auto px-6 py-4 space-y-4">
            {navigation.map((item) => (
              item.href.startsWith("#") ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left hover:text-primary transition-colors duration-300"
                  data-testid={`button-mobile-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </button>
              ) : (
                <Link key={item.name} href={item.href}>
                  <span 
                    className="block hover:text-primary transition-colors duration-300 cursor-pointer"
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
