import Link from "next/link";
import { getProductos, colorForRubro } from "@/lib/erp-api";
import { COLOR_MAP } from "@/lib/productos";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TiendaGrid from "./TiendaGrid";

export const metadata = {
  title: "Tienda | Bandax Argentina — Bandas Industriales y Correas",
  description:
    "Catálogo completo de bandas transportadoras, modulares, de poliuretano y correas de transmisión. Solicitá tu cotización sin compromiso.",
};

export const dynamic   = "force-dynamic";
export const revalidate = 60;

export default async function TiendaPage() {
  const { productos, rubros } = await getProductos();

  return (
    <>
      <TopBar />
      <Header />
      <main className="min-h-screen bg-slate-950 pt-28">
        {/* Header de la tienda */}
        <div className="bg-slate-900 border-b border-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-3">
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Inicio
              </Link>
              <span>›</span>
              <span className="text-slate-300">Tienda</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Catálogo de Productos
            </h1>
            <p className="mt-2 text-slate-400 max-w-2xl">
              {productos.length > 0
                ? `${productos.length} productos disponibles. Seleccioná los que necesitás y solicitá tu cotización.`
                : "Catálogo industrial de bandas y correas de transmisión."}
            </p>

            {/* Filtros de categoría */}
            {rubros.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="/tienda"
                  className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-300 hover:bg-blue-500/20 transition-colors"
                >
                  Todos
                </Link>
                {rubros.map((r) => {
                  const color = colorForRubro(r.id);
                  const c = COLOR_MAP[color] ?? COLOR_MAP.blue;
                  return (
                    <Link
                      key={r.id}
                      href={`/tienda?rubro=${r.codigo}`}
                      className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${c.ring} ${c.badge} hover:opacity-80`}
                    >
                      {r.nombre}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Grid de productos con filtros client */}
        <TiendaGrid
          productos={productos}
          rubros={rubros}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
