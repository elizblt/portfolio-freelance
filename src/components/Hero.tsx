'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Send, X } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-arsen-bg text-arsen-text min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-32">

      {/* Texte */}
      <div className="max-w-2xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Salut, je suis Élise.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-arsen-gray text-lg md:text-xl mb-4"
        >
          Je conçois des interfaces intuitives, performantes et élégantes — où chaque ligne de code a du sens.
        </motion.p>

        <p className="text-arsen-gray text-sm mb-4">+2 ans d’expérience</p>
        <p className="text-green-500 text-sm font-medium mb-8">Disponible pour de nouvelles missions</p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#111] text-white font-medium px-6 py-3 hover:opacity-90 transition shadow-md"
          >
            <Phone size={16} /> Réserver un appel
          </a>
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 hover:bg-black/5">
            <Send size={16} />
          </button>
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black/10 hover:bg-black/5">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Image style Arsène */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
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
