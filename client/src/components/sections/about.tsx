import GlassCard from "@/components/ui/glass-card";
import { MapPin, Mail, Phone, GraduationCap, Calendar, Award } from "lucide-react";
import profileImage from "@assets/image_1757492155040.png";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* About Header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full p-1 animate-pulse-slow">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                about
              </div>
            </div>
          </div>
        </div>

        {/* Main About Content */}
        <GlassCard className="p-12 rounded-3xl hover-lift mirror-effect mb-12">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary to-secondary p-2 animate-pulse-slow">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center animate-bounce-slow">
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <p className="text-xl text-muted-foreground mb-4">
                  Hey!!! My name is <span className="font-bold text-primary text-2xl">Bao Huynh Van Nguyen</span> and you can call me Bao.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  I graduated in June 2024 with a degree in <span className="font-semibold text-secondary">Computer Science</span> from Hue University 
                  of Sciences (HUSC) in just three years. My goal is to become an <span className="font-semibold text-accent">AI engineer 
                  specializing in computer vision</span> to enhance products like websites and apps.
                </p>
                <p className="text-lg text-muted-foreground">
                  Currently, I am an AI intern at Sky-Field Corporation, where I focus on digital 
                  transformation (DX) in construction and learn about automatic image generation 
                  models for design applications.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-transparent">
                  <MapPin className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/10 to-transparent">
                  <Mail className="text-secondary h-5 w-5" />
                  <span className="text-muted-foreground">hello@portfolio.com</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-accent/10 to-transparent">
                  <Phone className="text-accent h-5 w-5" />
                  <span className="text-muted-foreground">+84 123 456 789</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-transparent">
                  <Award className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">AI Engineer Intern</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Education Section */}
        <GlassCard className="p-8 rounded-3xl hover-lift mirror-effect">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <GraduationCap className="text-white h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-gradient">Education</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="space-y-4">
                <tr className="border-b border-border/50">
                  <td className="py-4 pr-8 font-semibold text-primary min-w-[120px]">School:</td>
                  <td className="py-4 text-muted-foreground">Hue University of Sciences</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 pr-8 font-semibold text-primary">Major:</td>
                  <td className="py-4 text-muted-foreground">Computer Science</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 pr-8 font-semibold text-primary">GPA:</td>
                  <td className="py-4 text-muted-foreground">3.76 / 4.00</td>
                </tr>
                <tr>
                  <td className="py-4 pr-8 font-semibold text-primary">Graduated:</td>
                  <td className="py-4 text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-secondary" />
                    June 2024
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
