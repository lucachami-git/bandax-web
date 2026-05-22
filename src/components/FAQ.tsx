"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto tiempo tardan en entregar un pedido?",
    a: "Los productos en stock se despachan en 24 a 48 horas. Para productos especiales o a medida, el plazo depende de la especificación. En emergencias de planta hacemos todo lo posible para acelerar la entrega.",
  },
  {
    q: "¿Fabrican bandas a medida o solo venden estándar?",
    a: "Trabajamos tanto con productos estándar como con soluciones a medida. Podemos cortar, empalmar y adaptar bandas según las dimensiones específicas de su equipo.",
  },
  {
    q: "¿Con qué marcas trabajan?",
    a: "Trabajamos con marcas líderes internacionales como Yongli, Gates, Habasit, Intralox y otras. Le recomendamos la que mejor se adapte a su aplicación y presupuesto.",
  },
  {
    q: "¿Ofrecen soporte técnico en planta?",
    a: "Sí. Contamos con personal técnico que puede desplazarse a su planta para relevar medidas, asesorar en la instalación o diagnosticar problemas en su sistema de transporte.",
  },
  {
    q: "¿Cómo solicito un presupuesto?",
    a: "Puede consultarnos por WhatsApp (la forma más rápida), completar el formulario de contacto en esta página, o escribirnos por email. Le respondemos en el día.",
  },
  {
    q: "¿Hacen envíos al interior del país?",
    a: "Sí. Tenemos base en Buenos Aires y trabajamos con transportistas express para entregas en todo el territorio nacional.",
  },
  {
    q: "¿Tienen mínimo de compra?",
    a: "No tenemos mínimo de compra. Atendemos tanto a grandes industrias como a talleres y clientes individuales con el mismo nivel de atención.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            ¿Tiene dudas?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Respondemos las preguntas más comunes. Si no encuentra lo que busca,
            escríbanos por WhatsApp.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-slate-900">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
