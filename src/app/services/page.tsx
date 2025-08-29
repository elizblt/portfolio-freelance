"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Layout,
  ShoppingCart,
  Wrench,
  Check,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const ACCENT = "#2F6FE3"; // micro-accent (icônes/puces uniquement)

/** ANIM */
const container = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};
const item = () => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
});

type Service = {
  slug: string;
  title: string;
  punch: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  bullets: string[];
  deliverables: string[];
};

const SERVICES: Service[] = [
  {
    slug: "site-vitrine",
    title: "Site vitrine",
    punch: "Être trouvé et donner confiance.",
    desc:
      "Un site clair, rapide et moderne pour présenter votre activité et faciliter la prise de contact.",
    icon: Layout,
    bullets: [
      "Design sobre & responsive",
      "Contenu orienté client",
      "SEO de base (Google)",
      "Performance & accessibilité",
    ],
    deliverables: [
      "Page d’accueil + pages clés (ex: services, contact)",
      "Formulaire de contact antispam",
      "Mises à jour simples (contenus, images)",
      "Hébergement & domaine : conseils",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce simple",
    punch: "Vendre sans complexité.",
    desc:
      "Boutique légère et sécurisée pour tester une offre ou vendre une sélection de produits.",
    icon: ShoppingCart,
    bullets: [
      "Paiement sécurisé",
      "Gestion produits & stocks",
      "Livraison / retrait, TVA",
      "Mobile-first",
    ],
    deliverables: [
      "Parcours d’achat simple",
      "Fiche produit optimisée",
      "Relance panier (selon besoin)",
      "Tableau de bord commandes",
    ],
  },
  {
    slug: "app-metier",
    title: "Outil / app métier",
    punch: "Gagner du temps au quotidien.",
    desc:
      "Petit outil web, portail client ou espace réservé pour digitaliser un process précis.",
    icon: Wrench,
    bullets: [
      "Fonctionnalité sur-mesure",
      "Intégrations (calendrier, paiement, etc.)",
      "Sécurité & RGPD",
      "Évolutif",
    ],
    deliverables: [
      "Spécification courte (langage simple)",
      "Prototype cliquable si besoin",
      "Mise en production & suivi",
      "Formation rapide",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-20">
        {/* Header */}
        <motion.header
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10 md:mb-14 text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">
            Services
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Des solutions web claires, sans complexité
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-lg">
            Je conçois des sites et outils utiles, lisibles pour vos clients, et
            simples à gérer pour vous.
          </p>
        </motion.header>

        {/* Services grid */}
        <section className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.slug}
                variants={item()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10% 0px" }}
                className="group relative rounded-2xl bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,.10)] ring-1 ring-slate-100 transition-all duration-300 hover:shadow-[0_22px_70px_rgba(2,6,23,.16)]"
              >
                {/* halo discret */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-6 -top-10 h-24 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 0%, rgba(15,23,42,0.10), transparent 70%)",
                  }}
                />

                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 shadow-sm">
                  <Icon className="h-6 w-6 text-slate-900" />
                </div>

                <h2 className="text-lg font-semibold text-slate-900">{s.title}</h2>
                <p className="mt-1 text-sm font-medium text-slate-800">{s.punch}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>

                {/* Bullets (bénéfices) */}
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4" style={{ color: ACCENT }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Livrables */}
                <div className="mt-5 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <p className="text-xs font-semibold text-slate-900">Ce qui est inclus</p>
                  <ul className="mt-2 space-y-1.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro-CTA */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href={`#contact`}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:ring-slate-300"
                    aria-label={`Demander une estimation pour ${s.title}`}
                  >
                    Demander une estimation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`#projects`}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-slate-900/80 ring-1 ring-transparent hover:ring-slate-200"
                    aria-label={`Voir des exemples ${s.title}`}
                  >
                    Voir des exemples
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </section>

        {/* Process bref (3 étapes) */}
        <section className="mt-14">
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-xl font-semibold text-slate-900"
          >
            Comment ça se passe ?
          </motion.h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { t: "1. Comprendre", d: "Un échange simple pour cerner votre besoin et vos objectifs." },
              { t: "2. Concevoir", d: "Contenu + design + développement. Vous validez à chaque étape." },
              { t: "3. Mettre en ligne", d: "Mise en production, explications claires, possibilité d’évoluer." },
            ].map((step, i) => (
              <motion.div
                key={step.t}
                variants={item()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-2xl bg-white p-5 ring-1 ring-slate-100 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{step.t}</p>
                <p className="mt-1 text-sm text-slate-600">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ courte */}
        <section className="mt-14">
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center text-xl font-semibold text-slate-900"
          >
            Questions fréquentes
          </motion.h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                q: "Et si je n’ai pas encore de textes ou de photos ?",
                a: "Pas grave. Je vous guide pour rédiger l’essentiel et je peux proposer des visuels adaptés.",
              },
              {
                q: "Est-ce que je pourrai modifier mon site ?",
                a: "Oui. Je privilégie une édition simple (textes, images, tarifs) sans prise de tête.",
              },
              {
                q: "Et les délais ?",
                a: "Selon la taille du projet. Un site vitrine simple peut aller vite une fois les contenus validés.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.q}
                variants={item()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-2xl bg-white p-5 ring-1 ring-slate-100 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{f.q}</p>
                <p className="mt-1 text-sm text-slate-600">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA final unique */}
        <section className="mt-14 text-center">
          <motion.h3
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl font-semibold text-slate-900"
          >
            Parlez-moi de votre projet
          </motion.h3>
          <p className="mx-auto mt-2 max-w-xl text-slate-600">
            Expliquez votre besoin en 1 minute. Je reviens sous 24&nbsp;h avec une première estimation.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white bg-gradient-to-b from-slate-900 to-slate-800 shadow-[0_14px_36px_rgba(15,23,42,.22)] transition hover:brightness-110"
            >
              Discutons de votre projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:ring-slate-300"
            >
              Voir des exemples
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
