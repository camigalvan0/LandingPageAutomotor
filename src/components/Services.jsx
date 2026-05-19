import { motion } from "framer-motion"
import { Car, Wrench, FileText, BadgeDollarSign } from "lucide-react"

const services = [
  { icon: Car,             title: "Venta de Vehículos",       desc: "Amplio catálogo de autos 0km y usados seleccionados con garantía." },
  { icon: Wrench,          title: "Servicio Técnico",          desc: "Mantenimiento y reparaciones con repuestos originales y técnicos especializados." },
  { icon: FileText,        title: "Gestoría y Transferencias", desc: "Nos encargamos de todos los trámites para que compres o vendas sin complicaciones." },
  { icon: BadgeDollarSign, title: "Financiación y Seguros",    desc: "Opciones de financiación y seguros a medida para que manejes tranquilo." },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
}

export default function Services() {
  return (
    <section className="w-full bg-white py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-3 sm:-inset-5 bg-[#E00B0B]/6 rounded-3xl" />
          <img
            src="src/assets/img/servicios.png"
            alt="Servicios concesionaria"
            className="relative rounded-2xl shadow-lg object-cover w-full h-[360px] sm:h-[420px]"
          />
          <div className="absolute bottom-6 right-6 bg-[#E00B0B] text-white px-6 py-4 rounded-2xl shadow-md">
            <p className="text-2xl font-extrabold">+10</p>
            <p className="text-xs opacity-90">Años de experiencia</p>
          </div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#E00B0B]">
            Lo que ofrecemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mt-2 mb-3">
            Nuestros Servicios para Vos
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
            Te acompañamos en todo el proceso automotor, desde la elección del vehículo
            hasta la entrega y postventa.
          </p>

          <div className="space-y-5">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex gap-4 items-start group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#E00B0B]/10 group-hover:bg-[#E00B0B] flex items-center justify-center transition-colors duration-300">
                    <Icon size={18} className="text-[#E00B0B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{service.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed mt-0.5">{service.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 bg-[#E00B0B] hover:bg-red-700 transition text-white px-8 py-3 rounded-xl font-semibold text-sm sm:text-base shadow-md"
          >
            Solicitar Asesoramiento
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
