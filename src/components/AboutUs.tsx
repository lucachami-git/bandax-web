import { MapPin, Star, Award, Globe } from "lucide-react";

const industries = [
  "Industria Alimenticia",
  "Logística y Distribución",
  "Manufactura General",
  "Industria Farmacéutica",
  "Embalaje y Packaging",
  "Minería y Construcción",
];

const badges = [
  { icon: Award, text: "30 años de trayectoria" },
  { icon: Globe, text: "Cobertura nacional" },
  { icon: Star, text: "Marcas líderes mundiales" },
  { icon: MapPin, text: "Buenos Aires + envíos" },
];

export default function AboutUs() {
  return (
    <section id="nosotros" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden bg-blue-700 p-10 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl pointer-events-none" />
              <p className="relative text-sm font-semibold uppercase tracking-widest text-blue-200 mb-4">
                Desde 1994
              </p>
              <blockquote className="relative text-2xl sm:text-3xl font-bold text-white leading-snug">
                "Trabajamos día a día para que su planta nunca se detenga."
              </blockquote>
              <p className="relative mt-4 text-blue-200">
                — Equipo Bandax Argentina
              </p>

              <div className="relative mt-8 grid grid-cols-2 gap-3">
                {badges.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.text}
                      className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3"
                    >
                      <Icon size={16} className="text-blue-200 shrink-0" />
                      <span className="text-sm text-white/90">{b.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right text */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
              Quiénes somos
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              30 años construyendo{" "}
              <span className="text-blue-600">confianza industrial</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Bandax Argentina es una empresa especializada en el suministro de
              bandas industriales y correas de transmisión. Fundada en la década
              de los 90, hemos crecido junto a la industria argentina
              proveyendo productos de alta calidad con el respaldo de marcas
              internacionales líderes como Yongli, Gates y otras.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Contamos con personal técnico especializado que asesora desde la
              selección hasta la instalación, garantizando la solución correcta
              para cada aplicación.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-slate-800 mb-3">
                Industrias que servimos:
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
