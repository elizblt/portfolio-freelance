"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white text-gray-900 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-32">
      {/* Contenu textuel */}
      <div className="max-w-2xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Bonjour, je suis Élise.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-xl md:text-2xl mb-4"
        >
          Je conçois des sites et applications web modernes qui convertissent — alliant UX, performance et esthétique.
        </motion.p>
        <p className="text-gray-600 text-sm mb-2">Basée à Montauban</p>
        <p className="text-green-600 text-sm font-medium mb-8">2 ans d’expérience • Disponible pour de nouvelles missions</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#111] text-white font-medium px-6 py-3 hover:opacity-90 transition shadow-md"
          >
            Réserver un appel
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 hover:bg-black/5 transition"
          >
            Voir mes projets
          </a>
        </div>
      </div>
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-[260px] h-[320px] md:w-[300px] md:h-[380px] rounded-[2rem] overflow-hidden shadow-lg ring-1 ring-black/10 rotate-2"
      >
        <Image
          src="/eliseHero.png"
          alt="Élise Boillat"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
