import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import autosUsados from "../data/AutosUsados"

import {
  Calendar,
  Zap,
  Settings,
  Fuel,
  Phone
} from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5493513232880?text=Hola%20quiero%20consultar%20por%20este%20vehiculo"

export default function AutoDetalle() {
  const { id } = useParams()
  const auto = autosUsados.find(a => a.id === Number(id))

  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [origin, setOrigin] = useState("center")

  if (!auto) {
    return (
      <div className="p-10 text-center">
        <p>Auto no encontrado</p>
        <Link to="/Autos" className="text-red-600 underline">
          Volver
        </Link>
      </div>
    )
  }

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <Link to="/Autos" className="text-red-600 underline">
        ← Volver
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6 items-start">

        {/* ✅ GALERÍA */}
        <div>
          <div
            className="overflow-hidden rounded-xl cursor-zoom-in"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={handleMove}
          >
            <img
              src={auto.images[index]}
              alt={auto.name}
              className={`w-full h-[420px] object-cover transition-transform duration-300 ${
                zoom ? "scale-150" : "scale-100"
              }`}
              style={{ transformOrigin: origin }}
            />
          </div>

          <div className="flex gap-3 mt-4">
            {auto.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setIndex(i)}
                className={`h-20 w-28 object-cover rounded-lg cursor-pointer border-2 ${
                  index === i ? "border-red-600" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ✅ CARD INFO PREMIUM */}
        <div className="bg-[#0f1115] text-white rounded-2xl p-8 shadow-xl">

          {/* Título */}
          <h1 className="text-3xl font-bold mb-2">{auto.name}</h1>

          <span className="inline-block bg-red-600 text-sm px-3 py-1 rounded-full mb-6">
            Disponible
          </span>

          {/* Ficha técnica */}
          <h3 className="text-lg font-semibold mb-4 text-gray-300">
            Ficha Técnica
          </h3>

          <div className="space-y-4">

            <Spec icon={<Calendar size={18} />} label="Año" value={auto.year} />

            <Spec
              icon={<Zap size={18} />}
              label="Kilómetros"
              value={`${auto.km.toLocaleString()} km`}
            />

            <Spec
              icon={<Settings size={18} />}
              label="Transmisión"
              value={auto.transmission || "Manual"}
            />

            <Spec
              icon={<Fuel size={18} />}
              label="Combustible"
              value={auto.fuel || "Nafta"}
            />
          </div>

          {/* Precio */}
          <div className="bg-white/5 rounded-xl p-5 mt-6">
            <p className="text-gray-400 text-sm">Precio</p>
            <p className="text-3xl font-bold">
              $ {auto.price.toLocaleString("es-AR")}
            </p>
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            className="block text-center bg-red-600 hover:bg-red-700 transition mt-6 py-4 rounded-xl font-semibold"
          >
            Reservar Cita
          </a>

          {/* Teléfono */}
          <div className="text-center mt-6 text-sm text-gray-400">
            ¿Necesitás más información?
            <div className="flex items-center justify-center gap-2 mt-2 text-red-500 font-semibold">
              <Phone size={16} />
              +54 9 123456789
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ✅ Subcomponente fila ficha técnica */
function Spec({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <div className="flex items-center gap-3 text-gray-300">
        <span className="text-red-500">{icon}</span>
        {label}
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  )
}
