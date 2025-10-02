"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { useCounter } from "@/hooks/use-counter"

function HeroStat({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, ref } = useCounter({ end, duration: 2000 })

  return (
    <div
      ref={ref}
      className="p-3 md:p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/10" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 md:mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by Growing Businesses</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-balance animate-fade-in-up">
            We Build Solutions That <span className="text-primary">Drive Your Success</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            From full-stack web apps to AI-powered automation, we transform your business challenges into scalable
            digital solutions that deliver measurable results.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8 md:mb-10 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span>Scalable Solutions</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span>24/7 Support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-fade-in-up delay-400">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto group shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="flex items-center gap-2">
                Get Your Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 bg-white hover:bg-primary/5 hover:scale-105 transition-all duration-300"
            >
              <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>
                View Our Work
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-20 max-w-3xl mx-auto animate-fade-in-up delay-500">
            <HeroStat end={50} suffix="+" label="Projects Delivered" />
            <HeroStat end={98} suffix="%" label="Client Satisfaction" />
            <HeroStat end={5} suffix="+" label="Years Experience" />
            <HeroStat end={24} suffix="/7" label="Support Available" />
          </div>
        </div>
      </div>
    </section>
  )
}
