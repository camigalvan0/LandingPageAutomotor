export default function Filters({
  search,
  setSearch,
  brand,
  setBrand,
  model,
  setModel,
  color,
  setColor,
  maxPrice,
  setMaxPrice,
  order,
  setOrder
}) {
  return (
    <aside className="bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="font-semibold text-lg">Filtros</h2>

      <input
        type="text"
        placeholder="Buscar..."
        className="w-full border rounded p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select className="w-full border p-2" onChange={(e) => setBrand(e.target.value)}>
        <option value="">Marca</option>
        <option value="Peugeot">Peugeot</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Fiat">Fiat</option>
      </select>

      <select className="w-full border p-2" onChange={(e) => setModel(e.target.value)}>
        <option value="">Modelo</option>
        <option value="208">208</option>
        <option value="Onix">Onix</option>
        <option value="Cronos">Cronos</option>
      </select>

      <select className="w-full border p-2" onChange={(e) => setColor(e.target.value)}>
        <option value="">Color</option>
        <option value="Gris">Gris</option>
        <option value="Rojo">Rojo</option>
        <option value="Blanco">Blanco</option>
      </select>

      <div>
        <label className="text-sm">Precio máximo</label>
        <input
          type="range"
          min="5000000"
          max="20000000"
          step="500000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm">${maxPrice.toLocaleString()}</p>
      </div>

      <select className="w-full border p-2" onChange={(e) => setOrder(e.target.value)}>
        <option value="">Ordenar</option>
        <option value="price-asc">Precio ↑</option>
        <option value="price-desc">Precio ↓</option>
        <option value="km">Kilómetros</option>
      </select>
    </aside>
  )
}
