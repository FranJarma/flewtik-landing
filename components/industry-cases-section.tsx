"use client"

import { motion } from "framer-motion"
import { ChefHat, Stethoscope, Scissors, Calculator, Building2, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function IndustryCasesSection() {
  const industries = [
    {
      icon: ChefHat,
      title: "Gastronomía",
      subtitle: "Restaurantes & Delivery",
      description: "Automatizá pedidos, inventario y facturación integrado con Fudo, PedidosYa y sistemas POS.",
      automations: [
        "Gestión automática de pedidos online",
        "Control de inventario en tiempo real",
        "Facturación automática con AFIP",
        "Reportes de ventas diarios",
      ],
      planId: "gastro",
      color: "from-[#6366f1] to-[#8b5cf6]",
      bgGradient: "from-[#6366f1]/10 to-[#8b5cf6]/5",
    },
    {
      icon: Stethoscope,
      title: "Consultorios",
      subtitle: "Médicos & Odontólogos",
      description: "Automatizá turnos, historias clínicas y facturación de obras sociales con sistemas especializados.",
      automations: [
        "Sistema de turnos automatizado",
        "Recordatorios por WhatsApp",
        "Facturación a obras sociales",
        "Gestión de historias clínicas",
      ],
      planId: "dental",
      color: "from-[#06b6d4] to-[#22d3ee]",
      bgGradient: "from-[#06b6d4]/10 to-[#22d3ee]/5",
    },
    {
      icon: Scissors,
      title: "Salones de Belleza",
      subtitle: "Peluquerías & Estética",
      description: "Automatizá reservas, recordatorios y gestión de clientes con integración a redes sociales.",
      automations: [
        "Reservas online automatizadas",
        "Recordatorios de citas",
        "Gestión de clientes VIP",
        "Promociones automáticas",
      ],
      planId: "beauty",
      color: "from-[#a855f7] to-[#c084fc]",
      bgGradient: "from-[#a855f7]/10 to-[#c084fc]/5",
    },
    {
      icon: Calculator,
      title: "Contabilidad",
      subtitle: "Estudios Contables",
      description: "Automatizá la gestión de clientes, vencimientos y reportes fiscales con integración AFIP.",
      automations: [
        "Alertas de vencimientos",
        "Reportes automáticos AFIP",
        "Gestión de expedientes",
        "Facturación de honorarios",
      ],
      planId: "accounting",
      color: "from-[#3b82f6] to-[#60a5fa]",
      bgGradient: "from-[#3b82f6]/10 to-[#60a5fa]/5",
    },
    {
      icon: Building2,
      title: "Inmobiliarias",
      subtitle: "Propiedades & Alquileres",
      description: "Automatizá la gestión de propiedades, contratos y seguimiento de inquilinos.",
      automations: [
        "Gestión de propiedades",
        "Contratos automatizados",
        "Seguimiento de pagos",
        "Reportes de rentabilidad",
      ],
      planId: "realestate",
      color: "from-[#10b981] to-[#34d399]",
      bgGradient: "from-[#10b981]/10 to-[#34d399]/5",
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      subtitle: "Tiendas Online",
      description: "Automatizá ventas, inventario y atención al cliente para tu tienda online.",
      automations: ["Gestión de inventario", "Chatbot de ventas", "Seguimiento de envíos", "Reportes de conversión"],
      planId: "ecommerce",
      color: "from-[#f59e0b] to-[#fbbf24]",
      bgGradient: "from-[#f59e0b]/10 to-[#fbbf24]/5",
    },
  ]

  return (
    <section id="casos" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
              Automatización por industria
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Soluciones preconfiguradas para cada tipo de negocio con automatizaciones específicas del rubro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}
              />

              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:bg-slate-800/70 transition-all duration-300 group-hover:scale-[1.02]">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{industry.subtitle}</p>
                  <p className="text-slate-300 leading-relaxed">{industry.description}</p>
                </div>

                {/* Automations list */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-200 mb-3">AUTOMATIZACIONES INCLUIDAS</h4>
                  <ul className="space-y-2">
                    {industry.automations.map((automation, autoIndex) => (
                      <li key={autoIndex} className="flex items-start text-sm text-slate-300">
                        <div
                          className={`w-1.5 h-1.5 bg-gradient-to-r ${industry.color} rounded-full mr-3 mt-2 flex-shrink-0`}
                        />
                        {automation}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  className={`w-full bg-gradient-to-r ${industry.color} hover:opacity-90 text-white font-semibold transition-all duration-300 group-hover:shadow-lg`}
                  onClick={() => {
                    document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" })
                    // Highlight the corresponding plan
                    setTimeout(() => {
                      const planElement = document.getElementById(`plan-${industry.planId}`)
                      if (planElement) {
                        planElement.classList.add("ring-2", "ring-offset-2", "ring-offset-slate-900")
                        planElement.classList.add(`ring-${industry.color.split("-")[1]}-500`)
                        setTimeout(() => {
                          planElement.classList.remove("ring-2", "ring-offset-2", "ring-offset-slate-900")
                          planElement.classList.remove(`ring-${industry.color.split("-")[1]}-500`)
                        }, 3000)
                      }
                    }, 500)
                  }}
                >
                  Ver plan específico
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">¿Tu rubro no está listado?</h3>
            <p className="text-slate-300 mb-6">
              Creamos automatizaciones personalizadas para cualquier tipo de negocio. Contanos tu caso y diseñamos una
              solución a medida.
            </p>
            <Button className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white font-semibold px-8">
              Consultar automatización personalizada
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
