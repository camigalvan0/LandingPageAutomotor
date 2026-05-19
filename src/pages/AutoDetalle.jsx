import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import autosUsados from "../data/AutosUsados"

import {
  Calendar,
  Zap,
  Settings,
  Fuel,
  MapPin,
  Repeat,
  Car,
  X
} from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5493513232880?text=Hola%20quiero%20consultar%20por%20este%20vehiculo"

export default function AutoDetalle() {
  const { id } = useParams()
  const auto = autosUsados.find(a => a.id === Number(id))

  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [origin, setOrigin] = useState("center")
  const [lightbox, setLightbox] = useState(false)

  if (!auto) return <p>Auto no encontrado</p>

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
  }

  const next = () =>
    setIndex((prev) => (prev + 1) % auto.images.length)

  const prev = () =>
    setIndex((prev) => (prev - 1 + auto.images.length) % auto.images.length)

  return (
    <section className="max-w-7xl mx-auto px-4 py-18">

      <Link to="/Autos" className="text-red-600 font-medium">
        ← Volver
      </Link>

      {/* HEADER */}
      

      {/* CONTENIDO */}
      <div className="flex flex-col items-center gap-10">

        {/* 🔍 GALERÍA */}
        <div className="w-full max-w-3xl">

          <div
            className="overflow-hidden rounded-xl cursor-zoom-in"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={handleMove}
            onClick={() => setLightbox(true)}
          >
            <motion.img
              key={index}
              src={auto.images[index]}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`w-full h-[280px] md:h-[450px] object-cover transition-transform duration-300 ${
                zoom ? "scale-150" : "scale-100"
              }`}
              style={{ transformOrigin: origin }}
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-2 mt-3 overflow-x-auto justify-center">
            {auto.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setIndex(i)}
                className={`h-16 w-24 object-cover rounded-lg cursor-pointer border-2 ${
                  index === i ? "border-red-600" : "border-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-6 text-center">

          <div className="flex justify-between">
            <div className="mb-8 text-start">
              <h1 className="text-xl md:text-3xl font-bold">{auto.name}</h1>
              <p className="text-gray-500 text-md">
                {auto.year} · {auto.km.toLocaleString()} km
              </p>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-red-600">
              $ {auto.price.toLocaleString("es-AR")}
            </div>  
          </div>
          

          <p className="text-gray-600">
          {auto.description}
          </p>

          {/* SPECS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            <SpecCard icon={<Settings />} label="Motor" value="2.8 TD 204CV" />
            <SpecCard icon={<Fuel />} label="Combustible" value={auto.fuel || "Nafta"} />
            <SpecCard icon={<MapPin />} label="Km" value={`${auto.km.toLocaleString()}`} />
            <SpecCard icon={<Repeat />} label="Transmisión" value={auto.transmission || "Manual"} />
            <SpecCard icon={<Car />} label="Puertas" value="5" />
            <SpecCard icon={<Calendar />} label="Año" value={auto.model} />
            <SpecCard icon={<Zap />} label="Color" value="Blanco Perla" />
            <SpecCard icon={<Car />} label="Dueños" value="1" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 max-w-3xl mx-auto">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Consultar por WhatsApp
        </a>
      </div>

      {/* 🖼️ LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Cerrar */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={30} />
            </button>

            {/* Imagen swipe */}
            <motion.img
              key={index}
              src={auto.images[index]}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) next()
                if (info.offset.x > 100) prev()
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-h-[80vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

/* CARD */
function SpecCard({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-100 rounded-xl p-3 flex items-center gap-3"
    >
      <div className="text-red-600">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </motion.div>
  )
}