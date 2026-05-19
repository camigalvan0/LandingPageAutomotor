import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5491123456789?text=Hola%20quiero%20comprar%20un%20auto"

export default function FinalCTA() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 sm:py-28 px-4 sm:px-6 overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(224,11,11,0.15)_0%,_transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-2xl mx-auto"
      >
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#E00B0B]">
          Hablemos
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mt-2 mb-4">
          ¿Listo para cambiar tu auto?
        </h2>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-10">
          Nuestro equipo está disponible para asesorarte y encontrar el vehículo ideal para vos.
        </p>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(224,11,11,0.5)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-[#E00B0B] text-white px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-semibold shadow-[0_8px_25px_rgba(224,11,11,0.4)] transition-all duration-200"
        >
          <MessageCircle size={20} />
          Hablar ahora por WhatsApp
        </motion.a>
      </motion.div>
    </section>
  )
}
