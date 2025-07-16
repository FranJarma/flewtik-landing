"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Check,
  Star,
  ChefHat,
  Stethoscope,
  Scissors,
  Calculator,
  Building2,
  ShoppingBag,
  HelpCircle,
} from "lucide-react"

export function IndustryPricingSection() {
  const industryPlans = [
    {
      id: "gastro",
      icon: ChefHat,
      name: "Gastro Automation",
      industry: "Restaurantes & Delivery",
      price: "$45.000",
      period: "/mes",
      description: "Automatización completa para restaurantes con integración a plataformas de delivery",
      features: [
        "Integración con Fudo, PedidosYa, Rappi",
        "Control de inventario automático",
        "Facturación AFIP automatizada",
        "Reportes de ventas en tiempo real",
        "Gestión de mesas y reservas",
        "WhatsApp Business integrado",
      ],
      integrations: ["Fudo", "PedidosYa", "Rappi", "AFIP", "WhatsApp"],
      color: "from-[#6366f1] to-[#8b5cf6]",
      popular: false,
    },
    {
      id: "dental",
      icon: Stethoscope,
      name: "Dental Automation",
      industry: "Consultorios Médicos",
      price: "$35.000",
      period: "/mes",
      description: "Sistema completo para consultorios con gestión de turnos y obras sociales",
      features: [
        "Sistema de turnos online",
        "Recordatorios automáticos",
        "Facturación a obras sociales",
        "Gestión de historias clínicas",
        "Reportes de productividad",
        "Integración con software médico",
      ],
      integrations: ["Obras Sociales", "WhatsApp", "Google Calendar", "AFIP"],
      color: "from-[#06b6d4] to-[#22d3ee]",
      popular: true,
    },
    {
      id: "beauty",
      icon: Scissors,
      name: "Beauty Salon Automation",
      industry: "Salones de Belleza",
      price: "$25.000",
      period: "/mes",
      description: "Automatización para salones con gestión de citas y marketing automático",
      features: [
        "Reservas online 24/7",
        "Recordatorios de citas",
        "Gestión de clientes VIP",
        "Promociones automáticas",
        "Integración con redes sociales",
        "Control de productos y servicios",
      ],
      integrations: ["Instagram", "Facebook", "WhatsApp", "Google My Business"],
      color: "from-[#a855f7] to-[#c084fc]",
      popular: false,
    },
    {
      id: "accounting",
      icon: Calculator,
      name: "Accounting Automation",
      industry: "Estudios Contables",
      price: "$55.000",
      period: "/mes",
      description: "Automatización completa para estudios contables con integración AFIP",
      features: [
        "Alertas de vencimientos fiscales",
        "Reportes automáticos AFIP",
        "Gestión de expedientes",
        "Facturación de honorarios",
        "Dashboard de clientes",
        "Backup automático de datos",
      ],
      integrations: ["AFIP", "Bancos", "Excel", "Email", "WhatsApp"],
      color: "from-[#3b82f6] to-[#60a5fa]",
      popular: false,
    },
    {
      id: "realestate",
      icon: Building2,
      name: "Real Estate Automation",
      industry: "Inmobiliarias",
      price: "$40.000",
      period: "/mes",
      description: "Gestión automatizada de propiedades y seguimiento de inquilinos",
      features: [
        "Gestión de propiedades",
        "Contratos automatizados",
        "Seguimiento de pagos",
        "Reportes de rentabilidad",
        "Portal del inquilino",
        "Alertas de vencimientos",
      ],
      integrations: ["Portales inmobiliarios", "Bancos", "WhatsApp", "Email"],
      color: "from-[#10b981] to-[#34d399]",
      popular: false,
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      name: "E-commerce Automation",
      industry: "Tiendas Online",
      price: "$50.000",
      period: "/mes",
      description: "Automatización completa para tiendas online con chatbot de ventas",
      features: [
        "Gestión automática de inventario",
        "Chatbot de ventas 24/7",
        "Seguimiento de envíos",
        "Reportes de conversión",
        "Recuperación de carritos abandonados",
        "Integración con marketplaces",
      ],
      integrations: ["MercadoLibre", "Shopify", "WooCommerce", "Correo Argentino"],
      color: "from-[#f59e0b] to-[#fbbf24]",
      popular: false,
    },
  ]

  const customPlan = {
    name: "Plan Personalizado",
    description: "Solución completamente a medida para tu negocio específico",
    features: [
      "Análisis completo de procesos",
      "Desarrollo de automatizaciones únicas",
      "Integración con cualquier sistema",
      "Soporte 24/7 dedicado",
      "Capacitación completa del equipo",
      "SLA garantizado",
    ],
  }

  return (
    <section id="planes" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#06b6d4]/5 rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] bg-clip-text text-transparent">
              Planes por industria
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Automatizaciones preconfiguradas y optimizadas para cada tipo de negocio
          </p>
        </motion.div>

        {/* Industry Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industryPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              id={`plan-${plan.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${plan.popular ? "scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Más popular
                  </div>
                </div>
              )}

              <div
                className={`bg-slate-800/50 backdrop-blur-sm border-2 ${plan.popular ? "border-[#06b6d4]" : "border-slate-700/50"} rounded-2xl p-8 h-full hover:bg-slate-800/70 transition-all duration-300 group-hover:scale-[1.02]`}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{plan.industry}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-300">{plan.period}</span>
                  </div>
                  <p className="text-slate-300 text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div
                        className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Integrations */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-200 mb-3">INTEGRACIONES INCLUIDAS</h4>
                  <div className="flex flex-wrap gap-2">
                    {plan.integrations.map((integration, intIndex) => (
                      <span
                        key={intIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] hover:from-[#0891b2] hover:to-[#0891b2]"
                      : `bg-gradient-to-r ${plan.color} hover:opacity-90`
                  } text-white font-semibold py-3`}
                >
                  Elegir {plan.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl flex items-center justify-center mr-4">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{customPlan.name}</h3>
                    <p className="text-slate-400">Precio según requerimientos</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">{customPlan.description}</p>

                <ul className="space-y-3">
                  {customPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center lg:text-left">
                <div className="bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 border border-[#6366f1]/20 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">¿No sabés qué plan elegir?</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    Analizamos tu negocio y te recomendamos la mejor solución. La consulta es completamente gratuita.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white font-semibold py-3">
                    Hacemos uno a tu medida
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white bg-transparent"
                  >
                    Consulta gratuita
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">
            💡 <strong>Todos los planes incluyen:</strong> Configuración inicial, capacitación del equipo y 30 días de
            soporte gratuito
          </p>
          <p className="text-sm text-slate-500">
            Los precios pueden variar según la complejidad y cantidad de integraciones requeridas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
