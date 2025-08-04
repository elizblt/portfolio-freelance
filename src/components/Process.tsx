"use client";

import { Lightbulb, ClipboardList, Code, UploadCloud, Repeat } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Lightbulb size={28} />,
    title: "Découverte",
    desc: "Premier échange pour comprendre vos objectifs, votre secteur et vos utilisateurs. Nous définissons ensemble les priorités.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Planification",
    desc: "Rédaction du cahier des charges, estimation des délais et budget. Vous recevez une proposition détaillée et un calendrier clair.",
  },
  {
    icon: <Code size={28} />,
    title: "Développement",
    desc: "Conception et développement itératifs avec démonstrations régulières. Vous suivez l’avancement et validez chaque étape.",
  },
  {
    icon: <UploadCloud size={28} />,
    title: "Mise en ligne",
    desc: "Tests, ajustements finaux et déploiement sur un environnement de production. Je vous forme à la prise en main.",
  },
  {
    icon: <Repeat size={28} />,
    title: "Suivi",
    desc: "Maintenance technique, mise à jour et évolutions. Je reste disponible pour faire évoluer votre projet à long terme.",
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
