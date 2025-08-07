"use client";

import {
  Code,
  Server,
  Palette,
  Database,
  Paintbrush2,
  Wrench,
  FolderGit2,
  LayoutTemplate,
  Cpu,
} from "lucide-react";

const skillGroups = [
  {
    label: "Front-end",
    items: [
      { icon: Code, title: "React / Next.js" },
      { icon: LayoutTemplate, title: "UI / UX Design" },
      { icon: Paintbrush2, title: "Design System & Animations" },
    ],
  },
  {
    label: "Back-end",
    items: [
      { icon: Server, title: "Node.js / Express" },
      { icon: Database, title: "Base de données & ORM" },
      { icon: Cpu, title: "Sécurité & Authentification" },
    ],
  },
  {
    label: "Méthodologie & Outils",
    items: [
      { icon: FolderGit2, title: "Git & Gestion de projet" },
      { icon: Wrench, title: "DevOps & CI/CD" },
      { icon: Palette, title: "Figma & Prototypage" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-6 py-24 md:py-32 lg:py-40 font-['General Sans']"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-4">
          Mes compétences clés
        </h2>
        <p className="text-lg text-[#666] mb-20">
          Une sélection minimaliste mais percutante de mes expertises principales, pensée pour séduire et inspirer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillGroups.map(({ label, items }, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-[#111] mb-6 group-hover:translate-x-1 transition-transform">
                {label}
              </h3>
              <ul className="space-y-4">
                {items.map(({ icon: Icon, title }, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f0f0f0] to-[#e5e5e5] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#222]" />
                    </div>
                    <span className="text-sm text-[#111] font-medium">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}