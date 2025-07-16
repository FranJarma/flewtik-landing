"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react"

export function CaseStudiesSection() {
  const cases = [
    {
      company: "Distribuidora Norte",
      industry: "Distribución",
      location: "Salta Capital",
      challenge: "Gestión manual de pedidos y facturación",
      solution: "Automatización completa del proceso de ventas",
      results: [
        { icon: TrendingUp, value: "300%", label: "Aumento en conversión" },
        { icon: Clock, value: "15h", label: "Ahorro semanal" },
        { icon: Users, value: "500+", label: "Clientes gestionados" },
      ],
      color: "from-[#6F37C8] to-[#A477EB]",
    },
    {
      company: "Consultora Andina",
      industry: "Servicios profesionales",
      location: "Salta",
      challenge: "Reportes manuales y seguimiento de proyectos",
      solution: "Dashboard automático y reportes por email",
      results: [
        { icon: Clock, value: "80%", label: "Reducción en tiempo" },
        { icon: DollarSign, value: "$50K", label: "Ahorro anual" },
        { icon: TrendingUp, value: "95%", label: "Precisión en datos" },
      ],
      color: "from-[#4FC175] to-[#1CAF4E]",
    },
    {
      company: "E-commerce Local",
      industry: "Retail online",
      location: "NOA",
      challenge: "Atención al cliente 24/7 y gestión de inventario",
      solution: "Chatbot inteligente y automatización de stock",
      results: [
        { icon: Users, value: "24/7", label: "Atención disponible" },
        { icon: TrendingUp, value: "150%", label: "Mejora en satisfacción" },
        { icon: Clock, value: "90%", label: "Consultas resueltas" },
      ],
      color: "from-[#1CAF4E] to-[#6F37C8]",
    },
  ]

  return (
    <section id="casos" className="py-20 bg-[#2C2B2B]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1CAF4E] to-[#4FC175] bg-clip-text text-transparent">
              Casos de éxito
            </span>
          </h2>
          <p className="text-xl text-[#D2D2D2] max-w-3xl mx-auto">
            Resultados reales de PYMEs que transformaron sus procesos con nuestras automatizaciones
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-[#2C2B2B]/50 backdrop-blur-sm border border-[#404040]/50 rounded-2xl p-8 h-full hover:bg-[#2C2B2B]/80 transition-all duration-300 group-hover:scale-[1.02]">
                {/* Header */}
                <div className="mb-6">
                  <div className={`w-full h-1 bg-gradient-to-r ${caseStudy.color} rounded-full mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-2">{caseStudy.company}</h3>
                  <div className="flex items-center justify-between text-sm text-[#D2D2D2]">
                    <span>{caseStudy.industry}</span>
                    <span>{caseStudy.location}</span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#A477EB] mb-2">DESAFÍO</h4>
                    <p className="text-[#D2D2D2] text-sm">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#4FC175] mb-2">SOLUCIÓN</h4>
                    <p className="text-[#D2D2D2] text-sm">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-4">RESULTADOS</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${caseStudy.color} rounded-lg flex items-center justify-center`}
                        >
                          <result.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{result.value}</div>
                          <div className="text-xs text-[#D2D2D2]">{result.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
