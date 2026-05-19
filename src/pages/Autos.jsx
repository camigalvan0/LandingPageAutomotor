import { useState } from "react"
import FilterGroup from "../components/filters/FilterGroup"
import autosUsados from "../data/AutosUsados"
import AutoCard1 from "../components/AutoCard1"
import AutoModal2 from "../components/AutoModal2"

export default function Autos() {
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [color, setColor] = useState("")
  // const [maxPrice, setMaxPrice] = useState(35]000000)
  const [orderPrice, setOrderPrice] = useState("desc")
  const [selectedAuto, setSelectedAuto] = useState(null)
  const [favorites, setFavorites] = useState([])

  const filteredAutos = autosUsados
    .filter(auto =>
      (brand === "" || auto.brand === brand) &&
      (model === "" || auto.model.toLowerCase().includes(model.toLowerCase())) &&
      (color === "" || auto.color === color) &&
      auto.price <= maxPrice
    )
    .sort((a, b) => {
      return orderPrice === "asc"
        ? a.price - b.price
        : b.price - a.price
    })

  const toggleFav = (id) =>
    setFavorites(favorites.includes(id)
    ? favorites.filter(f => f !== id)
    : [...favorites, id]
  )
  return (
    <section className="bg-gray-100 py-20">

      {/* ORDEN */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-end">
        <select
          value={orderPrice}
          onChange={(e) => setOrderPrice(e.target.value)}
          className="bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm shadow-sm"
        >
          <option value="desc">Precio: mayor a menor</option>
          <option value="asc">Precio: menor a mayor</option>
        </select>
      </div>


      <div className="max-w-7xl mx-auto px-6 my-4 flex gap-8 flex-col lg:flex-row">

        {/* FILTROS */}
        <div className="lg:col-span-1">
          <FilterGroup
            brand={brand}
            setBrand={setBrand}
            model={model}
            setModel={setModel}
            color={color}
            setColor={setColor}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </div>

        {/* LISTA DE AUTOS */}
        <div className="lg:w-3/4 grid sm:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
          {filteredAutos.map(auto => (
            <AutoCard1
              key={auto.id}
              auto={auto}
              onOpen={setSelectedAuto}
              favorites={favorites}
              toggleFav={toggleFav}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
