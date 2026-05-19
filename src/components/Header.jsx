import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
// import logo from "../assets/img/logo.png"
import { CarFront } from 'lucide-react'

const navigation = [
  { name: 'Inicio', to: '/' },
  { name: '0 KM', to: '/Autos0KM' },
  { name: 'Autos Usados', to: '/Autos' },
  // { name: 'Usados', to: '/AutosUsados' },
  { name: 'Clientes', to: '/Clientes' },
  { name: 'Sobre Nosotros', to: '/SobreNosotros' },
  { name: 'Contacto', to: '/Contacto' }
]

export default function Header() {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
    <header className="flex justify-center fixed inset-x-0 h-15 top-0 z-50 bg-black/60 backdrop-blur">
        <nav aria-label="Global" className="flex items-center justify-between p-2 lg:px-8 w-full">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p className='text-gray-400'>[logo]</p>
              {/* <CarFront size={30} strokeWidth={1.25} className='text-white' /> */}
              {/* <img
                src={logo}
                alt="logo"
                className="h-20 w-auto object-contain"
              /> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.to} 
                className="text-sm/6 font-semibold text-gray-100">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          {/* Overlay */}
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

          {/* Panel */}
          <DialogPanel
            className="
              fixed inset-y-0 right-0 z-90 w-full max-w-sm
              bg-black p-6
              ring-0 ring-white/10
              transform transition-all duration-300 ease-out
              translate-x-0
            "
          >
            <div className="flex h-full flex-col justify-between">

              {/* Header */}
              <div>
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                    <span className="sr-only">Automotor BC</span>
                    <CarFront size={30} strokeWidth={1.25} className="text-white" />
                    <span className="text-white font-semibold text-lg">
                      Automotor BC
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      -m-2.5 rounded-md p-2.5
                      text-gray-100 hover:text-white
                      transition
                    "
                  >
                    <span className="sr-only">Cerrar menú</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>

                {/* Navegación */}
                <nav className="mt-10 divide-y divide-white/10">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="
                        block px-4 py-4
                        text-base font-semibold text-gray-400
                        hover:bg-white/10 hover:text-white
                        transition
                      "
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Footer del menú */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} Automotor BC
                </p>
              </div>

            </div>
          </DialogPanel>
        </Dialog>
                      

      </header>
    </>
  )
}
