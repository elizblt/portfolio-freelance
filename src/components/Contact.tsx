
export default function Contact() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto text-center" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
      <p className="text-gray-700 mb-6">Discutons de votre projet autour d'un appel rapide.</p>
      <a
        href="https://calendly.com/votre-lien"
        className="inline-block px-6 py-3 bg-accent text-white rounded-full font-semibold mb-4"
      >
        Prendre rendez-vous
      </a>
      <form
        action="https://formspree.io/f/xxxxyyyy"
        method="POST"
        className="mt-6 space-y-4 text-left"
      >
        <input type="text" name="name" placeholder="Nom" required className="w-full border p-3 rounded" />
        <input type="email" name="email" placeholder="Email" required className="w-full border p-3 rounded" />
        <textarea name="message" rows={5} placeholder="Votre message..." required className="w-full border p-3 rounded" />
        <button type="submit" className="px-6 py-3 bg-primary text-white rounded font-semibold">Envoyer</button>
      </form>
    </section>
  );
}
