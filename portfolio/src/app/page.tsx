import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Process />
      <Contact />
    </main>
  );
}