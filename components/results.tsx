"use client"

import { TrendingUp, Users, Zap, Award } from "lucide-react"
import { useCounter } from "@/hooks/use-counter"

const metrics = [
  {
    icon: TrendingUp,
    value: 250,
    suffix: "%",
    label: "Average ROI Increase",
    description: "Our clients see significant returns on their investment",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses trust us with their digital transformation",
  },
  {
    icon: Zap,
    value: 80,
    suffix: "%",
    label: "Faster Time to Market",
    description: "We deliver projects efficiently without compromising quality",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Our clients come back for more projects",
  },
]

function MetricCard({ metric, index }: { metric: (typeof metrics)[0]; index: number }) {
  const { count, ref } = useCounter({ end: metric.value, duration: 2000 })

  return (
    <div
      ref={ref}
      className="text-center p-4 md:p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
        <metric.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
      </div>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        {count}
        {metric.suffix}
      </div>
      <div className="text-base md:text-lg font-semibold mb-2">{metric.label}</div>
      <p className="text-xs md:text-sm text-accent-foreground/70">{metric.description}</p>
    </div>
  )
}

export function Results() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-accent text-accent-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Results That Speak for Themselves
          </h2>
          <p className="text-base md:text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            We don't just build software—we deliver measurable business outcomes
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
