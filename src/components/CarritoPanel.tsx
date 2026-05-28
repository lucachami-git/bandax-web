"use client";

import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCarrito } from "@/lib/carrito-context";

const WHATSAPP_BASE = "https://wa.me/5491147175151?text=";

export default function CarritoPanel() {
  const { items, abierto, cerrar, quitar, cambiarCantidad, cambiarNotas, vaciar, generarMensajeWA, totalItems } =
    useCarrito();

  if (!abierto) return null;

  const handleCotizar = () => {
    const msg = generarMensajeWA();
    if (!msg) return;
    window.open(WHATSAPP_BASE + msg, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={cerrar}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-slate-900 shadow-2xl border-l border-slate-700">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={20} className="text-blue-400" />
            <h2 className="text-base font-bold text-white">
              Solicitud de cotización
            </h2>
            {totalItems > 0 && (
              <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={cerrar}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag size={48} className="text-slate-700 mb-4" />
              <p className="text-slate-400 font-medium">Tu lista está vacía</p>
              <p className="text-slate-600 text-sm mt-1">
                Agregá productos desde el catálogo para solicitar una cotización.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-700 bg-slate-800/60 p-4 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white leading-snug">
                      {item.nombre}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.categoria}
                    </p>
                  </div>
                  <button
                    onClick={() => quitar(item.id)}
                    className="shrink-0 rounded-lg p-1.5 text-slate-500 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                    aria-label="Quitar"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Cantidad */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Cantidad:</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                      className="rounded p-1 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                      disabled={item.cantidad <= 1}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-bold text-white">
                      {item.cantidad}
                    </span>
                    <button
                      onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                      className="rounded p-1 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Notas */}
                <div>
                  <input
                    type="text"
                    placeholder="Especificaciones, medidas, etc. (opcional)"
                    value={item.notas}
                    onChange={(e) => cambiarNotas(item.id, e.target.value)}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 placeholder-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-slate-700 px-5 py-4 space-y-3">
            <p className="text-xs text-slate-500 text-center">
              Te enviaremos la cotización a la brevedad. Sin compromiso de compra.
            </p>
            <button
              onClick={handleCotizar}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-green-500 hover:bg-green-400 px-6 py-3.5 text-base font-bold text-white transition-all shadow-lg shadow-green-500/25 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Solicitar cotización por WhatsApp
            </button>
            <button
              onClick={vaciar}
              className="w-full text-xs text-slate-600 hover:text-red-400 transition-colors py-1"
            >
              Vaciar lista
            </button>
          </div>
        )}
      </div>
    </>
  );
}
