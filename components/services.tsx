"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Brain, Workflow, TrendingUp, Gamepad2, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "We build powerful web applications that scale with your business. From e-commerce platforms to custom dashboards, we deliver solutions that drive growth.",
    features: ["MERN Stack", "PHP & Python", "WordPress", "Responsive Design"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description:
      "Harness the power of AI to automate tasks, predict trends, and make smarter decisions. We implement intelligent features that give you a competitive edge.",
    features: ["Predictive Analytics", "Automation", "AI Integration", "Smart Features"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Workflow,
    title: "Automation & API Integration",
    description:
      "Stop wasting time on manual tasks. We connect your tools and automate workflows, saving you hours every week and eliminating costly errors.",
    features: ["Process Automation", "Custom APIs", "System Integration", "Real-time Sync"],
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "Get found by customers searching for your services. We optimize your website to rank higher, drive more traffic, and convert visitors into customers.",
    features: ["Technical SEO", "On-page SEO", "Traffic Growth", "Conversion Optimization"],
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description:
      "Create immersive gaming experiences that captivate players. From mobile games to PC titles, we bring your game concept to life with stunning visuals and smooth gameplay.",
    features: ["Unity & Unreal", "2D/3D Games", "Multiplayer", "AI Mechanics"],
    gradient: "from-primary/20 to-primary/5",
  },
]

export function Services() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 relative bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-scale-in">
            <span className="text-sm font-medium text-primary">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Solutions That <span className="text-primary">Solve Real Problems</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We don't just write code—we solve business challenges with technology that works
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-10 md:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:border-primary/50 bg-white hover:-translate-y-2"
              >
                <CardHeader className="space-y-4 p-5 md:p-6">
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed text-sm md:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-5 md:p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="group shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="flex items-center gap-2">
              Discuss Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
