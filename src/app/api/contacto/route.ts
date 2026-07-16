/**
 * POST /api/contacto
 * Recibe el formulario de contacto del sitio y lo reparte:
 *   1) Envía un email a bandax@bandax.com vía Web3Forms.
 *   2) Reenvía la consulta al ERP (si ERP_CONSULTAS_URL está configurada).
 *
 * Variables de entorno:
 *   WEB3FORMS_ACCESS_KEY  (obligatoria) — access key de Web3Forms creada con bandax@bandax.com
 *   ERP_CONSULTAS_URL     (opcional)    — URL del endpoint del ERP (POST /api/public/consultas)
 *   ERP_CONSULTAS_SECRET  (opcional)    — secreto compartido con el ERP (header x-api-secret)
 */

import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface Body {
  nombre?: string;
  email?: string;
  telefono?: string;
  empresa?: string;
  industria?: string;
  provincia?: string;
  mensaje?: string;
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Cuerpo inválido." }, { status: 400 });
  }

  const nombre = body.nombre?.trim();
  const email = body.email?.trim();
  const mensaje = body.mensaje?.trim();

  if (!nombre || !mensaje || !email) {
    return NextResponse.json(
      { ok: false, error: "Completá nombre, email y mensaje." },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { ok: false, error: "El formulario todavía no está configurado." },
      { status: 500 }
    );
  }

  const data = {
    nombre,
    email,
    telefono: body.telefono?.trim() || "",
    empresa: body.empresa?.trim() || "",
    industria: body.industria?.trim() || "",
    provincia: body.provincia?.trim() || "",
    mensaje,
  };

  // 1) Email a bandax@bandax.com vía Web3Forms
  let emailOk = false;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "Bandax Web",
        subject: `Nueva consulta web de ${nombre}${data.empresa ? ` (${data.empresa})` : ""}`,
        replyto: email,
        Nombre: nombre,
        Email: email,
        Teléfono: data.telefono || "-",
        Empresa: data.empresa || "-",
        Industria: data.industria || "-",
        Provincia: data.provincia || "-",
        Mensaje: mensaje,
      }),
    });
    emailOk = res.ok;
  } catch {
    emailOk = false;
  }

  // 2) Reenvío al ERP (no bloquea la respuesta al visitante si falla)
  const erpUrl = process.env.ERP_CONSULTAS_URL;
  if (erpUrl) {
    try {
      await fetch(erpUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.ERP_CONSULTAS_SECRET
            ? { "x-api-secret": process.env.ERP_CONSULTAS_SECRET }
            : {}),
        },
        body: JSON.stringify({ ...data, origen: "web" }),
      });
    } catch {
      // El ERP puede estar caído; la consulta ya salió por email.
    }
  }

  if (!emailOk) {
    return NextResponse.json(
      { ok: false, error: "No pudimos enviar la consulta. Probá por WhatsApp." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
