import GlassCard from "@/components/ui/glass-card";
import { Code, GraduationCap, Users, Building } from "lucide-react";
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect } from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  icon: any;
  color: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Korean BrSE Program & Graduation Thesis",
    company: "FPT SOFTWARE DA NANG",
    location: "Da Nang, Vietnam",
    period: "Mar 2024 - Jul 2025",
    description: "• Korean Bridge Software Engineer Program - comprehensive training\n• Led AI Facial Recognition project achieving 9.8/10 score\n• Top 12 HUE-ICT CHALLENGE 2025 Innovation Contest\n• Tech: ReactJS, NodeJS, face-api.js, TypeScript, Python, PostgreSQL",
    icon: Code,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Club Chairman",
    company: "LỬA XANH SOFT SKILLS CLUB",
    location: "Hue University of Sciences",
    period: "Dec 2023 - Oct 2024",
    description: "• Led student organization for soft skills development\n• Organized workshops, seminars and training programs\n• Enhanced communication, delegation and conflict resolution\n• Successfully increased membership and engagement",
    icon: Users,
    color: "from-pink-500 to-red-500",
  },
  {
    id: 3,
    title: "Student Union & Youth League Officer",
    company: "HUE UNIVERSITY OF SCIENCES",
    location: "Hue City, Vietnam",
    period: "Sep 2022 - Jul 2025",
    description: "• Secretary Board Member - Student Association (2023-2024)\n• Executive Committee - IT Faculty Youth Union (2022-2025)\n• Student Union representative at National Congress of Vietnam Student Union\n• Achieved 'January Star' recognition at university level",
    icon: Building,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "System Analysis & Design Intern",
    company: "VIFIRETEK CORPORATION",
    location: "Vietnam",
    period: "Sep 2022 - Oct 2023",
    description: "• Learned software development lifecycle and architecture\n• Mastered UML for system documentation and design\n• System analysis, design methodologies and deployment\n• Applied theoretical knowledge to real-world scenarios",
    icon: GraduationCap,
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 5,
    title: "Bachelor's Degree in Software Engineering",
    company: "HUE UNIVERSITY OF SCIENCES",
    location: "Hue City, Vietnam",
    period: "Sep 2021 - Jul 2025",
    description: "• GPA: 3.08/4.00 - Software Engineering Major\n• Languages: Java, JavaScript, C#, PHP, Python, TypeScript\n• Tech: ReactJS, NodeJS, PostgreSQL, MySQL, SQL Server\n• Academic Encouragement Scholarship recipient",
    icon: GraduationCap,
    color: "from-green-500 to-blue-500",
  },
];

const TimelineItem = ({ exp, index, isEven, marginTop, IconComponent }: any) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  
  return (
    <div 
      ref={ref}
      className={`absolute w-full flex items-start md:justify-center transition-all duration-700 ease-out animate-slide-in-${isEven ? 'left' : 'right'} ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}
      style={{ 
        top: `${marginTop}px`,
        animationDelay: `${800 + index * 200}ms`
      }}
    >
      {/* Timeline Dot */}
      <div 
        className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10 transition-all duration-500 animate-scale-in ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}
        style={{ 
          top: '50%', 
          transform: 'translate(-50%, -50%)',
          animationDelay: `${800 + index * 200 + 300}ms`
        }}
      ></div>
      
      {/* Content Card */}
      <div className={`ml-20 md:ml-0 md:w-2/5 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <GlassCard className={`p-5 rounded-3xl hover-lift mirror-effect transition-all duration-700 animate-fade-in ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center transition-all duration-500 animate-scale-in ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}
                 style={{ animationDelay: `${800 + index * 200 + 400}ms` }}>
              <IconComponent className="text-white h-4 w-4" />
            </div>
            <div className="flex-1">
              <h3 className={`font-bold text-lg leading-tight transition-all duration-500 animate-slide-in-${isEven ? 'left' : 'right'} ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}
                  style={{ animationDelay: `${800 + index * 200 + 500}ms` }}>
                {exp.title}
              </h3>
              <p className={`text-muted-foreground font-semibold transition-all duration-500 animate-fade-in ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}
                 style={{ animationDelay: `${800 + index * 200 + 600}ms` }}>
                {exp.company}
              </p>
              {exp.location && (
                <p className={`text-sm text-muted-foreground/80 transition-all duration-500 animate-fade-in ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}
                   style={{ animationDelay: `${800 + index * 200 + 700}ms` }}>
                  {exp.location}
                </p>
              )}
            </div>
          </div>
          <p className={`text-sm text-accent font-semibold mb-2 transition-all duration-500 animate-slide-in-up ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}
             style={{ animationDelay: `${800 + index * 200 + 800}ms` }}>
            {exp.period}
          </p>
          <div className={`text-muted-foreground leading-relaxed transition-all duration-700 animate-fade-in ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}
               style={{ animationDelay: `${800 + index * 200 + 900}ms` }}>
            {exp.description.split('\n').map((line: string, lineIndex: number) => (
              <div key={lineIndex} className={`mb-0.5 transition-all duration-500 animate-slide-in-up ${isVisible && exp.isPreloadingComplete ? 'visible' : ''}`}
                   style={{ animationDelay: `${800 + index * 200 + 1000 + lineIndex * 100}ms` }}>
                {line.startsWith('•') ? (
                  <div className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span className="flex-1 text-sm">{line.substring(1).trim()}</span>
                  </div>
                ) : (
                  <span className="text-sm">{line}</span>
                )}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default function Experience() {
  const [isPreloadingComplete, setIsPreloadingComplete] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });

  // Simulate preloading delay and check for actual preloading
  useEffect(() => {
    const checkPreloading = () => {
      // Check if loading screen is still visible or if document is ready
      const loadingScreen = document.querySelector('.loading-screen');
      const isDocumentReady = document.readyState === 'complete';
      
      if (!loadingScreen && isDocumentReady) {
        // Add additional delay to ensure smooth transition after preloading
        setTimeout(() => setIsPreloadingComplete(true), 500);
      } else {
        // Keep checking every 100ms
        setTimeout(checkPreloading, 100);
      }
    };

    checkPreloading();
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`py-16 px-6 bg-gradient-to-br from-muted/30 to-secondary/10 pb-32 relative overflow-hidden transition-all duration-1000 animate-fade-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
    >
      {/* Floating Background Shapes with Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top area */}
        <div className={`absolute top-16 left-8 w-14 h-14 bg-gradient-to-br from-blue-400/15 to-purple-500/10 rounded-full animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{ animationDelay: '200ms' }}></div>
        <div className={`absolute top-8 left-1/3 w-10 h-10 bg-gradient-to-br from-emerald-400/12 to-teal-500/8 rotate-45 animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{ animationDelay: '400ms' }}></div>
        <div className={`absolute top-20 right-16 w-12 h-12 bg-gradient-to-br from-pink-400/15 to-rose-500/10 rounded-full animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{ animationDelay: '600ms' }}></div>
        <div className={`absolute top-32 left-1/4 w-8 h-8 bg-gradient-to-br from-yellow-400/12 to-orange-500/8 rotate-12 animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '800ms'}}></div>
        
        {/* Middle left area */}
        <div className={`absolute top-1/2 left-4 w-8 h-8 bg-gradient-to-br from-violet-400/12 to-purple-500/8 rounded-full animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{ animationDelay: '1000ms' }}></div>
        <div className={`absolute top-2/5 left-12 w-12 h-12 bg-gradient-to-br from-indigo-400/15 to-blue-500/10 rotate-45 animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{ animationDelay: '1200ms' }}></div>
        <div className={`absolute top-3/5 left-6 w-10 h-10 bg-gradient-to-br from-emerald-400/12 to-green-500/8 rotate-12 animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1400ms'}}></div>
        
        {/* Middle right area */}
        <div className={`absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-br from-orange-400/12 to-red-500/8 rotate-12 animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1600ms'}}></div>
        <div className={`absolute top-2/5 right-16 w-8 h-8 bg-gradient-to-br from-rose-400/15 to-pink-500/10 rounded-full animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{ animationDelay: '1800ms' }}></div>
        
        {/* Bottom area */}
        <div className={`absolute bottom-32 left-16 w-14 h-14 bg-gradient-to-br from-pink-400/15 to-rose-500/10 animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '2000ms'}}></div>
        <div className={`absolute bottom-20 right-24 w-16 h-16 bg-gradient-to-br from-green-400/15 to-teal-500/10 rounded-full animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{ animationDelay: '2200ms' }}></div>
        <div className={`absolute bottom-28 left-1/3 w-10 h-10 bg-gradient-to-br from-yellow-400/12 to-orange-500/8 rotate-45 animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{ animationDelay: '2400ms' }}></div>
        <div className={`absolute bottom-36 right-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 rotate-12 animate-float transition-all duration-700 animate-scale-in ${sectionVisible && isPreloadingComplete ? 'visible' : ''}`}
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '2600ms'}}></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 
          ref={titleRef}
          className={`text-5xl font-bold text-center mb-12 text-gradient transition-all duration-1000 animate-fade-in ${titleVisible && isPreloadingComplete ? 'visible' : ''}`}
          style={{ animationDelay: '300ms' }}
        >
          Experience Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full transition-all duration-1000 animate-slide-in-up ${titleVisible && isPreloadingComplete ? 'visible' : ''}`}
               style={{ animationDelay: '600ms' }}></div>
          
          {/* Timeline Items */}
          <div className="relative">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isEven = index % 2 === 0;
              const marginTop = index === 0 ? 0 : index * 220;
              
              return (
                <TimelineItem 
                  key={exp.id}
                  exp={{ ...exp, isPreloadingComplete }}
                  index={index}
                  isEven={isEven}
                  marginTop={marginTop}
                  IconComponent={IconComponent}
                />
              );
            })}
          </div>
          
          {/* Set container height to accommodate all items */}
          <div style={{ height: `${experiences.length * 220}px` }}></div>
        </div>
      </div>
    </section>
  );
}
