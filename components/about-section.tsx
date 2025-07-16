"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Target, Heart } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Resultados reales",
      description: "No automatizamos por automatizar. Cada solución está diseñada para generar impacto medible.",
    },
    {
      icon: Users,
      title: "Cercanía humana",
      description: "Somos un equipo local que entiende los desafíos específicos de las PYMEs argentinas.",
    },
    {
      icon: Heart,
      title: "Tecnología accesible",
      description: "Creemos que la automatización debe ser simple, segura y al alcance de todos.",
    },
  ]

  return (
    <section id="nosotros" className="py-20 bg-[#2C2B2B]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <MapPin className="w-6 h-6 text-[#4FC175] mr-2" />
              <span className="text-[#4FC175] font-semibold">Salta Capital, Argentina</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#A477EB] to-[#6F37C8] bg-clip-text text-transparent">
                Sobre nosotros
              </span>
            </h2>

            <p className="text-xl text-[#D2D2D2] mb-8 leading-relaxed">
              <strong className="text-[#4FC175]">Automatika</strong> nace en Salta para resolver procesos reales con
              herramientas accesibles. Somos especialistas en automatización que entendemos las necesidades específicas
              de las PYMEs argentinas.
            </p>

            <p className="text-[#D2D2D2] mb-8 leading-relaxed">
              Nuestro enfoque combina tecnología de vanguardia con un trato personalizado y cercano. No vendemos
              software complejo, sino soluciones simples que realmente funcionan.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6F37C8] to-[#A477EB] rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
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
              <div className="w-full h-96 bg-gradient-to-br from-[#2C2B2B] to-[#404040] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipo Automatika"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Overlay with team info */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Equipo Automatika</h3>
                    <p className="text-[#D2D2D2]">Especialistas en automatización desde Salta para toda Argentina</p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-[#2C2B2B]/90 backdrop-blur-sm border border-[#404040]/50 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#4FC175]">50+</div>
                  <div className="text-xs text-[#D2D2D2]">Proyectos</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#2C2B2B]/90 backdrop-blur-sm border border-[#404040]/50 rounded-xl p-4">
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
  )
}
