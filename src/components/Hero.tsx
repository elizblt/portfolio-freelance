"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  // Parallaxe légère sur le halo & la photo (effet premium discret)
  const { scrollY } = useScroll();
  const haloY = useTransform(scrollY, [0, 400], [0, 40]);     // bouge un peu le halo
  const photoY = useTransform(scrollY, [0, 400], [0, -20]);   // la photo remonte légèrement

  return (
    <section id="hero" className="relative overflow-hidden font-sans text-gray-900">
      {/* Fond premium : dégradé doux + vignette très légère */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#F7F8FA]" />
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(1200px_600px_at_15%_-10%,rgba(0,0,0,0.06),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-4 md:px-6 py-18 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* ==== COLONNE TEXTE ==== */}
          <div className="order-1 text-center lg:text-left">
            {/* Titre minimaliste et haut de gamme */}
            <h1 className="text-[38px] md:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight">
              Elise Studio
            </h1>

            {/* Baseline courte, sans phrase longue */}
            <p className="mt-3 text-xl md:text-2xl text-gray-700 font-medium">
              Design soigné. Performance. Conversion.
            </p>

            {/* Puces “qualité” (remplace les blabla) */}
            <div className="mt-3 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
              <span>Accessibilité & SEO travaillés</span>
              <span>Code maintenable</span>
              <span>Mobile‑first</span>
            </div>

            {/* CTA — pill noir “magnetic” (texte toujours blanc, AA) */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full
                           bg-neutral-950 px-7 py-3 text-sm font-semibold text-white
                           ring-1 ring-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.10)]
                           transition-all duration-200
                           hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
              >
                <Mail className="h-4 w-4" />
                <span>Discutons de votre projet</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                {/* glow subtil au hover (sans changer la couleur de texte) */}
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition
                                 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" />
              </Link>

              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full
                           bg-white px-7 py-3 text-sm font-semibold text-gray-900
                           ring-1 ring-gray-200 transition-all duration-200
                           hover:bg-gray-50 hover:ring-gray-300
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300"
              >
                Voir les projets
              </Link>
            </div>

            {/* Ligne “confiance” sobre */}
            <div className="mt-6 text-sm text-gray-500">
              Pour artisans ambitieux, PME et marques locales — disponibles partout en France.
            </div>
          </div>

          {/* ==== COLONNE VISUEL ==== */}
          <div className="order-2 lg:order-2 mx-auto relative">
            {/* halo animé en parallaxe */}
            <motion.div
              style={{ y: haloY }}
              className="absolute inset-0 -z-10 rounded-[32px] blur-2xl w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-[calc(4/3*var(--w))]"
            />
            <motion.div
              style={{ y: haloY }}
              className="absolute -inset-x-6 -top-8 -z-10 h-56 rounded-[40px] bg-[radial-gradient(100%_60%_at_50%_0%,rgba(59,130,246,0.20),transparent_70%)]"
            />

            {/* photo : rotation permanente + micro‑tilt au hover + légère parallaxe inverse */}
            <motion.div
              style={{ y: photoY }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ rotate: -4, scale: 1.02 }}
              className="relative -rotate-3 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[3/4]"
            >
              <div className="absolute inset-0 -z-10 rounded-[30px] blur-xl bg-gradient-to-br from-gray-300/35 to-gray-200/25" />
              <div className="relative h-full w-full overflow-hidden rounded-[30px] border-4 border-white shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/eliseHero.png"
                  alt="Élise Boillat — Développeuse web freelance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 70vw, 40vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Ruban “preuves” façon agence (optionnel, très sobre) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="rounded-2xl bg-white/60 ring-1 ring-gray-200 px-4 py-3 text-center">
            <span className="font-semibold text-gray-900">Sur‑mesure</span> — pas de thèmes génériques
          </div>
          <div className="rounded-2xl bg-white/60 ring-1 ring-gray-200 px-4 py-3 text-center">
            <span className="font-semibold text-gray-900">Performance & accessibilité</span> dès la conception
          </div>
          <div className="rounded-2xl bg-white/60 ring-1 ring-gray-200 px-4 py-3 text-center">
            <span className="font-semibold text-gray-900">Accompagnement</span> pour la prise en main
          </div>
        </div>
      </div>
    </section>
  );
}
