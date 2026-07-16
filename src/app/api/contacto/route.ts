/**
 * POST /api/contacto
 * Reenvía la consulta del formulario al ERP (POST /api/public/consultas), si está
 * configurado. El email a bandax@bandax.com se envía desde el cliente vía Web3Forms
 * (su plan gratuito solo permite envíos del lado del navegador), no desde acá.
 *
 * Variables de entorno:
 *   ERP_CONSULTAS_URL     (opcional) — URL del endpoint del ERP
 *   ERP_CONSULTAS_SECRET  (opcional) — secreto compartido con el ERP (header x-api-secret)
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

  const erpUrl = process.env.ERP_CONSULTAS_URL;
  if (!erpUrl) {
    // ERP no configurado todavía: no es un error, el email ya salió por el cliente.
    return NextResponse.json({ ok: true, erp: false });
  }

  try {
    const res = await fetch(erpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.ERP_CONSULTAS_SECRET
          ? { "x-api-secret": process.env.ERP_CONSULTAS_SECRET }
          : {}),
      },
      body: JSON.stringify({
        nombre: body.nombre?.trim() || "",
        email: body.email?.trim() || "",
        telefono: body.telefono?.trim() || "",
        empresa: body.empresa?.trim() || "",
        industria: body.industria?.trim() || "",
        provincia: body.provincia?.trim() || "",
        mensaje: body.mensaje?.trim() || "",
        origen: "web",
      }),
    });
    return NextResponse.json({ ok: true, erp: res.ok });
  } catch {
    return NextResponse.json({ ok: true, erp: false });
  }
}
