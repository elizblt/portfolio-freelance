"use client";

import { useState } from "react";

/**
 * Section Contact. Contient un formulaire simple avec trois champs et un
 * gestionnaire d'événements pour afficher un message de remerciement.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Merci pour votre message ! Je reviendrai vers vous rapidement.");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact" className="w-full px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          Contactez‑moi
        </h2>
        <p className="text-neutral-600 mb-10 text-center">
          Une idée de projet ? Une question sur mes services ? Remplissez le
          formulaire ci‑dessous et je vous répondrai dans les meilleurs délais.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Adresse e‑mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition"
            >
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
