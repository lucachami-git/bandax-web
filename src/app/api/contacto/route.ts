/**
 * POST /api/contacto
 * Reenvía la consulta del formulario al módulo "Consultas Web" del ERP
 * (POST /api/public/consultas). El email a bandax@bandax.com se envía desde el
 * cliente vía Web3Forms (su plan gratuito solo permite envíos del navegador).
 *
 * Variables de entorno (opcionales):
 *   ERP_API_URL           — base del ERP (default https://bandax-erp.vercel.app)
 *   CONSULTAS_WEB_SECRET  — secreto compartido con el ERP (header x-api-secret)
 */

import { NextResponse } from "next/server";
import { enviarConsultaWeb } from "@/lib/erp-api";

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

  const erp = await enviarConsultaWeb({
    nombre: body.nombre?.trim() || "",
    email: body.email?.trim() || "",
    telefono: body.telefono?.trim() || "",
    empresa: body.empresa?.trim() || "",
    industria: body.industria?.trim() || "",
    provincia: body.provincia?.trim() || "",
    mensaje: body.mensaje?.trim() || "",
  });

  return NextResponse.json({ ok: true, erp });
}
