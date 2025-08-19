"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink, Heart, Linkedin, Github, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Accueil", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Projets", href: "#projects" },
  { name: "À propos", href: "#about" },
  { name: "Contact", href: "#contact" }
];

const services = [
  "Sites web modernes",
  "E-commerce",
  "Applications web",
  "Maintenance & support"
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Élise Boillat
              </h3>
              <p className="text-blue-400 font-medium mb-6">Développeuse Web Freelance</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Développeuse web freelance passionnée, je crée des solutions digitales 
                modernes et performantes qui donnent vie à vos projets. 
                Basée à Montauban, j&apos;accompagne clients et entreprises dans leur transformation numérique.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a 
                    href="mailto:elise@example.com"
                    className="hover:text-white transition-colors"
                  >
                    elise@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a 
                    href="tel:+33612345678"
                    className="hover:text-white transition-colors"
                  >
                    +33 6 12 34 56 78
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Montauban, France</span>
                </div>
                
                {/* Réseaux sociaux */}
                <div className="pt-2">
                  <p className="text-sm text-gray-400 mb-3">Suivez-moi</p>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href="https://linkedin.com/in/elise-boillat"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-4 h-4 text-gray-300 group-hover:text-white" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/elise-boillat"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 text-gray-300 group-hover:text-white" />
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/elise_boillat"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-4 h-4 text-gray-300 group-hover:text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Navigation</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="text-gray-300 hover:text-white transition-all duration-300 text-base font-medium hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 text-base font-medium">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contact');
                  }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Démarrer un projet
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <p className="text-xs text-gray-400 mt-3">
                  Réponse sous 24h • Devis gratuit
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 pt-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-400"
              whileHover={{ scale: 1.02 }}
            >
              <span>© {currentYear} Élise Boillat. Fait avec</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>depuis Montauban.</span>
            </motion.div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <motion.a 
                href="/mentions-legales"
                className="hover:text-white transition-all duration-300 hover:underline underline-offset-4"
                whileHover={{ y: -2 }}
              >
                Mentions légales
              </motion.a>
              <motion.a 
                href="/politique-confidentialite"
                className="hover:text-white transition-all duration-300 hover:underline underline-offset-4"
                whileHover={{ y: -2 }}
              >
                Politique de confidentialité
              </motion.a>
              <motion.a 
                href="/cgv"
                className="hover:text-white transition-all duration-300 hover:underline underline-offset-4"
                whileHover={{ y: -2 }}
              >
                CGV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}