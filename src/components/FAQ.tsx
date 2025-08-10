"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Combien coûte la création d&apos;un site web ?",
    answer: "Les tarifs varient selon la complexité : site vitrine (1 500€+), e-commerce (3 500€+), application web (5 000€+). Chaque projet est unique, je propose toujours un devis personnalisé gratuit après étude de vos besoins."
  },
  {
    question: "Combien de temps faut-il pour développer mon projet ?",
    answer: "Site vitrine : 7-10 jours, E-commerce : 15-21 jours, Application web : 21-30 jours. Ces délais incluent la conception, le développement, les tests et la mise en ligne. Je m&apos;engage sur des délais réalistes et les respecte."
  },
  {
    question: "Que comprend le support après livraison ?",
    answer: "3 mois de support gratuit inclus : corrections de bugs, mises à jour de sécurité, formation à l&apos;utilisation, et assistance technique. Ensuite, maintenance optionnelle à 299€/mois avec nouvelles fonctionnalités."
  },
  {
    question: "Mon site sera-t-il responsive et optimisé mobile ?",
    answer: "Absolument ! Tous mes sites sont développés mobile-first avec un design responsive parfait sur tous les appareils. J&apos;optimise également les performances, le SEO et l&apos;accessibilité pour maximiser votre visibilité."
  },
  {
    question: "Puis-je modifier mon site moi-même après livraison ?",
    answer: "Oui ! J&apos;utilise des CMS intuitifs (Sanity, WordPress) ou développe des interfaces d&apos;administration sur mesure. Formation incluse + documentation complète pour vous rendre autonome dans la gestion de votre contenu."
  },
  {
    question: "Comment se déroule un projet avec vous ?",
    answer: "1) Appel découverte gratuit 2) Cahier des charges détaillé 3) Devis personnalisé 4) Développement avec points d'étape réguliers 5) Tests et validations 6) Livraison et formation 7) Support continu."
  },
  {
    question: "Travaillez-vous avec des entreprises de toute taille ?",
    answer: "Je travaille avec des startups, PME, associations et entrepreneurs. Mon approche s'adapte à chaque contexte : solutions simples pour débuter ou architectures complexes pour des besoins métier spécifiques."
  },
  {
    question: "Garantissez-vous les résultats de mon site ?",
    answer: "Je m&apos;engage sur la qualité technique : performances, sécurité, compatibilité. Pour les résultats business (trafic, conversions), j&apos;optimise selon les meilleures pratiques mais cela dépend aussi de votre stratégie marketing globale."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            Questions fréquentes
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Vous avez des{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              questions ?
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Retrouvez les réponses aux questions les plus fréquentes sur mes services et méthodes de travail.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
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
                <div className="px-8 pb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Une autre question ?
            </h3>
            <p className="text-gray-600 mb-6">
              N&apos;hésitez pas à me contacter pour discuter de votre projet en détail.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Me poser une question
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}