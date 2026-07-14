import Image from "next/image";
import Link from "next/link";
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
  image: string;
  slug: string;
}

const products: Product[] = [
  {
    icon: Layers,
    name: "Bandas Transportadoras y de Proceso",
    description:
      "Para industria alimenticia, logística y manufactura. Alta resistencia, fácil higienización y larga vida útil.",
    tags: ["Alimenticia", "Logística", "Manufactura"],
    color: "blue",
    image: "/images/productos/transportadoras-header.jpg",
    slug: "bandas-transportadoras",
  },
  {
    icon: Grid3X3,
    name: "Bandas Plásticas Modulares",
    description:
      "Sistema modular de fácil reemplazo por tramo. Ideal para líneas de producción con curvas y elevaciones.",
    tags: ["Modular", "Fácil reemplazo"],
    color: "indigo",
    image: "/images/hero/hero-2.jpg",
    slug: "bandas-modulares",
  },
  {
    icon: Zap,
    name: "Bandas de Poliuretano",
    description:
      "Alta resistencia química y mecánica. Perfectas para entornos húmedos, aceites y temperaturas extremas.",
    tags: ["Resistente", "Alta temperatura"],
    color: "violet",
    image: "/images/productos/poliuretano-header.jpg",
    slug: "bandas-poliuretano",
  },
  {
    icon: Settings,
    name: "Correas de Transmisión Planas",
    description:
      "Transmisión de potencia eficiente con mínima vibración. Disponibles en múltiples anchos y largos.",
    tags: ["Transmisión", "Precisión"],
    color: "cyan",
    image: "/images/productos/correas-planas-header.jpg",
    slug: "correas-planas",
  },
  {
    icon: Grip,
    name: "Sistemas de Sujeción y Fijación",
    description:
      "Conectores, grapas y empalmes para bandas de todo tipo. Repuestos originales con entrega inmediata.",
    tags: ["Repuestos", "Empalmes"],
    color: "teal",
    image: "/images/productos/grampas-header.jpg",
    slug: "grampas",
  },
  {
    icon: GitBranch,
    name: "Correas Dentadas / Sincrónicas",
    description:
      "Transmisión sincrónica sin deslizamiento. Para aplicaciones que requieren posicionamiento exacto.",
    tags: ["Sincrónico", "Sin deslizamiento"],
    color: "green",
    image: "/images/productos/transmision-header.jpg",
    slug: "correas-posicionamiento",
  },
  {
    icon: Triangle,
    name: "Correas Trapezoidales en V",
    description:
      "La solución clásica para transmisión de potencia. Disponibles en todos los perfiles estándar.",
    tags: ["Clásica", "Potencia"],
    color: "yellow",
    image: "/images/productos/transmision-03.jpg",
    slug: "correas-transmision",
  },
  {
    icon: Wrench,
    name: "Accesorios y Repuestos",
    description:
      "Poleas, tensores, rodamientos y accesorios para el mantenimiento completo de su línea de producción.",
    tags: ["Mantenimiento", "Stock"],
    color: "orange",
    image: "/images/productos/transmision-02.jpg",
    slug: "accesorios",
  },
];

const colorMap: Record<string, { bg: string; text: string; ring: string; tag: string }> = {
  blue:   { bg: "bg-blue-50",   text: "text-blue-600",   ring: "ring-blue-100",   tag: "bg-blue-50 text-blue-700" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", ring: "ring-indigo-100", tag: "bg-indigo-50 text-indigo-700" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", ring: "ring-violet-100", tag: "bg-violet-50 text-violet-700" },
  cyan:   { bg: "bg-cyan-50",   text: "text-cyan-600",   ring: "ring-cyan-100",   tag: "bg-cyan-50 text-cyan-700" },
  teal:   { bg: "bg-teal-50",   text: "text-teal-600",   ring: "ring-teal-100",   tag: "bg-teal-50 text-teal-700" },
  green:  { bg: "bg-green-50",  text: "text-green-600",  ring: "ring-green-100",  tag: "bg-green-50 text-green-700" },
  yellow: { bg: "bg-yellow-50", text: "text-yellow-600", ring: "ring-yellow-100", tag: "bg-yellow-50 text-yellow-700" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", ring: "ring-orange-100", tag: "bg-orange-50 text-orange-700" },
};

const WHATSAPP = "https://wa.me/5491147175151?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

export default function Products() {
  return (
    <section id="productos" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Nuestros Productos
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Todo lo que su línea necesita
          </h2>
          <p className="mt-4 text-lg text-slate-500">
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
              <Link
                key={p.name}
                href={`/productos/${p.slug}`}
                className={`group relative flex flex-col rounded-2xl border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ring-1 ${c.ring}`}
              >
                {/* Product photo */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <div className={`absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg ${c.bg} shadow-sm`}>
                    <Icon size={18} className={c.text} />
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className={`text-xs font-semibold ${c.text} group-hover:underline`}>
                    Ver modelos y catálogos →
                  </span>
                </div>
              </Link>
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
