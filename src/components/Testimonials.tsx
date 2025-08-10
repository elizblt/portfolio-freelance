"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CEO",
    company: "Fashion Boutique Paris",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2b8?w=150&h=150&fit=crop&crop=face",
    content: "Elise a transformé notre vision en une boutique e-commerce exceptionnelle. Les ventes ont augmenté de 180% dès le premier mois. Son professionnalisme et son attention aux détails sont remarquables.",
    rating: 5,
    project: "E-commerce Premium",
    result: "+180% de ventes"
  },
  {
    name: "Thomas Martin",
    role: "Fondateur",
    company: "TechStart Analytics",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Le dashboard développé par Elise gère maintenant plus de 10 000 utilisateurs actifs. L'interface est intuitive et les performances sont excellentes. Nous recommandons vivement !",
    rating: 5,
    project: "Dashboard SaaS",
    result: "10K+ utilisateurs"
  },
  {
    name: "Sophie Leblanc",
    role: "Directrice",
    company: "Restaurant Group",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Notre système de réservation traite désormais 500+ réservations par jour automatiquement. Elise a livré en temps et en heure avec un support exceptionnel.",
    rating: 5,
    project: "Plateforme Réservation",
    result: "500+ réservations/jour"
  },
  {
    name: "David Chen",
    role: "CTO",
    company: "Innovation Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Code propre, architecture scalable et livraison dans les délais. Elise maîtrise parfaitement les technologies modernes. Une collaboration parfaite du début à la fin.",
    rating: 5,
    project: "MVP Startup",
    result: "Architecture scalable"
  },
  {
    name: "Camille Rousseau",
    role: "Responsable Marketing",
    company: "Digital Agency",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content: "Notre nouveau site vitrine génère 3x plus de leads qu'avant. Elise a su comprendre nos enjeux business et proposer des solutions adaptées. Très satisfaite !",
    rating: 5,
    project: "Site Vitrine",
    result: "3x plus de leads"
  },
  {
    name: "Julien Moreau",
    role: "Directeur",
    company: "Local Business",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Excellent travail sur notre site. L'optimisation SEO a porté ses fruits : nous sommes maintenant en première page Google. Communication claire et résultats au rendez-vous.",
    rating: 5,
    project: "Site + SEO",
    result: "Top 3 Google"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Témoignages clients
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Des clients{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              satisfaits et fidèles
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez les retours de mes clients sur nos collaborations et les résultats obtenus ensemble.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { value: "12+", label: "Projets réalisés" },
            { value: "100%", label: "Clients satisfaits" },
            { value: "5.0/5", label: "Note moyenne" },
            { value: "24h", label: "Délai de réponse" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 font-medium">
                  "{testimonial.content}"
                </blockquote>

                {/* Project & Result */}
                <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-2xl">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{testimonial.project}</div>
                    <div className="text-xs text-gray-600">Projet réalisé</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-indigo-600">{testimonial.result}</div>
                    <div className="text-xs text-gray-600">Résultat</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-2xl object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 border border-indigo-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Prêt à rejoindre mes clients satisfaits ?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transformons ensemble votre projet en succès digital. Contactez-moi pour un devis gratuit et personnalisé.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Démarrer mon projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>✓ Devis gratuit</span>
                  <span>✓ Réponse sous 24h</span>
                  <span>✓ Sans engagement</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}