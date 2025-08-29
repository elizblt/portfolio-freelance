"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = { id: string; question: string; answer: string };

const RAW_FAQS: Omit<FAQItem, "id">[] = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "Sites vitrine, boutiques en ligne et applications web sur mesure. J’adapte la solution à votre activité et à vos objectifs (prise de contact, réservation, vente, etc.).",
  },
  {
    question: "Combien de temps prend un projet ?",
    answer:
      "Cela dépend du périmètre et de la rapidité des retours. Après un échange, je vous envoie un planning indicatif et les étapes clés. L’idée est d’avancer au bon rythme, sans surprise.",
  },
  {
    question: "Pourrai-je mettre mon site à jour facilement ?",
    answer:
      "Oui. On définit ensemble ce que vous souhaitez modifier (textes, images, actualités…). Soit je prévois des zones simples à éditer, soit je m’occupe des mises à jour pour vous.",
  },
  {
    question: "Gérez-vous le nom de domaine et l’hébergement ?",
    answer:
      "Oui, je peux m’en charger ou vous guider pas à pas. L’objectif : un site en ligne, rapide et sécurisé, avec des sauvegardes et un certificat HTTPS.",
  },
  {
    question: "Et le référencement (SEO) ?",
    answer:
      "Le site est conçu pour être lisible par Google : structure propre, temps de chargement, balises et accessibilité. Pour aller plus loin (contenus, netlinking), je vous conseille une stratégie adaptée.",
  },
  {
    question: "Travaillez-vous avec tous types d’entreprises ?",
    answer:
      "Oui. J’accompagne artisans, commerces de proximité, associations et PME. L’approche reste simple : comprendre vos clients et traduire ça en un site clair et efficace.",
  },
  {
    question: "Y a-t-il une formation et un suivi après la mise en ligne ?",
    answer:
      "Oui. Je vous montre comment utiliser votre site et je reste disponible pour les ajustements. Un accompagnement de démarrage est inclus, puis une maintenance peut être mise en place si besoin.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Des outils actuels et fiables (ex. React/Next.js, TypeScript, Tailwind). Concrètement : un site rapide, durable et facile à faire évoluer.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  // on fabrique des ids stables (utile pour aria-controls et le JSON-LD)
  const faqs: FAQItem[] = useMemo(
    () =>
      RAW_FAQS.map((f, i) => ({
        id: `faq-${i + 1}`,
        ...f,
      })),
    [],
  );

  // JSON-LD SEO
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    }),
    [faqs],
  );

  return (
    <section id="faq" className="px-4 py-16 md:px-6 md:py-20">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-extrabold text-gray-900 md:text-4xl"
          >
            Questions fréquentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-3 text-lg text-gray-600"
          >
            Les points clés pour démarrer sereinement.
          </motion.p>
        </div>

        {/* Liste */}
        <div className="space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === f.id;
            return (
              <motion.article
                key={f.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className={`overflow-hidden rounded-2xl border bg-white shadow-sm ring-1 transition-all ${isOpen ? "border-gray-200 ring-gray-200" : "border-gray-100 ring-gray-100 hover:shadow-md"}`}
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  aria-expanded={isOpen}
                  aria-controls={`${f.id}-panel`}
                  onClick={() => setOpen(isOpen ? null : f.id)}
                >
                  <h3 className="pr-6 text-base font-semibold text-gray-900 md:text-lg">
                    {f.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-900 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${f.id}-panel`}
                      role="region"
                      aria-labelledby={f.id}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm leading-relaxed text-gray-600">
                          {f.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="rounded-2xl border border-gray-100 bg-white/70 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-semibold text-gray-900">
              Une autre question ?
            </h3>
            <p className="mt-2 text-gray-600">
              Écrivez-moi un message rapide : je vous réponds sous 24&nbsp;h
              ouvrées.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white ring-1 ring-neutral-900 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
            >
              Me contacter
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
