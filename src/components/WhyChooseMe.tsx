"use client";

import { motion } from "framer-motion";
import { Code, Clock, Heart, Lightbulb, Shield, Users } from "lucide-react";

const qualities = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Code de qualité",
    description: "Je privilégie un code propre, bien structuré et maintenable. Chaque ligne est pensée pour la performance et la lisibilité.",
    color: "text-blue-600"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Respect des délais",
    description: "La ponctualité est essentielle. Je planifie chaque étape du projet pour respecter les échéances convenues ensemble.",
    color: "text-slate-600"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion du détail",
    description: "Chaque pixel compte. Je porte une attention particulière aux détails qui font la différence dans l&apos;expérience utilisateur.",
    color: "text-blue-500"
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Solutions créatives",
    description: "Face aux défis techniques, je trouve des solutions innovantes et adaptées à vos contraintes spécifiques.",
    color: "text-gray-700"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sécurité prioritaire",
    description: "Vos données et celles de vos utilisateurs sont précieuses. Je développe avec les meilleures pratiques de sécurité.",
    color: "text-slate-700"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Communication transparente",
    description: "Vous êtes informé à chaque étape. Questions, suggestions et feedback sont toujours les bienvenus.",
    color: "text-blue-700"
  }
];

const approach = [
  {
    step: "01",
    title: "Découverte",
    description: "Nous échangeons sur votre projet, vos objectifs et vos contraintes pour bien cerner vos besoins."
  },
  {
    step: "02", 
    title: "Conception",
    description: "Je conçois l&apos;architecture et le design de votre solution en gardant l&apos;utilisateur au centre."
  },
  {
    step: "03",
    title: "Développement",
    description: "Développement itératif avec des points réguliers pour valider l&apos;avancement ensemble."
  },
  {
    step: "04",
    title: "Livraison",
    description: "Tests, mise en ligne et formation pour que vous soyez autonome sur votre nouvel outil."
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4" />
            Mon approche
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Pourquoi travailler{" "}
            <span className="text-blue-600">
              ensemble ?
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez les valeurs qui guident mon travail et l&apos;approche collaborative que je privilégie pour chaque projet.
          </motion.p>
        </div>

        {/* Qualities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${quality.color}`}>
                {quality.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {quality.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ma méthode de travail
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une approche structurée et collaborative pour garantir le succès de votre projet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4 mx-auto shadow-lg">
                  {step.step}
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -translate-x-8 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à démarrer votre projet ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et voyons ensemble comment je peux vous aider à concrétiser vos ambitions digitales.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all duration-300"
          >
            Commençons à en parler
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}