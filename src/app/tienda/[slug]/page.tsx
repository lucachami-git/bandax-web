import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ChevronRight, ExternalLink, Package } from "lucide-react";
import { getProductos, getProducto, colorForRubro, codigoToSlug, slugToCodigo } from "@/lib/erp-api";
import { COLOR_MAP } from "@/lib/productos";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AgregarAlCarritoBtn from "../AgregarAlCarritoBtn";

export const dynamic   = "force-dynamic";
export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const codigo  = slugToCodigo(slug);
  const producto = await getProducto(codigo);
  if (!producto) return {};
  return {
    title: `${producto.nombre} | Bandax Argentina`,
    description: producto.descripcion || producto.nombre,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const codigo   = slugToCodigo(slug);
  const producto = await getProducto(codigo);
  if (!producto) notFound();

  const color = colorForRubro(producto.rubro.id);
  const c     = COLOR_MAP[color] ?? COLOR_MAP.blue;

  // Productos relacionados del mismo rubro
  const { productos: todos } = await getProductos();
  const relacionados = todos
    .filter((p) => p.rubro.id === producto.rubro.id && p.codigo !== producto.codigo)
    .slice(0, 3);

  const tieneML = !!producto.ml && producto.ml.estado === "ACTIVA";

  return (
    <>
      <TopBar />
      <Header />
      <main className="min-h-screen bg-slate-950 pt-28">
        {/* Breadcrumb */}
        <div className="bg-slate-900 border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-1.5 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-300 transition-colors">Inicio</Link>
              <ChevronRight size={14} />
              <Link href="/tienda" className="hover:text-slate-300 transition-colors">Tienda</Link>
              <ChevronRight size={14} />
              <Link
                href={`/tienda?rubro=${producto.rubro.codigo}`}
                className="hover:text-slate-300 transition-colors"
              >
                {producto.rubro.nombre}
              </Link>
              <ChevronRight size={14} />
              <span className="text-slate-300 truncate max-w-[200px]">{producto.nombre}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/tienda"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Volver al catálogo
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenido principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.badge}`}>
                    {producto.rubro.nombre}
                  </span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    producto.tieneStock
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-slate-700/50 text-slate-400"
                  }`}>
                    {producto.tieneStock
                      ? `En stock: ${producto.stockActual.toLocaleString("es-AR")} ${producto.unidadMedida.abreviacion}`
                      : "Sin stock — consultar disponibilidad"}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  {producto.nombre}
                </h1>

                {producto.descripcion && (
                  <p className="mt-3 text-lg text-slate-400 leading-relaxed">
                    {producto.descripcion}
                  </p>
                )}

                <p className="text-xs font-mono text-slate-600 mt-3">
                  Código ERP: <span className="text-slate-500">{producto.codigo}</span>
                  {" "}· Unidad: <span className="text-slate-500">{producto.unidadMedida.nombre}</span>
                </p>
              </div>

              {/* Publicación en MercadoLibre */}
              {tieneML && producto.ml && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-yellow-300">Disponible en MercadoLibre</p>
                    <p className="text-2xl font-black text-yellow-400 mt-1">
                      ${producto.ml.precioARS.toLocaleString("es-AR")}
                    </p>
                    <p className="text-xs text-yellow-600 mt-0.5">Precio en pesos — comprá directamente en ML</p>
                  </div>
                  {producto.ml.mlUrl && (
                    <a
                      href={producto.ml.mlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-yellow-500 hover:bg-yellow-400 px-5 py-2.5 text-sm font-bold text-slate-900 transition-all shrink-0"
                    >
                      <ExternalLink size={15} />
                      Comprar en ML
                    </a>
                  )}
                </div>
              )}

              {/* Tipo de producto */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Información del producto
                </h2>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-slate-500 text-xs font-semibold">Tipo</p>
                    <p className="text-slate-200 mt-0.5">
                      {producto.tipoProducto === "TIPO_B_ESTANTERIA" ? "Producto de estantería" : "Producto a medida"}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold">Unidad de medida</p>
                    <p className="text-slate-200 mt-0.5">{producto.unidadMedida.nombre}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold">Categoría</p>
                    <p className="text-slate-200 mt-0.5">{producto.rubro.nombre}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold">Disponibilidad</p>
                    <p className={`mt-0.5 font-semibold ${producto.tieneStock ? "text-emerald-400" : "text-slate-400"}`}>
                      {producto.tieneStock ? "En stock" : "Consultar"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ventajas de comprar en Bandax */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">
                  ¿Por qué elegir Bandax?
                </h2>
                <ul className="space-y-2">
                  {[
                    "30 años de experiencia en la industria",
                    "Stock permanente y entrega express en todo el país",
                    "Asesoramiento técnico especializado sin cargo",
                    "Garantía de calidad en todos nuestros productos",
                    "Servicio postventa y soporte técnico",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle size={16} className={`shrink-0 mt-0.5 ${c.text}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Card de cotización */}
              <div className={`rounded-2xl border p-6 space-y-4 ring-1 ${c.ring} bg-slate-900`}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Precio</p>
                  {tieneML && producto.ml ? (
                    <>
                      <p className="text-2xl font-black text-yellow-400">
                        ${producto.ml.precioARS.toLocaleString("es-AR")}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">Precio en MercadoLibre (ARS)</p>
                    </>
                  ) : (
                    <>
                      <p className="text-2xl font-black text-white">A consultar</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Precio según medida y cantidad. Sin compromiso.
                      </p>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Package size={14} className={producto.tieneStock ? "text-emerald-400" : "text-slate-500"} />
                  <span className={`text-sm font-semibold ${
                    producto.tieneStock ? "text-emerald-400" : "text-slate-500"
                  }`}>
                    {producto.tieneStock ? "Disponible" : "Sin stock — consultar"}
                  </span>
                </div>

                <AgregarAlCarritoBtn
                  grande
                  producto={{
                    id:       producto.id,
                    slug:     codigoToSlug(producto.codigo),
                    nombre:   producto.nombre,
                    categoria: producto.rubro.nombre,
                  }}
                />

                {tieneML && producto.ml?.mlUrl && (
                  <a
                    href={producto.ml.mlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-yellow-500 hover:bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-900 transition-all w-full"
                  >
                    <ExternalLink size={15} />
                    Comprar en MercadoLibre
                  </a>
                )}

                <a
                  href={`https://wa.me/5491147175151?text=${encodeURIComponent(
                    `Hola, quisiera consultar sobre el producto: ${producto.nombre} (Cód: ${producto.codigo})`
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
            </div>
          </div>

          {/* Productos relacionados */}
          {relacionados.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold text-white mb-6">
                Más productos en {producto.rubro.nombre}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relacionados.map((rel) => {
                  const rc = COLOR_MAP[colorForRubro(rel.rubro.id)] ?? COLOR_MAP.blue;
                  return (
                    <Link
                      key={rel.id}
                      href={`/tienda/${codigoToSlug(rel.codigo)}`}
                      className={`group flex flex-col gap-3 bg-slate-900 border rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-xl ring-1 ${rc.ring}`}
                    >
                      <span className={`rounded-full self-start px-2.5 py-0.5 text-xs font-semibold ${rc.badge}`}>
                        {rel.rubro.nombre}
                      </span>
                      <h3 className="text-sm font-bold text-white leading-snug group-hover:text-blue-300 transition-colors">
                        {rel.nombre}
                      </h3>
                      {rel.descripcion && (
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                          {rel.descripcion}
                        </p>
                      )}
                      <span className={`text-xs font-medium self-start ${
                        rel.tieneStock ? "text-emerald-400" : "text-slate-500"
                      }`}>
                        {rel.tieneStock ? "En stock" : "Consultar"}
                      </span>
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
