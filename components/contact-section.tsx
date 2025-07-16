"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hola@automatika.com.ar",
      link: `mailto:hola@automatika.com.ar`,
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+54 387 123-4567",
      link: `https://wa.me/5493871234567`,
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Salta Capital, Argentina",
      link: "#",
    },
  ]

  return (
    <section id="contacto" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Hablemos de tu <span className="text-secondary">proyecto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contanos sobre tu negocio y te ayudamos a identificar las mejores oportunidades de automatización
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envianos un mensaje</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nombre *</label>
                    <Input
                      className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-primary"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                    <Input
                      className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-primary"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <Input
                    type="email"
                    className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-primary"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                  <Input
                    className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500 focus:border-primary"
                    placeholder="+54 387 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    ¿Qué proceso querés automatizar? *
                  </label>
                  <Textarea
                    className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500 min-h-[120px] focus:border-primary"
                    placeholder="Contanos sobre tu negocio y qué procesos te gustaría automatizar..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 hover:text-primary text-black font-semibold py-3 animate-glow"
                >
                  Enviar mensaje
                  <Send className="ml-2 size-4" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 glass rounded-xl hover-lift group"
                  >
                    <div className="size-12 bg-primary rounded-xl flex items-center justify-center group-hover:bg-primary/80 transition-colors duration-300">
                      <info.icon className="size-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.title}</div>
                      <div className="text-white font-semibold">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick response promise */}
            <div className="glass rounded-xl p-6 border border-primary/20">
              <h4 className="text-lg font-bold text-white mb-3">⚡ Respuesta rápida garantizada</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Respondemos todos los mensajes en menos de 24 horas. Para consultas urgentes, escribinos directamente
                por WhatsApp.
              </p>
            </div>

            {/* Social proof */}
            <div className="glass rounded-xl p-6 border border-secondary/20">
              <h4 className="text-lg font-bold text-white mb-3">🎯 Consulta gratuita</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                La primera consulta es completamente gratuita. Analizamos tu caso y te damos recomendaciones específicas
                sin compromiso.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
