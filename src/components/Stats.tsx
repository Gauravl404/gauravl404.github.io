import { useEffect, useState } from "react";
import { Code, Users, Award, GitBranch } from "lucide-react";

interface StatItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem = ({
  icon: Icon,
  value,
  label,
  suffix = "",
  delay = 0,
}: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(
      `stat-${label.replace(/\s+/g, "-").toLowerCase()}`
    );
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div
      id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className="text-center animate-fade-in"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4 hover-lift">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div className="text-4xl font-bold text-gradient mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { icon: Code, value: 4, label: "Years Experience", suffix: "+" },
    { icon: GitBranch, value: 20, label: "Projects Deployed", suffix: "+" },
    { icon: Users, value: 15, label: "Clients Served", suffix: "+" },
    { icon: Award, value: 10, label: "Technologies Mastered", suffix: "+" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Proven Track Record of{" "}
            <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Numbers that reflect my commitment to delivering high-quality
            solutions and building lasting professional relationships.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Testimonial preview */}
        {/* <div className="mt-20 max-w-4xl mx-auto">
          <div className="project-card rounded-2xl p-8 text-center animate-scale-in">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-accent fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-foreground mb-6 italic">
              "Gaurav consistently delivers exceptional results, combining
              technical expertise with innovative problem-solving. His ability
              to integrate AI solutions into traditional web applications sets
              him apart."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">JS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Jane Smith</div>
                <div className="text-muted-foreground text-sm">
                  Lead Engineer, TechCorp
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Stats;
