import Image from "next/image";
import Link from "next/link";

const brands = [
  { name: "Yongli Belting",  src: "/images/marcas/yongli-new.png", width: 130, height: 34, href: "/productos/bandas-transportadoras" },
  { name: "ScanBelt",        src: "/images/marcas/scanbelt.jpg",   width: 115, height: 29, href: "/productos/bandas-modulares" },
  { name: "Gates TPU Belts", src: "/images/marcas/gates-tpu.jpeg", width: 140, height: 24, href: "/productos/bandas-poliuretano" },
  { name: "Mafdel",          src: "/images/marcas/mafdel.jpg",     width: 47,  height: 60, href: null },
  { name: "Nitta",           src: "/images/marcas/nitta.png",      width: 80,  height: 42, href: "/productos/correas-planas" },
  { name: "Bando",           src: "/images/marcas/bando.jpg",      width: 68,  height: 36, href: "/productos/correas-transmision" },
  { name: "Flexco",          src: "/images/marcas/flexco.png",     width: 118, height: 27, href: "/productos/grampas" },
];

export default function Brands() {
  return (
    <section className="py-14 border-y border-slate-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10">
          Marcas líderes que representamos
        </p>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-8 lg:gap-x-6 xl:gap-x-10">
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
