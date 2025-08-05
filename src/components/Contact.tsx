"use client";
import { useState } from "react";

/**
 * Formulaire de contact simple.
 * Les champs sont contrôlés par un état local et un message de remerciement s’affiche à l’envoi.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Merci pour votre message ! Je reviendrai vers vous rapidement.");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact" className="py-24 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-8 text-center">Contactez‑moi</h2>
      <p className="text-[#666] text-lg max-w-2xl mx-auto text-center mb-12">
        Une idée de projet ? Une question sur mes services ? Remplissez le formulaire ci‑dessous et je vous répondrai dans les meilleurs délais.
      </p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-[#333] mb-1">Nom complet</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required className="p-3 rounded-md border border-blue-100 bg-white/70 backdrop-blur-md text-[#111] focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-[#333] mb-1">Adresse email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="p-3 rounded-md border border-blue-100 bg-white/70 backdrop-blur-md text-[#111] focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm text-[#333] mb-1">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} required className="p-3 rounded-md border border-blue-100 bg-white/70 backdrop-blur-md text-[#111] focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
        </div>
        <button type="submit" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">Envoyer le message</button>
      </form>
    </section>
  );
}
