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
    description: "conçu pour votre activité",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    title: "Rapide & accessible",
    description: "dès la conception",
  },
  {
    icon: <Sparkles className="h-4 w-4" />,
    title: "Accompagnement",
    description: "de A à Z",
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
      tz: 12,
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
        className="pointer-events-none absolute top-[-140px] left-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-200 opacity-30 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-16 md:px-6 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="order-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur"
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
                show: { transition: { staggerChildren: reduce ? 0 : 0.04 } },
              }}
              className="mt-3 max-w-[20ch] text-[clamp(28px,7vw,54px)] leading-[1.06] font-extrabold tracking-tight sm:max-w-[28ch]"
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
                      transition: {
                        duration: reduce ? 0 : 0.45,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="mr-[.35ch] inline-block"
                  style={
                    ["web", "freelance"].includes(word.toLowerCase())
                      ? { color: ACCENT }
                      : undefined
                  }
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
                delay: reduce ? 0 : 0.2,
              }}
              className="mx-auto mt-3 h-1 w-28 rounded-full lg:mx-0"
              style={{ background: ACCENT_SOFT }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.4,
                delay: reduce ? 0 : 0.12,
              }}
              className="mt-4 max-w-prose text-[clamp(16px,4vw,19px)] leading-relaxed text-slate-600"
            >
              Je crée des sites et applications adaptés à votre activité, avec
              une <b>approche claire et personnalisée</b>, du design au code.
            </motion.p>

            {/* Meta Info */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-700 sm:gap-4 lg:justify-start">
              <StatusBadge />
              <span className="hidden opacity-40 sm:inline">•</span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500" />
                Réponse sous 24h
              </span>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.45,
                delay: reduce ? 0 : 0.2,
              }}
              className="mt-6 flex flex-col items-stretch justify-center gap-3 px-2 sm:px-0 md:flex-row md:items-center md:gap-4 lg:justify-start"
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
                  className="group relative inline-flex min-h-[48px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-slate-900 to-slate-800 px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-white shadow-[0_14px_36px_rgba(15,23,42,.22)] transition-[transform,box-shadow] duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 sm:text-base md:w-auto"
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
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,.28), transparent)",
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
                  className="group relative inline-flex min-h-[48px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white/90 px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-slate-900 shadow-sm backdrop-blur transition-[transform,box-shadow] duration-300 hover:shadow-md focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300 sm:text-base md:w-auto"
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
                className="xs:w-[240px] relative aspect-[3/4] w-[200px] rounded-[20px] bg-white p-1.5 shadow-xl sm:w-[280px] sm:rounded-[30px] sm:p-2 md:w-[320px] lg:w-[360px]"
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
        <div className="mt-8 flex flex-col gap-3 px-2 text-sm sm:mt-12 sm:px-0 lg:grid lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: reduce ? 0 : 0.35, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white/90 px-3 py-2.5 text-center shadow-sm backdrop-blur transition-shadow hover:bg-white hover:shadow-lg sm:px-4 sm:py-3 lg:flex-row lg:gap-2"
            >
              <div className="flex items-center gap-2">
                {feature.icon}
                <span className="font-semibold text-slate-900">
                  {feature.title}
                </span>
              </div>
              <span className="text-xs leading-tight text-slate-600 lg:text-sm">
                {feature.description}
              </span>
            </motion.div>
          ))}
        </div>
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
