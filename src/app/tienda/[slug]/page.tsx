import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ChevronRight } from "lucide-react";
import { getProducto, PRODUCTOS, COLOR_MAP } from "@/lib/productos";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AgregarAlCarritoBtn from "../AgregarAlCarritoBtn";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const producto = getProducto(slug);
  if (!producto) return {};
  return {
    title: `${producto.nombre} | Bandax Argentina`,
    description: producto.descripcion,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = getProducto(slug);
  if (!producto) notFound();

  const c = COLOR_MAP[producto.color] ?? COLOR_MAP.blue;

  // Productos relacionados (misma categoría, distinto slug)
  const relacionados = PRODUCTOS.filter(
    (p) => p.categoriaSlug === producto.categoriaSlug && p.slug !== slug
  ).slice(0, 3);

  return (
    <>
      <TopBar />
      <Header />
      <main className="min-h-screen bg-slate-950 pt-28">
        {/* Breadcrumb */}
        <div className="bg-slate-900 border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-1.5 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Inicio
              </Link>
              <ChevronRight size={14} />
              <Link href="/tienda" className="hover:text-slate-300 transition-colors">
                Tienda
              </Link>
              <ChevronRight size={14} />
              <Link
                href={`/tienda?categoria=${producto.categoriaSlug}`}
                className="hover:text-slate-300 transition-colors"
              >
                {producto.categoriaNombre}
              </Link>
              <ChevronRight size={14} />
              <span className="text-slate-300 truncate max-w-[200px]">
                {producto.nombre}
              </span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Back */}
          <Link
            href="/tienda"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Volver al catálogo
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header del producto */}
              <div>
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 ${c.badge}`}>
                  {producto.categoriaNombre}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  {producto.nombre}
                </h1>
                <p className="mt-3 text-lg text-slate-400 leading-relaxed">
                  {producto.descripcionLarga}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {producto.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full px-3 py-1 text-sm font-medium ${c.tag}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Especificaciones técnicas */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <div className={`px-5 py-3 border-b border-slate-800 ${c.bg}`}>
                  <h2 className={`text-sm font-bold uppercase tracking-widest ${c.text}`}>
                    Especificaciones técnicas
                  </h2>
                </div>
                <div className="divide-y divide-slate-800/60">
                  {producto.especificaciones.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-start px-5 py-3 gap-4"
                    >
                      <dt className="w-40 shrink-0 text-sm font-semibold text-slate-500">
                        {spec.label}
                      </dt>
                      <dd className="text-sm text-slate-200 flex-1">{spec.valor}</dd>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">
                  Aplicaciones típicas
                </h2>
                <ul className="space-y-2">
                  {producto.aplicaciones.map((ap) => (
                    <li key={ap} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle size={16} className={`shrink-0 mt-0.5 ${c.text}`} />
                      {ap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar de acción */}
            <div className="space-y-4">
              {/* Card de cotización */}
              <div className={`rounded-2xl border p-6 space-y-4 ring-1 ${c.ring} bg-slate-900`}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                    Precio
                  </p>
                  <p className="text-2xl font-black text-white">A consultar</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Precios según medida y cantidad. Sin compromiso.
                  </p>
                </div>

                <AgregarAlCarritoBtn producto={producto} grande />

                <a
                  href={`https://wa.me/5491147175151?text=${encodeURIComponent(
                    `Hola, quisiera consultar sobre: ${producto.nombre}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800 hover:bg-slate-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                >
                  Consultar por WhatsApp
                </a>

                <p className="text-xs text-slate-600 text-center">
                  Stock permanente · Entrega en todo el país
                </p>
              </div>

              {/* Info adicional */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
                <h3 className="text-sm font-semibold text-slate-300">
                  ¿Por qué elegirnos?
                </h3>
                {[
                  "30 años de experiencia industrial",
                  "Asesoramiento técnico especializado",
                  "Entrega rápida en todo el país",
                  "Garantía de calidad en todos los productos",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-green-400 shrink-0" />
                    <span className="text-xs text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Productos relacionados */}
          {relacionados.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold text-white mb-6">
                Otros productos en {producto.categoriaNombre}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relacionados.map((rel) => {
                  const rc = COLOR_MAP[rel.color] ?? COLOR_MAP.blue;
                  return (
                    <Link
                      key={rel.id}
                      href={`/tienda/${rel.slug}`}
                      className={`group flex flex-col gap-3 bg-slate-900 border rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-xl ring-1 ${rc.ring}`}
                    >
                      <span className={`rounded-full self-start px-2.5 py-0.5 text-xs font-semibold ${rc.badge}`}>
                        {rel.categoriaNombre}
                      </span>
                      <h3 className="text-sm font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
                        {rel.nombre}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {rel.descripcion}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
