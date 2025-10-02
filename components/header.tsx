"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="flex items-center gap-2 md:gap-3 group"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-26%20at%2010.13.57%20PM-mPQ5qJsH8X5uD0hEQ970JBSk02Szqe.jpeg"
              alt="H&S Solutions Logo"
              className="h-8 md:h-10 lg:h-12 w-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="text-lg md:text-xl lg:text-2xl font-bold hidden sm:block">
              <span className="text-foreground">H&S</span>
              <span className="text-primary"> Solutions</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="ml-2 lg:ml-4 hover:scale-105 transition-transform duration-300">
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="cursor-pointer">
                Get Started
              </a>
            </Button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} className="transition-transform rotate-90" /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-slide-in-left">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 hover:translate-x-2 transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild size="sm" className="w-full hover:scale-105 transition-transform">
                <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="cursor-pointer">
                  Get Started
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
