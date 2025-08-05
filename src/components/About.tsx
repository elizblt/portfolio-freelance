"use client";

import { motion } from "framer-motion";

/**
 * Section À propos revisitée.
 * Fond bleu clair et titres en font-bold. Le bouton CV est bleu foncé pour un
 * contraste moderne.
 */
export default function About() {
  return (
    <>
      <section
         className="py-32 px-6 md:px-20 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#111] mb-8"
        >
          À propos de moi
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-[#666] text-lg leading-relaxed"
        >
          <p className="mb-6">
            Développeuse front‑end passionnée, je suis spécialisée dans la
            création d’interfaces web modernes et accessibles. Après une
            formation en informatique et plusieurs expériences sur des projets
            variés, je travaille aujourd’hui en freelance pour aider des
            entreprises, associations et startups à concrétiser leurs idées.
          </p>
          <p className="mb-6">
            Ma philosophie : un code propre, une UX soignée et une
            communication transparente. J’utilise des technologies comme React,
            Next.js, Tailwind CSS et Node.js pour concevoir des produits
            performants et évolutifs.
          </p>
          <p className="mb-6">
            Outre le développement, je m’intéresse au design d’interface, à
            l’accessibilité et à l’optimisation des performances. J’aime
            apprendre en continu et partager mes connaissances, notamment via
            des articles de blog (à venir) et des ateliers.
          </p>
          <a
            href="/cv-elise.pdf"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition"
          >
            Télécharger mon CV
          </a>
        </motion.div>
      </section>
    </>
  );
}
