"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
  Palette, 
  Database, 
  Paintbrush2, 
  Wrench, 
  FolderGit2, 
  LayoutTemplate,
  Cpu,
  Zap,
  Shield,
  Smartphone
} from "lucide-react";

const skillGroups = [
  {
    label: "Développement Frontend",
    gradient: "from-blue-500 to-indigo-600",
    items: [
      { icon: Code, title: "React / Next.js 14", level: 95 },
      { icon: LayoutTemplate, title: "TypeScript", level: 90 },
      { icon: Paintbrush2, title: "Tailwind CSS", level: 95 },
      { icon: Smartphone, title: "Responsive Design", level: 92 },
      { icon: Zap, title: "Framer Motion", level: 88 }
    ],
  },
  {
    label: "Backend & Infrastructure",
    gradient: "from-green-500 to-emerald-600",
    items: [
      { icon: Server, title: "Node.js / Express", level: 85 },
      { icon: Database, title: "PostgreSQL / MongoDB", level: 82 },
      { icon: Cpu, title: "Prisma / ORM", level: 88 },
      { icon: Shield, title: "JWT / Auth", level: 85 },
      { icon: Wrench, title: "API REST", level: 90 }
    ],
  },
  {
    label: "Design & Outils",
    gradient: "from-purple-500 to-pink-600",
    items: [
      { icon: Palette, title: "Figma / Design", level: 85 },
      { icon: FolderGit2, title: "Git / GitHub", level: 92 },
      { icon: Wrench, title: "DevOps / CI/CD", level: 80 },
      { icon: LayoutTemplate, title: "SEO / Performance", level: 88 },
      { icon: Cpu, title: "Testing", level: 82 }
    ],
  },
];

const certifications = [
  {
    name: "Next.js Certified Developer",
    organization: "Vercel",
    year: "2024",
    color: "bg-black text-white"
  },
  {
    name: "React Advanced Patterns",
    organization: "Epic React",
    year: "2023",
    color: "bg-blue-600 text-white"
  },
  {
    name: "TypeScript Expert",
    organization: "Microsoft",
    year: "2023",
    color: "bg-blue-500 text-white"
  },
  {
    name: "AWS Cloud Practitioner",
    organization: "Amazon",
    year: "2023",
    color: "bg-orange-500 text-white"
  }
];

export default function Skills() {
  return (
    <section className="w-full px-6 py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6"
          >
            <Cpu className="w-4 h-4" />
            Expertise technique
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Technologies{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              maîtrisées
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Une stack technique moderne et éprouvée pour créer des applications web performantes et évolutives.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${group.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {group.label}
                </h3>
              </div>

              <div className="space-y-6">
                {group.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (groupIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-gray-600" />
                        <span className="font-medium text-gray-900">{skill.title}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (groupIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${group.gradient} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications & Formations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`px-6 py-4 rounded-2xl ${cert.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="font-semibold text-sm">{cert.name}</div>
                <div className="text-xs opacity-90">{cert.organization} • {cert.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Une stack technique adaptée à vos besoins
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Je sélectionne les meilleures technologies selon votre projet : performance, maintenance, évolutivité.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discuter de votre stack
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}