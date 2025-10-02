import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Results } from "@/components/results"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Results />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  )
}
