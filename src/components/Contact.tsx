export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white text-center" id="contact">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-6">Contact</h2>
      <p className="text-[#666] text-base mb-6">Parlons de votre projet autour d’un appel rapide ou par message.</p>

      <a
        href="https://calendly.com/votre-lien"
        className="inline-flex items-center gap-2 rounded-full bg-[#111] text-white font-medium px-6 py-3 hover:opacity-90 transition mb-8"
      >
        Prendre rendez-vous
      </a>

      <form
        action="https://formspree.io/f/xxxxyyyy"
        method="POST"
        className="mt-6 max-w-xl mx-auto text-left space-y-4"
      >
        <input type="text" name="name" placeholder="Nom" required className="w-full border border-black/10 p-3 rounded-lg" />
        <input type="email" name="email" placeholder="Email" required className="w-full border border-black/10 p-3 rounded-lg" />
        <textarea name="message" rows={5} placeholder="Votre message..." required className="w-full border border-black/10 p-3 rounded-lg" />
        <button type="submit" className="px-6 py-3 bg-[#111] text-white rounded-full font-medium hover:opacity-90 transition">Envoyer</button>
      </form>
    </section>
  );
}
