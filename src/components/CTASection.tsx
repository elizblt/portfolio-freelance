"use client";

export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#111] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Prêt·e à concrétiser votre projet ?
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Discutons de vos idées, de vos objectifs et des solutions pour les atteindre. Je vous accompagne de la conception au déploiement.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-[#111] px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
      >
        Prendre rendez-vous
      </a>
    </section>
  );
}
