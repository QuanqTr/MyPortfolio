import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="component-bg border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">Portfolio</h3>
            <p className="text-muted-foreground">
              Creating innovative digital experiences through modern web technologies and creative design.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-footer-about"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-footer-experience"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-footer-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-footer-contact"
              >
                Contact
              </button>
            </div>
          </div>          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Web Development</p>
              <p className="text-muted-foreground">UI/UX Design</p>
              <p className="text-muted-foreground">Mobile Apps</p>
              <p className="text-muted-foreground">Consulting</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 bg-muted/20 rounded-full hover:bg-muted/40 transition-colors"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 bg-muted/20 rounded-full hover:bg-muted/40 transition-colors"
                data-testid="button-social-github"
              >
                <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 bg-muted/20 rounded-full hover:bg-muted/40 transition-colors"
                data-testid="button-social-twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 bg-muted/20 rounded-full hover:bg-muted/40 transition-colors"
                data-testid="button-social-instagram"
              >
                <Instagram className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; 2023 Portfolio. All rights reserved. Built with ❤️ and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
