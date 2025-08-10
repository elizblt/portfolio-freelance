"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, LayoutDashboard, PenLine, ArrowRight, Check } from "lucide-react";

const services = [
  {
    title: "Site vitrine",
    description: "Site moderne et responsive pour présenter votre activité et générer des leads qualifiés.",
    features: ["Design responsive", "Optimisation SEO", "Formulaire de contact", "Google Analytics", "Hébergement inclus", "Support 3 mois"],
    price: "À partir de 1 500€",
    duration: "7-10 jours",
    icon: <LayoutDashboard size={32} />, 
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "E-commerce",
    description: "Boutique en ligne complète avec paiement sécurisé et gestion des stocks.",
    features: ["Catalogue produits", "Paiement Stripe", "Gestion commandes", "Dashboard admin", "Email automatiques", "Formation incluse"],
    price: "À partir de 3 500€",
    duration: "15-21 jours",
    icon: <Code2 size={32} />, 
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Application web",
    description: "MVP ou application métier sur mesure avec authentification et base de données.",
    features: ["Architecture évolutive", "Base de données", "Authentification", "API REST", "Dashboard", "Tests inclus"],
    price: "À partir de 5 000€",
    duration: "21-30 jours",
    icon: <Wrench size={32} />, 
    color: "#f97316",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Maintenance & Support",
    description: "Accompagnement long terme pour maintenir et faire évoluer votre projet digital.",
    features: ["Mises à jour sécurité", "Sauvegardes", "Monitoring", "Support prioritaire", "Nouvelles fonctionnalités", "Rapports mensuels"],
    price: "299€/mois",
    duration: "Continu",
    icon: <PenLine size={32} />, 
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-500",
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6"
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
            Des solutions digitales qui{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              boostent votre business
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            De la vitrine professionnelle à l'application complexe, je transforme vos idées en outils digitaux performants qui génèrent des résultats mesurables.
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
              className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
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
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Projet sur mesure ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vous avez un projet spécifique ? Contactez-moi pour un devis personnalisé et gratuit.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Obtenir un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}