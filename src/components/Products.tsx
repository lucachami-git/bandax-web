import {
  Layers,
  Grid3X3,
  Zap,
  Settings,
  Grip,
  GitBranch,
  Triangle,
  Wrench,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Product {
  icon: LucideIcon;
  name: string;
  description: string;
  tags: string[];
  color: string;
}

const products: Product[] = [
  {
    icon: Layers,
    name: "Bandas Transportadoras y de Proceso",
    description:
      "Para industria alimenticia, logística y manufactura. Alta resistencia, fácil higienización y larga vida útil.",
    tags: ["Alimenticia", "Logística", "Manufactura"],
    color: "blue",
  },
  {
    icon: Grid3X3,
    name: "Bandas Plásticas Modulares",
    description:
      "Sistema modular de fácil reemplazo por tramo. Ideal para líneas de producción con curvas y elevaciones.",
    tags: ["Modular", "Fácil reemplazo"],
    color: "indigo",
  },
  {
    icon: Zap,
    name: "Bandas de Poliuretano",
    description:
      "Alta resistencia química y mecánica. Perfectas para entornos húmedos, aceites y temperaturas extremas.",
    tags: ["Resistente", "Alta temperatura"],
    color: "violet",
  },
  {
    icon: Settings,
    name: "Correas de Transmisión Planas",
    description:
      "Transmisión de potencia eficiente con mínima vibración. Disponibles en múltiples anchos y largos.",
    tags: ["Transmisión", "Precisión"],
    color: "cyan",
  },
  {
    icon: Grip,
    name: "Sistemas de Sujeción y Fijación",
    description:
      "Conectores, grapas y empalmes para bandas de todo tipo. Repuestos originales con entrega inmediata.",
    tags: ["Repuestos", "Empalmes"],
    color: "teal",
  },
  {
    icon: GitBranch,
    name: "Correas Dentadas / Sincrónicas",
    description:
      "Transmisión sincrónica sin deslizamiento. Para aplicaciones que requieren posicionamiento exacto.",
    tags: ["Sincrónico", "Sin deslizamiento"],
    color: "green",
  },
  {
    icon: Triangle,
    name: "Correas Trapezoidales en V",
    description:
      "La solución clásica para transmisión de potencia. Disponibles en todos los perfiles estándar.",
    tags: ["Clásica", "Potencia"],
    color: "yellow",
  },
  {
    icon: Wrench,
    name: "Accesorios y Repuestos",
    description:
      "Poleas, tensores, rodamientos y accesorios para el mantenimiento completo de su línea de producción.",
    tags: ["Mantenimiento", "Stock"],
    color: "orange",
  },
];

const colorMap: Record<string, { bg: string; text: string; ring: string; tag: string }> = {
  blue:   { bg: "bg-blue-500/10",   text: "text-blue-400",   ring: "ring-blue-500/20",   tag: "bg-blue-500/10 text-blue-300" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", ring: "ring-indigo-500/20", tag: "bg-indigo-500/10 text-indigo-300" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", ring: "ring-violet-500/20", tag: "bg-violet-500/10 text-violet-300" },
  cyan:   { bg: "bg-cyan-500/10",   text: "text-cyan-400",   ring: "ring-cyan-500/20",   tag: "bg-cyan-500/10 text-cyan-300" },
  teal:   { bg: "bg-teal-500/10",   text: "text-teal-400",   ring: "ring-teal-500/20",   tag: "bg-teal-500/10 text-teal-300" },
  green:  { bg: "bg-green-500/10",  text: "text-green-400",  ring: "ring-green-500/20",  tag: "bg-green-500/10 text-green-300" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", ring: "ring-yellow-500/20", tag: "bg-yellow-500/10 text-yellow-300" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", ring: "ring-orange-500/20", tag: "bg-orange-500/10 text-orange-300" },
};

const WHATSAPP = "https://wa.me/5491100000000?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

export default function Products() {
  return (
    <section id="productos" className="bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
            Nuestros Productos
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Todo lo que su línea necesita
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Más de 8 líneas de productos para cubrir cualquier necesidad
            industrial, con stock permanente y entrega express.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => {
            const c = colorMap[p.color];
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className={`group relative flex flex-col gap-4 rounded-2xl border bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ring-1 ${c.ring}`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.bg}`}
                >
                  <Icon size={22} className={c.text} />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold text-white leading-snug mb-2">
                    {p.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.tag}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA bottom */}
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-400 px-8 py-3.5 text-base font-semibold text-white transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-400/35 hover:-translate-y-0.5"
          >
            Consultar disponibilidad →
          </a>
        </div>
      </div>
    </section>
  );
}
