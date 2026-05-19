import { motion } from "framer-motion"

export default function ValueProposition() {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-24 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#E00B0B]">
          Por qué elegirnos
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mt-2">
          Tu auto ideal, sin vueltas
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
          Seleccionamos vehículos en excelente estado, con documentación al día
          y opciones para todos los presupuestos.
        </p>
      </motion.div>
    </section>
  )
}
