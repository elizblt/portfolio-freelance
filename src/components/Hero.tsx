"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Award, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full px-4 md:px-6 py-16 md:py-24 lg:py-32 font-sans text-gray-900 relative overflow-hidden">
      {/* Subtle Background - Simplified */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/40 to-blue-50/20 -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* CONTENT - Priorité mobile first */}
          <div className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            >
              <Award className="w-3.5 h-3.5" />
              Développeuse web • 2+ ans d&apos;expérience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight max-w-2xl"
            >
              Créons ensemble votre{" "}
              <span className="text-blue-600 relative">
                présence digitale
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-200 rounded"></div>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed"
            >
              Je développe des{" "}
              <strong className="text-gray-800 font-semibold">sites web modernes et performants</strong>{" "}
              qui reflètent parfaitement votre identité et vos ambitions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm text-green-600 font-medium">
                  Disponible pour nouveaux projets
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                <span>Réponse sous 24h</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] min-w-[160px]"
              >
                <Mail className="w-4 h-4" />
                Parlons de votre projet
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-sm font-semibold shadow-sm hover:shadow-md min-w-[160px]"
              >
                Voir mes projets
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs text-gray-400 flex flex-wrap items-center gap-4 pt-2"
            >
              <span>✓ Devis gratuit et détaillé</span>
              <span>✓ Code propre et documenté</span>
              <span>✓ Support personnalisé</span>
            </motion.div>
          </div>

          {/* IMAGE - Simplifiée pour les performances */}
          <div className="order-2 lg:order-2 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[3/4] -rotate-3"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-slate-600/10 rounded-3xl blur-xl transform scale-105" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/eliseHero.png"
                  alt="Portrait d&apos;Élise Boillat, développeuse web freelance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, 40vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Floating Elements - Simplifiés */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute -top-2 -right-2 bg-white rounded-xl p-2 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-800">Active</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="absolute -bottom-2 -left-2 bg-white rounded-xl p-2 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-blue-500" />
                <span className="text-xs font-medium text-gray-800">24h</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}