export default function Contact() {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#f9f9f9] text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-6">
        Prêt à concrétiser votre projet ?
      </h2>
      <p className="text-[#666] text-lg max-w-xl mx-auto mb-10">
        Discutons de votre idée, vos besoins et vos objectifs. Je vous accompagne à chaque étape.
      </p>
      <a
        href="#contact"
        className="bg-[#111] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
      >
        Réserver un appel
      </a>
    </section>
  );
}
