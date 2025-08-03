'use client';
import { Lightbulb, ClipboardList, Code, UploadCloud, Repeat } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Lightbulb size={24} />,
    title: "Découverte",
    desc: "Échange initial pour comprendre vos besoins, vos contraintes et vos objectifs.",
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Proposition",
    desc: "Plan détaillé, périmètre du projet, délais et budget validés ensemble.",
  },
  {
    icon: <Code size={24} />,
    title: "Développement",
    desc: "Création rapide, itérative et transparente, avec validation à chaque étape.",
  },
  {
    icon: <UploadCloud size={24} />,
    title: "Mise en ligne",
    desc: "Recette, mise en production, tutoriel de prise en main, livrables organisés.",
  },
  {
    icon: <Repeat size={24} />,
    title: "Suivi",
    desc: "Maintenance technique, évolutions sur mesure, accompagnement long terme.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-[#111] text-center mb-16"
      >
        Mon processus en 5 étapes
      </motion.h2>

      <div className="grid md:grid-cols-5 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#f9f9f9] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4 text-[#111]">{step.icon}</div>
            <h3 className="text-lg font-semibold text-[#111] mb-2">{step.title}</h3>
            <p className="text-sm text-[#666] leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
