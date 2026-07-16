/**
 * Tracking anónimo de la web → módulo Estadísticas Web del ERP.
 * Envía eventos a POST /api/public/eventos como text/plain (sin preflight CORS,
 * compatible con navigator.sendBeacon). Sin cookies ni datos personales: solo
 * un id anónimo aleatorio por visitante (localStorage) y por sesión (sessionStorage).
 */

const ERP_BASE = "https://bandax-erp.vercel.app";
const ENDPOINT = `${ERP_BASE}/api/public/eventos`;

function randomId(): string {
  return Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
}

function persistId(key: string, store: Storage): string {
  try {
    let v = store.getItem(key);
    if (!v) { v = randomId(); store.setItem(key, v); }
    return v;
  } catch {
    return "";
  }
}

// No trackear en desarrollo local (no ensucia las estadísticas reales).
function habilitado(): boolean {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h !== "localhost" && h !== "127.0.0.1" && !h.endsWith(".local");
}

export function track(tipo: string, extra: Record<string, unknown> = {}): void {
  if (!habilitado()) return;
  try {
    const body = JSON.stringify({
      tipo,
      path: window.location.pathname,
      referrer: document.referrer || null,
      visitorId: persistId("bx_vid", window.localStorage),
      sessionId: persistId("bx_sid", window.sessionStorage),
      ...extra,
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "text/plain;charset=UTF-8" }));
    } else {
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // El tracking nunca debe romper la navegación.
  }
}
