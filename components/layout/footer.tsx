"use client";

import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { SocialMedia } from "../ui/social-media";

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
              <Image
                alt="Flewtik logo"
                className="rounded-2xl"
                src="/isotype-filled.webp"
                width={100}
                height={100}
              />
            </Link>
            <p className="mb-6 max-w-md text-gray-400">
              Automatizamos procesos para PYMEs argentinas con soluciones simples, seguras y
              escalables desde Salta Capital.
            </p>
            <SocialMedia className="justify-start" />
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
                <MapPin className="text-flewtik-primary mr-1 size-4" />
                Salta Capital, Argentina
              </div>
              <div className="flex items-center">
                <Mail className="text-flewtik-primary mr-1 size-4" />
                comercial@flewtik.com
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
