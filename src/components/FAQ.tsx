"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer: "Je développe des sites vitrine modernes, des boutiques e-commerce, des applications web sur mesure et assure la maintenance de sites existants. Chaque projet est étudié selon vos besoins spécifiques et votre budget."
  },
  {
    question: "Combien de temps faut-il pour développer mon site ?",
    answer: "Site vitrine simple : 1-2 semaines, Site avec fonctionnalités avancées : 3-4 semaines, E-commerce : 4-6 semaines. Ces délais incluent la conception, le développement, les tests et la mise en ligne."
  },
  {
    question: "Quel est votre processus de travail ?",
    answer: "1) Découverte : Analyse de vos besoins et objectifs 2) Conception : Design et architecture technique 3) Développement : Code moderne avec suivi régulier 4) Livraison : Formation et mise en ligne avec 3 mois de support inclus."
  },
  {
    question: "Mon site sera-t-il optimisé pour mobile ?",
    answer: "Absolument ! Tous mes sites sont développés mobile-first avec un design responsive. J'optimise également les performances, le SEO et l'accessibilité pour maximiser votre visibilité sur tous les appareils."
  },
  {
    question: "Proposez-vous de la formation ?",
    answer: "Oui, la formation est incluse dans tous mes projets. Je vous accompagne pour que vous soyez autonome dans la gestion de votre contenu, avec documentation complète et support technique pendant 3 mois."
  },
  {
    question: "Travaillez-vous avec tous types d'entreprises ?",
    answer: "Je collabore avec des entrepreneurs, startups, PME et associations. Mon approche s'adapte à chaque contexte : solutions simples pour débuter ou architectures plus complexes selon vos besoins métier."
  },
  {
    question: "Comment se passe le suivi après livraison ?",
    answer: "3 mois de support gratuit sont inclus : corrections de bugs, mises à jour de sécurité, assistance technique et conseils. Ensuite, je propose un service de maintenance optionnel pour les évolutions futures."
  },
  {
    question: "Utilisez-vous des technologies modernes ?",
    answer: "Je privilégie les technologies actuelles et éprouvées : Next.js, React, TypeScript, Tailwind CSS. Cela garantit des sites rapides, sécurisés, maintenables et évolutifs dans le temps."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Questions fréquentes
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Retrouvez les réponses aux questions les plus courantes
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base font-semibold text-gray-900 pr-6">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Une autre question ?
            </h3>
            <p className="text-gray-600 mb-6">
              N&apos;hésitez pas à me contacter pour discuter de votre projet.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-sm hover:bg-blue-700 transition-colors duration-200"
            >
              Me contacter
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}