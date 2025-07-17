"use client";

import { motion } from "framer-motion";
import { TrendingUp, Receipt, FileText, Headphones } from "lucide-react";
import { Button } from "@/components/ui";

export function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Automatización de ventas",
      description:
        "Conectamos formularios web con CRM y WhatsApp para capturar y nutrir leads automáticamente.",
      features: [
        "Formularios inteligentes",
        "Integración CRM",
        "WhatsApp Business",
        "Seguimiento automático",
      ],
      color: "from-[#6F37C8] to-[#A477EB]",
    },
    {
      icon: Receipt,
      title: "Automatización de facturación",
      description: "Integramos sistemas de facturación con AFIP usando Zapier, n8n y Facturante.",
      features: [
        "Facturación automática",
        "Integración AFIP",
        "Reportes fiscales",
        "Conciliación bancaria",
      ],
      color: "from-[#A477EB] to-flewtik-secondary",
    },
    {
      icon: FileText,
      title: "Reportes automáticos",
      description:
        "Generamos reportes personalizados que se envían por email o se actualizan en Google Sheets.",
      features: [
        "Dashboards en tiempo real",
        "Envío por email",
        "Google Sheets",
        "KPIs personalizados",
      ],
      color: "from-flewtik-secondary to-[#1CAF4E]",
    },
    {
      icon: Headphones,
      title: "Atención al cliente",
      description: "Implementamos bots y workflows para mejorar la experiencia del cliente 24/7.",
      features: [
        "Chatbots inteligentes",
        "Workflows personalizados",
        "Soporte 24/7",
        "Escalamiento humano",
      ],
      color: "from-[#1CAF4E] to-[#6F37C8]",
    },
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="from-flewtik-secondary bg-gradient-to-r to-[#1CAF4E] bg-clip-text text-transparent">
              Nuestros servicios
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-[#D2D2D2]">
            Soluciones de automatización diseñadas específicamente para PYMEs argentinas
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-[#404040]/50 bg-[#2C2B2B]/50 p-8 backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.02] hover:bg-[#2C2B2B]/80">
                {/* Icon */}
                <div
                  className={`h-16 w-16 bg-gradient-to-r ${service.color} mb-6 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-[#D2D2D2]">{service.description}</p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#D2D2D2]">
                      <div className="from-flewtik-secondary mr-3 h-2 w-2 rounded-full bg-gradient-to-r to-[#1CAF4E]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-[#404040] bg-transparent text-[#A477EB] transition-all duration-300 hover:bg-[#A477EB] hover:text-white"
                >
                  Más información
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
