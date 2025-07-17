"use client";

import Link from "next/link";
import { MapPin, Mail, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const servicesList = [
    "Automatización de ventas",
    "Automatización de facturación",
    "Reportes automáticos",
    "Atención al cliente",
  ];
  const companyList = ["Sobre nosotros", "Casos de éxito", "Blog", "Contacto"];

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center space-x-3">
              <div className="bg-flewtik-primary glow-purple flex size-8 items-center justify-center rounded-lg">
                <span className="text-sm font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold text-white">Flewtik</span>
            </Link>
            <p className="mb-6 max-w-md text-gray-400">
              Automatizamos procesos para PYMEs argentinas con soluciones simples, seguras y
              escalables desde Salta Capital.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:bg-flewtik-primary flex size-10 items-center justify-center rounded-lg bg-zinc-800 transition-colors duration-300"
              >
                <Linkedin className="size-5 text-gray-400 hover:text-white" />
              </Link>
              <Link
                href="#"
                className="hover:bg-flewtik-primary flex size-10 items-center justify-center rounded-lg bg-zinc-800 transition-colors duration-300"
              >
                <Instagram className="size-5 text-gray-400 hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Servicios</h3>
            <ul className="space-y-2">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-flewtik-primary text-gray-400 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Empresa</h3>
            <ul className="space-y-2">
              {companyList.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-flewtik-primary text-gray-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="text-flewtik-secondary mr-1 size-4" />
                Salta Capital, Argentina
              </div>
              <div className="flex items-center">
                <Mail className="text-flewtik-primary mr-1 size-4" />
                hola@flewtik.com
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Flewtik. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
