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
  Sparkles,
  ChevronDown,
  Clock,
  MapPin,
} from "lucide-react";
import StatusBadge from "./StatusBadge";

const ACCENT = "#2F6FE3";
const ACCENT_SOFT = "#CFE3F6";

const FEATURES = [
  { 
    icon: <Zap className="h-4 w-4" />, 
    title: "Sur-mesure", 
    description: "conçu pour votre activité" 
  },
  { 
    icon: <ShieldCheck className="h-4 w-4" />, 
    title: "Rapide & accessible", 
    description: "dès la conception" 
  },
  { 
    icon: <Sparkles className="h-4 w-4" />, 
    title: "Accompagnement", 
    description: "de A à Z" 
  },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);
  
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, tz: 0 });
  const [ctaSpot, setCtaSpot] = useState({ x: "50%", y: "50%" });
  const [secSpot, setSecSpot] = useState({ x: "50%", y: "50%" });

  const handleCardMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ 
      rx: -(py - 0.5) * 8, 
      ry: (px - 0.5) * 10, 
      tz: 12 
    });
  };

  const handleCardLeave = () => {
    setTilt({ rx: 0, ry: 0, tz: 0 });
  };

  const handleCtaMove = (e: React.MouseEvent, setter: typeof setCtaSpot) => {
    const rect = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setter({ x: `${px * 100}%`, y: `${py * 100}%` });
  };

  const handleCtaLeave = (setter: typeof setCtaSpot) => {
    setter({ x: "50%", y: "50%" });
  };

  const heading = "Développeuse web freelance";
  const words = heading.split(" ");

  return (
    <section
      id="hero"
      aria-label="Section d'introduction"
      className="relative overflow-hidden font-sans text-slate-900"
    >
      {/* Background */}
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
          
          {/* Content */}
          <div className="order-1 text-center lg:text-left">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.4 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium shadow-sm backdrop-blur bg-white/85 text-slate-600"
            >
              <MapPin className="h-3.5 w-3.5" />
              Développeuse web freelance • Montauban
            </motion.div>

            {/* Title */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{ 
                hidden: {}, 
                show: { transition: { staggerChildren: reduce ? 0 : 0.04 } } 
              }}
              className="mt-3 font-extrabold leading-[1.06] tracking-tight text-[clamp(28px,7vw,54px)] max-w-[20ch] sm:max-w-[28ch]"
              style={{ textWrap: "balance" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 14, opacity: 0 },
                    show: { 
                      y: 0, 
                      opacity: 1, 
                      transition: { duration: reduce ? 0 : 0.45, ease: "easeOut" } 
                    },
                  }}
                  className="inline-block mr-[.35ch]"
                  style={["web", "freelance"].includes(word.toLowerCase()) ? { color: ACCENT } : undefined}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                duration: reduce ? 0 : 0.6, 
                ease: "easeOut", 
                delay: reduce ? 0 : 0.2 
              }}
              className="mt-3 h-1 w-28 rounded-full mx-auto lg:mx-0"
              style={{ background: ACCENT_SOFT }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.12 }}
              className="mt-4 text-[clamp(16px,4vw,19px)] text-slate-600 max-w-prose leading-relaxed"
            >
              Je crée des sites et applications adaptés à votre activité, avec une <b>approche claire et personnalisée</b>, du design au code.
            </motion.p>

            {/* Meta Info */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm text-slate-700 lg:justify-start">
              <StatusBadge />
              <span className="opacity-40 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500" />
                Réponse sous 24h
              </span>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.2 }}
              className="mt-6 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center md:gap-4 lg:justify-start px-2 sm:px-0"
            >
              {/* Primary CTA */}
              <motion.div 
                whileHover={{ y: reduce ? 0 : -1 }} 
                whileTap={{ scale: reduce ? 1 : 0.98 }} 
                className="inline-flex"
              >
                <Link
                  href="#contact"
                  aria-label="Parlons de votre projet"
                  onMouseMove={(e) => handleCtaMove(e, setCtaSpot)}
                  onMouseLeave={() => handleCtaLeave(setCtaSpot)}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-b from-slate-900 to-slate-800 shadow-[0_14px_36px_rgba(15,23,42,.22)] transition-[transform,box-shadow] duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 overflow-hidden min-h-[48px] w-full md:w-auto whitespace-nowrap"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(120px 120px at ${ctaSpot.x} ${ctaSpot.y}, rgba(255,255,255,.18), transparent 60%)`,
                    }}
                  />
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

              {/* Secondary CTA */}
              <motion.div 
                whileHover={{ y: reduce ? 0 : -1 }} 
                whileTap={{ scale: reduce ? 1 : 0.98 }} 
                className="inline-flex"
              >
                <Link
                  href="#projects"
                  onMouseMove={(e) => handleCtaMove(e, setSecSpot)}
                  onMouseLeave={() => handleCtaLeave(setSecSpot)}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-900 bg-white/90 backdrop-blur shadow-sm hover:shadow-md transition-[transform,box-shadow] duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 overflow-hidden min-h-[48px] w-full md:w-auto whitespace-nowrap"
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

          {/* Hero Image */}
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
              <div 
                ref={cardRef}
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                className="relative aspect-[3/4] w-[200px] xs:w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] rounded-[20px] sm:rounded-[30px] bg-white p-1.5 sm:p-2 shadow-xl"
                style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
              >
                <motion.div
                  style={{
                    transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(${tilt.tz}px)`,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="relative h-full w-full overflow-hidden rounded-[18px] sm:rounded-[26px]"
                >
                  <Image
                    src="/eliseHero.png"
                    alt="Portrait d'Élise Boillat"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 40vw"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 sm:mt-12 flex flex-col lg:grid lg:grid-cols-3 gap-3 text-sm px-2 sm:px-0">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduce ? 0 : 0.35, delay: i * 0.05 }}
              className="flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2 rounded-xl bg-white/90 px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm backdrop-blur transition-shadow hover:shadow-lg hover:bg-white text-center"
            >
              <div className="flex items-center gap-2">
                {feature.icon}
                <span className="font-semibold text-slate-900">{feature.title}</span>
              </div>
              <span className="text-slate-600 text-xs lg:text-sm leading-tight">
                {feature.description}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "12+", label: "Projets réalisés", icon: <Code className="w-5 h-5 text-blue-500" /> },
            { number: "100%", label: "Clients satisfaits", icon: <Star className="w-5 h-5 text-yellow-500" /> },
            { number: "24h", label: "Délai de réponse", icon: <Clock className="w-5 h-5 text-green-500" /> },
            { number: "3 mois", label: "Support inclus", icon: <Zap className="w-5 h-5 text-purple-500" /> }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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