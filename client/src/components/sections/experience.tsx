import GlassCard from "@/components/ui/glass-card";
import { Briefcase, Code, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Co.",
    period: "2022 - Present",
    description: "Leading a team of 5 developers in building scalable web applications using React, Node.js, and cloud technologies.",
    icon: Briefcase,
    color: "from-primary to-secondary",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency Plus",
    period: "2020 - 2022",
    description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
    icon: Code,
    color: "from-secondary to-accent",
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "StartUp Venture",
    period: "2019 - 2020",
    description: "Started my career building web applications and learning modern development practices in an agile environment.",
    icon: GraduationCap,
    color: "from-accent to-primary",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-muted/30 to-secondary/10">
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
                    <GlassCard className="p-6 rounded-3xl hover-lift mirror-effect">
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
                    </GlassCard>
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
