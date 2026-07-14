import Image from "next/image";

const brands = [
  { name: "Yongli",   src: "/images/marcas/yongli.png",  width: 140, height: 40 },
  { name: "Gates",    src: "/images/marcas/gates.jpeg",   width: 160, height: 40 },
  { name: "Habasit",  src: "/images/marcas/habasit.png",  width: 140, height: 40 },
];

export default function Brands() {
  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10">
          Marcas líderes que representamos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {brands.map((b) => (
            <div
              key={b.name}
              className="relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              style={{ width: b.width, height: b.height }}
            >
              <Image
                src={b.src}
                alt={`Logo ${b.name}`}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
