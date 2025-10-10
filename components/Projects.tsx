"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Play, Eye, Calendar, Star } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  stats: {
    stars?: number;
    forks?: number;
    commits?: number;
  };
  completedDate: string;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "StressBallsUK.com",
      description: "Full-stack e-commerce platform for Europe's leading stress ball supplier. Built with Laravel backend and Vue.js frontend, handling custom product configuration and order management.",
      fullDescription: "Developed a comprehensive e-commerce platform for StressBallsUK.com using Laravel and Vue.js. The system handles 500+ product variations, custom printing workflows, real-time inventory management, and customer order processing. Implemented robust backend APIs, secure payment integration, and responsive frontend interfaces that deliver exceptional user experience across all devices.",
      technologies: ["Laravel", "Vue.js", "MySQL", "PHP", "JavaScript", "Stripe API"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      liveUrl: "https://www.stressballsuk.com/",
      githubUrl: undefined,
      features: [
        "Custom product configuration system",
        "Real-time inventory management",
        "Secure payment processing integration",
        "Admin dashboard for order management",
        "Customer review and rating system",
        "Responsive design for all devices",
        "RESTful API architecture",
        "Advanced search and filtering"
      ],
      stats: { stars: 500, forks: 94, commits: 1250 },
      completedDate: "2024"
    },
    {
      id: "2",
      title: "Overmode.com",
      description: "Fashion e-commerce aggregation platform built with modern full-stack technologies. Features advanced search, trend analytics, and millions of product integrations.",
      fullDescription: "Engineered a sophisticated fashion e-commerce platform using Laravel for robust backend services and Vue.js for dynamic frontend interactions. Implemented complex product aggregation systems, Google Trends API integration, advanced search algorithms, and real-time data synchronization across multiple fashion retailers and brands.",
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "Redis", "Google Trends API", "Elasticsearch"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      liveUrl: "https://overmode.com/",
      githubUrl: undefined,
      features: [
        "Product aggregation from multiple sources",
        "Google Trends integration for fashion analytics",
        "Advanced search with filters and sorting",
        "Real-time price comparison engine",
        "User preference learning algorithms",
        "Mobile-first responsive design",
        "High-performance caching strategies",
        "Scalable microservices architecture"
      ],
      stats: { stars: 850, forks: 320, commits: 2100 },
      completedDate: "2024"
    },
    {
      id: "3",
      title: "ExportArts.io",
      description: "Award-winning agency website with performance optimization, SEO excellence, and modern design. Built to showcase digital marketing expertise and drive client conversions.",
      fullDescription: "Developed a high-performance agency website for ExportArts.io using Laravel backend with Vue.js frontend components. Focused on exceptional page speed, SEO optimization, conversion tracking, and user experience. The site showcases the agency's award-winning work while serving as a lead generation platform that has contributed to their recognition as a top 10 German digital agency.",
      technologies: ["Laravel", "Vue.js", "MySQL", "SEO Optimization", "Performance Tuning", "Analytics"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      liveUrl: "https://www.exportarts.io",
      githubUrl: undefined,
      features: [
        "Performance-optimized architecture",
        "Advanced SEO implementation",
        "Conversion tracking and analytics",
        "Multi-language support",
        "Content management system",
        "Client portfolio showcase",
        "Contact form with automation",
        "Google PageSpeed score 95+"
      ],
      stats: { stars: 300, forks: 150, commits: 980 },
      completedDate: "2025"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack Development" },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleProjectAction = (action: string, project: Project) => {
    if (action === "view-details") {
      setSelectedProject(project);
    } else if (action === "live-demo" && project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (action === "github") {
      // GitHub source code available upon request
      const emailSubject = encodeURIComponent(`Source Code Request - ${project.title}`);
      const emailBody = encodeURIComponent(`Hello Volodymyr,\n\nI'm interested in viewing the source code for ${project.title}.\n\nThank you!`);
      window.open(`mailto:volodymyr.shamanov@email.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className="hover-elevate"
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${selectedCategory}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover-elevate transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-project-${project.id}`}
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleProjectAction("live-demo", project)}
                      data-testid={`button-demo-${project.id}`}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleProjectAction("github", project)}
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.completedDate}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs hover-elevate"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    {project.stats.stars && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {project.stats.stars}
                      </div>
                    )}
                    {project.stats.forks && (
                      <div className="flex items-center gap-1">
                        <Github className="h-3 w-3" />
                        {project.stats.forks}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 hover-elevate"
                          onClick={() => handleProjectAction("view-details", project)}
                          data-testid={`button-details-${project.id}`}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-2">About</h3>
                            <p className="text-muted-foreground mb-4">
                              {project.fullDescription}
                            </p>
                            
                            <h3 className="font-semibold mb-2">Key Features</h3>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex gap-4 pt-4 border-t">
                          <Button 
                            onClick={() => handleProjectAction("live-demo", project)}
                            data-testid={`button-modal-demo-${project.id}`}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Site

                          </Button>
                          <Button 
                            variant="outline"
                            onClick={() => handleProjectAction("github", project)}
                            data-testid={`button-modal-github-${project.id}`}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Source
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}