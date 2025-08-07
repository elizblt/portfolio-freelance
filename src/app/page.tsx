import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white text-neutral-900">
      <Hero />
      <Services />
      <Skills />
      <CaseStudies />
      <About />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
