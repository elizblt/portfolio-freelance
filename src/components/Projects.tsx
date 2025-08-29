"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Metric = { label: string; value: string };
type Project = {
  title: string;
  client: string;
  type: "Vitrine" | "E-commerce" | "Application";
  punch: string; // une ligne “résultat”
  metrics: Metric[]; // 2–3 indicateurs courts
  image: string; // /public/...
  href?: string; // lien vers page étude de cas (optionnel)
  alt: string;
};

const projects: Project[] = [
  {
    title: "Le Patio",
    client: "Restaurant – Montauban",
    type: "Vitrine",
    punch: "Réservations en ligne + visibilité locale.",
    metrics: [
      { label: "Vitesse", value: "< 1 s" },
      { label: "SEO local", value: "Top 3" },
      { label: "Demandes", value: "+30%" },
    ],
    image: "/resto.jpg",
    href: "#",
    alt: "Aperçu du site Le Patio",
  },
  {
    title: "Boutique Cosmétiques",
    client: "DNVB — France",
    type: "E-commerce",
    punch: "Parcours d’achat fluide, panier moyen en hausse.",
    metrics: [
      { label: "Taux conv.", value: "+0,8 pt" },
      { label: "Mobile", value: "1er" },
      { label: "Paiements", value: "Sécurisés" },
    ],
    image: "/e-commerce.jpg",
    href: "#",
    alt: "Aperçu boutique e-commerce cosmétiques",
  },
  {
    title: "Portail Rendez-vous",
    client: "Cabinet de santé",
    type: "Application",
    punch: "Prise de RDV & rappels automatisés.",
    metrics: [
      { label: "No-show", value: "−22%" },
      { label: "Admin", value: "−40% tâches" },
      { label: "Sécu", value: "RGPD" },
    ],
    image: "/webapp.png",
    href: "#",
    alt: "Aperçu application de prise de rendez-vous",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-extrabold text-gray-900 md:text-4xl"
          >
            Études de cas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-3 text-lg text-gray-600"
          >
            Des projets pensés pour la performance et l’impact.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image bloc – cadre incliné, constant comme sur le hero */}
              <div className="p-4">
                <div className="relative aspect-[3/4] w-full -rotate-3 overflow-hidden rounded-[26px] border-4 border-white shadow-2xl ring-1 ring-black/5">
                  {/* halo discret derrière */}
                  <div className="absolute inset-0 -z-10 rounded-[26px] bg-gradient-to-br from-gray-300/35 to-gray-200/20 blur-xl" />
                  <div className="relative h-full w-full">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 90vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 ring-1 ring-gray-200">
                    {p.type}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span>{p.client}</span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-gray-700">{p.punch}</p>

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {p.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-gray-50 px-3 py-2 text-center ring-1 ring-gray-200"
                    >
                      <div className="text-sm font-semibold text-gray-900">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-gray-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA de carte */}
                <div className="mt-5">
                  <Link
                    href={p.href || "#contact"}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50 hover:ring-gray-300"
                    aria-label={`Voir le projet ${p.title}`}
                  >
                    Voir l’étude de cas
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Overlay subtile au hover (effet “agence”) */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-100/50 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bandeau CTA bas */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="rounded-2xl border border-gray-100 bg-white/70 px-6 py-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-semibold text-gray-900">
              Vous avez un projet ?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-gray-600">
              Parlons objectifs, délais et budget. Une première réponse sous
              24&nbsp;h.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white ring-1 ring-neutral-900 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
              >
                Discutons de votre projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50 hover:ring-gray-300"
              >
                Voir les services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
