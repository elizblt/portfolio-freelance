'use client';

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold max-w-4xl"
      >
        Développeuse Web freelance à Montauban.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg max-w-xl text-gray-600"
      >
        Je conçois des sites et applications web rapides, modernes et élégants. Mise en ligne en 10 jours.
      </motion.p>
      <div className="mt-8 flex gap-4">
        <a href="#contact" className="px-6 py-3 bg-accent text-white rounded-full font-semibold">Réserver un appel</a>
        <a href="#projects" className="px-6 py-3 border border-accent text-accent rounded-full font-semibold">Voir les projets</a>
      </div>
    </section>
  );
}
