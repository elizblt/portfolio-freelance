"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  FileText,
  Palette,
  Monitor,
  Rocket,
  Check,
} from "lucide-react";
import Link from "next/link";

type Step = {
  title: string;
  desc: string;
  bullets: string[];
  icon: ElementType;
};

const STEPS: Step[] = [
  {
    title: "Écoute",
    desc: "On échange sur votre activité, vos clients et vos objectifs. Vous expliquez, je clarifie.",
    bullets: ["Objectifs précis", "Public visé", "Priorités posées"],
    icon: Lightbulb,
  },
  {
    title: "Proposition claire",
    desc: "Une proposition lisible : étapes, budget et livrables. Vous savez exactement ce que vous obtenez.",
    bullets: ["Devis détaillé", "Étapes transparentes", "Checklist de départ"],
    icon: FileText,
  },
  {
    title: "Design & contenu",
    desc: "Direction artistique adaptée à votre identité (couleurs, typographies, ton) et textes orientés clients.",
    bullets: [
      "Maquettes des pages",
      "Système visuel cohérent",
      "Aide à la rédaction",
    ],
    icon: Palette,
  },
  {
    title: "Création du site",
    desc: "Mises à jour régulières, tests et optimisation mobile. Vous suivez l’avancement facilement.",
    bullets: ["Aperçus fréquents", "Rapide & mobile", "Tests qualité"],
    icon: Monitor,
  },
  {
    title: "Mise en ligne & suivi",
    desc: "Publication, prise en main, puis accompagnement pour ajuster et faire évoluer.",
    bullets: ["Mise en ligne sereine", "Formation courte", "Support continu"],
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-4 py-16 md:px-6 md:py-20"
    >
      {/* Fond chic et discret */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-gray-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1100px_520px_at_12%_-8%,rgba(0,0,0,0.05),transparent_60%)]" />

      <div className="mx-auto max-w-6xl">
        {/* En-tête */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-extrabold text-gray-900 md:text-4xl"
          >
            Méthode
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-3 text-lg text-gray-600"
          >
            Simple, claire et adaptée à votre identité visuelle.
          </motion.p>
        </div>

        {/* Trait décoratif (sans points ni numéros) */}
        <div className="relative my-8 hidden md:block">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Cartes interactives */}
        <div className="grid gap-6 md:grid-cols-5">
          {STEPS.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="group relative rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:ring-gray-300"
              >
                {/* halo neutre au hover */}
                <div
                  className="pointer-events-none absolute -inset-x-8 -top-10 h-24 opacity-0 transition group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 0%, rgba(0,0,0,0.10), transparent 70%)",
                  }}
                />

                {/* Icône + titre */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900 ring-1 ring-gray-200">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{s.desc}</p>

                {/* Checklist directement affichée */}
                <ul className="mt-4 list-none space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      {/* Coche propre (pas de fond => plus de "carré") */}
                      <Check
                        className="h-4 w-4 text-gray-900"
                        strokeWidth={2.25}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white ring-1 ring-neutral-900 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            >
              Démarrer la discussion
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50 hover:ring-gray-300"
            >
              Voir des exemples
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Calendrier communiqué après échange. Direction artistique alignée
            avec votre image (couleurs, ton, photos).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
