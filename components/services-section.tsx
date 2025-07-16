"use client"

import { motion } from "framer-motion"
import { TrendingUp, Receipt, FileText, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Automatización de ventas",
      description: "Conectamos formularios web con CRM y WhatsApp para capturar y nutrir leads automáticamente.",
      features: ["Formularios inteligentes", "Integración CRM", "WhatsApp Business", "Seguimiento automático"],
      color: "from-[#6F37C8] to-[#A477EB]",
    },
    {
      icon: Receipt,
      title: "Automatización de facturación",
      description: "Integramos sistemas de facturación con AFIP usando Zapier, n8n y Facturante.",
      features: ["Facturación automática", "Integración AFIP", "Reportes fiscales", "Conciliación bancaria"],
      color: "from-[#A477EB] to-[#4FC175]",
    },
    {
      icon: FileText,
      title: "Reportes automáticos",
      description: "Generamos reportes personalizados que se envían por email o se actualizan en Google Sheets.",
      features: ["Dashboards en tiempo real", "Envío por email", "Google Sheets", "KPIs personalizados"],
      color: "from-[#4FC175] to-[#1CAF4E]",
    },
    {
      icon: Headphones,
      title: "Atención al cliente",
      description: "Implementamos bots y workflows para mejorar la experiencia del cliente 24/7.",
      features: ["Chatbots inteligentes", "Workflows personalizados", "Soporte 24/7", "Escalamiento humano"],
      color: "from-[#1CAF4E] to-[#6F37C8]",
    },
  ]

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#4FC175] to-[#1CAF4E] bg-clip-text text-transparent">
              Nuestros servicios
            </span>
          </h2>
          <p className="text-xl text-[#D2D2D2] max-w-3xl mx-auto">
            Soluciones de automatización diseñadas específicamente para PYMEs argentinas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-[#2C2B2B]/50 backdrop-blur-sm border border-[#404040]/50 rounded-2xl p-8 h-full hover:bg-[#2C2B2B]/80 transition-all duration-300 group-hover:scale-[1.02]">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-[#D2D2D2] mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#D2D2D2]">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#4FC175] to-[#1CAF4E] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-[#404040] text-[#A477EB] hover:bg-[#A477EB] hover:text-white transition-all duration-300 bg-transparent"
                >
                  Más información
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
