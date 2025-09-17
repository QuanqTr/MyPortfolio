import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, ChevronLeft, ChevronRight, Award, Trophy, Medal } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const achievements = [
  {
    id: 1,
    title: "HUE-ICT Challenge 2025 Finalist",
    description: "One of the 12 products advanced to the final round of the HUE-ICT Challenge 2025 Information Technology Innovation Contest.",
    category: "Competition",
    image: "/HUE-ICT Challenge 2025 Finalist.jpg"
  },
  {
    id: 2,
    title: "National Student Union Delegate", 
    description: "One of 16 delegates from Hue University representing 2 million students in Vietnam attending the National Congress of the Vietnam Student Union in Hanoi.",
    category: "Leadership",
    image: "/National Student Union Delegate.jpg"
  },
  {
    id: 3,
    title: "Green Traffic Debate Contest - First Prize",
    description: "First prize in the Central Region Green Traffic Debate Contest organized by UNDP and the Ministry of Transport.",
    category: "Competition",
    image: "/Green Traffic Debate Contest - First Prize.png"
  },
  {
    id: 4,
    title: "Students' Soft Skills Club Chairperson",
    description: "Chairperson of the Students' Soft Skills Club and Member of the Secretariat, Student Association, Hue University of Sciences.",
    category: "Leadership",
    image: "/Students' Soft Skills Club Chairperson.png"
  },
  {
    id: 5,
    title: "Youth Union Excellence Certificate",
    description: "Certificate of merit from the Youth Union/Student Association of Hue University for outstanding achievements in Youth Union/Student Association activities and student movement during the 2023-2024 period.",
    category: "Recognition",
    image: "/Youth Union Excellence Certificate.png"
  },
  {
    id: 6,
    title: "January Star Title",
    description: "Awarded the 'January Star' title at Hue University level for exceptional performance.",
    category: "Recognition",
    image: "/January Star Title.jpg"
  },
  {
    id: 7,
    title: "Five Good Students Title",
    description: "Awarded the 'Five Good Students' title at the school level for excellence in academics and character.",
    category: "Academic",
    image: "/Five Good Students Title.png"
  },
  {
    id: 8,
    title: "Academic Excellence Scholarship",
    description: "Scholarship for academic encouragement and student support scholarship for the 2022-2023 academic year.",
    category: "Academic",
    image: "/Academic Excellence Scholarship.png"
  }
];

export default function Achievements() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(achievements.length / itemsPerPage);
  
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAchievements = achievements.slice(startIndex, endIndex);

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
    <section 
      id="achievements" 
      ref={sectionRef}
      className={`py-20 px-6 relative overflow-hidden animate-fade-in ${sectionVisible ? 'visible' : ''}`}
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top area */}
        <div className="absolute top-16 left-8 w-14 h-14 bg-gradient-to-br from-blue-400/15 to-purple-500/10 rounded-full animate-float"></div>
        <div className="absolute top-8 left-1/3 w-10 h-10 bg-gradient-to-br from-emerald-400/12 to-teal-500/8 rotate-45 animate-float"></div>
        <div className="absolute top-20 right-16 w-12 h-12 bg-gradient-to-br from-pink-400/15 to-rose-500/10 rounded-full animate-float"></div>
        <div className="absolute top-32 left-1/4 w-8 h-8 bg-gradient-to-br from-yellow-400/12 to-orange-500/8 rotate-12 animate-float"
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute top-12 right-1/3 w-10 h-10 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rounded-full animate-float"></div>
        
        {/* Middle left area */}
        <div className="absolute top-1/2 left-4 w-8 h-8 bg-gradient-to-br from-violet-400/12 to-purple-500/8 rounded-full animate-float"></div>
        <div className="absolute top-2/5 left-12 w-12 h-12 bg-gradient-to-br from-indigo-400/15 to-blue-500/10 rotate-45 animate-float"></div>
        <div className="absolute top-3/5 left-6 w-10 h-10 bg-gradient-to-br from-emerald-400/12 to-green-500/8 rotate-12 animate-float"
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        
        {/* Middle right area */}
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-br from-orange-400/12 to-red-500/8 rotate-12 animate-float"
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute top-2/5 right-16 w-8 h-8 bg-gradient-to-br from-rose-400/15 to-pink-500/10 rounded-full animate-float"></div>
        <div className="absolute top-3/5 right-10 w-10 h-10 bg-gradient-to-br from-teal-400/12 to-cyan-500/8 rotate-45 animate-float"></div>
        
        {/* Bottom area - focus here */}
        <div className="absolute bottom-32 left-16 w-14 h-14 bg-gradient-to-br from-pink-400/15 to-rose-500/10 animate-float"
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute bottom-20 right-24 w-16 h-16 bg-gradient-to-br from-green-400/15 to-teal-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-28 left-1/3 w-10 h-10 bg-gradient-to-br from-yellow-400/12 to-orange-500/8 rotate-45 animate-float"></div>
        <div className="absolute bottom-36 right-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rotate-12 animate-float" 
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
        <div className="absolute bottom-16 left-2/3 w-8 h-8 bg-gradient-to-br from-purple-400/12 to-indigo-500/8 rounded-full animate-float"></div>
        <div className="absolute bottom-24 left-8 w-10 h-10 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 rotate-45 animate-float"></div>
        <div className="absolute bottom-12 right-12 w-12 h-12 bg-gradient-to-br from-lime-400/12 to-green-500/8 rotate-12 animate-float"
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute bottom-40 left-1/2 w-8 h-8 bg-gradient-to-br from-sky-400/15 to-blue-500/10 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gradient">Achievements</h2>
          <p className="text-xl text-muted-foreground">Recognition and accomplishments earned through dedication</p>
        </div>
        
        {/* Horizontal Progress Bar Pagination - Top Position */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center mb-6 space-y-6 relative z-30">
            {/* Navigation Arrows */}
            <div className="flex justify-center items-center space-x-2">
              <Button
                variant="ghost"
                size="lg"
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className="rounded-full w-12 h-12 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 relative group hover:bg-transparent focus:bg-transparent text-black hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <ChevronLeft className="w-6 h-6" />
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-8"></div>
              </Button>
              
              {/* Horizontal Progress Bar with Connected Dots */}
              <div className="relative flex items-center">
                {/* Background Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted-foreground/20 -translate-y-1/2"></div>
                
                {/* Progress Line */}
                <div 
                  className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 transition-all duration-500"
                  style={{ width: `${((currentPage - 1) / (totalPages - 1)) * 100}%` }}
                ></div>
                
                {/* Dots */}
                <div className="flex items-center justify-between w-full relative z-10" style={{ width: '56px' }}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`relative transition-all duration-300 rounded-full border-2 ${
                        page === currentPage
                          ? 'w-4 h-4 bg-gradient-to-r from-primary to-secondary border-primary shadow-lg shadow-primary/30'
                          : page < currentPage
                          ? 'w-3 h-3 bg-gradient-to-r from-primary to-secondary border-primary'
                          : 'w-3 h-3 bg-background border-muted-foreground/40 hover:border-primary/60 hover:scale-110'
                      }`}
                    >
                      {page === currentPage && (
                        <>
                          {/* Ripple effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                          <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></div>
                          <div className="absolute -inset-1 rounded-full border border-primary/30 animate-pulse"></div>
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="lg"
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className="rounded-full w-12 h-12 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 relative group hover:bg-transparent focus:bg-transparent text-black hover:text-primary dark:text-white dark:hover:text-primary"
              >
                <ChevronRight className="w-6 h-6" />
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-8"></div>
              </Button>
            </div>
            
            {/* Page Counter */}
            <div className="text-sm text-muted-foreground font-medium">
              <span className="text-primary font-semibold">{currentPage}</span> / {totalPages}
            </div>
          </div>
        )}
        
        {/* Fixed height container with smooth fade transition */}
        <div className="min-h-[32rem] relative">
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-0 relative z-20 transition-all duration-300 ${
              isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
            }`}
          >
            {currentAchievements.map((achievement, index) => {
            const rowIndex = Math.floor(index / 3); // Changed from 4 to 3
            const colIndex = index % 3; // Changed from 4 to 3
            const isDark = (rowIndex + colIndex) % 2 === 0;
            
            return (
              <div key={achievement.id} className="group relative h-64 overflow-hidden cursor-pointer" style={{ perspective: '1200px' }}>
                <div 
                  className="relative w-full h-full group-hover:[transform:rotateX(180deg)]" 
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.8s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transition = 'transform 0.6s ease-in-out';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transition = 'transform 0.8s ease-in-out';
                  }}
                >
                  <div className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center p-6 text-center mirror-effect transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-blue-500/20 via-blue-400/15 to-blue-300/10 border-2 border-blue-400/30 shadow-xl backdrop-blur-sm dark:bg-gradient-to-br dark:from-white/20 dark:via-white/12 dark:to-white/5 dark:border-white/30' : 'bg-gradient-to-br from-gray-100/80 via-gray-50/60 to-white/40 border-2 border-gray-300/50 shadow-lg backdrop-blur-sm dark:bg-gradient-to-br dark:from-transparent dark:via-gray-800/5 dark:to-gray-900/2 dark:border-gray-700/15'}`} style={{ backfaceVisibility: 'hidden' }}>
                    {/* Background Icon */}
                    <div className="absolute top-4 right-4 opacity-10">
                      {achievement.category === 'Competition' && <Trophy className="w-8 h-8" />}
                      {achievement.category === 'Leadership' && <Award className="w-8 h-8" />}
                      {achievement.category === 'Recognition' && <Medal className="w-8 h-8" />}
                      {achievement.category === 'Academic' && <Award className="w-8 h-8" />}
                    </div>
                    <h3 className={`font-bold text-base leading-tight mb-4 ${isDark ? 'text-blue-900 dark:text-white' : 'text-gray-800 dark:text-gray-400'}`}>{achievement.title}</h3>
                    <span className={`px-3 py-1.5 text-sm rounded-full font-medium border-2 ${isDark ? 'bg-blue-600/20 text-blue-800 border-blue-500/40 dark:bg-white/20 dark:text-white dark:border-white/40' : 'bg-gray-200/80 text-gray-700 border-gray-400/50 dark:bg-gray-700/30 dark:text-gray-500 dark:border-gray-600/20'}`}>{achievement.category}</span>
                  </div>
                  <div className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center p-6 text-center mirror-effect transition-all duration-300 ${isDark ? 'bg-gradient-to-br from-blue-600/25 via-blue-500/20 to-blue-400/15 border-2 border-blue-400/40 shadow-2xl backdrop-blur-md dark:bg-gradient-to-br dark:from-white/25 dark:via-white/15 dark:to-white/8 dark:border-white/35' : 'bg-gradient-to-br from-gray-200/90 via-gray-100/70 to-gray-50/50 border-2 border-gray-400/60 shadow-xl backdrop-blur-md dark:bg-gradient-to-br dark:from-gray-800/10 dark:via-gray-700/8 dark:to-gray-600/5 dark:border-gray-600/20'}`} style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}>
                    <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-blue-900 dark:text-gray-50' : 'text-gray-700 dark:text-gray-500'}`} style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{achievement.description}</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className={`px-4 py-2 font-medium transition-all duration-300 border-2 ${isDark ? 'bg-blue-600/20 text-blue-800 border-blue-500/50 hover:bg-blue-600 hover:text-white shadow-lg dark:bg-white/15 dark:text-white dark:border-white/50 dark:hover:bg-white dark:hover:text-gray-900' : 'bg-gray-100/80 text-gray-800 border-gray-400/60 hover:bg-gray-800 hover:text-white shadow-md dark:bg-gray-700/30 dark:text-gray-400 dark:border-gray-500/30 dark:hover:bg-gray-200 dark:hover:text-gray-900'}`} onClick={(e) => e.stopPropagation()}>
                          <Eye className="w-4 h-4 mr-2" />View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh]">
                        <DialogHeader><DialogTitle className="text-2xl font-bold">{achievement.title}</DialogTitle></DialogHeader>
                        <div className="space-y-6 max-h-[calc(90vh-120px)] overflow-y-auto">
                          <div className="bg-muted/30 rounded-xl p-6 text-center">
                            <div className="relative">
                              <img 
                                src={achievement.image || "/images-not-found.png"} 
                                alt={`${achievement.title} Certificate`}
                                className="w-auto h-auto max-w-full max-h-[60vh] mx-auto rounded-lg shadow-lg border border-muted-foreground/20 object-contain"
                                style={{ minHeight: '400px' }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
                            </div>
                          </div>
                          <div className="grid gap-4">
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-sm min-w-fit">Category:</span>
                              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">{achievement.category}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-sm block mb-2">Full Description:</span>
                              <p className="text-sm text-muted-foreground leading-relaxed bg-muted/20 p-4 rounded-lg">{achievement.description}</p>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
