"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const testimonials = [
  {
    name: "Praveen K.",
    content:
      "Great experience working with H&S Solutions . They demonstrated strong knowledge in their field and maintained clear, prompt communication throughout the project. Very professional and easy to work with — highly recommended",
    rating: 5,
  },
  {
    name: "Srinivas B.",
    content:
    "Very good job. Delivered on time as per the agreed plan. Will comeback to H&S for next projects. Appreciate the prompt response and patience. Thank you very much",
    rating: 5,
  },
  {
    name: "Daryna S",
    content:
      "Azwa S. did an excellent job on my motion graphics project. She understood the requirements clearly, delivered exactly what I wanted, and even added her own creativity to make it better. Communication was smooth, deadlines were respected, and the final result was perfect.",
    rating: 5,
  },
  {
    name: "Adnan Anjum C.",
    content:
      "I’m based in Dubai, and this was actually my first time working with H&S. Honestly, I never trusted these, but now I can say it’s worth using. Had a really good experience with this developer, the project was delivered on time and results were better than I expected. They listened carefully and fixed everything quickly. Definitely someone I’d recommend and work with again",
    rating: 5,
  },
]

export function Testimonials() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-scale-in">
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <CardContent className="p-5 md:p-6">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 mb-4 group-hover:text-primary/40 group-hover:scale-110 transition-all duration-300" />
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  
                  <div>
                    <div className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</div>
                    
                  </div>
                </div>
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
              Join Our Happy Clients
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
