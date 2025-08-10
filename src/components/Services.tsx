"use client";

import { motion } from "framer-motion";
import { Code2, ShoppingCart, Zap, ArrowRight, Check } from "lucide-react";

const services = [
  {
    title: "Sites Web",
    description: "Sites modernes et performants pour présenter votre activité avec élégance et professionnalisme.",
    features: ["Design responsive", "Performance optimisée", "SEO technique", "Interface intuitive"],
    icon: <Code2 size={24} />
  },
  {
    title: "E-commerce",
    description: "Boutiques en ligne performantes pour développer votre activité et maximiser vos ventes.",
    features: ["Paiements sécurisés", "Gestion produits", "Analytics intégrés", "Expérience fluide"],
    icon: <ShoppingCart size={24} />
  },
  {
    title: "Applications Web",
    description: "Solutions sur mesure pour automatiser vos processus et digitaliser votre activité.",
    features: ["Architecture scalable", "Intégrations API", "Interfaces métier", "Sécurité renforcée"],
    icon: <Zap size={24} />
  }
];

export default function Services() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Services
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Solutions web sur mesure pour donner vie à vos projets digitaux
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Un projet en tête ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Discutons de vos besoins pour créer une solution adaptée à vos objectifs.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-sm hover:bg-blue-700 transition-colors duration-200"
            >
              Parlons de votre projet
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}