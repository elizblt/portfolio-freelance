import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <Process />
      <Testimonials />
      <CTASection />
    </main>
  );
}
