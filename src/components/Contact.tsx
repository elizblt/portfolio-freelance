"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Clock, Send, CheckCircle, Phone, Shield
} from "lucide-react";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    consent: false,
    // honeypot anti-spam (doit rester vide)
    website: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const emailOk = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Le nom est requis.";
    if (!form.email.trim()) e.email = "L’e-mail est requis.";
    else if (!emailOk(form.email)) e.email = "Format d’e-mail invalide.";
    if (!form.message.trim()) e.message = "Un message est requis.";
    else if (form.message.trim().length < 20) e.message = "Au moins 20 caractères.";
    if (!form.consent) e.consent = "Merci d’accepter la politique de confidentialité.";
    // honeypot
    if (form.website) e.website = "Spam détecté.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    try {
      // ✉️ Branche API si tu l’as :
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("send failed");

      // Simulation d’envoi
      await new Promise((r) => setTimeout(r, 1200));

      setStatus("sent");
      setForm({
        name: "", email: "", company: "", projectType: "", budget: "",
        timeline: "", message: "", consent: false, website: ""
      });
      setErrors({});
      setTimeout(() => setStatus("idle"), 4500);
    } catch (err) {
      setStatus("idle");
      setErrors((prev) => ({ ...prev, submit: "Impossible d’envoyer pour le moment." }));
      console.error(err);
    }
  };

  // aide : petites puces qui remplissent “type de projet”
  const quickTypes = ["Site vitrine", "E-commerce", "Application web", "Refonte", "Maintenance"];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-gray-900"
          >
            Parlons de votre projet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="mt-3 text-lg text-gray-600"
          >
            Décrivez vos besoins. Je reviens sous 24&nbsp;h ouvrées avec une première estimation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Colonne de réassurance + contact direct */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vous préférez un appel ?</h3>
              <p className="text-sm text-gray-600">
                Réservez un créneau de 15&nbsp;min pour un échange rapide sur vos objectifs.
              </p>
              <a
                href="https://calendly.com/your-link" // remplace par ton lien
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full
                           bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white
                           ring-1 ring-neutral-900 transition hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" />
                Réserver un appel
              </a>
              <p className="mt-3 text-xs text-gray-500">
                Ou écrivez-moi : <span className="font-medium text-gray-900">contact@votre-domaine.fr</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Infos pratiques</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-900" />
                  <span>contact@votre-domaine.fr</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-900" />
                  <span>Montauban, France • Projets partout en France</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gray-900" />
                  <span>Lun–Ven, 9h–18h</span>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 ring-1 ring-gray-100 shadow-sm space-y-6"
              noValidate
            >
              {/* honeypot anti-spam */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition
                                ${errors.name ? "border-red-300 focus:ring-2 focus:ring-red-200"
                                              : "border-gray-200 focus:ring-2 focus:ring-gray-300"}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse e-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition
                                ${errors.email ? "border-red-300 focus:ring-2 focus:ring-red-200"
                                               : "border-gray-200 focus:ring-2 focus:ring-gray-300"}`}
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
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-gray-300 transition"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:ring-2 focus:ring-gray-300 transition"
                  >
                    <option value="">Sélectionner</option>
                    <option>Site vitrine</option>
                    <option>E-commerce</option>
                    <option>Application web</option>
                    <option>Refonte</option>
                    <option>Maintenance</option>
                    <option>Autre</option>
                  </select>
                  {/* Quick chips */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {quickTypes.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm((p) => ({ ...p, projectType: t }))}
                        className="text-xs rounded-full px-3 py-1 ring-1 ring-gray-200 hover:bg-gray-50"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:ring-2 focus:ring-gray-300 transition"
                  >
                    <option value="">Sélectionner</option>
                    <option>Moins de 1 500 €</option>
                    <option>1 500 – 3 000 €</option>
                    <option>3 000 – 5 000 €</option>
                    <option>5 000 – 10 000 €</option>
                    <option>10 000 € et +</option>
                    <option>À discuter</option>
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none bg-white focus:ring-2 focus:ring-gray-300 transition"
                  >
                    <option value="">Sélectionner</option>
                    <option>Urgent (-1 mois)</option>
                    <option>Normal (1–2 mois)</option>
                    <option>Flexible (3+ mois)</option>
                    <option>Pas pressé</option>
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
                  rows={6}
                  maxLength={1000}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Objectifs, pages ou fonctionnalités clés, références que vous aimez…"
                  className={`w-full px-4 py-3 rounded-xl border outline-none resize-y transition
                              ${errors.message ? "border-red-300 focus:ring-2 focus:ring-red-200"
                                               : "border-gray-200 focus:ring-2 focus:ring-gray-300"}`}
                />
                <div className="mt-1 flex items-center justify-between">
                  {errors.message ? (
                    <p className="text-sm text-red-600">{errors.message}</p>
                  ) : (
                    <span className="text-xs text-gray-500">{form.message.length}/1000</span>
                  )}
                </div>
              </div>

              {/* Consentement RGPD */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                  className={`mt-1 h-4 w-4 rounded border-gray-300 text-neutral-900 focus:ring-neutral-900`}
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  J’accepte que mes informations soient utilisées pour répondre à ma demande.
                  <span className="block text-xs text-gray-500">
                    Aucune diffusion commerciale. Vous pouvez demander la suppression à tout moment.
                  </span>
                </label>
              </div>
              {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}
              {errors.submit && <p className="text-sm text-red-600">{errors.submit}</p>}

              {/* Submit */}
              <div className="space-y-4" aria-live="polite">
                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3 px-6 font-semibold
                              ${status === "idle"
                                ? "bg-neutral-950 text-white ring-1 ring-neutral-900 hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
                                : "bg-gray-200 text-gray-600"} transition`}
                >
                  {status === "idle" && (<><Send className="h-4 w-4" /> Envoyer ma demande</>)}
                  {status === "sending" && (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Envoi…
                    </>
                  )}
                  {status === "sent" && (<><CheckCircle className="h-4 w-4" /> Message envoyé</>)}
                </motion.button>

                {status === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center rounded-xl bg-green-50 text-green-700 text-sm px-4 py-3"
                  >
                    Merci ! Je vous réponds sous 24&nbsp;h ouvrées avec une première estimation.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        {/* Stats (neutres, non criardes) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "24 h", label: "Délai de réponse" },
            { number: "100 %", label: "Projets livrés" },
            { number: "3 mois", label: "Accompagnement inclus" },
            { number: "0 €", label: "Devis gratuit" },
          ].map((s) => (
            <div key={s.label} className="text-center rounded-2xl bg-white ring-1 ring-gray-100 p-5 shadow-sm">
              <div className="text-xl md:text-2xl font-extrabold text-gray-900">{s.number}</div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Note confidentialité */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
          <Shield className="h-3.5 w-3.5" />
          <span>Vos données ne sont utilisées que pour répondre à votre demande.</span>
        </div>
      </div>
    </section>
  );
}
