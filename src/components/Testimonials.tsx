"use client";

/**
 * Liste de témoignages. Remplacez les valeurs par de vrais avis clients pour
 * renforcer la crédibilité.
 */
const testimonials = [
  {
    name: "Marie Dupont",
    role: "Fondatrice d'une boutique en ligne",
    quote:
      "Élise a transformé notre site vitrine en une plateforme moderne et efficace. Sa disponibilité et sa pédagogie ont été précieuses tout au long du projet. Je recommande vivement !",
  },
  {
    name: "Paul Martin",
    role: "Président d’association",
    quote:
      "Grâce au travail d’Élise, la gestion de nos adhésions est devenue un jeu d’enfant. Elle a parfaitement compris nos besoins et a livré une solution robuste et conviviale.",
  },
];

/**
 * Section Témoignages.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ils parlent de moi</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm"
          >
            <p className="italic text-neutral-700 mb-4">“{t.quote}”</p>
            <p className="font-medium">{t.name}</p>
            <p className="text-sm text-neutral-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
