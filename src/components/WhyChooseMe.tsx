"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Code, Users, ArrowRight, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: <Clock size={24} />,
    title: "Réactivité",
    description: "Réponse sous 24h et communication transparente tout au long du projet."
  },
  {
    icon: <Shield size={24} />,
    title: "Fiabilité",
    description: "Code propre, sécurisé et maintenu selon les meilleures pratiques."
  },
  {
    icon: <Code size={24} />,
    title: "Moderne",
    description: "Technologies récentes pour des solutions performantes et évolutives."
  },
  {
    icon: <Users size={24} />,
    title: "Accompagnement",
    description: "Formation et support pour vous rendre autonome sur votre projet."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Découverte",
    description: "Analyse de vos besoins, objectifs et contraintes pour bien cerner votre projet.",
    details: ["Appel découverte gratuit", "Audit de l'existant", "Définition du scope"]
  },
  {
    step: "02",
    title: "Conception",
    description: "Design de l'interface et architecture technique adaptée à vos besoins.",
    details: ["Maquettes interactives", "Architecture technique", "Validation avec vous"]
  },
  {
    step: "03",
    title: "Développement",
    description: "Développement itératif avec points réguliers pour suivre l'avancement.",
    details: ["Code propre et documenté", "Tests continus", "Validation étapes"]
  },
  {
    step: "04",
    title: "Livraison",
    description: "Mise en ligne, formation et accompagnement pour votre autonomie.",
    details: ["Mise en production", "Formation incluse", "3 mois de support"]
  }
];


export default function WhyChooseMe() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Why Choose Me */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Pourquoi travailler ensemble ?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Une approche structurée et des valeurs qui guident chaque collaboration
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                {reason.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              Ma méthode de travail
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Un processus éprouvé pour garantir la réussite de votre projet
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-gray-200 -translate-x-8 z-0" />
                )}
                
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative z-10">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-lg">
                    {step.step}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Discutons de vos besoins pour créer ensemble une solution qui vous ressemble.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-sm hover:bg-blue-700 transition-colors duration-200"
            >
              Commençons à en parler
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}