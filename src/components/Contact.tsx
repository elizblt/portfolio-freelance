"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    company: "",
    budget: "",
    timeline: "",
    message: "" 
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simuler l'envoi
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: "", email: "", company: "", budget: "", timeline: "", message: "" });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6"
          >
            <Mail className="w-4 h-4" />
            Contact
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Transformons votre{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              idée en réalité
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discutons de votre projet et créons ensemble une solution digitale qui dépasse vos attentes.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi me choisir ?
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                    title: "Réactivité garantie",
                    description: "Réponse sous 24h et communication transparente tout au long du projet."
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                    title: "Technologies modernes",
                    description: "Stack technique à jour : Next.js, TypeScript, Tailwind CSS, etc."
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                    title: "Résultats mesurables",
                    description: "Focus sur la performance, l&apos;UX et la conversion de vos visiteurs."
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                    title: "Support inclus",
                    description: "3 mois de support gratuit pour tous les nouveaux projets."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Informations de contact</h4>
              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "elise@example.com" },
                  { icon: <Phone className="w-5 h-5" />, label: "Téléphone", value: "+33 6 12 34 56 78" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Localisation", value: "Montauban, France" },
                  { icon: <Clock className="w-5 h-5" />, label: "Disponibilité", value: "Lun-Ven, 9h-18h" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="text-indigo-600">{item.icon}</div>
                    <div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                      <div className="font-medium text-gray-900">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Entreprise / Organisation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget estimé
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors outline-none bg-white"
                  >
                    <option value="">Sélectionner une fourchette</option>
                    <option value="1000-2500">1 000 - 2 500€</option>
                    <option value="2500-5000">2 500 - 5 000€</option>
                    <option value="5000-10000">5 000 - 10 000€</option>
                    <option value="10000+">Plus de 10 000€</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Délai souhaité
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors outline-none bg-white"
                  >
                    <option value="">Sélectionner un délai</option>
                    <option value="urgent">Urgent (moins d&apos;1 mois)</option>
                    <option value="normal">Normal (1-3 mois)</option>
                    <option value="flexible">Flexible (3+ mois)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Parlez-moi de votre projet, vos objectifs, les fonctionnalités souhaitées..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors outline-none resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                className="w-full flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer mon projet
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    Envoi en cours...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message envoyé !
                  </>
                )}
              </motion.button>

              <div className="text-center text-sm text-gray-500">
                <p>✓ Réponse sous 24h garantie</p>
                <p>✓ Devis détaillé et personnalisé</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}