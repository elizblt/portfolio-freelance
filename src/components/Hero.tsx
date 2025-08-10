"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Award, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full px-6 py-20 md:py-32 lg:py-40 font-sans text-[#111] relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-slate-50/20 to-gray-50/30 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, rotate: -6, scale: 0.95 }}
            animate={{ opacity: 1, rotate: -6, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 mx-auto relative"
          >
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-[3/4] -rotate-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-slate-600/15 rounded-[40px] blur-2xl transform scale-110" />
              <div className="relative w-full h-full rounded-[40px] overflow-hidden border-8 border-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] backdrop-blur-sm">
                <Image
                  src="/eliseHero.png"
                  alt="Portrait d&apos;Élise Boillat, développeuse web freelance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-800">Active</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-3 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-gray-800">24h</span>
              </div>
            </motion.div>
          </motion.div>

          {/* TEXTE */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4" />
              Développeuse certifiée • +2 ans d&apos;expérience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Créons ensemble votre{" "}
              <span className="text-blue-600">
                présence digitale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 mb-8 font-medium max-w-2xl leading-relaxed"
            >
              Je développe des{" "}
              <strong className="text-gray-800">sites web modernes et performants</strong>{" "}
              qui reflètent parfaitement votre identité et vos ambitions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-green-600 font-semibold">
                  Disponible pour nouveaux projets
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600 font-medium">
                  Réponse sous 24h
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="#contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 min-w-[200px]"
              >
                <Mail className="w-5 h-5" />
                Parlons de votre projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#projects"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white border-2 border-gray-200 text-gray-800 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl min-w-[200px]"
              >
                Découvrir mon travail
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-sm text-gray-500 flex flex-wrap items-center gap-4"
            >
              <span>✓ Devis gratuit et détaillé</span>
              <span>✓ Code propre et documenté</span>
              <span>✓ Support personnalisé</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}