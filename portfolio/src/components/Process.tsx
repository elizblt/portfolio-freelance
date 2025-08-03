import { Lightbulb, ClipboardList, Code, UploadCloud, Repeat } from "lucide-react";

const steps = [
  { icon: <Lightbulb />, title: "Découverte", desc: "Échange initial pour comprendre vos besoins." },
  { icon: <ClipboardList />, title: "Proposition", desc: "Plan détaillé, délais, périmètre, tarifs." },
  { icon: <Code />, title: "Développement", desc: "Création rapide et itérative, en collaboration." },
  { icon: <UploadCloud />, title: "Mise en ligne", desc: "Recette, publication, tutoriel d'utilisation." },
  { icon: <Repeat />, title: "Suivi", desc: "Maintenance et évolutions à la demande." },
];

export default function Process() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="process">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Processus</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="text-center bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition">
            <div className="text-accent mb-3 flex justify-center">{step.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}