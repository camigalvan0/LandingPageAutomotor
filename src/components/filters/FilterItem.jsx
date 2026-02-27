import { ChevronDown } from "lucide-react"

export default function FilterItem({ label, children }) {
  return (
    <div
      className="
        bg-white rounded-2xl border border-gray-200
        p-4 shadow-sm
        transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        animate-slideUp
      "
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          {label}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>

      <div className="space-y-2">
        {children}
      </div>
    </div>
  )
}
