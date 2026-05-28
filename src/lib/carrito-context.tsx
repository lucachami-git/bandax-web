"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";

export interface ItemCarrito {
  id: string;
  slug: string;
  nombre: string;
  categoria: string;
  cantidad: number;
  notas: string;
}

interface EstadoCarrito {
  items: ItemCarrito[];
  abierto: boolean;
}

type AccionCarrito =
  | { type: "AGREGAR"; item: Omit<ItemCarrito, "cantidad" | "notas">; notas?: string }
  | { type: "QUITAR"; id: string }
  | { type: "CAMBIAR_CANTIDAD"; id: string; cantidad: number }
  | { type: "CAMBIAR_NOTAS"; id: string; notas: string }
  | { type: "VACIAR" }
  | { type: "ABRIR" }
  | { type: "CERRAR" }
  | { type: "CARGAR"; items: ItemCarrito[] };

function reducer(estado: EstadoCarrito, accion: AccionCarrito): EstadoCarrito {
  switch (accion.type) {
    case "AGREGAR": {
      const existe = estado.items.find((i) => i.id === accion.item.id);
      if (existe) {
        return {
          ...estado,
          abierto: true,
          items: estado.items.map((i) =>
            i.id === accion.item.id
              ? { ...i, cantidad: i.cantidad + 1 }
              : i
          ),
        };
      }
      return {
        ...estado,
        abierto: true,
        items: [
          ...estado.items,
          { ...accion.item, cantidad: 1, notas: accion.notas ?? "" },
        ],
      };
    }
    case "QUITAR":
      return { ...estado, items: estado.items.filter((i) => i.id !== accion.id) };
    case "CAMBIAR_CANTIDAD":
      return {
        ...estado,
        items: estado.items
          .map((i) =>
            i.id === accion.id ? { ...i, cantidad: accion.cantidad } : i
          )
          .filter((i) => i.cantidad > 0),
      };
    case "CAMBIAR_NOTAS":
      return {
        ...estado,
        items: estado.items.map((i) =>
          i.id === accion.id ? { ...i, notas: accion.notas } : i
        ),
      };
    case "VACIAR":
      return { ...estado, items: [] };
    case "ABRIR":
      return { ...estado, abierto: true };
    case "CERRAR":
      return { ...estado, abierto: false };
    case "CARGAR":
      return { ...estado, items: accion.items };
    default:
      return estado;
  }
}

interface ContextoCarrito {
  items: ItemCarrito[];
  abierto: boolean;
  totalItems: number;
  agregar: (item: Omit<ItemCarrito, "cantidad" | "notas">, notas?: string) => void;
  quitar: (id: string) => void;
  cambiarCantidad: (id: string, cantidad: number) => void;
  cambiarNotas: (id: string, notas: string) => void;
  vaciar: () => void;
  abrir: () => void;
  cerrar: () => void;
  generarMensajeWA: () => string;
}

const Contexto = createContext<ContextoCarrito | null>(null);

const STORAGE_KEY = "bandax-carrito";

export function CarritoProvider({ children }: { children: React.ReactNode }) {
  const [estado, dispatch] = useReducer(reducer, { items: [], abierto: false });

  // Cargar del localStorage al montar
  useEffect(() => {
    try {
      const guardado = localStorage.getItem(STORAGE_KEY);
      if (guardado) {
        const items = JSON.parse(guardado) as ItemCarrito[];
        dispatch({ type: "CARGAR", items });
      }
    } catch {
      // silencioso
    }
  }, []);

  // Guardar en localStorage cuando cambien los items
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estado.items));
    } catch {
      // silencioso
    }
  }, [estado.items]);

  const agregar = useCallback(
    (item: Omit<ItemCarrito, "cantidad" | "notas">, notas?: string) =>
      dispatch({ type: "AGREGAR", item, notas }),
    []
  );
  const quitar = useCallback(
    (id: string) => dispatch({ type: "QUITAR", id }),
    []
  );
  const cambiarCantidad = useCallback(
    (id: string, cantidad: number) =>
      dispatch({ type: "CAMBIAR_CANTIDAD", id, cantidad }),
    []
  );
  const cambiarNotas = useCallback(
    (id: string, notas: string) =>
      dispatch({ type: "CAMBIAR_NOTAS", id, notas }),
    []
  );
  const vaciar = useCallback(() => dispatch({ type: "VACIAR" }), []);
  const abrir = useCallback(() => dispatch({ type: "ABRIR" }), []);
  const cerrar = useCallback(() => dispatch({ type: "CERRAR" }), []);

  const generarMensajeWA = useCallback(() => {
    if (estado.items.length === 0) return "";
    const lineas = estado.items.map((i) => {
      let linea = `• ${i.nombre} (x${i.cantidad})`;
      if (i.notas) linea += `\n  Detalle: ${i.notas}`;
      return linea;
    });
    return encodeURIComponent(
      `Hola, quisiera solicitar una cotización para los siguientes productos:\n\n${lineas.join(
        "\n"
      )}\n\nQuedo a la espera, gracias.`
    );
  }, [estado.items]);

  const totalItems = estado.items.reduce((acc, i) => acc + i.cantidad, 0);

  return (
    <Contexto.Provider
      value={{
        items: estado.items,
        abierto: estado.abierto,
        totalItems,
        agregar,
        quitar,
        cambiarCantidad,
        cambiarNotas,
        vaciar,
        abrir,
        cerrar,
        generarMensajeWA,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export function useCarrito() {
  const ctx = useContext(Contexto);
  if (!ctx) throw new Error("useCarrito debe usarse dentro de CarritoProvider");
  return ctx;
}
