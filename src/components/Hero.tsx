"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, ShieldCheck, Zap, Sparkles, ChevronDown, Clock } from "lucide-react";

const ACCENT = "#2F6FE3";      // ← Mets ici le bleu exact de ton CV (ex: #2F6FE3)
const ACCENT_SOFT = "#CFE3F6"; // soulignement doux

export default function Hero() {
  const reduce = useReducedMotion();

  const heading = "Créons ensemble votre présence digitale";
  const words = heading.split(" ");

  return (
    <section id="hero" aria-label="Section d’introduction" className="relative overflow-hidden font-sans text-slate-900">
      {/* Fond sobre */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
      <div aria-hidden className="pointer-events-none absolute -z-10 left-1/2 top-[-140px] h-[360px] w-[360px] -translate-x-1/2 rounded-full opacity-30 blur-3xl bg-blue-200" />

      <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-22 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ======= TEXTE ======= */}
          <div className="order-1 text-center lg:text-left">
            {/* Eyebrow V1 */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.4 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium shadow-sm backdrop-blur bg-white/85 text-slate-600"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Développeuse web freelance • Montauban
            </motion.div>

            {/* H1 sans dégradé, accent bleu uni */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.04 } } }}
              className="mt-3 text-[clamp(28px,6vw,56px)] font-extrabold leading-[1.05] tracking-tight"
            >
              {words.map((w, i) => {
                const accent = ["présence", "digitale"].includes(w.toLowerCase());
                return (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: 14, opacity: 0 },
                      show: { y: 0, opacity: 1, transition: { duration: reduce ? 0 : 0.45, ease: "easeOut" } },
                    }}
                    className="inline-block mr-[.35ch]"
                    style={accent ? { color: ACCENT } : undefined}
                  >
                    {w}
                  </motion.span>
                );
              })}
            </motion.h1>

            {/* Soulignement doux */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut", delay: reduce ? 0 : 0.2 }}
              className="mt-3 h-1 w-28 origin-left rounded-full"
              style={{ background: ACCENT_SOFT }}
            />

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.12 }}
              className="mt-4 text-[clamp(15px,2.3vw,19px)] text-slate-600"
            >
              Développeuse web freelance passionnée, je crée des <b>solutions digitales sur-mesure</b> qui donnent vie à vos projets
              et reflètent parfaitement votre identité.
            </motion.p>

            {/* Meta compact (plus de piles multiples) */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-700 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Disponible pour nouveaux projets
              </span>
              <span className="opacity-40">•</span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500" />
                Réponse sous 24h
              </span>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.2 }}
              className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 lg:justify-start"
            >
              <motion.div whileHover={{ y: reduce ? 0 : -1 }} whileTap={{ scale: reduce ? 1 : 0.98 }} className="inline-flex">
                <Link
                  href="#contact"
                  aria-label="Parlons de votre projet"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full
                             px-6 py-3 text-sm font-semibold text-white
                             bg-gradient-to-b from-slate-900 to-slate-800
                             shadow-[0_14px_36px_rgba(15,23,42,.22)]
                             transition-[transform,box-shadow] duration-300
                             focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
                >
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full"
                    initial={false}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.85, ease: "easeInOut" }}
                    style={{ transform: "translateX(-120%)", background: "linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent)" }}
                  />
                  <Mail className="h-4 w-4 translate-y-[1px]" />
                  Parlons de votre projet
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: reduce ? 0 : -1 }} whileTap={{ scale: reduce ? 1 : 0.98 }} className="inline-flex">
                <Link
                  href="#projects"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full
                             px-6 py-3 text-sm font-semibold text-slate-900
                             bg-white/90 backdrop-blur shadow-sm hover:shadow-md
                             transition-[transform,box-shadow] duration-300
                             focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
                >
                  Voir mes projets
                </Link>
              </motion.div>
            </motion.div>

            {/* Mini garanties */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 lg:justify-start">
              <span>Devis gratuit sous 24h</span>
              <span className="opacity-40">•</span>
              <span>Code moderne et maintenable</span>
              <span className="opacity-40">•</span>
              <span>Suivi personnalisé</span>
            </div>
          </div>

          {/* ======= VISUEL — Photo style V1 (cadre travers + bordure blanche) ======= */}
          <div className="order-2 mx-auto lg:order-2">
            <motion.div
              whileHover={reduce ? {} : { y: -4, rotate: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative -rotate-3"
            >
              {/* Ombre diffuse sous la carte */}
              <div aria-hidden className="absolute -inset-6 -z-10 rounded-[32px] opacity-60 blur-2xl"
                   style={{ boxShadow: "0 40px 120px rgba(2,6,23,.15)" }} />
              {/* Cadre blanc + image */}
              <div className="relative aspect-[3/4] w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] rounded-[30px] bg-white p-2 shadow-xl">
                <div className="relative h-full w-full overflow-hidden rounded-[26px]">
                  <Image
                    src="/eliseHero.png"
                    alt="Portrait d’Élise Boillat"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Ruban de preuves (inchangé, soft) */}
        <div className="mt-12 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
          {[
            { icon: <Zap className="h-4 w-4" />, k: "Sur-mesure", v: "conçu pour votre activité" },
            { icon: <ShieldCheck className="h-4 w-4" />, k: "Rapide & accessible", v: "dès la conception" },
            { icon: <Sparkles className="h-4 w-4" />, k: "Accompagnement", v: "jusqu’à la prise en main" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduce ? 0 : 0.35, delay: i * 0.05 }}
              className="flex items-center justify-center gap-2 rounded-xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur transition-shadow hover:shadow-md"
            >
              {item.icon}
              <span className="font-semibold text-slate-900">{item.k}</span>
              <span className="text-slate-600">— {item.v}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Discret cue scroll */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.8 }}
        className="absolute inset-x-0 bottom-4 flex items-center justify-center text-slate-400"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
