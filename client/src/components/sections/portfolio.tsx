import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart, Users, CheckSquare, TrendingUp, Heart, DollarSign, Book, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    id: 1,
    title: "Staff Attendance Management System Using Facial Recognition",
    description: "Internship & Graduation Thesis project at FPT Software Da Nang. A system for managing staff attendance using facial recognition.",
    technologies: ["NodeJS", "face-api.js", "TypeScript", "ReactJS", "Python", "PostgreSQL", "Firebase"],
    position: "Member",
    score: "9.83",
    github: "https://github.com/QuanqTr/FaceAttendance",
    viewLive: "https://drive.google.com/file/d/1eGfYRfKc2uUQvKIWN_q6msI2TXIWmBBg/view?usp=sharing",
    image: "/face-attendance.png", // Face attendance project image
    gradient: "from-primary to-secondary",
    icon: Users,
    color: "primary",
  },
  {
    id: 2,
    title: "Human Resource Management System",
    description: "A Human Resource Management System (HRMS) streamlines HR tasks like payroll, recruitment, and performance tracking.",
    technologies: ["Java Servlet", "SQL Server"],
    position: "Member",
    score: "8.8",
    github: "https://github.com/Nessit2610/MBCService.git",
    viewLive: null,
    image: "/human-resource.png", // Human Resource project image
    gradient: "from-green-400 to-blue-500",
    icon: Users,
    color: "green-600",
  },
  {
    id: 3,
    title: "NMC Project Management UI/UX Design",
    description: "UI/UX design for project management system created in Figma.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    position: "Designer",
    score: "N/A",
    github: null,
    viewLive: "https://www.figma.com/design/QSorb0t16mFSwlvzdSy9Eh/Qu%E1%BA%A3n-l%C3%BD-d%E1%BB%B1-%C3%A1n-NMC?node-id=0-1&t=H6X5lTFZU5hNLJZZ-1",
    image: "/ux-ui-project.png", // UI/UX project image
    gradient: "from-orange-400 to-red-500",
    icon: Star,
    color: "orange-600",
  },
  {
    id: 4,
    title: "Travel Booking System",
    description: "Internship project at FPT Software Da Nang. A web application for booking travel services.",
    technologies: ["NodeJS", "ReactJS", "MongoDB"],
    position: "Leader",
    score: "9.0",
    github: "https://github.com/QuanqTr/Travel-project-",
    viewLive: null,
    image: "/travel.png", // Travel project image
    gradient: "from-accent to-primary",
    icon: ExternalLink,
    color: "accent",
  },
  {
    id: 5,
    title: "Static website using HTML and CSS",
    description: "Web development project with live demo available.",
    technologies: ["HTML", "CSS", "JavaScript"],
    position: "Developer",
    score: "N/A",
    github: "https://github.com/QuanqTr/BTH_5",
    viewLive: "https://quanqtr.github.io/BTH_5/",
    image: "/bth5.png", // BTH5 project image
    gradient: "from-purple-400 to-pink-500",
    icon: ExternalLink,
    color: "purple-600",
  },
  {
    id: 6,
    title: "Static website using HTML and CSS",
    description: "Web development project with live demo available.",
    technologies: ["HTML", "CSS", "JavaScript"],
    position: "Developer",
    score: "N/A",
    github: "https://github.com/QuanqTr/BTH_4",
    viewLive: "https://quanqtr.github.io/BTH_4/",
    image: "/bth4.png", // BTH4 project image
    gradient: "from-blue-400 to-purple-500",
    icon: ExternalLink,
    color: "blue-600",
  },
  
  {
    id: 7,
    title: "E-commerce Website Supporting People with Disabilities",
    description: "Coursework project. An e-commerce website to support people with disabilities shopping online.",
    technologies: ["PHP", "Laragon", "MySQL"],
    position: "Leader",
    score: "9.6",
    github: "https://github.com/QuanqTr/HTC-Shop-MVC-php-",
    viewLive: null,
    image: null, // No specific image, will show default
    gradient: "from-secondary to-accent",
    icon: ShoppingCart,
    color: "secondary",
  },
  
];

// Portfolio Item Component with Animation
const PortfolioItem = ({ project, index, isTransitioning, isPreloadingComplete }: any) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const IconComponent = project.icon;
  
  return (
    <div ref={ref}>
      <div
        className={`transition-all duration-700 ease-out animate-fade-in ${isVisible && isPreloadingComplete && !isTransitioning ? 'visible' : ''}`}
        style={{ 
          animationDelay: `${index * 150}ms`
        }}
      >
        <GlassCard 
          key={project.id} 
          className="rounded-3xl overflow-hidden hover-lift mirror-effect group"
        >
          {/* Project Preview */}
          <div className="h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-500 animate-scale-in ${isVisible && isPreloadingComplete && !isTransitioning ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 150 + 200}ms` }}
                onError={(e) => {
                  e.currentTarget.src = "/images-not-found.png";
                }}
              />
            ) : (
              <img 
                src="/images-not-found.png" 
                alt="Image not found"
                className={`w-full h-full object-cover transition-all duration-500 animate-scale-in ${isVisible && isPreloadingComplete && !isTransitioning ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 150 + 200}ms` }}
              />
            )}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
            <div className={`absolute bottom-4 left-4 text-white transition-all duration-500 animate-slide-in-left ${isVisible && isPreloadingComplete && !isTransitioning ? 'visible' : ''}`}
                 style={{ animationDelay: `${index * 150 + 400}ms` }}>
              <IconComponent className="text-2xl" />
            </div>
          </div>
          
          {/* Project Details */}
          <div className="p-6">
            <h3 className={`text-xl font-bold mb-2 transition-all duration-500 animate-slide-in-up ${isVisible && isPreloadingComplete && !isTransitioning ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 150 + 300}ms` }}>
              {project.title}
            </h3>
            <p className={`text-muted-foreground mb-4 transition-all duration-500 animate-fade-in ${isVisible && isPreloadingComplete && !isTransitioning ? 'visible' : ''}`}
               style={{ animationDelay: `${index * 150 + 400}ms` }}>
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, techIndex: number) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className={`neumorphic text-xs transition-all duration-300 animate-scale-in ${isVisible && isPreloadingComplete && !isTransitioning ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 150 + 500 + techIndex * 50}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className={`flex gap-3 transition-all duration-500 animate-slide-in-up ${isVisible && isPreloadingComplete && !isTransitioning ? 'visible' : ''}`}
                 style={{ animationDelay: `${index * 150 + 600}ms` }}>
              {project.viewLive ? (
                <Button 
                  asChild
                  className="flex-1 view-live-btn"
                  data-testid={`button-view-live-${project.id}`}
                >
                  <a href={project.viewLive} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </a>
                </Button>
              ) : (
                <Button 
                  disabled
                  className="flex-1 view-live-btn opacity-50 cursor-not-allowed"
                  data-testid={`button-view-live-${project.id}`}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live
                </Button>
              )}
              
              {project.github ? (
                <Button 
                  asChild
                  variant="outline" 
                  className="flex-1 hover:bg-primary/10 hover:border-primary/30 hover:text-primary hover:shadow-md transition-all duration-300 transform hover:scale-105"
                  data-testid={`button-github-${project.id}`}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              ) : (
                <Button 
                  disabled
                  variant="outline" 
                  className="flex-1 opacity-50 cursor-not-allowed"
                  data-testid={`button-github-${project.id}`}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPreloadingComplete, setIsPreloadingComplete] = useState(false);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  // Check for preloading completion
  useEffect(() => {
    const checkPreloading = () => {
      const loadingScreen = document.querySelector('.loading-screen');
      const isDocumentReady = document.readyState === 'complete';
      
      if (!loadingScreen && isDocumentReady) {
        setTimeout(() => setIsPreloadingComplete(true), 500);
      } else {
        setTimeout(checkPreloading, 100);
      }
    };

    checkPreloading();
  }, []);

  const changePage = (newPage: number) => {
    if (newPage === currentPage) return;
    
    setIsTransitioning(true);
    
    // Fade out current content
    setTimeout(() => {
      setCurrentPage(newPage);
      // Fade in new content
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const goToPage = (page: number) => {
    changePage(page);
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
        
        {/* Minimal Elegant Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-6 mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="group flex items-center space-x-2 px-4 py-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-primary/10 text-muted-foreground hover:text-primary"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span className="text-sm font-medium">Previous</span>
            </Button>
            
            {/* Simple Number Indicators */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-200 ${
                    page === currentPage
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="group flex items-center space-x-2 px-4 py-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-primary/10 text-muted-foreground hover:text-primary"
            >
              <span className="text-sm font-medium">Next</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        )}
        
        {/* Fixed height container with smooth fade transition */}
        <div className="min-h-[40rem] relative">
          <div 
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${
              isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
            }`}
          >
            {currentProjects.map((project, index) => (
              <PortfolioItem
                key={`${project.id}-${currentPage}`}
                project={project}
                index={index}
                isTransitioning={isTransitioning}
                isPreloadingComplete={isPreloadingComplete}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
