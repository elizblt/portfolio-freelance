"use client";
import { Code, Laptop2, Paintbrush2, Database } from "lucide-react";

const skills = [
  { icon: <Code size={28} />, title: "Développement front‑end", desc: "React, Next.js, TypeScript, Tailwind CSS pour des interfaces performantes et accessibles." },
  { icon: <Laptop2 size={28} />, title: "Développement back‑end", desc: "Node.js, Express, Prisma, PostgreSQL pour des APIs robustes et scalables." },
  { icon: <Paintbrush2 size={28} />, title: "Design & prototypage", desc: "Maîtrise de Figma pour créer et intégrer des maquettes pixel‑perfect." },
  { icon: <Database size={28} />, title: "Intégration & données", desc: "Connexion à des services tiers (Stripe, Auth0, etc.) et gestion des bases de données." },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-12 text-center">Mes compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {skills.map((skill, i) => (
          <div key={i} className="bg-white/70 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-blue-100 text-left">
            <div className="mb-4 text-blue-600">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-[#111] mb-2">{skill.title}</h3>
            <p className="text-[#666] text-sm leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
