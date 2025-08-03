'use client';

import About from "@/components/About";
import { Hero } from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

export default function Home() {
  return (

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Process />
        <Contact />
      </main>
    </motion.div>

  );
}