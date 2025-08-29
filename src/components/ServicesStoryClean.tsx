"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, AlertCircle, Laptop, Sparkles, Check } from "lucide-react";
import Link from "next/link";

/* ---- THEME ---- */
const SLATE = {
  50:"#F8FAFC",100:"#F1F5F9",200:"#E2E8F0",300:"#CBD5E1",
  600:"#475569",700:"#334155",800:"#1F2937",900:"#0F172A",
};
const ACCENT = "#2F6FE3";

/* ---- CONTENT ---- */
const STEPS = [
  {
    k: "avant",
    title: "Avant",
    icon: AlertCircle,
    text: "Un site inexistant ou daté = peu de visibilité et des clients qui passent à côté.",
    bullets: ["Image peu claire", "Peu de prises de contact", "Mises à jour compliquées"],
  },
  {
    k: "avec",
    title: "Avec moi",
    icon: Laptop,
    text: "Création d’un site clair, rapide et pensé mobile & Google. Vos clients vous trouvent facilement.",
    bullets: ["Design orienté client", "SEO soigné & rapide", "Mise en ligne + accompagnement"],
  },
  {
    k: "apres",
    title: "Après",
    icon: Sparkles,
    text: "Vous gagnez en crédibilité, en visibilité et recevez plus de demandes sans effort supplémentaire.",
    bullets: ["Image pro & rassurante", "Plus de demandes entrantes", "Site évolutif"],
  },
];

/* ---- ANIM ---- */
const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1], delay: d } },
});

/* Tilt util */
function useTilt() {
  const [style, setStyle] = useState<React.CSSProperties | undefined>();
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * 7;
    const ry = (0.5 - px) * 9;
    setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)` });
  }
  function onLeave() { setStyle({ transform: "perspective(900px) rotateX(0) rotateY(0)" }); }
  return { style, onMove, onLeave };
}

/* ---- SECTION ---- */
export default function ServicesStoryClean() {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const railInView = useInView(railRef, { once:true, margin:"-15% 0px -15% 0px" });

  return (
    <section id="services" className="relative px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div variants={fade(0)} initial="hidden" whileInView="show" viewport={{ once:true }}
          className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Un site clair qui vous apporte des demandes
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Je m’occupe du design, du contenu et de la mise en ligne — vous gardez la main sans complexité.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s,i)=>{
            const Icon = s.icon;
            const { style, onMove, onLeave } = useTilt();
            return (
              <motion.article key={s.k} variants={fade(i*0.08)} initial="hidden" whileInView="show" viewport={{ once:true }}
                className="relative">
                <div onMouseMove={onMove} onMouseLeave={onLeave} style={style}
                  className="group relative rounded-2xl bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,.10)] ring-1 ring-slate-100 transition-all duration-300 hover:shadow-[0_22px_70px_rgba(2,6,23,.16)]">
                  
                  {/* Icon badge */}
                  <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 shadow-sm">
                    <Icon className="h-8 w-8 text-slate-800" />
                    <span className="absolute -bottom-6 text-sm font-semibold text-slate-500">{i+1}</span>
                  </div>

                  <h3 className="text-center text-xl font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-3 text-center text-sm leading-relaxed text-slate-600">{s.text}</p>

                  <ul className="mx-auto mt-5 max-w-sm space-y-2">
                    {s.bullets.map((b)=>(
                      <li key={b} className="flex items-center justify-center gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4" style={{ color: ACCENT }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* CTA final unique */}
        <motion.div variants={fade(0.15)} initial="hidden" whileInView="show" viewport={{ once:true }}
          className="mt-14 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Prêt·e à passer à l’action&nbsp;?</h3>
          <p className="mx-auto mt-2 max-w-xl text-slate-600">Décrivez votre projet en 1 minute. Réponse sous 24&nbsp;h.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white bg-gradient-to-b from-slate-900 to-slate-800 shadow-[0_14px_36px_rgba(15,23,42,.22)] transition hover:brightness-110">
              Discutons de votre projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5"/>
            </Link>
            <Link href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:ring-slate-300">
              Voir des exemples
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
