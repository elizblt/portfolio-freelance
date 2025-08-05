"use client";

import { motion } from "framer-motion";
import { Monitor, LayoutDashboard, Wrench, Rocket, Paintbrush, Layers } from "lucide-react";

/**
 * Données décrivant les différents services proposés.
 */
const services = [
  {
    icon: Monitor,
    title: "Site vitrine",
    desc:
      "Je conçois des sites vitrines rapides et responsive qui valorisent votre marque et améliorent votre visibilité locale.",
  },
  {
    icon: LayoutDashboard,
    title: "MVP / Application web",
    desc:
      "Vous avez une idée de produit ? Je développe des MVP performants avec authentification, base de données et tableau de bord.",
  },
  {
    icon: Wrench,
    title: "Maintenance & évolution",
    desc:
      "Je vous accompagne après la mise en ligne pour assurer la sécurité et l’évolution continue de votre site.",
  },
  {
    icon: Rocket,
    title: "Intégration Figma",
    desc:
      "Je transforme vos maquettes Figma en pages web pixel‑perfect avec animations fluides.",
  },
];

/**
 * Section Services.
 */
export default function ServicesSection() {
  return (
    <section className="bg-[#f9f9f9] py-24 px-6 md:px-20 font-['General Sans']">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#111] mb-4">Mes services</h2>
        <p className="text-lg text-[#666]">
          De la vitrine simple à l’application complète, je vous accompagne à chaque étape avec des solutions sur-mesure et des résultats concrets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            color: "#8A63D2",
            icon: Monitor,
            title: "Site vitrine moderne",
            description:
              "Des sites rapides, responsive et impactants pour valoriser votre marque et améliorer votre présence en ligne.",
          },
          {
            color: "#00C2A8",
            icon: Layers,
            title: "Application web (MVP)",
            description:
              "Je développe votre prototype ou votre outil web avec base de données, authentification et dashboard.",
          },
          {
            color: "#FF6B6B",
            icon: Wrench,
            title: "Maintenance & évolution",
            description:
              "Je vous accompagne après la mise en ligne pour corriger, améliorer et faire évoluer votre site ou app.",
          },
          {
            color: "#FFA600",
            icon: Paintbrush,
            title: "Intégration Figma",
            description:
              "Je transforme vos maquettes en pages web fluides, responsive et pixel-perfect avec animations.",
          },
        ].map(({ color, icon: Icon, title, description }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative bg-white rounded-[30px] shadow-xl p-6 transform hover:rotate-0 transition-all duration-300 ${
              i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
            }`}
          >
            <div className="absolute -top-3 left-6 h-2 w-[60px] rounded-full" style={{ backgroundColor: color }} />
            <div className="mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
                style={{ backgroundColor: color }}
              >
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#111] mb-2">{title}</h3>
            <p className="text-[#555] text-sm">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
