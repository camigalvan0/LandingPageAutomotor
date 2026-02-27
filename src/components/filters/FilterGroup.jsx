import FilterItem from "./FilterItem"
import { Car, Palette, Calendar, Gauge } from "lucide-react"

export default function FilterGroup({
  brand, setBrand,
  model, setModel,
  color, setColor,
  maxPrice, setMaxPrice
}) {
  return (
    <aside className="space-y-5">

      {/* MARCA */}
      <FilterItem label="Marca">
        <select
          value={brand}
          onChange={e => setBrand(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-red-500"
        >
          <option value="">Todas</option>
          <option value="Peugeot">Peugeot</option>
          <option value="Fiat">Fiat</option>
          <option value="Chevrolet">Chevrolet</option>
        </select>
      </FilterItem>

      {/* MODELO */}
      <FilterItem label="Modelo">
        <input
          value={model}
          onChange={e => setModel(e.target.value)}
          placeholder="Ej: Onix"
          className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-red-500"
        />
      </FilterItem>

      {/* COLOR */}
      <FilterItem label="Color">
        <select
          value={color}
          onChange={e => setColor(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-2"
        >
          <option value="">Todos</option>
          <option value="Blanco">Blanco</option>
          <option value="Negro">Negro</option>
          <option value="Gris">Gris</option>
        </select>
      </FilterItem>

      {/* PRECIO */}
      <FilterItem label="Precio máximo">
        <input
          type="range"
          min="5000000"
          max="30000000"
          step="500000"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          className="w-full accent-red-600"
        />
        <span className="text-sm text-gray-500">
          Hasta ${Number(maxPrice).toLocaleString("es-AR")}
        </span>
      </FilterItem>

    </aside>
  )
}
