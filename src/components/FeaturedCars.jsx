import { cars } from "../data/cars";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5491123456789?text=Hola%20quiero%20consultar%20por%20este%20veh%C3%ADculo";

export default function FeaturedCars() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Título animado */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
        >
          Autos destacados de la semana
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.model}
                  className="h-52 w-full object-cover"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Destacado
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {car.model}
                </h3>

                <ul className="text-gray-600 mb-6 space-y-1 text-sm">
                  <li>Año: {car.year}</li>
                  <li>Kilómetros: {car.km}</li>
                  <li>Caja: {car.transmission}</li>
                  <li>Combustible: {car.fuel}</li>
                </ul>

                {/* Botón */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="block text-center bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-xl font-medium shadow-md"
                >
                  Consultar vehículo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
