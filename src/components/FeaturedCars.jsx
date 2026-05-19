import { motion } from "framer-motion"
import { cars } from "../data/cars"

const WHATSAPP_URL =
  "https://wa.me/5491123456789?text=Hola%20quiero%20consultar%20por%20este%20veh%C3%ADculo"

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
}

export default function FeaturedCars() {
  return (
    <section className="px-4 sm:px-6 py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#E00B0B]">
            Selección semanal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mt-2">
            Autos destacados de la semana
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {cars.map((car, i) => (
            <motion.div
              key={car.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.model}
                  className="h-52 w-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#E00B0B] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Destacado
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                  {car.model}
                </h3>

                <ul className="text-gray-500 mb-5 space-y-1 text-sm">
                  <li>Año: {car.year}</li>
                  <li>Kilómetros: {car.km}</li>
                  <li>Caja: {car.transmission}</li>
                  <li>Combustible: {car.fuel}</li>
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="block text-center bg-[#E00B0B] hover:bg-red-700 transition text-white py-3 rounded-xl font-semibold text-sm"
                >
                  Consultar vehículo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
