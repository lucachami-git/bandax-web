"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { type Producto, type Categoria, COLOR_MAP } from "@/lib/productos";
import AgregarAlCarritoBtn from "./AgregarAlCarritoBtn";
import { Suspense } from "react";

interface Props {
  categorias: Categoria[];
  productos: Producto[];
}

function TiendaGrid({ categorias, productos }: Props) {
  const searchParams = useSearchParams();
  const categoriaActiva = searchParams.get("categoria") ?? "";

  const productosFiltrados = categoriaActiva
    ? productos.filter((p) => p.categoriaSlug === categoriaActiva)
    : productos;

  // Agrupar por categoría para el sidebar
  const gruposPorCategoria = categorias.map((cat) => ({
    ...cat,
    items: productos.filter((p) => p.categoriaSlug === cat.slug),
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar de categorías */}
        <aside className="lg:w-56 shrink-0">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Categorías
            </p>
            <nav className="flex flex-col gap-1">
              <Link
                href="/tienda"
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  !categoriaActiva
                    ? "bg-blue-500/15 text-blue-300"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span>Todos</span>
                <span className="text-xs text-slate-600">{productos.length}</span>
              </Link>
              {gruposPorCategoria.map((cat) => {
                const c = COLOR_MAP[cat.color] ?? COLOR_MAP.blue;
                const activo = categoriaActiva === cat.slug;
                return (
                  <Link
                    key={cat.slug}
                    href={`/tienda?categoria=${cat.slug}`}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      activo
                        ? `${c.bg} ${c.text}`
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>{cat.nombre}</span>
                    <span className="text-xs text-slate-600">{cat.items.length}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Grid de productos */}
        <div className="flex-1">
          {productosFiltrados.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <ShoppingBag size={48} className="text-slate-700 mb-4" />
              <p className="text-slate-400 font-medium">
                No hay productos en esta categoría
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {productosFiltrados.map((p) => {
                const c = COLOR_MAP[p.color] ?? COLOR_MAP.blue;
                return (
                  <div
                    key={p.id}
                    className={`group flex flex-col bg-slate-900 border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ring-1 ${c.ring} ${c.glow}`}
                  >
                    {/* Badge categoría */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.badge}`}
                      >
                        {p.categoriaNombre}
                      </span>
                    </div>

                    {/* Nombre y descripción */}
                    <h2 className="text-base font-bold text-white leading-snug mb-2">
                      {p.nombre}
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1">
                      {p.descripcion}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.tag}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Acciones */}
                    <div className="flex items-center gap-2 mt-auto pt-2 border-t border-slate-800">
                      <Link
                        href={`/tienda/${p.slug}`}
                        className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        Ver detalle
                        <ArrowRight size={14} />
                      </Link>
                      <div className="ml-auto">
                        <AgregarAlCarritoBtn producto={p} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TiendaFiltros(props: Props) {
  return (
    <Suspense fallback={<div className="py-24 text-center text-slate-600">Cargando...</div>}>
      <TiendaGrid {...props} />
    </Suspense>
  );
}
