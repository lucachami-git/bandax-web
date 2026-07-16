import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const WHATSAPP =
  "https://wa.me/5491147175151?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

const highlights = [
  "Stock permanente listo para entregar",
  "Asesoramiento técnico especializado",
  "Soluciones a medida para su industria",
];

export default function Hero() {
  return (
    <section id="inicio" className="bg-white pt-20">
      {/* Imagen grande a lo ancho con overlay oscuro */}
      <div
        className="relative overflow-hidden bg-slate-900 flex items-center"
        style={{ minHeight: "calc(100vh - 5rem)" }}
      >
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Instalación industrial de bandas transportadoras Bandax"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200 mb-8">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              30 años de experiencia industrial
            </div>

            <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Soluciones{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                para industrias
              </span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-lg">
              Proveemos bandas transportadoras, modulares, de poliuretano y
              correas de transmisión para la industria alimenticia, logística y
              manufactura. Entrega rápida en todo el país.
            </p>

            <ul className="animate-fade-up-delay-2 mt-8 flex flex-col gap-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-white/85">
                  <CheckCircle size={18} className="text-blue-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
              <a
                href="#productos"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-7 py-3.5 text-base font-semibold text-white transition-all shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
              >
                Ver productos
                <ArrowRight size={18} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5"
              >
                Pedir presupuesto
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
