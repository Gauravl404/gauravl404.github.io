import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Target,
} from "lucide-react";
import headshotImage from "@/assets/gaurav-headshot.jpg";
import ResumePDF from "@/assets/GauravJaiswalResumeWeb.pdf";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <div className="w-2 h-2 bg-primary/20 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Gaurav Jaiswal</span>
            </h1>

            <p className="text-2xl lg:text-3xl font-semibold mb-4 text-foreground">
              Building Intelligent Web Experiences
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I craft robust, scalable backend systems and intuitive frontend
              interfaces, with a passion for leveraging AI to create smarter,
              more efficient solutions that solve real-world problems.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={ResumePDF}
                download="GauravJaiswalResumeWeb.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="hero-gradient hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/kumar-gj",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com/Gauravl404",
                  label: "GitHub",
                },
                { icon: Mail, href: "kumar.gj10@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover-lift hover:bg-primary/5 transition-all duration-300"
                  aria-label={label}
                  target="_blank"
                >
                  <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Professional headshot */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>

              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover-lift">
                <img
                  src={headshotImage}
                  alt="Gaurav Jaiswal - Fullstack Developer & AI Enthusiast"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
