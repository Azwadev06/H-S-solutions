import { Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-border bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-26%20at%2010.13.57%20PM-mPQ5qJsH8X5uD0hEQ970JBSk02Szqe.jpeg"
                alt="H&S Solutions Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">
                H&S <span className="text-primary">Solutions</span>
              </span>
            </div>
            <p className="text-sm text-accent-foreground/80 leading-relaxed max-w-md mb-4">
              Transforming businesses through innovative technology solutions. From web development to AI, we build what
              you need to succeed.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/h-s-solutions-biz/"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/Azwadev06"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group"
              >
                <Github className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/hns.solutions/"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="hnssolutions.bizz@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all group"
              >
                <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-accent-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-accent-foreground/70">
              <li>
                <a href="#services" className="hover:text-accent-foreground transition-colors">
                  Full Stack Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-foreground transition-colors">
                  AI/ML Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-foreground transition-colors">
                  Automation & APIs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-foreground transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-foreground transition-colors">
                  Game Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-accent-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-accent-foreground/70">
              <li>
                <a href="#projects" className="hover:text-accent-foreground transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent-foreground transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-accent-foreground/70">© {currentYear} H&S Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-accent-foreground/70">
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
