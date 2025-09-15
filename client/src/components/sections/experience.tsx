import GlassCard from "@/components/ui/glass-card";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "Current Position",
    period: "2024 - Present",
    description: "Developing modern web and mobile applications using cutting-edge technologies. Focused on creating scalable, maintainable solutions.",
    icon: Briefcase,
    color: "from-primary to-secondary",
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Previous Experience",
    period: "2023 - 2024",
    description: "Built responsive web applications with modern frameworks. Collaborated with teams to deliver high-quality software solutions.",
    icon: Code,
    color: "from-secondary to-accent",
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Starting Career",
    period: "2022 - 2023",
    description: "Began professional journey in software development. Learned industry best practices and modern development workflows.",
    icon: GraduationCap,
    color: "from-accent to-primary",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 component-bg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Experience Timeline</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={exp.id} className="relative flex items-center md:justify-center">
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  
                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="info-card hover-lift mirror-effect">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center`}>
                          <IconComponent className="text-white h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-accent font-semibold mb-2">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
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
