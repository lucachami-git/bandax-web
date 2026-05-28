"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ShoppingBag, ExternalLink } from "lucide-react";
import { type ProductoAPI, type RubroAPI, colorForRubro, codigoToSlug } from "@/lib/erp-api";
import { COLOR_MAP } from "@/lib/productos";
import AgregarAlCarritoBtn from "./AgregarAlCarritoBtn";
import { Suspense } from "react";

interface Props {
  productos: ProductoAPI[];
  rubros:    RubroAPI[];
}

function Grid({ productos, rubros }: Props) {
  const searchParams = useSearchParams();
  const rubroActivo  = searchParams.get("rubro") ?? "";

  const filtrados = rubroActivo
    ? productos.filter((p) => p.rubro.codigo === rubroActivo)
    : productos;

  // Agrupar por rubro para el sidebar
  const gruposPorRubro = rubros.map((r) => ({
    ...r,
    count: productos.filter((p) => p.rubro.id === r.id).length,
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        {rubros.length > 0 && (
          <aside className="lg:w-56 shrink-0">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                Categorías
              </p>
              <nav className="flex flex-col gap-1">
                <Link
                  href="/tienda"
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    !rubroActivo
                      ? "bg-blue-500/15 text-blue-300"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span>Todos</span>
                  <span className="text-xs text-slate-600">{productos.length}</span>
                </Link>
                {gruposPorRubro.map((r) => {
                  const color = colorForRubro(r.id);
                  const c = COLOR_MAP[color] ?? COLOR_MAP.blue;
                  const activo = rubroActivo === r.codigo;
                  return (
                    <Link
                      key={r.id}
                      href={`/tienda?rubro=${r.codigo}`}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        activo
                          ? `${c.bg} ${c.text}`
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <span>{r.nombre}</span>
                      <span className="text-xs text-slate-600">{r.count}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>
        )}

        {/* Grid */}
        <div className="flex-1">
          {filtrados.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <ShoppingBag size={48} className="text-slate-700 mb-4" />
              <p className="text-slate-400 font-medium">
                {productos.length === 0
                  ? "El catálogo está siendo actualizado. Consultanos por WhatsApp."
                  : "No hay productos en esta categoría."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtrados.map((p) => {
                const color = colorForRubro(p.rubro.id);
                const c = COLOR_MAP[color] ?? COLOR_MAP.blue;
                const slug = codigoToSlug(p.codigo);

                return (
                  <div
                    key={p.id}
                    className={`group flex flex-col bg-slate-900 border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ring-1 ${c.ring} ${c.glow}`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold shrink-0 ${c.badge}`}>
                        {p.rubro.nombre}
                      </span>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          p.tieneStock
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-slate-700/50 text-slate-500"
                        }`}>
                          {p.tieneStock
                            ? `Stock: ${p.stockActual.toLocaleString("es-AR")} ${p.unidadMedida.abreviacion}`
                            : "Sin stock"}
                        </span>
                      </div>
                    </div>

                    {/* Nombre y descripción */}
                    <h2 className="text-sm font-bold text-white leading-snug mb-1.5">
                      {p.nombre}
                    </h2>
                    {p.descripcion && (
                      <p className="text-xs text-slate-400 leading-relaxed flex-1 line-clamp-2">
                        {p.descripcion}
                      </p>
                    )}

                    {/* Precio ML si tiene publicación */}
                    {p.ml && p.ml.estado === "ACTIVA" && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs text-slate-500">ML:</span>
                        <span className="text-sm font-bold text-yellow-400">
                          ${p.ml.precioARS.toLocaleString("es-AR")}
                        </span>
                        {p.ml.mlUrl && (
                          <a
                            href={p.ml.mlUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-500/60 hover:text-yellow-400 transition-colors"
                          >
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    )}

                    {/* Código */}
                    <p className="text-xs font-mono text-slate-600 mt-auto pt-2">
                      Cod: {p.codigo}
                    </p>

                    {/* Acciones */}
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-800">
                      <Link
                        href={`/tienda/${slug}`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        Ver detalle
                        <ArrowRight size={13} />
                      </Link>
                      <div className="ml-auto">
                        <AgregarAlCarritoBtn
                          producto={{
                            id:             p.id,
                            slug,
                            nombre:         p.nombre,
                            categoria:      p.rubro.nombre,
                          }}
                        />
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

export default function TiendaGrid(props: Props) {
  return (
    <Suspense fallback={<div className="py-24 text-center text-slate-600">Cargando catálogo...</div>}>
      <Grid {...props} />
    </Suspense>
  );
}
