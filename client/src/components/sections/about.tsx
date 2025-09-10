import GlassCard from "@/components/ui/glass-card";
import { User, Code, Heart, MapPin, Mail, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = ["React", "JavaScript", "TypeScript", "Node.js", "Python", "MongoDB"];
const interests = [
  { name: "Photography", icon: "📷" },
  { name: "Music", icon: "🎵" },
  { name: "Travel", icon: "✈️" },
  { name: "Gaming", icon: "🎮" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">About Me</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personal Info Card */}
          <GlassCard className="p-8 rounded-3xl hover-3d">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
              <User className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Personal Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary h-4 w-4" />
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary h-4 w-4" />
                <span>hello@portfolio.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary h-4 w-4" />
                <span>+84 123 456 789</span>
              </div>
            </div>
          </GlassCard>

          {/* Skills Card */}
          <GlassCard className="p-8 rounded-3xl hover-3d">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-secondary to-accent mx-auto mb-6 flex items-center justify-center">
              <Code className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="neumorphic">
                  {skill}
                </Badge>
              ))}
            </div>
          </GlassCard>

          {/* Interests Card */}
          <GlassCard className="p-8 rounded-3xl hover-3d md:col-span-2 lg:col-span-1">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-accent to-primary mx-auto mb-6 flex items-center justify-center">
              <Heart className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Interests</h3>
            <div className="grid grid-cols-2 gap-3 text-muted-foreground">
              {interests.map((interest) => (
                <div key={interest.name} className="flex items-center gap-2">
                  <span className="text-primary text-lg">{interest.icon}</span>
                  <span>{interest.name}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Bio Section */}
        <GlassCard className="mt-12 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6 text-gradient">My Story</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of experience creating innovative web applications. 
            My journey began with a curiosity about how websites work, and it has evolved into a deep love for crafting 
            beautiful, functional, and user-friendly digital experiences. I specialize in modern JavaScript frameworks 
            and have a keen eye for design and user experience.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
