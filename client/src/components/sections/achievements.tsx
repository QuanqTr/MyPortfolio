import GlassCard from "@/components/ui/glass-card";
import { CheckCircle, Trophy, Code, Users, GraduationCap, Star } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    description: "Professional level certification for cloud architecture",
    progress: 100,
    icon: CheckCircle,
    gradient: "from-primary to-secondary",
  },
  {
    id: 2,
    title: "Best Developer Award 2023",
    description: "Recognition for outstanding contribution to team projects",
    progress: 100,
    icon: Trophy,
    gradient: "from-secondary to-accent",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    description: "100+ contributions to popular open source projects",
    progress: 85,
    icon: Code,
    gradient: "from-accent to-primary",
  },
  {
    id: 4,
    title: "Tech Mentor",
    description: "Mentored 20+ junior developers in their career growth",
    progress: 90,
    icon: Users,
    gradient: "from-green-400 to-blue-500",
  },
  {
    id: 5,
    title: "Computer Science Degree",
    description: "Bachelor's degree with honors from University of Technology",
    progress: 100,
    icon: GraduationCap,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 6,
    title: "5-Star Client Reviews",
    description: "Consistent excellent feedback from 50+ satisfied clients",
    progress: 95,
    icon: Star,
    gradient: "from-orange-400 to-red-500",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            
            return (
              <GlassCard key={achievement.id} className="p-6 rounded-3xl hover-3d flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{achievement.description}</p>
                  <div className="loading-bar h-2">
                    <div 
                      className="loading-progress" 
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
