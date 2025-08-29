"use client";

import Image from "next/image";

/**
 * Section À propos. Offre un aperçu personnel et professionnel de votre
 * parcours. Un portrait est affiché à côté du texte pour humaniser la
 * présentation. Le lien vers le CV doit être mis à jour avec le vrai fichier.
 */
export default function About() {
  return (
    <section id="about" className="w-full px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            À propos de moi
          </h2>
          <p className="mb-4 text-neutral-600">
            Développeuse front‑end passionnée, je suis spécialisée dans la
            création d’interfaces web modernes et accessibles. Après une
            formation en informatique et plusieurs expériences sur des projets
            variés, je travaille aujourd’hui en freelance pour aider des
            entreprises, associations et startups à concrétiser leurs idées.
          </p>
          <p className="mb-4 text-neutral-600">
            Ma philosophie : un code propre, une UX soignée et une communication
            transparente. J’utilise des technologies comme React, Next.js,
            Tailwind CSS et Node.js pour concevoir des produits performants et
            évolutifs.
          </p>
          <p className="mb-6 text-neutral-600">
            Je m’intéresse également au design d’interface, à l’accessibilité et
            à l’optimisation des performances. J’aime apprendre en continu et
            partager mes connaissances.
          </p>
          <a
            href="/CV_Elise.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-black px-6 py-3 text-white transition hover:bg-neutral-800"
          >
            Télécharger mon CV
          </a>
        </div>
        <div className="relative h-72 w-full lg:h-96">
          <Image
            src="/eliseHero.png"
            alt="Portrait d’Élise"
            fill
            className="rounded-2xl object-cover shadow"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
