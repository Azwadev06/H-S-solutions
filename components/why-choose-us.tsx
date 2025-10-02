"use client"

import type React from "react"

import { Zap, Shield, Users, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Launch faster with our agile process. Most projects delivered in 4-8 weeks without cutting corners",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Sleep easy knowing your data is protected with enterprise-grade security and 99.9% uptime",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "You're not just a client—you're a partner. We're invested in your success and available when you need us",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "50+ successful projects, 98% client retention rate, and countless five-star reviews speak for themselves",
  },
]

export function WhyChooseUs() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-medium text-primary">Why Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Your Success Is <span className="text-primary">Our Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not just developers—we're your technology partners committed to delivering results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:border-primary transition-all group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-white border-2 border-primary/10">
            <p className="text-sm font-medium text-muted-foreground mb-6 text-center">
              Powered by Industry-Leading Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Python",
                "PHP",
                "Unity",
                "Unreal Engine",
                "WordPress",
                "TensorFlow",
                "AWS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-xl bg-secondary border-2 border-border text-sm font-medium hover:border-primary hover:text-primary hover:shadow-md transition-all hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="group shadow-lg">
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="flex items-center gap-2">
                Let's Work Together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
