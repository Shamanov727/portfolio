"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "1",
      company: "CF.Digital",
      position: "Frontend Developer",
      location: "Kyiv, Ukraine",
      startDate: "2018",
      endDate: "2019",
      description: [
        "Built and optimized responsive, user-friendly web applications using Vue.js",
        "Integrated APIs with dynamic UI components for seamless user experiences",
        "Collaborated with backend teams to implement efficient data flow",
        "Delivered pixel-perfect implementations from design mockups",
        "Optimized application performance and implemented best practices"
      ],
      technologies: ["Vue.js", "JavaScript", "HTML5", "CSS3", "API Integration"],
    },
    {
      id: "2",
      company: "Freelance Projects",
      position: "Senior Full-Stack Developer",
      location: "Remote",
      startDate: "2019",
      endDate: "Present",
      description: [
        "Developed scalable web applications using Laravel and Vue.js for various clients",
        "Designed RESTful APIs and optimized database structures for high performance",
        "Implemented robust authentication systems and security best practices",
        "Built custom SaaS platforms and e-commerce solutions from scratch",
        "Mentored junior developers and led development teams on complex projects"
      ],
      technologies: ["Laravel", "Vue.js", "React", "PHP", "MySQL", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: "3",
      company: "Recent Projects Portfolio",
      position: "Technical Lead & Developer",
      location: "Global",
      startDate: "2020",
      endDate: "Present",
      description: [
        "StressBallsUK.com: Developed e-commerce platform with custom product configuration",
        "Overmode.com: Built fashion aggregation platform with advanced search capabilities",
        "ExportArts.io: Created award-winning agency website with performance optimization",
        "Implemented scalable architectures handling high traffic and complex business logic",
        "Delivered exceptional user experiences across multiple industries and markets"
      ],
      technologies: ["Laravel", "Vue.js", "MySQL", "E-commerce", "Performance Optimization", "Cloud Deployment"],
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional development journey as a Senior Full-Stack Developer, building scalable applications
            and delivering exceptional results for clients worldwide.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-2 border-background" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover-elevate transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-semibold font-display text-foreground">
                            {experience.company}
                          </h3>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {experience.startDate} - {experience.endDate}
                        </Badge>
                      </div>
                      
                      <h4 className="text-lg font-medium text-primary mb-2">
                        {experience.position}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover-elevate"
                            data-testid={`badge-tech-${tech.toLowerCase()}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}