'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-white text-[#111] px-6 md:px-20 py-32">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-6"
      >
        Hello, moi c’est Élise
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#666] text-lg md:text-xl leading-relaxed max-w-3xl mb-16"
      >
        Développeuse front-end freelance basée à Montauban, j’aide les entreprises, startups et indépendants à concevoir des interfaces web modernes, rapides et intuitives. 
        Mon approche est centrée sur l’écoute, la clarté et l’efficacité. Je crois en un web propre, utile et bien fait.
      </motion.p>

      <section className="space-y-24 max-w-3xl">
        {/* Bloc : parcours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Mon parcours</h2>
          <p className="text-[#666] leading-relaxed">
            Après des études en développement web, j’ai eu l’occasion de travailler sur des projets variés : outils internes, applications métier, sites vitrines, MVPs.
            J’ai appris à créer des interfaces robustes et maintenables, avec un vrai souci du détail et de l’expérience utilisateur.
          </p>
        </motion.div>

        {/* Bloc : philosophie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Ma manière de travailler</h2>
          <p className="text-[#666] leading-relaxed">
            J’aime aller droit au but, comprendre les besoins réels, proposer des solutions simples et les développer proprement. 
            Je privilégie une collaboration fluide, honnête et itérative. Et je suis toujours partante pour apporter des idées.
          </p>
        </motion.div>

        {/* Bloc : valeurs ou traits humains */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Ce qui me définit</h2>
          <ul className="text-[#666] space-y-3 list-disc list-inside">
            <li>Curieuse, toujours en veille sur les outils et bonnes pratiques</li>
            <li>Autonome, mais j’adore collaborer avec des designers</li>
            <li>Organisée, rigoureuse, sensible à l’esthétique</li>
            <li>Calme, à l’écoute, impliquée</li>
          </ul>
        </motion.div>

        {/* Bloc : stack (optionnel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">Stack & outils préférés</h2>
          <p className="text-[#666] leading-relaxed">
            Next.js, Astro, Tailwind, TypeScript, Git, Figma, Framer Motion… Je choisis les bons outils selon chaque projet.
          </p>
        </motion.div>
      </section>

      {/* CTA final */}
      <div className="mt-32 text-center">
        <h3 className="text-3xl font-bold mb-4">Prêt à travailler ensemble ?</h3>
        <p className="text-[#666] mb-6">Discutons de votre projet, vos besoins, vos idées.</p>
        <a
          href="#contact"
          className="bg-[#111] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          Me contacter
        </a>
      </div>
    </main>
  );
}
