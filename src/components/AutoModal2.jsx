import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function AutoModal2({ auto, onClose }) {
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)
  const [origin, setOrigin] = useState("center")

  if (!auto || !auto.images || auto.images.length === 0) return null


  const next = () =>
    setIndex((index + 1) % auto.images.length)

  const prev = () =>
    setIndex((index - 1 + auto.images.length) % auto.images.length)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-1/2 h-3/4 rounded-lg p-6 relative">

        {/* BOTÓN CERRAR */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-gray-700 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* IMAGEN PRINCIPAL */}
        <div className="relative bg-white overflow-hidden rounded-lg">
          <img
            src={auto.images[index]}
            alt={auto.name}
            className={`object-cover transition-transform duration-300 ${
              zoom ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
            }`}
            style={{ transformOrigin: origin }}
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={handleMouseMove}
            onClick={() => setZoom(!zoom)}
          />

          {/* FLECHAS */}
          {auto.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>

        {/* MINIATURAS */}
        <div className="flex gap-3 p-4 justify-center">
          {auto.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setIndex(i)}
              className={`h-20 w-28 object-cover rounded cursor-pointer border-2 ${
                index === i ? "border-indigo-600" : "border-transparent"
              }`}
            />
          ))}
        </div>

        {/* INFO */}
        <div className="p-6">
          <h2 className="text-2xl font-bold">{auto.name}</h2>
          <p className="text-gray-500">{auto.color}</p>
          <p className="mt-1">
            {auto.km === 0 ? "0 km" : `${auto.km.toLocaleString()} km`}
          </p>
          <p className="mt-3 text-2xl font-bold">
            ${auto.price.toLocaleString("es-AR")}
          </p>
        </div>
      </div>
    </div>
  )
}
