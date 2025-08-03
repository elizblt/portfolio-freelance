import { Code2, Wrench, LayoutDashboard, Rocket } from "lucide-react";

const services = [
  { icon: <Code2 size={20} />, title: "Site vitrine", desc: "Pages rapides, design responsive, visibilité locale." },
  { icon: <LayoutDashboard size={20} />, title: "MVP Web/App", desc: "Authentification, BDD, dashboard, Stripe." },
  { icon: <Wrench size={20} />, title: "Maintenance", desc: "Sauvegardes, mises à jour, évolutions sur mesure." },
  { icon: <Rocket size={20} />, title: "Intégration Figma", desc: "Maquettes pixel-perfect, animations fluides." },
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white text-center" id="services">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-6">
        Sites & apps modernes<br /> pour vos projets concrets
      </h2>
      <p className="text-[#666] text-lg max-w-3xl mx-auto mb-10">
        J’aide les indépendants, associations et petites entreprises à transformer leurs idées en expériences web efficaces et sur mesure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-black/5 transition"
          >
            <div className="mb-4 text-[#111]">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#111]">{s.title}</h3>
            <p className="text-[#666] text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
