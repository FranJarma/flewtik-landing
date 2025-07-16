import type React from "react"
import type { Metadata } from "next"
import { Tektur } from "next/font/google"
import "./globals.css"

const tektur = Tektur({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tektur",
})

export const metadata: Metadata = {
  title: "Automatika - Automatización para PYMEs | Salta, Argentina",
  description:
    "Automatizá tu negocio y escalá sin fricción. Ayudamos a PYMEs a resolver sus procesos con automatizaciones simples, seguras y escalables desde Salta Capital.",
  keywords: "automatización, PYMEs, Salta, Argentina, CRM, WhatsApp, facturación, reportes, no-code",
  authors: [{ name: "Automatika" }],
  creator: "Automatika",
  publisher: "Automatika",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://automatika.com.ar",
    siteName: "Automatika",
    title: "Automatika - Automatización para PYMEs",
    description: "Automatizá tu negocio y escalá sin fricción con soluciones simples y escalables.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Automatika - Automatización para PYMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatika - Automatización para PYMEs",
    description: "Automatizá tu negocio y escalá sin fricción con soluciones simples y escalables.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://automatika.com.ar",
    languages: {
      "es-AR": "https://automatika.com.ar",
      "en-US": "https://automatika.com.ar/en",
    },
  },
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={tektur.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B5CF6" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${tektur.className} font-tektur`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}
