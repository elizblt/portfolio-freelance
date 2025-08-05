"use client";

import { motion } from "framer-motion";

/**
 * Section CaseStudies modernisée.
 * Fond bleu pastel et cartes translucides à bordure bleu clair. Les titres des
 * projets sont en font-semibold pour plus de finesse.
 */
const caseStudies = [
  {
    slug: "site-resto-local",
    title: "Refonte complète d'un restaurant local",
    summary:
      "Création d’un site moderne pour un restaurant à Montauban afin d’améliorer sa visibilité et augmenter les réservations.",
    context:
      "Le propriétaire du restaurant possédait un site obsolète, non responsive et mal référencé.",
    solution:
      "Nous avons conçu une nouvelle identité visuelle, développé un site Next.js performant avec système de réservation en ligne et intégration Google Maps.",
    tech: ["Next.js", "Tailwind CSS", "Stripe", "Framer Motion"],
    result:
      "+35 % de réservations en ligne et un taux de rebond réduit de 20 %.",
    image: "/demo-resto.webp",
  },
  {
    slug: "app-gestion-association",
    title: "Application de gestion pour une association culturelle",
    summary:
      "Développement d’une application web pour gérer les adhésions, les événements et les paiements des membres.",
    context:
      "L’association utilisait des feuilles Excel éparses pour suivre ses membres et gérer les paiements.",
    solution:
      "Mise en place d’un back‑office avec tableaux de bord, formulaire d’adhésion sécurisé et paiements automatisés via Stripe.",
    tech: ["React", "Node.js", "Prisma", "Stripe"],
    result:
      "Gain de temps administratif de 50 % et expérience utilisateur simplifiée.",
    image: "/demo-asso.webp",
  },
];

export default function CaseStudies() {
  return (
    <>
      <section
        id="projects"
        className="py-24 px-6 md:px-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-16 text-center">
          Études de cas
        </h2>
        <div className="space-y-20">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col-reverse md:flex-row ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10 bg-white/70 backdrop-blur-lg p-6 rounded-xl border border-blue-100 shadow-lg`}
            >
              {/* Texte de l'étude de cas */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#111] mb-4">
                  {study.title}
                </h3>
                <p className="text-[#666] mb-3">
                  <strong>Contexte :</strong> {study.context}
                </p>
                <p className="text-[#666] mb-3">
                  <strong>Solution :</strong> {study.solution}
                </p>
                <p className="text-[#666] mb-3">
                  <strong>Technologies :</strong> {study.tech.join(", ")}
                </p>
                <p className="text-[#666] mb-5">
                  <strong>Résultat :</strong> {study.result}
                </p>
                <a
                  href={`/case-studies/${study.slug}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Voir l’étude de cas complète
                </a>
              </div>
              {/* Image */}
              <div className="flex-1 w-full h-[240px] md:h-[300px] rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
