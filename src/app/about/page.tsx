"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-white px-6 py-32 text-[#111] md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-4xl font-extrabold md:text-6xl"
      >
        Hello, moi c’est Élise
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16 max-w-3xl text-lg leading-relaxed text-[#666] md:text-xl"
      >
        Développeuse front-end freelance basée à Montauban, j’aide les
        entreprises, startups et indépendants à concevoir des interfaces web
        modernes, rapides et intuitives. Mon approche est centrée sur l’écoute,
        la clarté et l’efficacité. Je crois en un web propre, utile et bien
        fait.
      </motion.p>

      <section className="max-w-3xl space-y-24">
        {/* Bloc : parcours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-2xl font-bold">Mon parcours</h2>
          <p className="leading-relaxed text-[#666]">
            Après des études en développement web, j’ai eu l’occasion de
            travailler sur des projets variés : outils internes, applications
            métier, sites vitrines, MVPs. J’ai appris à créer des interfaces
            robustes et maintenables, avec un vrai souci du détail et de
            l’expérience utilisateur.
          </p>
        </motion.div>

        {/* Bloc : philosophie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-2xl font-bold">Ma manière de travailler</h2>
          <p className="leading-relaxed text-[#666]">
            J’aime aller droit au but, comprendre les besoins réels, proposer
            des solutions simples et les développer proprement. Je privilégie
            une collaboration fluide, honnête et itérative. Et je suis toujours
            partante pour apporter des idées.
          </p>
        </motion.div>

        {/* Bloc : valeurs ou traits humains */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-2xl font-bold">Ce qui me définit</h2>
          <ul className="list-inside list-disc space-y-3 text-[#666]">
            <li>
              Curieuse, toujours en veille sur les outils et bonnes pratiques
            </li>
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
          <h2 className="mb-4 text-2xl font-bold">Stack & outils préférés</h2>
          <p className="leading-relaxed text-[#666]">
            Next.js, Astro, Tailwind, TypeScript, Git, Figma, Framer Motion… Je
            choisis les bons outils selon chaque projet.
          </p>
        </motion.div>
      </section>

      {/* CTA final */}
      <div className="mt-32 text-center">
        <h3 className="mb-4 text-3xl font-bold">
          Prêt à travailler ensemble ?
        </h3>
        <p className="mb-6 text-[#666]">
          Discutons de votre projet, vos besoins, vos idées.
        </p>
        <a
          href="#contact"
          className="rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Me contacter
        </a>
      </div>
    </main>
  );
}
