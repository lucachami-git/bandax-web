import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bandax Argentina | Bandas Industriales y Correas de Transmisión",
  description:
    "30 años liderando soluciones industriales en bandas transportadoras, bandas modulares, poliuretano y correas de transmisión. Servicio técnico express y stock permanente.",
  keywords:
    "bandas transportadoras, correas de transmisión, bandas modulares, poliuretano, Argentina, industrial",
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
      "30 años liderando soluciones industriales en bandas transportadoras y correas de transmisión.",
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
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
