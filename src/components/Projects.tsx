'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Site vitrine pour un restaurant local",
    description:
      "Création d'un site responsive pour un restaurant à Montauban, incluant menu, horaires, réservation et carte Google. Design simple, rapide et adapté aux besoins d’un commerce local.",
    image: "/demo-resto.webp",
  },
  {
    title: "Application de gestion d'adhésions",
    description:
      "Développement d’une app web pour une association avec tableau de bord, formulaires sécurisés, gestion des paiements via Stripe et interface administrateur.",
    image: "/demo-asso.webp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-16 text-center">Projets récents</h2>

      <div className="space-y-20">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`flex flex-col-reverse md:flex-row ${
              i % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-10`}
          >
            {/* Texte */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#111] mb-4">{p.title}</h3>
              <p className="text-[#666] text-base leading-relaxed">{p.description}</p>
            </div>

            {/* Image */}
            <div className="flex-1 w-full h-[240px] md:h-[300px] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
