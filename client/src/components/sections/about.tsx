import GlassCard from "@/components/ui/glass-card";
import { MapPin, Mail, Phone, GraduationCap, Calendar, Award } from "lucide-react";
import profileImage from "@assets/team-1.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`mb-10 px-6 animate-fade-in ${sectionVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto max-w-6xl relative">
        {/* About Header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="relative">
            {/* <div className="w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full p-1 animate-pulse-slow">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                about
              </div>
            </div> */}
          </div>
        </div>

        {/* Inspiration Quote - Separate Section */}
        <div 
          ref={quoteRef}
          className={`text-center mb-6 animate-fade-in ${quoteVisible ? 'visible' : ''}`}
        >
          <div className="text-2xl md:text-3xl font-light text-muted-foreground/80 mb-2 italic">
            "Simplicity is the bridge between users and technology"
          </div>
          <div className="text-sm text-muted-foreground/60 tracking-wide">
            - Design Philosophy
          </div>
        </div>

        {/* Floating Geometric Art - Decorative Only */}
        <div className="relative mb-8 h-32 overflow-visible">
          {/* Floating Shapes Background */}
          <div className="absolute inset-0">
            {/* Large Circle */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-blue-400/25 to-purple-500/25 rounded-full animate-float delay-0"></div>
            
            {/* Medium Hexagon */}
            <div className="absolute top-6 right-16 w-10 h-10 bg-gradient-to-br from-green-400/25 to-teal-500/25 rotate-12 animate-float delay-1000" 
                 style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
            </div>
            
            {/* Small Triangle */}
            <div className="absolute top-12 left-1/3 w-8 h-8 bg-gradient-to-br from-pink-400/25 to-rose-500/25 animate-float delay-2000"
                 style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}>
            </div>
            
            {/* Medium Square */}
            <div className="absolute top-10 right-8 w-9 h-9 bg-gradient-to-br from-yellow-400/25 to-orange-500/25 rotate-45 animate-float delay-500"></div>
            
            {/* Small Circle */}
            <div className="absolute top-12 left-1/4 w-6 h-6 bg-gradient-to-br from-indigo-400/25 to-blue-500/25 rounded-full animate-float delay-1500"></div>
            
            {/* Tiny Diamond */}
            <div className="absolute top-10 right-1/3 w-5 h-5 bg-gradient-to-br from-cyan-400/25 to-blue-500/25 rotate-45 animate-float delay-3000"></div>
          </div>
        </div>

        {/* Main About Content */}
        <div 
          ref={profileRef}
          className={`info-card hover-lift mirror-effect mb-8 animate-slide-in-left ${profileVisible ? 'visible' : ''}`}
        >
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary to-secondary p-2 animate-pulse-slow">
                  <img
                    src={profileImage}
                    alt="Trần Đại Quang"
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
                  Hi there! My name is <span className="font-bold text-primary text-2xl">Trần Đại Quang</span> and I'm a passionate Front-end Developer/UX-UI Designer.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  I graduated in July 2025 with a degree in  <span className="font-bold text-primary">Software Engineering</span> from Hue University of Sciences, Hue University. My career goal is to become a <span className="font-bold text-primary">UX-UI Designer and a bridge system engineer (BrSE)</span>
                  
                </p>
                <p className="text-lg text-muted-foreground">
                I previously completed a one-year internship at FPT Software Da Nang in the BrSE 01 program (Korean language track). Currently, I am seeking opportunities as an intern or fresher Front-end developer, UX/UI designer at companies that value young talents who are eager to learn and dedicated to contributing.

                </p>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-transparent">
                  <MapPin className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">Hue City, Vietnam</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/10 to-transparent">
                  <Mail className="text-secondary h-5 w-5" />
                  <span className="text-muted-foreground">tdquang.203@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-accent/10 to-transparent">
                  <Phone className="text-accent h-5 w-5" />
                  <span className="text-muted-foreground">+84 33 442 4235</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-transparent">
                  <Award className="text-primary h-5 w-5" />
                  <span className="text-muted-foreground">Front-end Developer - UX/UI Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div 
          ref={infoRef}
          className={`info-card hover-lift mirror-effect animate-slide-in-right ${infoVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <GraduationCap className="text-white h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-gradient">Professional Info</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="space-y-4">
                <tr className="border-b border-border/50">
                  <td className="py-4 pr-8 font-semibold text-primary min-w-[120px]">School:</td>
                  <td className="py-4 text-muted-foreground">University of Science, Hue University</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 pr-8 font-semibold text-primary">GPA:</td>
                  <td className="py-4 text-muted-foreground">3.08/4.00</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 pr-8 font-semibold text-primary">Languages:</td>
                  <td className="py-4 text-muted-foreground">English (B1), Korean (Elementary)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 pr-8 font-semibold text-primary">Programming Skills:</td>
                  <td className="py-4 text-muted-foreground">Proficient in Java, JavaScript, PHP</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4 pr-8 font-semibold text-primary">Requirements Analysis & System Design:</td>
                  <td className="py-4 text-muted-foreground">Creating business rules, drawing flowcharts, screen diagrams, database diagrams, etc.</td>
                </tr>
                <tr>
                  <td className="py-4 pr-8 font-semibold text-primary">Soft Skills:</td>
                  <td className="py-4 text-muted-foreground">Strong communication, teamwork, project management, and critical thinking skills with proven ability to collaborate effectively and manage projects</td>
                </tr>
                <tr>
                  <td className="py-4 pr-8 font-semibold text-primary">Tools:</td>
                  <td className="py-4 text-muted-foreground">Figma | Photoshop | Illustrator</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
