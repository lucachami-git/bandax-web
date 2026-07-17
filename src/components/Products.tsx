import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  description: string;
  color: string;
  image: string;
  slug: string;
}

const products: Product[] = [
  {
    name: "Bandas Transportadoras y de Proceso",
    description:
      "Para industria alimenticia, logística y manufactura. Alta resistencia, fácil higienización y larga vida útil.",
    color: "blue",
    image: "/images/productos/transportadoras-header.jpg",
    slug: "bandas-transportadoras",
  },
  {
    name: "Bandas Plásticas Modulares",
    description:
      "Sistema modular de fácil reemplazo por tramo. Ideal para líneas de producción con curvas y elevaciones.",
    color: "indigo",
    image: "/images/hero/hero-2.jpg",
    slug: "bandas-modulares",
  },
  {
    name: "Bandas de Poliuretano",
    description:
      "Alta resistencia química y mecánica. Perfectas para entornos húmedos, aceites y temperaturas extremas.",
    color: "violet",
    image: "/images/productos/poliuretano-header.jpg",
    slug: "bandas-poliuretano",
  },
  {
    name: "Correas de Transmisión Planas",
    description:
      "Transmisión de potencia eficiente con mínima vibración. Disponibles en múltiples anchos y largos.",
    color: "cyan",
    image: "/images/productos/correas-planas-header.jpg",
    slug: "correas-planas",
  },
  {
    name: "Sistemas de Sujeción y Fijación",
    description:
      "Conectores, grapas y empalmes para bandas de todo tipo. Repuestos originales con entrega inmediata.",
    color: "teal",
    image: "/images/productos/grampas-header.jpg",
    slug: "grampas",
  },
  {
    name: "Correas Dentadas / Sincrónicas",
    description:
      "Transmisión sincrónica sin deslizamiento. Para aplicaciones que requieren posicionamiento exacto.",
    color: "green",
    image: "/images/productos/transmision-header.jpg",
    slug: "correas-posicionamiento",
  },
  {
    name: "Correas Trapezoidales en V",
    description:
      "La solución clásica para transmisión de potencia. Disponibles en todos los perfiles estándar.",
    color: "yellow",
    image: "/images/productos/transmision-03.jpg",
    slug: "correas-transmision",
  },
  {
    name: "Accesorios y Repuestos",
    description:
      "Poleas, tensores, rodamientos y accesorios para el mantenimiento completo de su línea de producción.",
    color: "orange",
    image: "/images/productos/transmision-02.jpg",
    slug: "accesorios",
  },
];

const ringMap: Record<string, string> = {
  blue:   "ring-blue-100",
  indigo: "ring-indigo-100",
  violet: "ring-violet-100",
  cyan:   "ring-cyan-100",
  teal:   "ring-teal-100",
  green:  "ring-green-100",
  yellow: "ring-yellow-100",
  orange: "ring-orange-100",
};

const WHATSAPP = "https://wa.me/5491159041115?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

export default function Products() {
  return (
    // scroll-mt compensa la barra fija al entrar por #productos
    <section id="productos" className="scroll-mt-20 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">
            Nuestros Productos
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Todo lo que su línea necesita
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Más de 8 líneas de productos para cubrir cualquier necesidad
            industrial, con stock permanente y entrega express.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <Link
              key={p.name}
              href={`/productos/${p.slug}`}
              className={`group relative flex flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ring-1 ${ringMap[p.color]}`}
            >
              {/* Foto con el CTA encima */}
              <div className="relative h-28 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute bottom-2 left-3 right-3 text-xs font-semibold text-white group-hover:underline">
                  Ver modelos y catálogos →
                </span>
              </div>

              <div className="flex flex-col gap-1 p-3">
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-8 text-center">
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
