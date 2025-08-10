"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Projets
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez mes réalisations et expérimentations techniques
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              
              {/* Content */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a href={project.liveUrl} className="p-1.5 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </a>
                    <a href={project.githubUrl} className="p-1.5 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <Github className="w-4 h-4 text-gray-600" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.summary}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
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
              Intéressé par mon travail ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Ces projets reflètent ma passion pour le développement. Parlons de votre projet !
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-sm hover:bg-blue-700 transition-colors duration-200"
            >
              Créons quelque chose ensemble
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}