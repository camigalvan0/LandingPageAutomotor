import { CarFront } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">

        {/* Logo + nombre */}
        <div className="flex items-center gap-2">
          {/* <CarFront size={28} strokeWidth={1.25} className="text-white" /> */}
          <span className="text-lg font-semibold text-white">
            [logo]+[nombre del automotor]
          </span>
        </div>

        {/* Texto central */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} [nombre del automotor] · creado por BC
        </p>

        {/* Redes */}
        <div className="flex gap-4">
          <a className="hover:text-white transition-colors cursor-pointer">
            <svg
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>

          <a className="hover:text-white transition-colors cursor-pointer">
            <svg
              fill="currentColor"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>

          <a className="hover:text-white transition-colors cursor-pointer">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
