import { ArrowRight, CheckCircle } from "lucide-react";

const WHATSAPP =
  "https://wa.me/5491100000000?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

const highlights = [
  "Stock permanente listo para entregar",
  "Asesoramiento técnico especializado",
  "Soluciones a medida para su industria",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-44 pb-28 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-8">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            30 años de experiencia industrial
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
            Soluciones en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              bandas industriales
            </span>{" "}
            que no paran
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
            Proveemos bandas transportadoras, modulares, de poliuretano y
            correas de transmisión para la industria alimenticia, logística y
            manufactura. Entrega rápida en todo el país.
          </p>

          {/* Highlights */}
          <ul className="animate-fade-up-delay-2 mt-8 flex flex-col gap-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-slate-300">
                <CheckCircle size={18} className="text-green-400 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-7 py-3.5 text-base font-semibold text-white transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Ver productos
              <ArrowRight size={18} />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 hover:border-slate-400 bg-slate-800/50 hover:bg-slate-700/50 px-7 py-3.5 text-base font-semibold text-white transition-all"
            >
              Pedir presupuesto
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
