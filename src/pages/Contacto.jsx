import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"
import ContactMap from "../components/ContactMap"

const infoCards = [
  {
    icon: MapPin,
    title: "Visitanos",
    text: "El lugar perfecto para encontrar tu vehículo perfecto",
    info: "Bolivar 500, General Cabrera, Cba, Arg.",
  },
  {
    icon: Phone,
    title: "Llamanos",
    text: "Estamos a tu disposición",
    info: "+44 (0) 203 116 7711",
  },
  {
    icon: Mail,
    title: "Contactanos",
    text: "Te asesoramos para una mejor experiencia",
    info: "noreply@noland.com",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
}

export default function Contact() {
  return (
    <main className="w-full overflow-hidden">

      {/* HERO */}
      <section
        className="relative h-[55vh] min-h-[340px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1700403748616-94e54842caf1?q=80&w=1333&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center text-white px-4 max-w-2xl mx-auto"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#E00B0B] bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-5">
            Estamos para ayudarte
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Contacto
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed max-w-md mx-auto">
            Adquirí tu vehículo de manera segura y con experiencia garantizada
          </p>
        </motion.div>
      </section>

      {/* INFO CARDS */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#E00B0B]">
            Dónde encontrarnos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mt-2">
            Medios de contacto
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {infoCards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group text-center bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E00B0B]/10 group-hover:bg-[#E00B0B] flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                <card.icon size={22} className="text-[#E00B0B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">{card.title}</h3>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">{card.text}</p>
              <p className="text-[#E00B0B] font-semibold text-sm">{card.info}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MAPA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-[460px] sm:h-[520px]"
      >
        <ContactMap />
      </motion.section>

    </main>
  )
}
