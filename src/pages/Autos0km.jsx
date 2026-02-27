import { useState } from "react"

const products = [
  {
    id: 1,
    brand: "Peugeot",
    model: "208",
    name: "Peugeot 208",
    km: 0,
    price: 23000000,
    color: "Gris",
    imageSrc:
      "https://cdn.imagin.studio/getImage?customer=arelcerokm&countryCode=AR&zoomLevel=30&width=800&paintId=pspc0283&make=peugeot&modelFamily=208&modelRange=208&modelVariant=ha&modelYear=2024",
  },
  {
    id: 2,
    brand: "Chevrolet",
    model: "Onix",
    name: "Chevrolet Onix",
    km: 0,
    price: 28000000,
    color: "Rojo",
    imageSrc:
      "./src/assets/img/chevroletonix.png",
  },
  {
    id: 3,
    brand: "Fiat",
    model: "Cronos",
    name: "Fiat Cronos",
    km: 0,
    price: 26000000,
    color: "Blanco",
    imageSrc:
      "./src/assets/img/fiatcronos.png"
  },
]

export default function Autos0km() {
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [color, setColor] = useState("")
  const [km, setKm] = useState("")

  const filteredProducts = products.filter((product) => {
    return (
      (brand === "" || product.brand === brand) &&
      (model === "" || product.model === model) &&
      (color === "" || product.color === color) &&
      (km === "" || (km === "0" ? product.km === 0 : product.km > 0))
    )
  })

  return (
    <div className="bg-gray-500 py-16" id="0KM">
      <div className="mx-auto max-w-7xl px-4">

        {/* FILTROS */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-10 pt-12">
          <select
            className="border bg-gray-100 outline-red-500 rounded p-2 shadow-md"
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Marca</option>
            <option value="Peugeot">Peugeot</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Fiat">Fiat</option>
          </select>

          <select
            className="border rounded bg-gray-100 p-2 shadow-md"
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="">Modelo</option>
            <option value="208">208</option>
            <option value="Onix">Onix</option>
            <option value="Cronos">Cronos</option>
          </select>

          <select
            className="border rounded bg-gray-100 p-2 shadow-md"
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">Color</option>
            <option value="Gris">Gris</option>
            <option value="Rojo">Rojo</option>
            <option value="Blanco">Blanco</option>
          </select>

          {/* <select
            className="border rounded p-2"
            onChange={(e) => setKm(e.target.value)}
          >
            <option value="">Kilómetros</option>
            <option value="0">0 km</option>
            <option value="used">Usados</option>
          </select> */}
        </div>

        {/* PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg bg-white p-4 hover:shadow-lg transition shadow-2xl"
            >
              <img
                src={product.imageSrc}
                alt={product.name}
                className="h-48 w-full object-cover rounded"
              />
              <h3 className="mt-3 font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.color}</p>
              <p className="text-sm text-gray-500">
                {product.km === 0 ? "0 km" : `${product.km.toLocaleString()} km`}
              </p>
              <p className="font-bold mt-2">
                ${product.price.toLocaleString("es-AR")}
              </p>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No se encontraron vehículos con esos filtros
          </p>
        )}
      </div>
    </div>
  )
}

