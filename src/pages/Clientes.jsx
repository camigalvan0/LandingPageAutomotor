import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import testimonios from "../data/testimonios"

function useCardsPerView() {
  const [count, setCount] = useState(1)
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3)
      else if (window.innerWidth >= 640) setCount(2)
      else setCount(1)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])
  return count
}

export default function Clientes() {
  const cardsPerView = useCardsPerView()
  const [current, setCurrent] = useState(0)
  const maxIndex = testimonios.length - cardsPerView

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), [])
  const next = useCallback(() => setCurrent(c => (c >= maxIndex ? 0 : c + 1)), [maxIndex])

  // Resetear si el viewport cambia y el índice queda fuera de rango
  useEffect(() => {
    setCurrent(c => Math.min(c, Math.max(0, maxIndex)))
  }, [maxIndex])

  // Autoplay
  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section id="clientes" className="relative bg-gray-50 py-20 sm:py-28 overflow-hidden">

      {/* DECORACIÓN de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#E00B0B] mb-3">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Lo que dicen nuestros{" "}
            <span className="text-[#E00B0B]">clientes</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            Historias reales de quienes ya confiaron en nosotros
          </p>
        </motion.div>

        {/* CARRUSEL */}
        <div className="relative">

          {/* TRACK */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex my-4"
              animate={{ x: `${-(current * (100 / cardsPerView))}%` }}
              transition={{ type: "spring", stiffness: 260, damping: 32 }}
            >
              {testimonios.map((t) => (
                <div
                  key={t.id}
                  style={{ minWidth: `${100 / cardsPerView}%` }}
                  className="px-2 sm:px-3"
                >
                  <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden flex flex-col h-full">

                    {/* IMAGEN DEL VEHÍCULO */}
                    <div className="relative aspect-video overflow-hidden bg-gray-100">
                      <img
                        src={t.imagenVehiculo}
                        alt={t.vehiculo}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {/* Overlay gradiente inferior */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Badge vehículo */}
                      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        {t.vehiculo}
                      </div>
                    </div>

                    {/* CONTENIDO */}
                    <div className="flex flex-col gap-4 p-5 sm:p-6 flex-1">

                      {/* COMENTARIO */}
                      <div className="relative flex-1">
                        <Quote size={20} className="text-red-200 mb-1" />
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                          {t.comentario}
                        </p>
                      </div>

                      {/* SEPARADOR */}
                      <div className="h-px bg-gray-100" />

                      {/* PERFIL DEL CLIENTE */}
                      <div className="flex items-center gap-3">
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-sm leading-tight truncate">
                            {t.nombre}
                          </div>
                          <div className="text-xs text-gray-400 truncate">{t.ciudad}</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* BOTONES de navegación */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-10 bg-white border border-gray-200 shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>

          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-10 bg-white border border-gray-200 shadow-md rounded-full p-2 sm:p-3 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[#E00B0B] w-6 h-2.5"
                  : "bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>

        {/* RATING GLOBAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-white border border-gray-200 shadow-sm rounded-2xl px-8 py-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-900 font-extrabold text-2xl">5.0</span>
            <div className="w-16 h-px sm:w-px sm:h-7 bg-gray-200" />
            <span className="text-gray-400 text-xs sm:text-sm text-center">
              Más de 100 clientes satisfechos
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
