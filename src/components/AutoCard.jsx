import { Calendar, Gauge, Heart } from "lucide-react"
import { Link } from "react-router-dom"

export default function AutoCard({ auto, favorites, toggleFav }) {
  const isFav = favorites.includes(auto.id)

   const image =
    auto.images && auto.images.length > 0
      ? auto.images[0]
      : "/placeholder-auto.jpg"

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <div
        className="
          group bg-white rounded-2xl overflow-hidden
          shadow-md hover:shadow-xl
          transition-all duration-300
          hover:-translate-y-1
        "
      >
        {/* IMAGEN */}
        <div className="relative">
          <img
            src={auto.images?.[0]}
            alt={auto.name}
            className="h-52 w-full object-cover"
          />

          {/* FAVORITO */}
          <button
            onClick={() => toggleFav(auto.id)}
            className="
              absolute top-3 right-3
              bg-white/90 backdrop-blur
              p-2 rounded-full
              shadow
              hover:scale-110 transition
            "
          >
            <Heart
              size={18}
              className={isFav ? "fill-[#E00B0B] text-[#E00B0B]" : "text-gray-500"}
            />
          </button>
        </div>

        {/* INFO */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 leading-tight">
              {auto.name}
            </h3>
            <p className="text-sm text-gray-500">
              {auto.brand} · {auto.color}
            </p>
          </div>

          {/* DATOS */}
          <div className="flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {auto.year}
            </div>

            <div className="flex items-center gap-1">
              <Gauge size={16} />
              {auto.km === 0
                ? "0 km"
                : `${auto.km.toLocaleString()} km`}
            </div>
          </div>

          {/* PRECIO */}
          <div className="flex items-center justify-between pt-2">
            <p className="text-xl font-bold text-[#E00B0B]">
              ${auto.price.toLocaleString("es-AR")}
            </p>

            <button
              onClick={() => onOpen(auto)}
              className="
                bg-[#E00B0B] text-white text-sm font-semibold
                px-4 py-2 rounded-lg
                hover:bg-[#c50909]
                transition
              "
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
