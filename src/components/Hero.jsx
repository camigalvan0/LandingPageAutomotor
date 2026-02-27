import heroAuto from "../assets/img/inicio2.png"

const WHATSAPP_URL =
  "https://wa.me/5491123456789?text=Hola%20quiero%20consultar%20por%20veh%C3%ADculos%20disponibles"

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center px-6 relative"
      style={{
        backgroundImage: `url(${heroAuto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENIDO */}
      <div className="relative max-w-3xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Comprá tu próximo auto en{" "}
          <span className="text-[#E00B0B]">Moyano Automotores</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Vehículos 0km y usados seleccionados. Atención personalizada y entrega
          inmediata.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          className="inline-block bg-[#E00B0B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  )
}
