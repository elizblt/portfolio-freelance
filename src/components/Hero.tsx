"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  Zap,
  ChevronDown,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import StatusBadge from "./StatusBadge";

const ACCENT = "#2F6FE3";      // ← remplace par le bleu de ton CV si différent
const ACCENT_SOFT = "#CFE3F6";

export default function Hero() {
  const reduce = useReducedMotion();

  /** ---- CTA hover spotlight (suit la souris) ---- */
  const [ctaSpot, setCtaSpot] = useState({ x: "50%", y: "50%" });
  const [secSpot, setSecSpot] = useState({ x: "50%", y: "50%" });
  const onCtaMove = (e: React.MouseEvent, set: any) => {
    const r = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    set({ x: `${px * 100}%`, y: `${py * 100}%` });
  };
  const onCtaLeave = (set: any) => set({ x: "50%", y: "50%" });

  /** ---- Titre court (2 lignes max) ---- */
  const heading = "Créons votre présence digitale";
  const words = heading.split(" ");
  

  return (
    <section
      id="hero"
      aria-label="Section d’introduction"
      className="relative overflow-hidden font-sans text-slate-900"
    >
      {/* Fond sobre */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-blue-50 via-white to-slate-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 left-1/2 top-[-140px] h-[360px] w-[360px] -translate-x-1/2 rounded-full opacity-30 blur-3xl bg-blue-200"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ======= TEXTE ======= */}
          <div className="order-1 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.4 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium shadow-sm backdrop-blur bg-white/85 text-slate-600"
            >
              <MapPin className="h-3.5 w-3.5" />
              Développeuse web freelance • Montauban
            </motion.div>

            {/* H1 sans dégradé, ≤ 2 lignes */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.04 } } }}
              className="mt-3 font-extrabold leading-[1.06] tracking-tight text-[clamp(28px,7vw,54px)] max-w-[20ch] sm:max-w-[28ch]"
              style={{ textWrap: "balance" }}
            >
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 14, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { duration: reduce ? 0 : 0.45, ease: "easeOut" } },
                  }}
                  className="inline-block mr-[.35ch]"
                  style={["présence", "digitale"].includes(w.toLowerCase()) ? { color: ACCENT } : undefined}
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>

            {/* Soulignement doux */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut", delay: reduce ? 0 : 0.2 }}
              className="mt-3 h-1 w-28 rounded-full mx-auto lg:mx-0"
              style={{ background: ACCENT_SOFT }}
            />

            {/* Subcopy (on garde) */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.12 }}
              className="mt-4 text-[clamp(16px,4vw,19px)] text-slate-600 max-w-prose leading-relaxed"
            >
              Transformez votre vision en{" "}
              <b>site web performant</b> qui attire vos clients et fait grandir votre business. Design moderne, référencement optimisé et résultats garantis.
            </motion.p>

            {/* Meta compact */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm text-slate-700 lg:justify-start">
              <StatusBadge />
              <span className="opacity-40 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500" />
                Réponse sous 24h
              </span>
            </div>

            {/* CTA — highlight qui suit la souris + shine */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.2 }}
              className="mt-6 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center md:gap-4 lg:justify-start px-2 sm:px-0"
            >
              {/* Primaire */}
              <motion.div whileHover={{ y: reduce ? 0 : -1 }} whileTap={{ scale: reduce ? 1 : 0.98 }} className="inline-flex">
                <Link
                  href="#contact"
                  aria-label="Parlons de votre projet"
                  onMouseMove={(e) => onCtaMove(e, setCtaSpot)}
                  onMouseLeave={() => onCtaLeave(setCtaSpot)}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full
                             px-6 py-3.5 text-sm sm:text-base font-semibold text-white
                             bg-gradient-to-b from-slate-900 to-slate-800
                             shadow-[0_14px_36px_rgba(15,23,42,.22)]
                             transition-[transform,box-shadow] duration-300
                             focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 overflow-hidden
                             min-h-[48px] w-full md:w-auto whitespace-nowrap"
                >
                  {/* highlight radial qui suit la souris */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(120px 120px at ${ctaSpot.x} ${ctaSpot.y}, rgba(255,255,255,.18), transparent 60%)`,
                    }}
                  />
                  {/* shine linéaire */}
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full"
                    initial={false}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.85, ease: "easeInOut" }}
                    style={{
                      transform: "translateX(-120%)",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,.28), transparent)",
                    }}
                  />
                  <Mail className="h-4 w-4 translate-y-[1px]" />
                  Parlons de votre projet
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              {/* Secondaire */}
              <motion.div whileHover={{ y: reduce ? 0 : -1 }} whileTap={{ scale: reduce ? 1 : 0.98 }} className="inline-flex">
                <Link
                  href="#projects"
                  onMouseMove={(e) => onCtaMove(e, setSecSpot)}
                  onMouseLeave={() => onCtaLeave(setSecSpot)}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full
                             px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-900
                             bg-white/90 backdrop-blur shadow-sm hover:shadow-md
                             transition-[transform,box-shadow] duration-300
                             focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 overflow-hidden
                             min-h-[48px] w-full md:w-auto whitespace-nowrap"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(140px 140px at ${secSpot.x} ${secSpot.y}, rgba(0,0,0,.03), transparent 60%)`,
                    }}
                  />
                  Découvrir mes réalisations
                </Link>
              </motion.div>
            </motion.div>
            
          </div>
          

          {/* ======= VISUEL — Style V1 (cadre travers + bordure blanche) ======= */}
          <div className="order-2 mx-auto lg:order-2">
            <motion.div
              whileHover={reduce ? {} : { y: -4, rotate: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative -rotate-3"
            >
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[32px] opacity-60 blur-2xl"
                style={{ boxShadow: "0 40px 120px rgba(2,6,23,.15)" }}
              />
              <div className="relative aspect-[3/4] w-[200px] xs:w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] rounded-[20px] sm:rounded-[30px] bg-white p-1.5 sm:p-2 shadow-xl">
                <div className="relative h-full w-full overflow-hidden rounded-[18px] sm:rounded-[26px]">
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

        {/* Ruban de preuves (on garde, pas de doublon avec la ligne meta) */}
        <div className="mt-8 sm:mt-12 flex flex-col lg:grid lg:grid-cols-3 gap-3 text-sm px-2 sm:px-0">
          {[
            { icon: <Zap className="h-4 w-4" />, k: "Sur-mesure", v: "conçu pour votre activité" },
            { icon: <ShieldCheck className="h-4 w-4" />, k: "Rapide & accessible", v: "dès la conception" },
            { icon: <Sparkles className="h-4 w-4" />, k: "Accompagnement", v: "de A à Z" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduce ? 0 : 0.35, delay: i * 0.05 }}
              className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2 rounded-xl bg-white/90 px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm backdrop-blur transition-shadow hover:shadow-lg hover:bg-white text-center"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="font-semibold text-slate-900">{item.k}</span>
              </div>
              <span className="text-slate-600 text-xs lg:text-sm leading-tight">{item.v}</span>
            </motion.div>
          ))}
        </div>

        
      </div>

      {/* Cue scroll discret */}
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
