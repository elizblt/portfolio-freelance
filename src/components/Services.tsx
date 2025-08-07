"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, LayoutDashboard, PenLine } from "lucide-react";

const services = [
  {
    title: "Site vitrine",
    description: "Des sites rapides, modernes et responsive pour mettre en valeur votre activité locale.",
    icon: <LayoutDashboard size={24} />, 
    color: "#6366f1",
  },
  {
    title: "Application web / MVP",
    description: "Développement de MVP performants avec authentification, base de données, et dashboard.",
    icon: <Code2 size={24} />, 
    color: "#10b981",
  },
  {
    title: "Maintenance & évolution",
    description: "Accompagnement long terme pour garantir la sécurité et l’évolution de votre site.",
    icon: <Wrench size={24} />, 
    color: "#f97316",
  },
  {
    title: "Intégration Figma",
    description: "Intégration fidèle de vos maquettes Figma avec animations et responsive design.",
    icon: <PenLine size={24} />, 
    color: "#ec4899",
  },
];

export default function Services() {
  return (
    <section className="w-full px-6 py-24 md:py-32 lg:py-40 font-['General Sans']" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-4">
          Mes services pour donner vie à vos projets
        </h2>
        <p className="text-lg text-neutral-600 mb-16 max-w-2xl mx-auto">
          De la vitrine simple à l’application complète, je vous accompagne à chaque étape avec des solutions adaptées et des résultats mesurables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.025 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="relative bg-white rounded-3xl p-8  group transition-all duration-300 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <div
                className="absolute top-0 left-0 h-[3px] w-full rounded-t-3xl"
                style={{ backgroundColor: service.color }}
              />

              <div className="flex items-center gap-5">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 160, damping: 14 }}
                  className="w-14 h-14 flex items-center justify-center rounded-xl shrink-0"
                  style={{
                    backgroundColor: service.color + "0D",
                    color: service.color,
                    boxShadow: `0 4px 12px ${service.color}26`,
                    border: `1px solid ${service.color}33`,
                  }}
                >
                  {service.icon}
                </motion.div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold text-[#111] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}