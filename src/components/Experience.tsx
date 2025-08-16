import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Rahi platform technologies Pvt. Ltd.",
      duration: "Jan 2024 - Present",
      color: "bg-slate-800",
      achievements: [
        "Architected and led the backend development of a cloud-native Loan Origination & Management System (LOS/LMS), resulting in a 40% reduction in loan processing time.",
        "Engineered a resilient, containerized microservices architecture using Spring Boot and Kubernetes, achieving sub-200ms latency and supporting 5,000+ concurrent users.",
        "Owned the end-to-end design of critical modules, including a dynamic rule engine and workflow orchestrator, which automated over 80% of manual verification steps.",
        "Pioneered a configuration-driven workflow engine using MongoDB, empowering non-technical users to customize loan products and slashing time-to-market by 60%.",
        "Championed best practices by implementing a robust CI/CD pipeline and enforcing TDD, achieving 95% code coverage and reducing production bugs by 50%.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Codewalla software Pvt. Ltd.",
      duration: "July 2021 - Dec 2023",
      color: "bg-emerald-600",
      achievements: [
        "Developed and deployed scalable, event-driven microservices using Spring Boot and Spring Batch, processing over 1 million transactions daily with 99.99% uptime.",
        "Successfully integrated OpenAI APIs to launch an intelligent AI assistant, which handled 30% of initial customer support queries and improved user engagement.",
        "Architected a fault-tolerant backend on AWS (EKS, Lambda, S3), leveraging Infrastructure-as-Code (Terraform) to ensure seamless scalability and disaster recovery.",
        "Implemented a real-time data streaming pipeline with Apache Kafka, which increased data processing throughput by 30% and enabled live analytics dashboards.",
        "Replaced REST with gRPC for inter-service communication, reducing network latency by 45% and enhancing data consistency across the distributed system.",
      ],
    },
    {
      title: "SDE - Intern",
      company: "Vamdev Technology",
      duration: "March 2020 - Nov 2020",
      color: "bg-slate-800",
      achievements: [
        "Developed key features for a .NET C# application to interface with DATALOGGER hardware, enabling real-time data acquisition and visualization.",
        "Implemented data validation and cleansing algorithms that reduced the error rate in incoming device data by 25%, ensuring more accurate reporting.",
        "Integrated a new hardware device by implementing its proprietary SDK, expanding the platform's compatibility and market reach.",
        "Actively participated in code reviews and debugging sessions, contributing to a 15% reduction in pre-release bugs and improving software quality.",
        "Collaborated with senior engineers to troubleshoot and resolve complex software defects, improving overall application stability and performance.",
      ],
    },
    {
      title: "Backend Trainee",
      company: "Crio.do",
      duration: "January 2020 - April 2020",
      color: "bg-emerald-600",
      achievements: [
        "Developed Python scripts to automate system health checks and service configuration, reducing manual setup time by over 70%.",
        "Engineered a modular adapter pattern to integrate three new stock quote APIs into a portfolio analyzer, expanding data source reliability.",
        "Implemented core IDE functionalities (e.g., search/replace, undo/redo, file I/O) for a custom Java-based IDE, enhancing developer productivity.",
        "Wrote comprehensive unit and integration tests for new features, ensuring code quality and adherence to project requirements.",
        "Applied Git for version control and participated in Agile ceremonies, gaining hands-on experience in a collaborative development environment.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Ideal Village",
      duration: "April 2019 - May 2019",
      color: "bg-red-600",
      achievements: [
        "Developed and launched five responsive landing pages using HTML, CSS, and JavaScript, leading to a 15% increase in user engagement.",
        "Contributed to backend feature development by writing efficient PHP scripts and SQL queries to fetch and display dynamic content.",
        "Optimized web assets and code to improve average page load speeds by 20%, significantly enhancing the overall user experience.",
        "Worked closely with the design team to translate Figma mockups into functional, pixel-perfect, and cross-browser compatible web pages.",
        "Assisted in maintaining the existing codebase by fixing minor bugs and implementing small UI enhancements based on user feedback.",
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles in software development and
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="project-card ">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Company Header */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {exp.company.charAt(0)}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.duration.split(" - ")[1]?.split(" ")[1] || "2020"}
                    </Badge>
                  </div>

                  {/* Title & Company */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {exp.company}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        • {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
