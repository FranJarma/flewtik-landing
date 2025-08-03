"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Check, Star } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$25.000",
      period: "/mes",
      description: "Perfecto para empezar con automatización básica",
      features: [
        "1 automatización incluida",
        "Soporte por email",
        "Configuración inicial",
        "Documentación completa",
      ],
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
  ];

  return (
    <section id="pricing" className="relative py-32">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="bg-flewtik-primary/5 absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            Planes que se adaptan a tu <span className="text-flewtik-primary">negocio</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Empezá con una automatización y escalá según tus necesidades
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
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
                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform">
                  <div className="bg-flewtik-primary glow-purple flex items-center rounded-full px-4 py-1 text-sm font-semibold text-white">
                    <Star className="mr-1 size-4" />
                    Más popular
                  </div>
                </div>
              )}

              <div
                className={`glass hover-lift h-full rounded-2xl p-8 ${plan.popular ? "border-flewtik-primary/50" : ""}`}
              >
                {/* Header */}
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="bg-flewtik-primary mt-0.5 mr-3 flex size-5 flex-shrink-0 items-center justify-center rounded-full">
                        <Check className="size-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full py-3 font-semibold ${
                    plan.popular
                      ? "bg-flewtik-primary hover:bg-flewtik-primary/90 animate-glow text-white"
                      : "hover:text-flewtik-primary border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800"
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
          className="mt-16 text-center"
        >
          <p className="mb-4 text-gray-400">
            <strong>Todos los planes incluyen:</strong> Configuración inicial y 30 días de soporte
            gratuito
          </p>
          <Button
            variant="outline"
            className="hover:text-flewtik-primary border-zinc-700 bg-transparent text-white hover:bg-zinc-900"
          >
            ¿No sabés qué plan elegir? Te ayudamos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
