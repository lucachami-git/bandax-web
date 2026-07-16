"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/**
 * Registra:
 *  - pageview en cada cambio de ruta
 *  - page_time (tiempo en la página) al dejarla (nav SPA o cierre de pestaña)
 *  - whatsapp_click y download por delegación de clics (sin tocar cada componente)
 */
export default function Analytics() {
  const pathname = usePathname();

  // Pageview + tiempo en la página
  useEffect(() => {
    track("pageview");
    const entry = Date.now();
    let enviado = false;
    const enviarTiempo = () => {
      if (enviado) return;
      enviado = true;
      const dur = Date.now() - entry;
      if (dur > 1000) track("page_time", { duracionMs: dur, path: pathname });
    };
    window.addEventListener("pagehide", enviarTiempo);
    return () => {
      window.removeEventListener("pagehide", enviarTiempo);
      enviarTiempo(); // al cambiar de ruta, registra el tiempo de la página que se deja
    };
  }, [pathname]);

  // Clics de WhatsApp y descargas (delegación global)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (/wa\.me|api\.whatsapp|web\.whatsapp/i.test(href)) {
        track("whatsapp_click", { meta: href });
      } else if (/\.(pdf|zip|docx?|xlsx?|rar|dwg)(\?|$)/i.test(href) || /\/catalogs\//i.test(href)) {
        track("download", { meta: href });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
