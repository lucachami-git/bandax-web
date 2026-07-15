import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Yongli Belting",  src: "/images/marcas/yongli-new.png", width: 170, height: 45, href: "/productos/bandas-transportadoras" },
  { name: "ScanBelt",        src: "/images/marcas/scanbelt.jpg",   width: 150, height: 38, href: "/productos/bandas-modulares" },
  { name: "Gates TPU Belts", src: "/images/marcas/gates-tpu.jpeg", width: 185, height: 32, href: "/productos/bandas-poliuretano" },
  { name: "Mafdel",          src: "/images/marcas/mafdel.jpg",     width: 62,  height: 80, href: null },
  { name: "Nitta",           src: "/images/marcas/nitta.png",      width: 105, height: 55, href: "/productos/correas-planas" },
  { name: "Bando",           src: "/images/marcas/bando.jpg",      width: 90,  height: 48, href: "/productos/correas-transmision" },
  { name: "Flexco",          src: "/images/marcas/flexco.png",     width: 155, height: 36, href: "/productos/grampas" },
];

export default function Brands() {
  return (
    <section className="py-14 border-y border-slate-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10">
          Marcas líderes que representamos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16">
          {brands.map((b) => {
            const logo = (
              <Image
                src={b.src}
                alt={`Logo ${b.name}`}
                fill
                className="object-contain"
                sizes="185px"
              />
            );
            return b.href ? (
              <Link
                key={b.name}
                href={b.href}
                title={b.name}
                className="relative hover:scale-105 transition-transform duration-300"
                style={{ width: b.width, height: b.height }}
              >
                {logo}
              </Link>
            ) : (
              <div
                key={b.name}
                title={b.name}
                className="relative"
                style={{ width: b.width, height: b.height }}
              >
                {logo}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
