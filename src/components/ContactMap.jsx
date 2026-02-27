import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { useEffect } from "react"
import L from "leaflet"
import locations from "../data/locations"
import "leaflet/dist/leaflet.css"

// Fix iconos Leaflet (Vite)
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

/* 🔹 COMPONENTE INTERNO */
function FitBounds({ locations }) {
  const map = useMap()

  useEffect(() => {
    if (!locations.length) return

    const bounds = locations.map((loc) => [
      loc.lat,
      loc.lng,
    ])

    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 })
  }, [map, locations])

  return null
}

function FixMapResize() {
  const map = useMap()

  useEffect(() => {
    // Timeout para asegurar layout final
    setTimeout(() => {
      map.invalidateSize()
    }, 200)
  }, [map])

  return null
}

export default function ContactMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden">
      <MapContainer
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FixMapResize />

        <FitBounds locations={locations} />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
          >
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
