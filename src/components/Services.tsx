"use client";

import { motion } from "framer-motion";
import { Code2, ShoppingCart, Zap, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Site vitrine sur‑mesure",
    punch: "Gagnez en crédibilité et en demandes entrantes.",
    description:
      "Un site élégant, rapide et simple à gérer, pensé pour présenter votre activité et convertir vos visiteurs.",
    features: [
      "Design responsive",
      "Performance & SEO",
      "CMS simple",
      "Hébergement & analytics",
    ],
    icon: Code2,
  },
  {
    title: "E‑commerce",
    punch: "Vendez en ligne avec une expérience fluide.",
    description:
      "Boutique performante et sécurisée, optimisée pour le mobile et pensée pour maximiser le panier moyen.",
    features: [
      "Paiements sécurisés",
      "Gestion produits",
      "Transport & TVA",
      "Suivi & relances",
    ],
    icon: ShoppingCart,
  },
  {
    title: "Application web",
    punch: "Digitalisez vos process métier.",
    description:
      "Outils internes, portails clients, réservations… Une solution web fiable, évolutive et adaptée à vos usages.",
    features: [
      "Architecture scalable",
      "Intégrations API",
      "Sécurité & RGPD",
      "UX métier",
    ],
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-extrabold text-gray-900 md:text-4xl"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-3 text-lg text-gray-600"
          >
            Conçus pour la{" "}
            <span className="font-semibold text-gray-800">performance</span> et
            la <span className="font-semibold text-gray-800">conversion</span>.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -6, rotate: -0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg hover:ring-gray-200"
              >
                {/* halo discret */}
                <div className="pointer-events-none absolute -inset-x-6 -top-10 h-24 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)] opacity-0 transition group-hover:opacity-100" />

                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900 ring-1 ring-gray-200">
                  <Icon size={22} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-800">
                  {s.punch}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {s.description}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Check className="h-4 w-4 text-gray-900" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Card CTA – lien discret */}
                <div className="mt-5">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50 hover:ring-gray-300"
                  >
                    Demander une estimation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA (agence premium) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="rounded-2xl border border-gray-100 bg-white/70 p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-semibold text-gray-900">
              Un projet en tête ?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-gray-600">
              Décrivez vos objectifs. Je reviens vers vous sous 24&nbsp;h avec
              une première estimation.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.10)] ring-1 ring-neutral-900 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
              >
                Démarrer une discussion
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50 hover:ring-gray-300"
              >
                Voir des exemples
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
