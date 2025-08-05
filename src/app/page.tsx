import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    // Fond uniforme appliqué au main
    <main className="flex flex-col bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Hero />
      <Services />
      <Skills />
      <CaseStudies />
      <About />
      <Process />
      <Testimonials />
      <Contact />
      <CTASection />
    </main>
  );
}
