import Hero from "@/components/Hero";
import WhyChooseMe from "@/components/WhyChooseMe";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import ServicesStoryClean from "@/components/ServicesStoryClean";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-white text-neutral-900">
        <Hero />
        <ServicesStoryClean />
        <Projects />
        <Process />
        <WhyChooseMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
