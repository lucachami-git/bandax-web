"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const WHATSAPP =
  "https://wa.me/5491159041115?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

const highlights = [
  "Stock permanente listo para entregar",
  "Asesoramiento técnico especializado",
  "Soluciones a medida para su industria",
];

const slides = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.png",
  "/images/hero/paralax.jpg",
];

const INTERVAL = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearInterval(t);
  }, [index]);

  return (
    <section id="inicio" className="bg-white pt-20">
      {/* Banner ancho y bajo, imagen de punta a punta */}
      <div className="relative w-full overflow-hidden bg-slate-900 h-[440px] sm:h-[520px] lg:h-[600px]">
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Soluciones industriales de bandas y correas Bandax"
            fill
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
            priority={i === 0}
            aria-hidden={i !== index}
          />
        ))}

        {/* Scrim oscuro para legibilidad del texto centrado */}
        <div className="absolute inset-0 bg-slate-900/55 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30 pointer-events-none" />

        {/* Texto centrado */}
        <div className="relative h-full mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            30 años de experiencia industrial
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
            Soluciones{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              para industrias
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
            Bandas transportadoras, modulares, de poliuretano y correas de
            transmisión para la industria alimenticia, logística y manufactura.
          </p>

          <ul className="mt-6 hidden sm:flex flex-wrap justify-center gap-x-6 gap-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-white/85 text-sm">
                <CheckCircle size={16} className="text-blue-400 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
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

        {/* Flechas */}
        <button
          onClick={() => go(-1)}
          aria-label="Imagen anterior"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Imagen siguiente"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Puntitos */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-blue-400" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
