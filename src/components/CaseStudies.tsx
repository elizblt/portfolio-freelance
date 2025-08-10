"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, TrendingUp, Users, Clock } from "lucide-react";

const caseStudies = [
  {
    slug: "saas-dashboard-analytics",
    title: "Dashboard Analytics SaaS",
    category: "Application Web",
    summary: "Développement d'un tableau de bord analytics complet pour une startup SaaS avec +10K utilisateurs actifs.",
    context: "Une startup avait besoin d'un dashboard performant pour analyser les données de leurs 10 000+ utilisateurs en temps réel.",
    solution: "Architecture scalable avec Next.js, PostgreSQL et Redis. Interface moderne avec graphiques interactifs et notifications temps réel.",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Chart.js"],
    metrics: [
      { label: "Utilisateurs actifs", value: "10K+", icon: <Users className="w-4 h-4" /> },
      { label: "Temps de chargement", value: "-60%", icon: <Clock className="w-4 h-4" /> },
      { label: "Satisfaction client", value: "98%", icon: <TrendingUp className="w-4 h-4" /> }
    ],
    result: "Interface adoptée par 98% des utilisateurs en 2 semaines. Temps de chargement réduit de 60%.",
    image: "/demo-resto.webp",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    slug: "e-commerce-premium",
    title: "E-commerce Premium - Boutique Mode",
    category: "E-commerce",
    summary: "Création d'une boutique en ligne haut de gamme avec +500 produits et paiement sécurisé.",
    context: "Une marque de mode parisienne cherchait à digitaliser ses ventes avec une expérience shopping premium.",
    solution: "E-commerce Next.js avec Stripe, gestion avancée des stocks, wishlist et recommandations personnalisées.",
    tech: ["Next.js", "Stripe", "Sanity CMS", "Framer Motion", "TypeScript"],
    metrics: [
      { label: "Conversion", value: "+180%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Panier moyen", value: "+45%", icon: <Users className="w-4 h-4" /> },
      { label: "Temps session", value: "+120%", icon: <Clock className="w-4 h-4" /> }
    ],
    result: "Conversion augmentée de 180% et panier moyen de 45% supérieur à l'ancienne solution.",
    image: "/demo-asso.webp",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    slug: "plateforme-reservation",
    title: "Plateforme de Réservation",
    category: "Web App",
    summary: "Système de réservation en ligne pour un réseau de 20+ restaurants avec gestion centralisée.",
    context: "Chaîne de restaurants cherchant à centraliser les réservations et optimiser la gestion des tables.",
    solution: "Plateforme complète avec calendrier intelligent, notifications SMS/email et analytics détaillés.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Twilio"],
    metrics: [
      { label: "Restaurants", value: "20+", icon: <Users className="w-4 h-4" /> },
      { label: "Réservations/jour", value: "500+", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Taux de show", value: "+25%", icon: <Clock className="w-4 h-4" /> }
    ],
    result: "500+ réservations/jour traitées automatiquement. Taux de présentation clients +25%.",
    image: "/demo-resto.webp",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export default function CaseStudies() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Projets réalisés
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Des projets qui{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              génèrent des résultats
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez comment j'ai aidé mes clients à atteindre leurs objectifs business grâce à des solutions digitales sur mesure.
          </motion.p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16">
          {caseStudies.filter(study => study.featured).map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div className={`${i % 2 !== 0 ? "lg:col-start-2" : ""} relative group`}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-gray-100">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  
                  {/* Floating Links */}
                  <div className="absolute top-8 right-8 flex gap-2">
                    <a 
                      href={study.liveUrl} 
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700 group-hover/link:text-indigo-600" />
                    </a>
                    <a 
                      href={study.githubUrl} 
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/link"
                    >
                      <Github className="w-4 h-4 text-gray-700 group-hover/link:text-indigo-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""} space-y-6`}>
                <div>
                  <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-4">
                    {study.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{study.summary}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-gray-50 rounded-2xl">
                      <div className="flex justify-center mb-2 text-indigo-600">
                        {metric.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Technologies utilisées :</div>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href={`#contact`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group/btn"
                >
                  Discuter de votre projet
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Autres réalisations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study, i) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-3">
                      {study.category}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.summary}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {study.metrics.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex gap-2">
                      <a href={study.liveUrl} className="p-2 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-600" />
                      </a>
                      <a href={study.githubUrl} className="p-2 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                        <Github className="w-4 h-4 text-gray-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}