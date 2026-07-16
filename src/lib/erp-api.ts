/**
 * Cliente de la API pública del ERP Bandax.
 * La web no tiene DB propia — consulta los productos directamente al ERP.
 */

export const ERP_BASE = process.env.ERP_API_URL ?? "https://bandax-erp.vercel.app";

export interface ProductoAPI {
  id:             string;
  codigo:         string;
  nombre:         string;
  descripcion:    string;
  tipoProducto:   string;
  rubro:          { id: string; nombre: string; codigo: string };
  unidadMedida:   { id: string; nombre: string; abreviacion: string };
  stockActual:    number;
  tieneStock:     boolean;
  precioListaUSD: number;
  precioVentaUSD: number;
  ml: {
    mlItemId:  string;
    mlUrl:     string | null;
    estado:    string;
    precioARS: number;
  } | null;
}

export interface RubroAPI {
  id:     string;
  nombre: string;
  codigo: string;
}

export interface ProductosResponse {
  productos: ProductoAPI[];
  rubros:    RubroAPI[];
}

// Cache-busted por revalidate en el route handler del ERP
export async function getProductos(): Promise<ProductosResponse> {
  try {
    const res = await fetch(`${ERP_BASE}/api/public/productos`, {
      next: { revalidate: 60 }, // ISR: revalidar cada 60 segundos
    });
    if (!res.ok) throw new Error(`ERP API error: ${res.status}`);
    return res.json() as Promise<ProductosResponse>;
  } catch (e) {
    console.error("[erp-api] getProductos:", e);
    return { productos: [], rubros: [] };
  }
}

export async function getProducto(codigo: string): Promise<ProductoAPI | null> {
  try {
    const data = await getProductos();
    return data.productos.find((p) => p.codigo === codigo) ?? null;
  } catch {
    return null;
  }
}

// ─── Consultas Web ────────────────────────────────────────
// Envía cada consulta del formulario de contacto al módulo "Consultas Web"
// del ERP (POST /api/public/consultas).
export interface ConsultaWebInput {
  nombre: string;
  email?: string;
  telefono?: string;
  empresa?: string;
  industria?: string;
  provincia?: string;
  mensaje: string;
}

export async function enviarConsultaWeb(input: ConsultaWebInput): Promise<boolean> {
  try {
    const res = await fetch(`${ERP_BASE}/api/public/consultas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Secreto opcional: solo se envía si está configurado en ambos lados.
        ...(process.env.CONSULTAS_WEB_SECRET
          ? { "x-api-secret": process.env.CONSULTAS_WEB_SECRET }
          : {}),
      },
      body: JSON.stringify({ ...input, origen: "web" }),
    });
    return res.ok;
  } catch (e) {
    console.error("[erp-api] enviarConsultaWeb:", e);
    return false;
  }
}

// Slug URL-safe a partir del código del producto
export function codigoToSlug(codigo: string): string {
  return encodeURIComponent(codigo.toLowerCase());
}

export function slugToCodigo(slug: string): string {
  return decodeURIComponent(slug).toUpperCase();
}

// Color por índice de rubro (para mantener variedad visual)
const COLORS = ["blue", "indigo", "violet", "cyan", "teal", "green", "yellow", "orange"];
export function colorForRubro(rubroId: string): string {
  let hash = 0;
  for (const c of rubroId) hash = (hash * 31 + c.charCodeAt(0)) & 0xffff;
  return COLORS[hash % COLORS.length];
}
