"use client";

import { Code2, LayoutDashboard, Wrench, Rocket } from "lucide-react";

const services = [
  {
    icon: <Code2 size={24} />,
    title: "Site vitrine",
    desc: "Je conçois des sites vitrines rapides et responsive qui valorisent votre marque et améliorent votre visibilité locale.",
    benefits: [
      "Design sur mesure et identités visuelles cohérentes",
      "Optimisation SEO pour apparaître dans les recherches locales",
      "Intégration de formulaires de contact et de cartes interactives",
    ],
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: "MVP / Application web",
    desc: "Vous avez une idée de produit ? Je développe des MVP performants avec authentification, base de données et tableau de bord.",
    benefits: [
      "Architecture scalable (Next.js, Node.js, Prisma)",
      "Paiements sécurisés via Stripe",
      "Tableaux de bord et panels d’administration sur mesure",
    ],
  },
  {
    icon: <Wrench size={24} />,
    title: "Maintenance & évolution",
    desc: "Je vous accompagne après la mise en ligne pour assurer la sécurité et l’évolution continue de votre site.",
    benefits: [
      "Mises à jour régulières et sauvegardes automatiques",
      "Ajout de nouvelles fonctionnalités à la demande",
      "Support technique et formation à l’utilisation du back‑office",
    ],
  },
  {
    icon: <Rocket size={24} />,
    title: "Intégration Figma",
    desc: "Je transforme vos maquettes Figma en pages web pixel‑perfect avec animations fluides.",
    benefits: [
      "Respect strict de votre design system",
      "Animations (framer-motion) et interactions modernes",
      "Performance et accessibilité maximisées",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-6">
        Mes services pour donner vie à vos projets
      </h2>
      <p className="text-[#666] text-lg max-w-3xl mx-auto mb-12">
        De la vitrine simple à l’application complète, je vous accompagne à chaque étape avec des solutions adaptées et des
        résultats mesurables.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-[#f9f9f9] rounded-xl p-8 shadow-sm hover:shadow-md transition text-left"
          >
            <div className="mb-4 text-[#111]">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#111]">
              {service.title}
            </h3>
            <p className="text-[#666] text-sm mb-4">{service.desc}</p>
            <ul className="list-disc list-inside text-sm text-[#555] space-y-1">
              {service.benefits.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
