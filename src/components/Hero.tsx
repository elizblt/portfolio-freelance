"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full px-6 py-24 md:py-32 lg:py-40 font-sans text-[#111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.95 }}
          animate={{ opacity: 1, rotate: -6, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 mx-auto w-[220px] sm:w-[240px] md:w-[260px] lg:w-[320px] -rotate-6 rounded-[30px] shadow-xl"
        >
          <div className="relative w-full aspect-[3/4] rounded-[30px] overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <Image
              src="/eliseHero.png"
              alt="Portrait d’Élise"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 60vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* TEXTE */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2rem] md:text-[2.5rem] font-bold mb-6 leading-tight tracking-tight"
          >
            Bonjour, je suis Elise.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-[#333] mb-4 font-medium max-w-xl"
          >
            Je conçois des interfaces web modernes et intuitives - avec du sens et de l’impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-neutral-500 mb-1"
          >
            2 ans d’expérience
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-600 font-medium">
              Ouverte aux nouvelles opportunités
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 items-center"
          >
            <Link
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#111] text-white hover:bg-[#222] transition text-base font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
            >
              <Mail className="w-4 h-4" /> Réserver un appel
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-neutral-300 text-[#111] hover:bg-neutral-100 transition text-base font-semibold shadow-sm"
            >
              <ArrowRight className="w-4 h-4" /> Voir mes projets
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
