"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const WHATSAPP =
  "https://wa.me/5491147175151?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

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
      {/* Banner ancho y bajo: la imagen se ve entera (object-contain) */}
      <div className="relative w-full overflow-hidden bg-slate-900 h-[440px] sm:h-[520px] lg:h-[600px]">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            {/* Fondo borroso que rellena los bordes sin recortar la foto */}
            <Image
              src={src}
              alt=""
              fill
              className="object-cover scale-110 blur-2xl opacity-40"
              sizes="100vw"
              priority={i === 0}
            />
            {/* Imagen completa, sin zoom ni recorte */}
            <Image
              src={src}
              alt="Soluciones industriales de bandas y correas Bandax"
              fill
              style={{ objectFit: "contain" }}
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Degradado para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/55 to-transparent pointer-events-none" />

        {/* Texto */}
        <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl">
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

            <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed max-w-md">
              Bandas transportadoras, modulares, de poliuretano y correas de
              transmisión para la industria alimenticia, logística y manufactura.
            </p>

            <ul className="mt-6 hidden sm:flex flex-col gap-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-white/85 text-sm">
                  <CheckCircle size={16} className="text-blue-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
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
