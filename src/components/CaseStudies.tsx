"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    slug: "portfolio-personnel",
    title: "Portfolio Personnel Moderne",
    category: "Site Vitrine",
    summary: "Création de mon propre portfolio avec Next.js 14, animations fluides et design responsive.",
    context: "Besoin d&apos;une vitrine professionnelle pour présenter mes compétences et attirer des clients potentiels.",
    solution: "Site développé avec Next.js 14, Tailwind CSS et Framer Motion. Design moderne, animations fluides et optimisation SEO complète.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Performance parfaite (100/100 Lighthouse)",
      "Responsive design sur tous appareils",
      "Animations fluides et professionnelles"
    ],
    image: "/demo-resto.webp",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    slug: "todo-app-moderne",
    title: "Todo App avec React & TypeScript",
    category: "Application Web",
    summary: "Application de gestion de tâches moderne avec authentification, filtres avancés et interface intuitive.",
    context: "Projet personnel pour maîtriser React, TypeScript et les bonnes pratiques de développement moderne.",
    solution: "App React avec gestion d'état avancée, authentification JWT et interface utilisateur soignée avec animations.",
    tech: ["React", "TypeScript", "Context API", "CSS Modules"],
    highlights: [
      "Gestion d'état complexe maîtrisée",
      "Code TypeScript type-safe à 100%",
      "Interface utilisateur intuitive"
    ],
    image: "/demo-asso.webp",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    slug: "clone-spotify",
    title: "Clone Spotify Interface",
    category: "Challenge UI",
    summary: "Reproduction fidèle de l'interface Spotify avec lecteur audio fonctionnel et animations.",
    context: "Défi technique personnel pour reproduire une interface complexe et travailler l&apos;intégration audio.",
    solution: "Clone développé avec React et CSS avancé, incluant un lecteur audio personnalisé et navigation fluide.",
    tech: ["React", "CSS3", "Web Audio API", "Responsive Design"],
    highlights: [
      "Reproduction pixel-perfect",
      "Lecteur audio fonctionnel",
      "Animations et transitions fluides"
    ],
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4" />
            Mes projets
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Projets & {" "}
            <span className="text-blue-600">
              réalisations
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez mes projets personnels et expérimentations techniques qui démontrent ma maîtrise des technologies modernes.
          </motion.p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16">
          {projects.filter(project => project.featured).map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div className={`${i % 2 !== 0 ? "lg:col-start-2" : ""} relative group`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-slate-600/15 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-gray-100">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  
                  {/* Floating Links */}
                  <div className="absolute top-8 right-8 flex gap-2">
                    <a 
                      href={project.liveUrl} 
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700 group-hover/link:text-blue-600" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/link"
                    >
                      <Github className="w-4 h-4 text-gray-700 group-hover/link:text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""} space-y-6`}>
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{project.summary}</p>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Points clés :</div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-700">Technologies utilisées :</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
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
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 group/btn"
                  >
                    Voir le projet
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                  >
                    Code source
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Autres projets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-3">
                      {project.category}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.summary}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex gap-2">
                      <a href={project.liveUrl} className="p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-600" />
                      </a>
                      <a href={project.githubUrl} className="p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                        <Github className="w-4 h-4 text-gray-600" />
                      </a>
                    </div>
                  </div>
                </div>
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
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Intéressé par mon travail ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ces projets reflètent ma passion pour le développement web et ma volonté d&apos;apprendre continuellement. Parlons de votre projet !
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all duration-300"
            >
              Créons quelque chose ensemble
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}