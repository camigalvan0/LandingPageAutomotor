import { motion } from "framer-motion"
import { MessageCircle, ChevronDown, Star, Car, Users } from "lucide-react"
import { Link } from "react-router-dom"
import heroAuto from "../assets/img/inicio2.png"

const WHATSAPP_URL =
  "https://wa.me/5491123456789?text=Hola%20quiero%20consultar%20por%20veh%C3%ADculos%20disponibles"

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } }
}

const word = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
}

const stats = [
  { icon: Star, value: "+10", label: "Años de experiencia" },
  { icon: Car, value: "+500", label: "Vehículos vendidos" },
  { icon: Users, value: "+1000", label: "Clientes satisfechos" },
]

export default function Hero() {
  const titlePart1 = "Encontrá tu próximo"
  const titlePart2 = "auto ideal"

  return (
    <section className="min-h-screen flex flex-col text-center px-4 sm:px-6 relative overflow-hidden pt-[20px]">

      {/* FONDO con zoom suave */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroAuto})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* OVERLAY en capas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* GLOW ROJO ambiental */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#E00B0B]/25 blur-[120px] sm:blur-[140px] rounded-full pointer-events-none"
      />

      {/* PARTÍCULAS decorativas — solo en pantallas md+ */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${15 + i * 17}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.7, delay: i * 0.5 }}
        />
      ))}

      {/* CONTENIDO PRINCIPAL — ocupa todo el espacio disponible y centra verticalmente */}
      <div className="relative flex-1 flex items-center justify-center py-4 mt-12 sm:mt-2 sm:pt-12">
        <div className="w-full max-w-4xl text-white flex flex-col items-center gap-4 sm:gap-5 md:gap-6">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-[#E00B0B] animate-pulse" />
            Compra y venta de vehículos
          </motion.div>

          {/* TÍTULO */}
          <motion.h1
            variants={textContainer}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            <span className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 mb-1 sm:mb-2">
              {titlePart1.split(" ").map((w, i) => (
                <motion.span key={i} variants={word}>{w}</motion.span>
              ))}
            </span>
            <span className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3">
              {titlePart2.split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className="text-[#E00B0B] drop-shadow-[0_0_20px_rgba(224,11,11,0.7)]"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* NOMBRE DE LA EMPRESA */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base sm:text-xl md:text-2xl font-semibold text-white/80 tracking-widest uppercase"
          >
            [nombre de automotor]
          </motion.p>

          {/* SUBTÍTULO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xs sm:max-w-xl"
          >
            Vehículos 0km y usados seleccionados cuidadosamente.
            Atención personalizada y entrega inmediata.
          </motion.p>

          {/* BOTONES CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(224,11,11,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-[#E00B0B] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-[0_8px_25px_rgba(224,11,11,0.4)] transition-all duration-200"
            >
              <motion.div
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              >
                <MessageCircle size={20} />
              </motion.div>
              Consultar por WhatsApp
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/AutosUsados"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-200 w-full"
              >
                Ver catálogo
                <ChevronDown size={16} className="rotate-[-90deg]" />
              </Link>
            </motion.div>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3 bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E00B0B]/20 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-[#E00B0B]" />
                </div>
                <div className="text-left">
                  <div className="text-lg sm:text-xl font-semibold leading-none">{value}</div>
                  <div className="text-xs text-gray-400 mt-0.5 whitespace-nowrap">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* SCROLL INDICATOR — en el flujo normal, nunca se superpone */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="relative pb-6 sm:pb-8 flex flex-col items-center gap-1 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

    </section>
  )
}
