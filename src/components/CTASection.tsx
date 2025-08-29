"use client";

import Link from "next/link";

/**
 * Section d'appel à l'action finale. Utilise un fond contrasté et un texte
 * blanc pour attirer l'attention de l'utilisateur vers une action
 * déterminante (par exemple prendre rendez‑vous).
 */
export default function CTASection() {
  return (
    <section className="w-full px-6 py-20 text-center text-white md:py-24">
      <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
        Prêt·e à concrétiser votre projet ?
      </h2>
      <p className="mx-auto mb-8 max-w-3xl">
        Discutons de vos idées, de vos objectifs et des solutions pour les
        atteindre. Je vous accompagne de la conception au déploiement.
      </p>
      <Link
        href="#contact"
        className="inline-block rounded-full bg-white px-8 py-3 font-medium text-indigo-600 transition hover:bg-neutral-100"
      >
        Prendre rendez‑vous
      </Link>
    </section>
  );
}
