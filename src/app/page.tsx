// Page d'accueil améliorée pour le portfolio d'Élise
// Le <main> applique un dégradé uniforme pour que toutes les sections reposent
// sur le même fond. Les composants sont importés ci‑dessous.

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
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
