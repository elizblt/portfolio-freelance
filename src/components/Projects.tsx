'use client';

import { motion } from "framer-motion";

const projects = [
  {
    title: "Démo restaurant Montauban",
    description: "Site vitrine avec menu, horaires, réservation et carte Google.",
    link: "#",
    image: "/demo-restaurant.jpg",
  },
  {
    title: "Application de gestion d'adhésions",
    description: "Dashboard + formulaire + Stripe pour une association locale.",
    link: "#",
    image: "/demo-asso.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projets</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            whileHover={{ scale: 1.02 }}
            className="block bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}