'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Site vitrine pour un restaurant",
    description: "Menu, réservation, horaires, responsive design.",
    image: "/demo-resto.webp",
  },
  {
    title: "App de gestion pour association",
    description: "Dashboard + formulaire d’adhésion + paiement Stripe.",
    image: "/demo-asso.webp",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white" id="projects">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] text-center mb-12">Projets</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden bg-[#f9f9f9] border border-black/5 shadow-sm hover:shadow-md transition"
          >
            <img src={p.image} alt={p.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-[#111]">{p.title}</h3>
              <p className="text-[#666] text-sm">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
