"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description:
      "Built a scalable e-commerce platform with real-time inventory management, payment integration, and AI-powered product recommendations.",
    image: "/modern-ecommerce-dashboard.png",
    results: ["300% increase in sales", "50% faster checkout", "99.9% uptime"],
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI/ML Solutions",
    description:
      "Developed an intelligent analytics platform that uses machine learning to predict customer behavior and optimize marketing campaigns.",
    image: "/ai-analytics-dashboard-with-charts.jpg",
    results: ["40% better predictions", "60% time saved", "2x ROI improvement"],
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
  },
  {
    title: "Automation Workflow System",
    category: "Automation & API Integration",
    description:
      "Created a comprehensive automation system that connects multiple business tools, eliminating manual data entry and reducing errors.",
    image: "/workflow-automation-interface.png",
    results: ["80% time reduction", "Zero data errors", "$50K annual savings"],
    tech: ["Node.js", "REST APIs", "Webhooks", "Redis"],
  },
  {
    title: "Multiplayer Racing Game",
    category: "Game Development",
    description:
      "Designed and developed an immersive 3D racing game with real-time multiplayer, custom physics engine, and cross-platform support.",
    image: "/3d-racing-game-screenshot.jpg",
    results: ["100K+ downloads", "4.8★ rating", "Active community"],
    tech: ["Unity", "C#", "Photon", "Blender"],
  },
]

export function Projects() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-scale-in">
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Real Projects, <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours achieve their goals with custom solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, i) => (
                      <li key={i} className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent"
                  onClick={() => alert("Case study coming soon!")}
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="group shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="flex items-center gap-2">
              Start Your Project Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
