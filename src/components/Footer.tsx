"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Heart,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { name: "Accueil", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Projets", href: "#projects" },
  { name: "Méthode", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const services = [
  { name: "Site vitrine", href: "#services" },
  { name: "E-commerce", href: "#services" },
  { name: "Application web", href: "#services" },
  { name: "Maintenance & support", href: "#services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href);
    if (!el) return;
    const offset = 80; // hauteur approx. du header
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-neutral-950 text-white">
      {/* halo subtile en haut */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-1 text-3xl font-extrabold tracking-tight">
                Élise Boillat
              </h3>
              <p className="mb-6 text-sm text-neutral-300">
                Développeuse web freelance
              </p>
              <p className="mb-6 leading-relaxed text-neutral-400">
                J’accompagne artisans, PME et marques locales avec des sites
                modernes, rapides et pensés pour vos clients — partout en
                France.
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-neutral-300">
                  <Mail className="h-4 w-4 text-white" />
                  <a
                    href="mailto:contact@votre-domaine.fr"
                    className="transition hover:text-white"
                  >
                    contact@votre-domaine.fr
                  </a>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <Phone className="h-4 w-4 text-white" />
                  <a
                    href="tel:+33600000000"
                    className="transition hover:text-white"
                  >
                    +33 6 00 00 00 00
                  </a>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <MapPin className="h-4 w-4 text-white" />
                  <span>Montauban, France</span>
                </div>
              </div>

              {/* Réseaux */}
              <div className="pt-5">
                <p className="mb-2 text-xs text-neutral-400">Réseaux</p>
                <div className="flex items-center gap-3">
                  <motion.a
                    href="https://linkedin.com/in/ton-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/ton-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Github className="h-4 w-4 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/ton-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Twitter className="h-4 w-4 text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-5 text-lg font-semibold">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      if (l.href.startsWith("#")) {
                        e.preventDefault();
                        handleLinkClick(l.href);
                      }
                    }}
                    className="inline-block text-neutral-300 transition hover:translate-x-1 hover:text-white"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-5 text-lg font-semibold">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(s.href);
                    }}
                    className="inline-block text-neutral-300 transition hover:text-white"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA footer (inverse sur fond sombre) */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 ring-1 ring-white/10 transition hover:bg-gray-50"
            >
              Démarrer un projet
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="mt-2 text-xs text-neutral-400">
              Réponse sous 24 h • Devis gratuit
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span>© {currentYear} Élise Boillat.</span>
              <span className="hidden md:inline">•</span>
              <span>Fait avec</span>
              <motion.span
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2.2 }}
                className="inline-flex"
              >
                <Heart className="h-4 w-4 fill-current text-red-500" />
              </motion.span>
              <span>à Montauban.</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a
                href="/mentions-legales"
                className="text-neutral-400 transition hover:text-white"
              >
                Mentions légales
              </a>
              <a
                href="/politique-confidentialite"
                className="text-neutral-400 transition hover:text-white"
              >
                Politique de confidentialité
              </a>
              <a
                href="/cgv"
                className="text-neutral-400 transition hover:text-white"
              >
                CGV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
