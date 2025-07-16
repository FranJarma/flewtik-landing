"use client"

import { motion } from "framer-motion"
import { Search, Workflow, Code, BarChart } from "lucide-react"

export function HowWeWorkSection() {
  const steps = [
    {
      icon: Search,
      title: "Diagnóstico",
      description: "Analizamos tus procesos actuales y identificamos oportunidades de automatización.",
      color: "from-[#6F37C8] to-[#A477EB]",
    },
    {
      icon: Workflow,
      title: "Diseño del flujo",
      description: "Creamos el mapa de automatización personalizado para tu negocio.",
      color: "from-[#A477EB] to-[#4FC175]",
    },
    {
      icon: Code,
      title: "Implementación no-code",
      description: "Desarrollamos la solución usando herramientas modernas y accesibles.",
      color: "from-[#4FC175] to-[#1CAF4E]",
    },
    {
      icon: BarChart,
      title: "Monitoreo y métricas",
      description: "Seguimos el rendimiento y optimizamos continuamente los resultados.",
      color: "from-[#1CAF4E] to-[#6F37C8]",
    },
  ]

  return (
    <section id="como-trabajamos" className="py-20 bg-[#2C2B2B]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#A477EB] to-[#6F37C8] bg-clip-text text-transparent">
              Cómo trabajamos
            </span>
          </h2>
          <p className="text-xl text-[#D2D2D2] max-w-3xl mx-auto">
            Un proceso simple y transparente para transformar tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-[#2C2B2B]/50 backdrop-blur-sm border border-[#404040]/50 rounded-2xl p-8 h-full hover:bg-[#2C2B2B]/80 transition-all duration-300 group-hover:scale-105">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#6F37C8] to-[#A477EB] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-[#D2D2D2] leading-relaxed">{step.description}</p>
              </div>

              {/* Connection line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#6F37C8] to-[#A477EB] opacity-50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
