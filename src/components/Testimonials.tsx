"use client";

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

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#f9f9f9]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-12 text-center">
        Ils parlent de moi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-xl p-8 shadow-md border border-black/5">
            <p className="text-[#333] italic mb-4">“{t.quote}”</p>
            <p className="font-semibold text-[#111]">{t.name}</p>
            <p className="text-sm text-[#555]">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
