"use client";

import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import { useCarrito } from "@/lib/carrito-context";
import { type Producto } from "@/lib/productos";

interface Props {
  producto: Producto;
  grande?: boolean;
}

export default function AgregarAlCarritoBtn({ producto, grande = false }: Props) {
  const { agregar, items } = useCarrito();
  const [agregado, setAgregado] = useState(false);

  const yaEsta = items.some((i) => i.id === producto.id);

  const handleClick = () => {
    agregar({
      id: producto.id,
      slug: producto.slug,
      nombre: producto.nombre,
      categoria: producto.categoriaNombre,
    });
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1500);
  };

  const sizeClasses = grande
    ? "w-full justify-center px-5 py-3 text-sm gap-2"
    : "px-3 py-1.5 text-xs gap-1.5";

  return (
    <button
      onClick={handleClick}
      className={`flex items-center rounded-full font-bold transition-all ${sizeClasses} ${
        agregado || yaEsta
          ? "bg-green-500/20 text-green-400 border border-green-500/30"
          : "bg-orange-500 hover:bg-orange-400 text-white shadow-sm shadow-orange-500/20 hover:-translate-y-0.5"
      }`}
    >
      {agregado || yaEsta ? (
        <>
          <Check size={grande ? 16 : 13} />
          {yaEsta ? "En lista de cotización" : "¡Agregado!"}
        </>
      ) : (
        <>
          <ShoppingBag size={grande ? 16 : 13} />
          {grande ? "Agregar a cotización" : "Agregar"}
        </>
      )}
    </button>
  );
}
