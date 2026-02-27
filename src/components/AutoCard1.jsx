import { Link } from "react-router-dom"
import { Heart, Gauge, Calendar } from "lucide-react"

export default function AutoCard1({ auto, favorites, toggleFav }) {
  const isFav = favorites.includes(auto.id)

  const image =
    auto.images && auto.images.length > 0
      ? auto.images[0]
      : "/placeholder-auto.jpg"

  return (
    <div
      className="
        bg-white rounded-2xl overflow-hidden
        shadow-md hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* IMAGEN */}
      <div className="relative">
        <img
          src={image}
          alt={auto.name}
          className="h-52 w-full object-cover"
        />

        {/* BADGE */}
        <span className="
          absolute top-3 left-3
          bg-[#E00B0B] text-white text-xs
          px-3 py-1 rounded-full
        ">
          {auto.km === 0 ? "0 KM" : "USADO"}
        </span>

        {/* FAVORITO */}
        <button
          onClick={() => toggleFav(auto.id)}
          className="
            absolute top-3 right-3
            bg-white p-2 rounded-full
            shadow hover:scale-110
            transition
          "
        >
          <Heart
            size={18}
            className={
              isFav
                ? "fill-[#E00B0B] text-[#E00B0B]"
                : "text-gray-400"
            }
          />
        </button>
      </div>

      {/* CONTENIDO */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-base">
            {auto.name}
          </h3>
          <p className="text-sm text-gray-500">
            {auto.color} · {auto.brand}
          </p>
        </div>

        {/* INFO */}
        <div className="flex gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {auto.year}
          </span>

          <span className="flex items-center gap-1">
            <Gauge size={16} />
            {auto.km.toLocaleString("es-AR")} km
          </span>
        </div>

        {/* PRECIO + CTA */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-xl font-bold text-[#E00B0B]">
            ${auto.price.toLocaleString("es-AR")}
          </span>

          <Link
            to={`/autos/${auto.id}`}
            className="
              bg-[#E00B0B] text-white
              px-4 py-2 rounded-lg
              hover:bg-[#c50909]
              transition
            "
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  )
}
