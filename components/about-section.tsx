"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Target, Heart } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Resultados reales",
      description:
        "No automatizamos por automatizar. Cada solución está diseñada para generar impacto medible.",
    },
    {
      icon: Users,
      title: "Cercanía humana",
      description:
        "Somos un equipo local que entiende los desafíos específicos de las PYMEs argentinas.",
    },
    {
      icon: Heart,
      title: "Tecnología accesible",
      description: "Creemos que la automatización debe ser simple, segura y al alcance de todos.",
    },
  ];

  return (
    <section id="nosotros" className="bg-[#2C2B2B]/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center">
              <MapPin className="mr-2 h-6 w-6 text-[#4FC175]" />
              <span className="font-semibold text-[#4FC175]">Salta Capital, Argentina</span>
            </div>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[#A477EB] to-[#6F37C8] bg-clip-text text-transparent">
                Sobre nosotros
              </span>
            </h2>

            <p className="mb-8 text-xl leading-relaxed text-[#D2D2D2]">
              <strong className="text-[#4FC175]">Flewtik</strong> nace en Salta para resolver
              procesos reales con herramientas accesibles. Somos especialistas en automatización que
              entendemos las necesidades específicas de las PYMEs argentinas.
            </p>

            <p className="mb-8 leading-relaxed text-[#D2D2D2]">
              Nuestro enfoque combina tecnología de vanguardia con un trato personalizado y cercano.
              No vendemos software complejo, sino soluciones simples que realmente funcionan.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#6F37C8] to-[#A477EB]">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">{value.title}</h3>
                    <p className="text-[#D2D2D2]">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#2C2B2B] to-[#404040]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipo Flewtik"
                  width={600}
                  height={400}
                  className="h-full w-full rounded-2xl object-cover"
                />

                {/* Overlay with team info */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1F1F1F]/80 to-transparent">
                  <div className="p-8 text-white">
                    <h3 className="mb-2 text-2xl font-bold">Equipo Flewtik</h3>
                    <p className="text-[#D2D2D2]">
                      Especialistas en automatización desde Salta para toda Argentina
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 rounded-xl border border-[#404040]/50 bg-[#2C2B2B]/90 p-4 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4FC175]">50+</div>
                  <div className="text-xs text-[#D2D2D2]">Proyectos</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl border border-[#404040]/50 bg-[#2C2B2B]/90 p-4 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#A477EB]">100%</div>
                  <div className="text-xs text-[#D2D2D2]">Satisfacción</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
