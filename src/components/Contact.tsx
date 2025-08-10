"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle, Star } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "" 
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!form.name.trim()) newErrors.name = "Le nom est requis";
    if (!form.email.trim()) newErrors.email = "L'email est requis";
    if (!form.email.includes('@')) newErrors.email = "Format d'email invalide";
    if (!form.message.trim()) newErrors.message = "Le message est requis";
    if (form.message.length < 10) newErrors.message = "Le message doit faire au moins 10 caractères";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus('sending');
    
    try {
      // Simuler l'envoi avec validation
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus('sent');
      setForm({ name: "", email: "", company: "", projectType: "", budget: "", timeline: "", message: "" });
      setErrors({});
      
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      setStatus('idle');
      console.error('Erreur lors de l\'envoi:', error);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Parlons de votre projet
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Contactez-moi pour un devis personnalisé et gratuit
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Garanties */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Mes engagements
              </h3>
              <div className="space-y-3">
                {[
                  { icon: <Clock className="w-4 h-4 text-blue-600" />, title: "Réponse sous 24h" },
                  { icon: <CheckCircle className="w-4 h-4 text-green-600" />, title: "Devis gratuit" },
                  { icon: <Star className="w-4 h-4 text-yellow-600" />, title: "Qualité garantie" },
                  { icon: <Mail className="w-4 h-4 text-purple-600" />, title: "Suivi personnalisé" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-sm text-gray-700">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Direct */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact direct</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">elise@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Montauban, France</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">Lun-Ven, 9h-18h</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none ${
                      errors.name 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                        : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise (optionnel)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Mon entreprise"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none bg-white"
                  >
                    <option value="">Sélectionner un type</option>
                    <option value="site-vitrine">Site vitrine</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="application">Application web</option>
                    <option value="refonte">Refonte de site</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget estimé (optionnel)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none bg-white"
                  >
                    <option value="">Sélectionner une fourchette</option>
                    <option value="moins-1500">Moins de 1 500€</option>
                    <option value="1500-3000">1 500 - 3 000€</option>
                    <option value="3000-5000">3 000 - 5 000€</option>
                    <option value="5000-10000">5 000 - 10 000€</option>
                    <option value="10000+">Plus de 10 000€</option>
                    <option value="a-discuter">À discuter</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Délai souhaité
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors outline-none bg-white"
                  >
                    <option value="">Sélectionner un délai</option>
                    <option value="urgent">Urgent (moins de 1 mois)</option>
                    <option value="normal">Normal (1-2 mois)</option>
                    <option value="flexible">Flexible (3+ mois)</option>
                    <option value="pas-presse">Pas pressé</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet : objectifs, fonctionnalités souhaitées, public cible, inspiration..."
                  className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none resize-none ${
                    errors.message 
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
                  }`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                <div className="mt-1 text-xs text-gray-500">
                  {form.message.length}/500 caractères
                </div>
              </div>

              <div className="space-y-4">
                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                    status === 'sent' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {status === 'idle' && (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer ma demande
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Envoi en cours...
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message envoyé avec succès !
                    </>
                  )}
                </motion.button>
                
                {status === 'sent' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-3 bg-green-50 text-green-700 rounded-xl text-sm"
                  >
                    ✓ Merci ! Je vous réponds sous 24h avec un devis personnalisé.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "24h", label: "Délai de réponse" },
            { number: "100%", label: "Projets livrés" },
            { number: "3 mois", label: "Support inclus" },
            { number: "0€", label: "Devis gratuit" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}