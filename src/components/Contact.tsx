"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const provincias = [
  "Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Córdoba",
  "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja",
  "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan",
  "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero",
  "Tierra del Fuego", "Tucumán",
];

const industrias = [
  "Industria Alimenticia",
  "Logística y Distribución",
  "Manufactura General",
  "Farmacéutica",
  "Embalaje y Packaging",
  "Minería",
  "Construcción",
  "Otra",
];

const WHATSAPP = "https://wa.me/5491147175151?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: "", empresa: "", industria: "", provincia: "", mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
              Contacto
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Hablemos de su proyecto
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Completa el formulario y te respondemos a la brevedad, o
              escribinos directamente por WhatsApp para una respuesta inmediata.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  <Phone size={20} className="text-green-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-green-600 transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-sm text-slate-500">Respuesta inmediata</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Mail size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-sm text-slate-500">info@bandax.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                  <MapPin size={20} className="text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Ubicación</p>
                  <p className="text-sm text-slate-500">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Send size={28} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-500">
                  Le responderemos a la brevedad. También puede contactarnos
                  directamente por WhatsApp.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-full bg-green-500 hover:bg-green-400 px-6 py-2.5 text-sm font-semibold text-white transition-colors"
                >
                  Ir a WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Nombre *
                    </label>
                    <input
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Juan García"
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Empresa
                    </label>
                    <input
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Mi Empresa S.A."
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Industria
                    </label>
                    <select
                      name="industria"
                      value={form.industria}
                      onChange={handleChange}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Seleccionar...</option>
                      {industrias.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Provincia
                    </label>
                    <select
                      name="provincia"
                      value={form.provincia}
                      onChange={handleChange}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Seleccionar...</option>
                      {provincias.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Describa brevemente qué tipo de banda o correa necesita..."
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 py-3.5 text-base font-semibold text-white transition-all"
                >
                  <Send size={18} />
                  Enviar consulta
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
