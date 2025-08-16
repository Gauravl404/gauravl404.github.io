import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kumar-gj",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      href: "https://github.com/Gauravl404",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Mail,
      href: "mailto:kumar.gj10@gmail.com",
      label: "Email",
      color: "hover:text-primary",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gradient">
                Gaurav Jaiswal
              </h3>
              <p className="text-muted-foreground mt-2">
                Fullstack Developer & AI Enthusiast
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Crafting intelligent web experiences that bridge the gap between
              innovative technology and user-centered design. Always exploring
              new ways to solve complex problems.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-background border border-border hover:border-primary/50 hover-lift transition-all duration-300 ${color}`}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium">Email:</span>
                <br />
                <a
                  href="mailto:kumar.gj10@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  kumar.gj10@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Location:</span>
                <br />
                Pune, India
              </p>
              <p>
                <span className="font-medium">Phone:</span>
                <br />
                <a
                  href="tel:+917982152677"
                  className="hover:text-primary transition-colors"
                >
                  +91 7982152677
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Gaurav Jaiswal. All rights reserved.
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500 fill-current animate-pulse" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
