"use client";

import Link from "next/link";

/**
 * Section d'appel à l'action finale. Utilise un fond contrasté et un texte
 * blanc pour attirer l'attention de l'utilisateur vers une action
 * déterminante (par exemple prendre rendez‑vous).
 */
export default function CTASection() {
  return (
    <section className="w-full px-6 py-20 md:py-24 bg-indigo-600 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Prêt·e à concrétiser votre projet ?
      </h2>
      <p className="max-w-3xl mx-auto mb-8">
        Discutons de vos idées, de vos objectifs et des solutions pour les atteindre. Je
        vous accompagne de la conception au déploiement.
      </p>
      <Link
        href="#contact"
        className="inline-block px-8 py-3 rounded-full bg-white text-indigo-600 font-medium hover:bg-neutral-100 transition"
      >
        Prendre rendez‑vous
      </Link>
    </section>
  );
}
