import GlassCard from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart, Users, CheckSquare, TrendingUp, Heart, DollarSign } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time analytics and inventory management.",
    technologies: ["React", "Node.js", "MongoDB"],
    gradient: "from-primary to-secondary",
    icon: ShoppingCart,
    color: "primary",
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A real-time social platform with chat, posts, and community features.",
    technologies: ["React Native", "Firebase", "Socket.io"],
    gradient: "from-secondary to-accent",
    icon: Users,
    color: "secondary",
  },
  {
    id: 3,
    title: "Task Management Tool",
    description: "Collaborative project management with Kanban boards and team analytics.",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    gradient: "from-accent to-primary",
    icon: CheckSquare,
    color: "accent",
  },
  {
    id: 4,
    title: "AI Analytics Dashboard",
    description: "Machine learning powered analytics with predictive insights and visualization.",
    technologies: ["Python", "TensorFlow", "D3.js"],
    gradient: "from-primary via-secondary to-accent",
    icon: TrendingUp,
    color: "primary",
  },
  {
    id: 5,
    title: "Fitness Tracker App",
    description: "Health monitoring app with workout plans, nutrition tracking, and progress analytics.",
    technologies: ["Flutter", "Dart", "SQLite"],
    gradient: "from-green-400 to-blue-500",
    icon: Heart,
    color: "green-600",
  },
  {
    id: 6,
    title: "Crypto Trading Platform",
    description: "Real-time cryptocurrency trading with advanced charts and portfolio management.",
    technologies: ["Next.js", "WebSocket", "Redis"],
    gradient: "from-yellow-400 to-orange-500",
    icon: DollarSign,
    color: "orange-600",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            
            return (
              <GlassCard key={project.id} className="rounded-3xl overflow-hidden hover-3d group">
                {/* Project Preview */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <IconComponent className="text-2xl" />
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="neumorphic text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      className={`flex-1 bg-${project.color} hover:opacity-90 transition-opacity`}
                      data-testid={`button-view-live-${project.id}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 hover:bg-muted transition-colors"
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
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
