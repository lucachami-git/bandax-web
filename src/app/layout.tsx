import type { Metadata, Viewport } from "next";
import { Roboto, Lato } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import Analytics from "@/components/Analytics";

// Misma tipografía que www.bandax.com: Roboto (cuerpo) + Lato (títulos)
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bandax Argentina | Bandas Industriales y Correas de TransmisiÃ³n",
  description:
    "30 aÃ±os liderando soluciones industriales en bandas transportadoras, bandas modulares, poliuretano y correas de transmisiÃ³n. Servicio tÃ©cnico express y stock permanente.",
  keywords:
    "bandas transportadoras, correas de transmisiÃ³n, bandas modulares, poliuretano, Argentina, industrial",
  authors: [{ name: "Bandax Argentina" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Bandax",
  },
  openGraph: {
    title: "Bandax Argentina | Bandas Industriales",
    description:
      "30 aÃ±os liderando soluciones industriales en bandas transportadoras y correas de transmisiÃ³n.",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${roboto.variable} ${lato.variable} h-full antialiased`}>
      <body className="bx-fondo min-h-full flex flex-col">
        <ServiceWorkerRegistration />
        <Analytics />
        {children}
      </body>
    </html>
  );
}

