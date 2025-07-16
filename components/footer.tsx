"use client"

import Link from "next/link"
import { MapPin, Mail, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const servicesList = [
    "Automatización de ventas",
    "Automatización de facturación",
    "Reportes automáticos",
    "Atención al cliente",
  ]
  const companyList = ["Sobre nosotros", "Casos de éxito", "Blog", "Contacto"]

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center glow-purple">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-white">Automatika</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Automatizamos procesos para PYMEs argentinas con soluciones simples, seguras y escalables desde Salta
              Capital.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="size-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Linkedin className="size-5 text-gray-400 hover:text-white" />
              </Link>
              <Link
                href="#"
                className="size-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="size-5 text-gray-400 hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {companyList.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="size-4 mr-1 text-secondary" />
                Salta Capital, Argentina
              </div>
              <div className="flex items-center">
                <Mail className="size-4 mr-1 text-primary" />
                hola@automatika.com.ar
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Automatika. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
