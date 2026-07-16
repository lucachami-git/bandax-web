"use client";

import { useState } from "react";
import { Send, Phone, PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { track } from "@/lib/analytics";

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

const WHATSAPP = "https://wa.me/5491159041115?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";
const WHATSAPP_NUM = "+54 9 11 5904-1115";
const TEL_LINEA = "011 4717-5151";
const TEL_LINEA_HREF = "tel:+541147175151";
const EMAIL = "bandax@bandax.com";
const HORARIO = "Lunes a Viernes de 8.30 a 17.30 hs";
// Access key de Web3Forms — pública por diseño (envía a bandax@bandax.com).
const WEB3FORMS_ACCESS_KEY = "5cf76fba-d509-458c-8833-ac09e98c1ccc";
const DIRECCION = "Edison 2439, Martínez, Buenos Aires";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Edison+2439,+Martinez,+Buenos+Aires,+Argentina";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    nombre: "", email: "", telefono: "", empresa: "", industria: "", provincia: "", mensaje: "",
    botcheck: "", // honeypot anti-spam: invisible para humanos
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: si el campo trampa vino completo, es un bot → simular OK sin enviar.
    if (form.botcheck) { setSent(true); return; }
    setSending(true);
    setError(null);

    // Email (Web3Forms) y registro en el ERP EN PARALELO: si el mail falla, la
    // consulta igual queda guardada en el ERP (y viceversa). Alcanza con que uno funcione.
    const emailOk = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        botcheck: form.botcheck,
        from_name: "Bandax Web",
        subject: `Nueva consulta web de ${form.nombre}${form.empresa ? ` (${form.empresa})` : ""}`,
        replyto: form.email,
        Nombre: form.nombre,
        Email: form.email,
        Teléfono: form.telefono || "-",
        Empresa: form.empresa || "-",
        Industria: form.industria || "-",
        Provincia: form.provincia || "-",
        Mensaje: form.mensaje,
      }),
    })
      .then((r) => r.json())
      .then((d) => Boolean(d?.success))
      .catch(() => false);

    const erpOk = fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((r) => r.json())
      .then((d) => Boolean(d?.ok))
      .catch(() => false);

    const [mail, erp] = await Promise.all([emailOk, erpOk]);
    if (mail || erp) {
      track("form_submit");
      setSent(true);
    } else {
      setError("No pudimos enviar la consulta. Escribinos por WhatsApp.");
    }
    setSending(false);
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
                  <p className="text-sm text-slate-600 select-all">{WHATSAPP_NUM}</p>
                  <p className="text-xs text-slate-400">Respuesta inmediata</p>
                </div>
              </a>

              <a href={TEL_LINEA_HREF} className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                  <PhoneCall size={20} className="text-indigo-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Teléfono
                  </p>
                  <p className="text-sm text-slate-600 select-all">{TEL_LINEA}</p>
                  <p className="text-xs text-slate-400">Línea fija</p>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Email</p>
                  <p className="text-sm text-slate-600 select-all">{EMAIL}</p>
                </div>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                  <MapPin size={20} className="text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                    Ubicación
                  </p>
                  <p className="text-sm text-slate-500">{DIRECCION}</p>
                  <p className="text-xs text-orange-600 font-medium">Ver en Google Maps →</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-500/10">
                  <Clock size={20} className="text-slate-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Horarios</p>
                  <p className="text-sm text-slate-500">{HORARIO}</p>
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
                {/* Honeypot anti-spam: oculto para humanos, los bots lo completan */}
                <input
                  type="text"
                  name="botcheck"
                  value={form.botcheck}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

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
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="juan@empresa.com"
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700">
                      Teléfono
                    </label>
                    <input
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="011 5904-1115"
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

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 py-3.5 text-base font-semibold text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {sending ? "Enviando…" : "Enviar consulta"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
