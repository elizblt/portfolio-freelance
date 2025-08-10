"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, LayoutDashboard, PenLine, ArrowRight, Check } from "lucide-react";

const services = [
  {
    title: "Site vitrine",
    description: "Site moderne et responsive pour présenter votre activité avec élégance et professionnalisme.",
    features: ["Design responsive", "Optimisation SEO", "Formulaire de contact", "Google Analytics", "Code optimisé", "Formation à l&apos;utilisation"],
    icon: <LayoutDashboard size={32} />, 
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "E-commerce",
    description: "Boutique en ligne complète avec paiement sécurisé, gestion des stocks et interface d&apos;administration.",
    features: ["Catalogue produits", "Paiement sécurisé", "Gestion commandes", "Dashboard admin", "Email automatiques", "Support technique"],
    icon: <Code2 size={32} />, 
    gradient: "from-slate-600 to-slate-700",
  },
  {
    title: "Application web",
    description: "Application sur mesure avec authentification, base de données et fonctionnalités métier spécifiques.",
    features: ["Architecture évolutive", "Base de données", "Authentification", "API sécurisée", "Interface admin", "Documentation"],
    icon: <Wrench size={32} />, 
    gradient: "from-gray-600 to-gray-700",
  },
  {
    title: "Maintenance & Support",
    description: "Accompagnement continu pour maintenir, sécuriser et faire évoluer votre présence digitale.",
    features: ["Mises à jour sécurité", "Sauvegardes automatiques", "Monitoring", "Support prioritaire", "Évolutions", "Conseils techniques"],
    icon: <PenLine size={32} />, 
    gradient: "from-blue-600 to-slate-600",
  },
];

export default function Services() {
  return (
    <section className="w-full px-6 py-24 md:py-32 bg-gradient-to-b from-gray-50/50 to-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6"
          >
            <Code2 className="w-4 h-4" />
            Mes services
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Des solutions digitales{" "}
            <span className="text-blue-600">
              sur mesure
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            De la vitrine élégante à l&apos;application complexe, je développe des solutions web modernes qui s&apos;adaptent parfaitement à vos besoins et objectifs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full bg-gradient-to-r ${service.gradient}`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                >
                  Discuter du projet
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Un projet spécifique en tête ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Chaque projet est unique. Contactez-moi pour discuter de vos besoins et recevoir une proposition personnalisée.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all duration-300"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}