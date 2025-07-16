"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$25.000",
      period: "/mes",
      description: "Perfecto para empezar con automatización básica",
      features: ["1 automatización incluida", "Soporte por email", "Configuración inicial", "Documentación completa"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$45.000",
      period: "/mes",
      description: "Para empresas que quieren automatizar múltiples procesos",
      features: [
        "Hasta 5 automatizaciones",
        "Soporte prioritario",
        "Integraciones avanzadas",
        "Reportes personalizados",
        "Capacitación del equipo",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      description: "Solución completa para empresas con necesidades específicas",
      features: [
        "Automatizaciones ilimitadas",
        "Soporte 24/7",
        "Desarrollo personalizado",
        "SLA garantizado",
        "Consultoría estratégica",
      ],
      popular: false,
    },
  ]

  return (
    <section id="precios" className="py-32 relative">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Planes que se adaptan a tu <span className="text-primary">negocio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empezá con una automatización y escalá según tus necesidades
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? "scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center glow-purple">
                    <Star className="size-4 mr-1" />
                    Más popular
                  </div>
                </div>
              )}

              <div className={`glass rounded-2xl p-8 h-full hover-lift ${plan.popular ? "border-primary/50" : ""}`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="size-5 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check className="size-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full font-semibold py-3 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 hover:text-primary text-white animate-glow"
                      : "bg-zinc-900 hover:bg-zinc-800 hover:text-primary text-white border border-zinc-700"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contactar" : "Empezar ahora"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            <strong>Todos los planes incluyen:</strong> Configuración inicial y 30 días de soporte gratuito
          </p>
          <Button
            variant="outline"
            className="border-zinc-700 text-white hover:bg-zinc-900 hover:text-primary bg-transparent"
          >
            ¿No sabés qué plan elegir? Te ayudamos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
