import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseMe from "@/components/WhyChooseMe";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-white text-neutral-900">
        <Hero />
        <Services />
        <Skills />
        <CaseStudies />
        <WhyChooseMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
