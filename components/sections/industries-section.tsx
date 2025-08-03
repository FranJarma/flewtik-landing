"use client";

import { motion } from "framer-motion";
import { ChefHat, Stethoscope, Scissors, Calculator, Building2, CarFront } from "lucide-react";

export function IndustriesSection() {
  const industries = [
    {
      icon: ChefHat,
      title: "Restaurantes y Cafeterías",
      description: "Optimizá tus ventas, pedidos y control de insumos",
      features: [
        "Integración con Fudo, Bistrosoft, y apps de delivery",
        "Reportes automáticos de ventas y stock",
        "Control de combos, precios y promociones en tiempo real",
      ],
      color: "primary",
    },
    {
      icon: Stethoscope,
      title: "Consultorios y Clínicas",
      description: "Digitalizá turnos, historias clínicas y facturación médica",
      features: [
        "Agenda online con recordatorios automáticos",
        "Gestión de obras sociales y prepagas",
        "Emisión automática de comprobantes AFIP",
      ],
      color: "secondary",
    },
    {
      icon: Scissors,
      title: "Peluquerías y Estéticas",
      description: "Reservas inteligentes y marketing automatizado",
      features: [
        "Turnos online personalizados",
        "Seguimiento de clientes VIP",
        "Campañas automáticas para fechas clave",
      ],
      color: "primary",
    },
    {
      icon: Building2,
      title: "Inmobiliarias",
      description: "Simplificá la gestión de alquileres, contratos y cobros",
      features: [
        "Portal online para inquilinos y propietarios",
        "Alertas de vencimientos y pagos automatizados",
        "Generación de contratos digitales y recibos",
      ],
      color: "primary",
    },
    {
      icon: Calculator,
      title: "Estudios Contables",
      description: "Automatización de procesos fiscales y comunicación con clientes",
      features: [
        "Recordatorios de vencimientos AFIP por WhatsApp o Email",
        "Carga automática de recibos y comprobantes",
        "Dashboard personalizado para cada cliente",
      ],
      color: "secondary",
    },
    {
      icon: CarFront,
      title: "Concesionarias de Autos y Motos",
      description: "Seguimiento de prospectos, ventas y postventa sin esfuerzo",
      features: [
        "Gestión de clientes potenciales con alertas de seguimiento",
        "Automatización de documentación y turnos para entrega",
        "Campañas postventa y recordatorios de servicio",
      ],
      color: "primary",
    },
  ];

  return (
    <section id="industries" className="relative py-32">
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
            Automatización por <span className="text-flewtik-primary">industria</span>
          </h2>
          <p className="mx-auto w-full text-xl text-gray-300">
            Soluciones específicas para cada tipo de negocio. ¿Tu industria no está listada? Ponte
            en contacto con nosotros a través del formulario que está abajo, y juntos podemos crear
            una solución personalizada para tu negocio.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass hover-lift h-full rounded-2xl p-8">
                {/* Icon */}
                <div
                  className={`size-16 ${industry.color === "primary" ? "bg-flewtik-primary" : "bg-flewtik-primary"} mb-6 flex items-center justify-center rounded-2xl ${industry.color === "primary" ? "glow-purple" : "glow-green"}`}
                >
                  <industry.icon className="size-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-white">{industry.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-300">{industry.description}</p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div
                        className={`size-2 ${industry.color === "primary" ? "bg-flewtik-primary" : "bg-flewtik-primary"} mr-3 rounded-full`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
