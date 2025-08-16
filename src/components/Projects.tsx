import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import aiProjectImage from "@/assets/ai-project-mockup.jpg";
import fullstackProjectImage from "@/assets/fullstack-project-mockup.jpg";
import mobileProjectImage from "@/assets/mobile-project-mockup.jpg";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl, featured }: ProjectCardProps) => {
  return (
    <div className={`project-card rounded-2xl overflow-hidden ${featured ? 'lg:col-span-2' : ''} animate-fade-in group`}>
      {/* Project Image */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <Button size="sm" className="bg-primary/90 hover:bg-primary">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="bg-background/90 hover:bg-background">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
        </div>
        
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6 lg:p-8">
        <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 text-sm lg:text-base leading-relaxed">
          {description}
        </p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Action Links */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {liveUrl && (
              <a
                href={liveUrl}
                className="text-primary hover:text-accent transition-colors text-sm font-medium flex items-center"
              >
                View Live <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium flex items-center"
              >
                Source <Github className="ml-1 h-3 w-3" />
              </a>
            )}
          </div>
          <Button variant="ghost" size="sm" className="text-xs hover:text-primary">
            Case Study <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive analytics platform that leverages machine learning algorithms to provide intelligent insights and predictive analytics for business data. Built with real-time data processing and interactive visualizations.",
      image: aiProjectImage,
      tags: ["React", "TypeScript", "Python", "TensorFlow", "FastAPI", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "E-Commerce Microservices Platform",
      description: "Scalable e-commerce solution built with microservices architecture, featuring user authentication, payment processing, inventory management, and order tracking.",
      image: fullstackProjectImage,
      tags: ["Node.js", "Express", "MongoDB", "React", "Docker", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Progressive Web Application",
      description: "High-performance PWA with offline capabilities, push notifications, and responsive design. Achieves 95+ Lighthouse scores across all metrics.",
      image: mobileProjectImage,
      tags: ["Vue.js", "Service Workers", "IndexedDB", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A curated selection of my most impactful work, showcasing expertise in 
            full-stack development, AI integration, and modern web technologies. 
            Each project solves real-world problems with innovative solutions.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              featured={index === 0}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Want to see more of my work?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore my GitHub repositories for additional projects, contributions to open source, 
            and experimental work with cutting-edge technologies.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;