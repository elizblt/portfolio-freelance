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
    gradient: "from-blue-500 to-blue-600",
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
    gradient: "from-slate-600 to-slate-700",
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
    gradient: "from-gray-600 to-gray-700",
    items: [
      { icon: Palette, title: "Figma / Design", level: 85 },
      { icon: FolderGit2, title: "Git / GitHub", level: 92 },
      { icon: Wrench, title: "DevOps / CI/CD", level: 80 },
      { icon: LayoutTemplate, title: "SEO / Performance", level: 88 },
      { icon: Cpu, title: "Testing", level: 82 }
    ],
  },
];


export default function Skills() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Technologies
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Stack technique moderne pour créer des solutions performantes
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {group.label}
                </h3>
              </div>

              <div className="space-y-3">
                {group.items.slice(0, 5).map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{skill.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}