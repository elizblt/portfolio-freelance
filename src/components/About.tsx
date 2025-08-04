"use client";

import { motion } from "framer-motion";

/**
 * Section À propos enrichie.
 * Présente le parcours, l'expérience et les valeurs d'Élise. Un bouton permet de télécharger le CV (à créer).
 */
export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-[#f9f9f9] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-[#111] mb-8"
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
          Développeuse front‑end passionnée, je suis spécialisée dans la création d’interfaces web modernes et
          accessibles. Après une formation en informatique et plusieurs expériences sur des projets variés, je
          travaille aujourd’hui en freelance pour aider des entreprises, associations et startups à concrétiser
          leurs idées.
        </p>
        <p className="mb-6">
          Ma philosophie : un code propre, une UX soignée et une communication transparente. J’utilise des
          technologies comme React, Next.js, Tailwind CSS et Node.js pour concevoir des produits performants et
          évolutifs.
        </p>
        <p className="mb-6">
          Outre le développement, je m’intéresse au design d’interface, à l’accessibilité et à l’optimisation des
          performances. J’aime apprendre en continu et partager mes connaissances, notamment via des articles de blog
          (à venir) et des ateliers.
        </p>
        <a
          href="/cv-elise.pdf"
          className="inline-block mt-4 bg-[#111] text-white px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          Télécharger mon CV
        </a>
      </motion.div>
    </section>
  );
}
