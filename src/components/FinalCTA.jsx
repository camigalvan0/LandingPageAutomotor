const WHATSAPP_URL =
  "https://wa.me/5491123456789?text=Hola%20quiero%20comprar%20un%20auto";

export default function FinalCTA() {
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">
        ¿Listo para cambiar tu auto?
      </h2>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        className="inline-block bg-[#E00B0B] text-white px-10 py-4 rounded-lg text-lg font-semibold"
      >
        Hablar ahora por WhatsApp
      </a>
    </section>
  );
}
