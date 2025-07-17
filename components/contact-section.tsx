"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hola@flewtik.com.ar",
      link: `mailto:hola@flewtik.com.ar`,
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
  ];

  return (
    <section id="contacto" className="relative py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            Hablemos de tu <span className="text-secondary">proyecto</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Contanos sobre tu negocio y te ayudamos a identificar las mejores oportunidades de
            automatización
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="mb-6 text-2xl font-bold text-white">Envianos un mensaje</h3>

              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">Nombre *</label>
                    <Input
                      className="focus:border-primary border-zinc-700 bg-zinc-900/50 text-white placeholder:text-gray-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">Empresa</label>
                    <Input
                      className="focus:border-primary border-zinc-700 bg-zinc-900/50 text-white placeholder:text-gray-500"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">Email *</label>
                  <Input
                    type="email"
                    className="focus:border-primary border-zinc-700 bg-zinc-900/50 text-white placeholder:text-gray-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">WhatsApp</label>
                  <Input
                    className="focus:border-primary border-zinc-700 bg-zinc-900/50 text-white placeholder:text-gray-500"
                    placeholder="+54 387 123-4567"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    ¿Qué proceso querés automatizar? *
                  </label>
                  <Textarea
                    className="focus:border-primary min-h-[120px] border-zinc-700 bg-zinc-900/50 text-white placeholder:text-gray-500"
                    placeholder="Contanos sobre tu negocio y qué procesos te gustaría automatizar..."
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 hover:text-primary animate-glow w-full py-3 font-semibold text-black"
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
              <h3 className="mb-6 text-2xl font-bold text-white">Información de contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass hover-lift group flex items-center space-x-4 rounded-xl p-4"
                  >
                    <div className="bg-primary group-hover:bg-primary/80 flex size-12 items-center justify-center rounded-xl transition-colors duration-300">
                      <info.icon className="size-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.title}</div>
                      <div className="font-semibold text-white">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick response promise */}
            <div className="glass border-primary/20 rounded-xl border p-6">
              <h4 className="mb-3 text-lg font-bold text-white">⚡ Respuesta rápida garantizada</h4>
              <p className="text-sm leading-relaxed text-gray-300">
                Respondemos todos los mensajes en menos de 24 horas. Para consultas urgentes,
                escribinos directamente por WhatsApp.
              </p>
            </div>

            {/* Social proof */}
            <div className="glass border-secondary/20 rounded-xl border p-6">
              <h4 className="mb-3 text-lg font-bold text-white">🎯 Consulta gratuita</h4>
              <p className="text-sm leading-relaxed text-gray-300">
                La primera consulta es completamente gratuita. Analizamos tu caso y te damos
                recomendaciones específicas sin compromiso.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
