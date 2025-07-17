"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react";

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
      color: "from-flewtik-secondary to-[#1CAF4E]",
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
  ];

  return (
    <section id="casos" className="bg-[#2C2B2B]/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="to-flewtik-secondary bg-gradient-to-r from-[#1CAF4E] bg-clip-text text-transparent">
              Casos de éxito
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-[#D2D2D2]">
            Resultados reales de PYMEs que transformaron sus procesos con nuestras automatizaciones
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-[#404040]/50 bg-[#2C2B2B]/50 p-8 backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.02] hover:bg-[#2C2B2B]/80">
                {/* Header */}
                <div className="mb-6">
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${caseStudy.color} mb-4 rounded-full`}
                  />
                  <h3 className="mb-2 text-xl font-bold text-white">{caseStudy.company}</h3>
                  <div className="flex items-center justify-between text-sm text-[#D2D2D2]">
                    <span>{caseStudy.industry}</span>
                    <span>{caseStudy.location}</span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-6">
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-[#A477EB]">DESAFÍO</h4>
                    <p className="text-sm text-[#D2D2D2]">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-flewtik-secondary mb-2 text-sm font-semibold">SOLUCIÓN</h4>
                    <p className="text-sm text-[#D2D2D2]">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="mb-4 text-sm font-semibold text-white">RESULTADOS</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-3">
                        <div
                          className={`h-10 w-10 bg-gradient-to-r ${caseStudy.color} flex items-center justify-center rounded-lg`}
                        >
                          <result.icon className="h-5 w-5 text-white" />
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
  );
}
