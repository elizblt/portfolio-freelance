'use client';
import { motion } from 'framer-motion';

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
          Je m'appelle Élise, je suis développeuse front-end freelance à Montauban. 
          J'aide les marques, startups et structures locales à concevoir des interfaces web
          modernes, rapides et agréables à utiliser.
        </p>
        <p className="mb-6">
          Mon approche est simple : comprendre vos objectifs, proposer des solutions efficaces, 
          et livrer un produit beau, clair et facile à faire évoluer.
        </p>
        <p>
          Du site vitrine à l'application web plus complexe, je vous accompagne avec attention,
          transparence et réactivité.
        </p>
      </motion.div>
    </section>
  );
}
