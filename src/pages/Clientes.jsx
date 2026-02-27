import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import testimonios from "../data/testimonios"

export default function Clientes() {
  const [index, setIndex] = useState(0)

  const prev = () =>
    setIndex((index - 1 + testimonios.length) % testimonios.length)

  const next = () =>
    setIndex((index + 1) % testimonios.length)

  return (
    <section
      id="clientes"
      className="relative bg-gradient-to-r from-slate-900 to-slate-800 py-28 overflow-hidden"
    >
      {/* TÍTULO */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600">
          Nuestros Clientes
        </h2>
        <p className="mt-4 text-gray-300">
          La experiencia de quienes ya confiaron en nosotros
        </p>
      </div>

      {/* CONTENEDOR */}
      <div className="relative max-w-5xl mx-auto flex items-center justify-center">
        {/* BOTÓN IZQ */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white"
        >
          <ChevronLeft size={28} />
        </button>

        {/* TARJETA */}
        <div
          key={testimonios[index].id}
          className="bg-white rounded-xl shadow-2xl p-10 max-w-2xl text-center
                     transition-all duration-900 ease-out
                     animate-fadeIn"
        >
          <Quote className="mx-auto text-red-600 mb-6" size={36} />

          {/* FOTO */}
          <div className="flex justify-center mb-6">
            <img
              src={testimonios[index].imagen}
              alt={testimonios[index].nombre}
              className="w-28 h-28 rounded-full object-cover border-4 border-red-600"
            />
          </div>

          {/* TEXTO */}
          <p className="text-gray-700 text-lg italic mb-6">
            “{testimonios[index].comentario}”
          </p>

          {/* INFO */}
          <h3 className="font-bold text-xl">
            {testimonios[index].nombre}
          </h3>
          <p className="text-gray-500">
            {testimonios[index].ciudad}
          </p>
          <p className="mt-2 text-sm font-semibold text-red-600">
            Vehículo adquirido: {testimonios[index].vehiculo}
          </p>
        </div>

        {/* BOTÓN DER */}
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* INDICADORES */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonios.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-red-600" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
