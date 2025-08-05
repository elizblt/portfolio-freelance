"use client";

import { Code, Server, Palette, Database } from "lucide-react";

/**
 * Définition des compétences principales avec leurs icônes, titres et
 * descriptions.
 */
const skills = [
  {
    icon: Code,
    title: "Développement front‑end",
    desc:
      "React, Next.js, TypeScript, Tailwind CSS pour des interfaces performantes et accessibles.",
  },
  {
    icon: Server,
    title: "Développement back‑end",
    desc:
      "Node.js, Express, Prisma et PostgreSQL pour des APIs robustes et scalables.",
  },
  {
    icon: Palette,
    title: "Design & prototypage",
    desc:
      "Maîtrise de Figma pour créer et intégrer des maquettes pixel‑perfect.",
  },
  {
    icon: Database,
    title: "Intégration & données",
    desc:
      "Connexion à des services tiers (Stripe, Auth0, etc.) et gestion des bases de données.",
  },
];

/**
 * Section Compétences.
 */
export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 py-20 md:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Mes compétences</h2>
        <p className="text-neutral-600 max-w-3xl mx-auto">
          Un éventail de compétences pour couvrir l’ensemble du cycle de vie d’un projet web.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md transition"
          >
            <Icon className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-sm text-neutral-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
