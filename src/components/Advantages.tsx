import { Ruler, Clock, Package, Headphones } from "lucide-react";

const advantages = [
  {
    icon: Ruler,
    title: "Soluciones a medida",
    description:
      "Cada industria tiene sus propias necesidades. Nuestro equipo técnico diseña soluciones específicas para su proceso productivo, sin soluciones genéricas.",
  },
  {
    icon: Clock,
    title: "Servicio técnico express",
    description:
      "Entendemos que cada hora de parada tiene un costo. Respondemos emergencias de planta con rapidez y personal capacitado en el campo.",
  },
  {
    icon: Package,
    title: "Stock permanente",
    description:
      "Mantenemos inventario constante de los productos más demandados. No hay demoras por falta de material: retiro inmediato o envío express.",
  },
  {
    icon: Headphones,
    title: "Asesoramiento incluido",
    description:
      "Más de 30 años de experiencia al servicio de su empresa. Le ayudamos a elegir el producto correcto antes de la compra, sin costo adicional.",
  },
];

export default function Advantages() {
  return (
    <section id="ventajas" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
              ¿Por qué Bandax?
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Más que un proveedor,{" "}
              <span className="text-blue-600">
                un socio industrial
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              En Bandax combinamos décadas de experiencia con atención
              personalizada. Desde la consulta hasta la entrega, estamos con
              usted en cada paso del proceso.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "30+", label: "Años en el mercado" },
                { value: "500+", label: "Clientes activos" },
                { value: "8", label: "Líneas de productos" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-slate-900">{s.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <Icon size={22} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">{a.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
