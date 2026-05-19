import { useState } from "react"
import AutoModal2 from "../components/AutoModal2"
import AutoCard from "../components/AutoCard"
import Filters from "../components/Filters"
import autosUsados from "../data/AutosUsados"
// import AutoModal from "../components/AutoModal"

  

export default function AutosUsados() {
  const [search, setSearch] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [color, setColor] = useState("")
  const [maxPrice, setMaxPrice] = useState(20000000)
  const [order, setOrder] = useState("")
  const [favorites, setFavorites] = useState([])
  const [selectedAuto, setSelectedAuto] = useState(null)

  let autos = autosUsados.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) &&
    (brand === "" || a.brand === brand) &&
    (model === "" || a.model === model) &&
    (color === "" || a.color === color) &&
    a.price <= maxPrice
  )

  if (order === "price-asc") autos.sort((a,b) => a.price - b.price)
  if (order === "price-desc") autos.sort((a,b) => b.price - a.price)
  if (order === "km") autos.sort((a,b) => a.km - b.km)

  const toggleFav = (id) =>
    setFavorites(favorites.includes(id)
    ? favorites.filter(f => f !== id)
    : [...favorites, id]
  )
  
  return (
    <>
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 my-4 flex gap-8 flex-col lg:flex-row">
          <div className="lg:w-1/4">
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

          <div className="lg:w-3/4 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {autos.map(auto => (
              <AutoCard
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

        {/* MODAL */}
        <AutoModal2
          auto={selectedAuto}
          onClose={() => setSelectedAuto(null)}
        />
    </>
  )
}
