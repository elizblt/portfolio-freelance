"use client";

import { motion } from "framer-motion";
import { Clock, FileCheck, Gauge, LifeBuoy } from "lucide-react";

export default function WhyChooseMe() {
  const items = [
    {
      icon: Clock,
      title: "Réactivité 24 h",
      text: "Premier retour sous 24 h ouvrées.",
    },
    {
      icon: FileCheck,
      title: "Transparence",
      text: "Devis clair et étapes lisibles.",
    },
    {
      icon: Gauge,
      title: "Performance",
      text: "Site rapide, mobile, prêt pour le SEO.",
    },
    {
      icon: LifeBuoy,
      title: "Accompagnement",
      text: "Aide à la prise en main et suivi.",
    },
  ];

  return (
    <section aria-label="Engagements" className="px-4 py-10 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 ring-1 ring-gray-200">
                  <Icon className="h-4 w-4 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{title}</div>
                  <div className="text-sm text-gray-600">{text}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
