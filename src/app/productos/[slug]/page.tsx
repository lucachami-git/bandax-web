import { notFound } from "next/navigation";
import { getProducto, productos, WHATSAPP_NUMBER } from "@/data/productos";
import Image from "next/image";
import Link from "next/link";
import { FileDown, ArrowLeft, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProducto(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Bandax Argentina`,
    description: product.shortDescription,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const product = getProducto(slug);

  if (!product) notFound();

  const validVideos = product.videos.filter((v) => v.youtubeId);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quisiera%20consultar%20sobre%20${encodeURIComponent(product.name)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-slate-700 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#productos" className="hover:text-slate-700 transition-colors">Productos</Link>
            <span>/</span>
            <span className="text-slate-600">{product.name}</span>
          </nav>

          <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Title block */}
            <div>
              {product.brand && (
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
                  {product.brand}
                </p>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-slate-600 max-w-xl leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Photo */}
            <div
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 ring-1 ring-slate-900/5"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Back link */}
        <Link
          href="/#productos"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-12 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
          Ver todos los productos
        </Link>

        <div className="grid lg:grid-cols-3 gap-14">

          {/* ── LEFT: main content ── */}
          <div className="lg:col-span-2 space-y-16">

            {/* Overview */}
            <div>
              {product.brand && (
                <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-6">
                  {product.brand}
                </span>
              )}
              <p className="text-lg text-slate-700 leading-relaxed">
                {product.fullDescription}
              </p>
              {product.brandDescription && (
                <p className="mt-4 text-slate-500 leading-relaxed">
                  {product.brandDescription}
                </p>
              )}
            </div>

            {/* Models */}
            {product.models.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-8">
                  Líneas y modelos
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.models.map((model) => (
                    <div
                      key={model.name}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-blue-200 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-bold text-slate-900 mb-2 leading-snug">{model.name}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        {model.description}
                      </p>
                      {model.applications && model.applications.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {model.applications.map((app) => (
                            <span
                              key={app}
                              className="rounded-full bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {validVideos.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-8">
                  Videos
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {validVideos.map((video) => (
                    <div key={video.youtubeId} className="flex flex-col gap-3">
                      <div className="rounded-2xl overflow-hidden bg-slate-100" style={{ aspectRatio: "16/9" }}>
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                          style={{ display: "block" }}
                        />
                      </div>
                      <p className="text-sm font-medium text-slate-700">{video.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: sidebar ── */}
          <div className="space-y-6">

            {/* CTA card */}
            <div className="rounded-3xl bg-blue-700 p-8 text-white">
              <h3 className="text-xl font-bold mb-2">¿Necesita este producto?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Consultenos por WhatsApp o email para recibir precio, disponibilidad y asesoramiento técnico.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-white hover:bg-blue-50 text-blue-700 font-bold px-6 py-3 text-sm transition-colors mb-3"
              >
                <Phone size={16} />
                Consultar por WhatsApp
              </a>
              <a
                href="mailto:bandax@bandax.com"
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 hover:border-white/70 text-white font-semibold px-6 py-3 text-sm transition-colors"
              >
                <Mail size={16} />
                bandax@bandax.com
              </a>
            </div>

            {/* Catalogs */}
            {product.catalogs.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900 mb-1">Catálogos y fichas técnicas</h3>
                <p className="text-xs text-slate-500 mb-5">Descargue documentación técnica en PDF</p>
                <div className="flex flex-col gap-2">
                  {product.catalogs.map((cat) => (
                    <a
                      key={cat.url}
                      href={cat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm p-3.5 transition-all group"
                    >
                      <FileDown
                        size={17}
                        className="text-blue-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-800 leading-snug">{cat.name}</p>
                        {cat.description && (
                          <p className="text-xs text-slate-500 mt-0.5">{cat.description}</p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Industries */}
            {product.industries && product.industries.length > 0 && (
              <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4">Industrias que servimos</h3>
                <div className="flex flex-wrap gap-2">
                  {product.industries.map((ind) => (
                    <span
                      key={ind}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
