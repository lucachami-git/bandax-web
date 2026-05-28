"use client";

import { ShoppingBag } from "lucide-react";
import { useCarrito } from "@/lib/carrito-context";

export default function CarritoBtn() {
  const { totalItems, abrir } = useCarrito();

  return (
    <button
      onClick={abrir}
      aria-label="Ver solicitud de cotización"
      className="relative flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300 hover:text-white transition-all"
    >
      <ShoppingBag size={16} />
      <span className="hidden sm:inline">Cotización</span>
      {totalItems > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
}
