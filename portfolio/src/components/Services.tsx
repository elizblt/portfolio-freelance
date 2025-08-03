import { Code2, Wrench, LayoutDashboard, Rocket } from "lucide-react";

const services = [
  { icon: <Code2 />, title: "Site vitrine sur mesure", desc: "Pages rapides, SEO local, design responsive." },
  { icon: <LayoutDashboard />, title: "MVP Web/App", desc: "Connexion, base de données, tableau de bord, Stripe." },
  { icon: <Wrench />, title: "Maintenance & évolutions", desc: "Sauvegardes, mises à jour, évolution sur mesure." },
  { icon: <Rocket />, title: "Intégration design", desc: "Implémentation fidèle de maquettes Figma ou Adobe XD." },
];

export default function Services() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="text-accent mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
