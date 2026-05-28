export interface Producto {
  id: string;
  slug: string;
  categoriaSlug: string;
  categoriaNombre: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  especificaciones: { label: string; valor: string }[];
  aplicaciones: string[];
  tags: string[];
  color: string;
}

export interface Categoria {
  slug: string;
  nombre: string;
  descripcion: string;
  color: string;
}

export const CATEGORIAS: Categoria[] = [
  {
    slug: "bandas-transportadoras",
    nombre: "Bandas Transportadoras",
    descripcion: "Para industria alimenticia, logística y manufactura",
    color: "blue",
  },
  {
    slug: "bandas-modulares",
    nombre: "Bandas Modulares",
    descripcion: "Sistema modular de fácil reemplazo por tramo",
    color: "indigo",
  },
  {
    slug: "bandas-poliuretano",
    nombre: "Bandas de Poliuretano",
    descripcion: "Alta resistencia química, mecánica y térmica",
    color: "violet",
  },
  {
    slug: "correas-transmision",
    nombre: "Correas de Transmisión",
    descripcion: "Planas, dentadas y trapezoidales en V",
    color: "cyan",
  },
  {
    slug: "accesorios",
    nombre: "Accesorios y Repuestos",
    descripcion: "Poleas, tensores, conectores y empalmes",
    color: "orange",
  },
];

export const PRODUCTOS: Producto[] = [
  // ─── Bandas Transportadoras ───
  {
    id: "bt-001",
    slug: "banda-transportadora-alimenticia",
    categoriaSlug: "bandas-transportadoras",
    categoriaNombre: "Bandas Transportadoras",
    nombre: "Banda Transportadora Alimenticia",
    descripcion:
      "Banda de PVC blanca apta para contacto con alimentos. Fácil higienización, resistente a grasas y aceites.",
    descripcionLarga:
      "Diseñada para la industria alimenticia bajo normas FDA y EU. Superficie lisa o texturada según aplicación. Soporta procesos de lavado con agua a presión y detergentes alimentarios. Conexión por empalme mecánico o vulcanizado.",
    especificaciones: [
      { label: "Material", valor: "PVC blanco food grade" },
      { label: "Anchos disponibles", valor: "200 mm — 1.500 mm" },
      { label: "Espesores", valor: "1,5 mm / 2 mm / 3 mm / 4 mm" },
      { label: "Temperatura de trabajo", valor: "-10 °C a +70 °C" },
      { label: "Tensión de ruptura", valor: "Hasta 80 N/mm" },
      { label: "Recubrimiento", valor: "Liso, antideslizante, con guías" },
      { label: "Colores", valor: "Blanco, verde, azul" },
    ],
    aplicaciones: [
      "Industria alimenticia (cárnicos, lácteos, panificación)",
      "Logística de supermercados",
      "Panadería y confitería",
      "Empaque y fraccionamiento",
    ],
    tags: ["Food grade", "PVC", "Higienizable"],
    color: "blue",
  },
  {
    id: "bt-002",
    slug: "banda-transportadora-logistica",
    categoriaSlug: "bandas-transportadoras",
    categoriaNombre: "Bandas Transportadoras",
    nombre: "Banda Transportadora Logística",
    descripcion:
      "Banda de PVC negra de alta resistencia para cargas pesadas. Ideal para centros de distribución y líneas de producción.",
    descripcionLarga:
      "Fabricada en PVC negro de alta tenacidad reforzada con trama de poliéster. Soporta cargas de hasta 15 kg/m². Disponible con perfiles transversales para inclinación. Compatible con todos los sistemas de empalme metálico.",
    especificaciones: [
      { label: "Material", valor: "PVC negro reforzado" },
      { label: "Anchos disponibles", valor: "400 mm — 2.000 mm" },
      { label: "Espesores", valor: "2 mm / 3 mm / 4,5 mm / 6 mm" },
      { label: "Temperatura de trabajo", valor: "-20 °C a +80 °C" },
      { label: "Tensión de ruptura", valor: "Hasta 160 N/mm" },
      { label: "Carga máxima", valor: "15 kg/m²" },
      { label: "Inclinación máx.", valor: "35°" },
    ],
    aplicaciones: [
      "Centros de distribución y e-commerce",
      "Industria manufacturera",
      "Aeropuertos y courrier",
      "Supermercados y retail",
    ],
    tags: ["Alta carga", "PVC", "Logística"],
    color: "blue",
  },
  {
    id: "bt-003",
    slug: "banda-transportadora-alta-temperatura",
    categoriaSlug: "bandas-transportadoras",
    categoriaNombre: "Bandas Transportadoras",
    nombre: "Banda Transportadora Alta Temperatura",
    descripcion:
      "Banda de silicona o PTFE para procesos térmicos. Soporta temperaturas de hasta +250 °C de forma continua.",
    descripcionLarga:
      "Especialmente diseñada para túneles de cocción, secado y pintura. La versión de PTFE (teflón) es también antiaderente. La versión de silicona aporta flexibilidad en bajas temperaturas. Ambas versiones disponibles con soporte de fibra de vidrio.",
    especificaciones: [
      { label: "Material", valor: "Silicona / PTFE sobre fibra de vidrio" },
      { label: "Anchos disponibles", valor: "200 mm — 1.200 mm" },
      { label: "Temperatura máx.", valor: "+250 °C (silicona) / +260 °C (PTFE)" },
      { label: "Temperatura mín.", valor: "-60 °C" },
      { label: "Superficie", valor: "Lisa, antiadherente" },
      { label: "Espesor", valor: "0,5 mm — 3 mm" },
    ],
    aplicaciones: [
      "Túneles de cocción y horneado",
      "Secado industrial",
      "Pintura electrostática",
      "Industria del caucho",
    ],
    tags: ["Alta temperatura", "Silicona", "PTFE"],
    color: "blue",
  },

  // ─── Bandas Modulares ───
  {
    id: "bm-001",
    slug: "banda-modular-plana-paso-127",
    categoriaSlug: "bandas-modulares",
    categoriaNombre: "Bandas Modulares",
    nombre: "Banda Modular Plana Paso 12,7 mm",
    descripcion:
      "Sistema modular plano de paso 12,7 mm en polipropileno. Reemplazo por tramo, sin necesidad de empalme.",
    descripcionLarga:
      "Banda modular de plástico inyectado con eslabones intercambiables. El sistema de fácil desenganche permite reemplazar secciones dañadas sin retirar toda la banda. Disponible en múltiples colores para identificación de línea. Compatible con guías laterales y perfiles de chasis estándar.",
    especificaciones: [
      { label: "Material", valor: "Polipropileno (PP) / Acetal (POM)" },
      { label: "Paso", valor: "12,7 mm" },
      { label: "Anchos disponibles", valor: "Modular — desde 100 mm" },
      { label: "Temperatura de trabajo", valor: "-10 °C a +90 °C" },
      { label: "Carga por tramo", valor: "Hasta 300 kg/m" },
      { label: "Colores", valor: "Blanco, negro, azul, gris, verde" },
    ],
    aplicaciones: [
      "Líneas de embotellado y packaging",
      "Industria cervecera y bebidas",
      "Enlatado y conservas",
      "Líneas de producción con curvas",
    ],
    tags: ["Modular", "Paso 12,7", "PP"],
    color: "indigo",
  },
  {
    id: "bm-002",
    slug: "banda-modular-perforada-paso-25",
    categoriaSlug: "bandas-modulares",
    categoriaNombre: "Bandas Modulares",
    nombre: "Banda Modular Perforada Paso 25,4 mm",
    descripcion:
      "Banda modular perforada de paso 25,4 mm. Permite drenaje y circulación de aire para procesos de lavado y secado.",
    descripcionLarga:
      "Con perforaciones del 25% al 50% de la superficie, esta banda permite el drenaje eficiente de líquidos y la circulación de aire caliente o frío. Ideal para procesos de lavado, escaldado y enfriamiento. Disponible en versión antiestática para industrias sensibles.",
    especificaciones: [
      { label: "Material", valor: "Polipropileno (PP) / Polietileno (PE)" },
      { label: "Paso", valor: "25,4 mm" },
      { label: "Perforación libre", valor: "25% / 50%" },
      { label: "Temperatura de trabajo", valor: "-10 °C a +110 °C" },
      { label: "Resistencia química", valor: "Ácidos, álcalis, aceites" },
    ],
    aplicaciones: [
      "Lavado y escaldado de vegetales",
      "Enfriamiento de piezas metálicas",
      "Secado por convección",
      "Industria pesquera",
    ],
    tags: ["Perforada", "Drenaje", "Paso 25,4"],
    color: "indigo",
  },

  // ─── Bandas de Poliuretano ───
  {
    id: "bp-001",
    slug: "banda-poliuretano-redonda",
    categoriaSlug: "bandas-poliuretano",
    categoriaNombre: "Bandas de Poliuretano",
    nombre: "Banda de Poliuretano Redonda",
    descripcion:
      "Banda redonda de poliuretano para rodillos y sistemas de clasificación. Alta elasticidad y resistencia al desgaste.",
    descripcionLarga:
      "Fabricada en poliuretano termoplástico (TPU) de alta elasticidad. Se ensambla en frío mediante empalme soldado. Sin mantenimiento. Resistente a aceites, grasas y disolventes comunes. Su sección circular permite el contacto preciso con rodillos de fricción.",
    especificaciones: [
      { label: "Material", valor: "Poliuretano (TPU 92 ShA)" },
      { label: "Diámetros", valor: "3 mm / 5 mm / 8 mm / 10 mm / 12 mm" },
      { label: "Elongación", valor: "Hasta 450%" },
      { label: "Temperatura de trabajo", valor: "-30 °C a +80 °C" },
      { label: "Colores", valor: "Verde, amarillo, naranja, blanco" },
      { label: "Empalme", valor: "Soldado en caliente o con clips" },
    ],
    aplicaciones: [
      "Clasificadoras ópticas de frutas y verduras",
      "Sistemas de rodillos de fricción",
      "Mesas de inspección",
      "Industria gráfica",
    ],
    tags: ["TPU", "Redonda", "Elasticidad"],
    color: "violet",
  },
  {
    id: "bp-002",
    slug: "banda-poliuretano-plana",
    categoriaSlug: "bandas-poliuretano",
    categoriaNombre: "Bandas de Poliuretano",
    nombre: "Banda de Poliuretano Plana",
    descripcion:
      "Banda plana de poliuretano para transmisión ligera y transporte de precisión. Mínima elongación bajo carga.",
    descripcionLarga:
      "Fabricada con núcleo de poliéster de alta tenacidad recubierto de poliuretano. Ofrece transmisión de potencia con mínimo deslizamiento y alta precisión de posicionamiento. Disponible en superficie lisa o rugosa.",
    especificaciones: [
      { label: "Material", valor: "Poliuretano + alma de poliéster" },
      { label: "Anchos", valor: "10 mm — 300 mm" },
      { label: "Espesores", valor: "1 mm / 1,5 mm / 2 mm / 3 mm" },
      { label: "Temperatura máx.", valor: "+80 °C" },
      { label: "Elongación bajo carga", valor: "< 0,5%" },
      { label: "Superficie", valor: "Lisa / Rugosa 2S / Rugosa 4S" },
    ],
    aplicaciones: [
      "Industria gráfica y papelera",
      "Máquinas de embalaje",
      "Equipamiento médico",
      "Aplicaciones de alta precisión",
    ],
    tags: ["Plana", "Precisión", "Baja elongación"],
    color: "violet",
  },

  // ─── Correas de Transmisión ───
  {
    id: "ct-001",
    slug: "correa-trapecial-v-classical",
    categoriaSlug: "correas-transmision",
    categoriaNombre: "Correas de Transmisión",
    nombre: "Correa Trapezoidal en V — Classical (Z, A, B, C, D, E)",
    descripcion:
      "Correa en V clásica de perfiles Z a E. Solución universal para transmisión de potencia en todo tipo de maquinaria.",
    descripcionLarga:
      "Fabricadas en caucho sintético reforzado con cuerdas de poliéster o kevlar. Disponibles en los perfiles estándar internacionales (ISO 4184). Ideales para aplicaciones estándar donde el deslizamiento controlado es aceptable. Stock permanente de los perfiles más usados.",
    especificaciones: [
      { label: "Perfiles", valor: "Z / A / B / C / D / E" },
      { label: "Norma", valor: "ISO 4184 / DIN 2215" },
      { label: "Material", valor: "Caucho sintético + cuerda de poliéster" },
      { label: "Temperatura de trabajo", valor: "-30 °C a +70 °C" },
      { label: "Longitudes", valor: "Según perfil — consultar tabla" },
    ],
    aplicaciones: [
      "Bombas de agua y compresores",
      "Molinos y trituradoras",
      "Ventiladores industriales",
      "Maquinaria agrícola",
    ],
    tags: ["Trapezoidal", "Classical", "Universal"],
    color: "cyan",
  },
  {
    id: "ct-002",
    slug: "correa-dentada-sincronica-htd",
    categoriaSlug: "correas-transmision",
    categoriaNombre: "Correas de Transmisión",
    nombre: "Correa Dentada Sincrónica — HTD (3M, 5M, 8M, 14M)",
    descripcion:
      "Correa sincrónica de perfil HTD para transmisión sin deslizamiento. Posicionamiento exacto y sin lubricación.",
    descripcionLarga:
      "Fabricada en neopreno o poliuretano con dientes de perfil curvilíneo HTD. La transmisión sincrónica elimina el deslizamiento y garantiza una relación de transmisión exacta. No requiere lubricación. Disponible en versión reforzada con fibra de carbono para cargas extremas.",
    especificaciones: [
      { label: "Perfiles HTD", valor: "3M / 5M / 8M / 14M" },
      { label: "Material", valor: "Neopreno / Poliuretano + fibra de vidrio" },
      { label: "Anchos", valor: "6 mm — 115 mm" },
      { label: "Temperatura de trabajo", valor: "-30 °C a +100 °C" },
      { label: "Norma", valor: "ISO 5296" },
      { label: "Deslizamiento", valor: "0% (sincrónica)" },
    ],
    aplicaciones: [
      "Servomotores y CNC",
      "Robótica e impresoras 3D",
      "Máquinas de embalaje y etiquetado",
      "Equipos médicos y de laboratorio",
    ],
    tags: ["HTD", "Sincrónica", "Sin deslizamiento"],
    color: "cyan",
  },
  {
    id: "ct-003",
    slug: "correa-plana-transmision",
    categoriaSlug: "correas-transmision",
    categoriaNombre: "Correas de Transmisión",
    nombre: "Correa Plana de Transmisión",
    descripcion:
      "Correa plana de poliamida o cuero para alta velocidad y transmisión suave. Baja vibración y ruido reducido.",
    descripcionLarga:
      "Las correas planas son ideales cuando se requiere alta velocidad periférica y suavidad de marcha. Fabricadas en poliamida con recubrimiento de cromo o caucho. Empalme por clips metálicos o por vulcanización. Pueden trabajar con pequeños diámetros de polea.",
    especificaciones: [
      { label: "Material", valor: "Poliamida + cromo / Poliamida + caucho" },
      { label: "Anchos", valor: "20 mm — 500 mm" },
      { label: "Espesores", valor: "0,8 mm / 1,2 mm / 1,9 mm / 2,8 mm" },
      { label: "Velocidad máx.", valor: "Hasta 80 m/s" },
      { label: "Temperatura máx.", valor: "+100 °C" },
    ],
    aplicaciones: [
      "Rectificadoras y tornos de alta velocidad",
      "Industria textil",
      "Industria papelera",
      "Compresores de alta velocidad",
    ],
    tags: ["Plana", "Alta velocidad", "Poliamida"],
    color: "cyan",
  },

  // ─── Accesorios ───
  {
    id: "ac-001",
    slug: "empalme-mecanico-flexco",
    categoriaSlug: "accesorios",
    categoriaNombre: "Accesorios y Repuestos",
    nombre: "Empalme Mecánico Flexco",
    descripcion:
      "Grapas de empalme para bandas PVC, caucho y plástico. Instalación rápida sin herramientas especiales.",
    descripcionLarga:
      "Los empalmes mecánicos Flexco permiten unir y reparar bandas sin necesidad de vulcanización. Disponibles en acero inoxidable para aplicaciones alimenticias. La instalación se realiza con un alicate de enganche estándar. Compatible con anchos de banda de 100 mm a 2.000 mm.",
    especificaciones: [
      { label: "Material", valor: "Acero galvanizado / Acero inoxidable 304" },
      { label: "Espesores de banda", valor: "2 mm — 12 mm" },
      { label: "Anchos de banda", valor: "100 mm — 2.000 mm" },
      { label: "Modelos", valor: "R2, R5, R9, 250, 325, 425" },
      { label: "Temperatura máx.", valor: "+120 °C" },
    ],
    aplicaciones: [
      "Reparación de emergencia de bandas",
      "Unión de bandas sin espacio para vulcanizar",
      "Aplicaciones alimenticias (AISI 304)",
    ],
    tags: ["Flexco", "Empalme", "AISI 304"],
    color: "orange",
  },
  {
    id: "ac-002",
    slug: "tensor-de-banda",
    categoriaSlug: "accesorios",
    categoriaNombre: "Accesorios y Repuestos",
    nombre: "Tensores y Soportes de Rodillos",
    descripcion:
      "Sistema completo de tensores ajustables y soportes de rodillos para bandas transportadoras.",
    descripcionLarga:
      "Los tensores permiten mantener la tensión correcta de la banda durante toda su vida útil, compensando el estiramiento inicial y el desgaste. Disponibles en versiones de tornillo, resorte y automáticos. Los soportes de rodillos en acero galvanizado o inoxidable para todos los anchos estándar.",
    especificaciones: [
      { label: "Tipos", valor: "Tornillo / Resorte / Automático" },
      { label: "Material", valor: "Acero galvanizado / AISI 304" },
      { label: "Recorrido de tensado", valor: "50 mm — 300 mm" },
      { label: "Anchos de banda", valor: "200 mm — 2.000 mm" },
      { label: "Carga máx.", valor: "Hasta 5.000 N" },
    ],
    aplicaciones: [
      "Transportadores de longitud media y larga",
      "Aplicaciones con variación de carga",
      "Instalaciones con alta humedad",
    ],
    tags: ["Tensor", "Rodillos", "Ajustable"],
    color: "orange",
  },
];

export function getProducto(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}

export function getProductosPorCategoria(categoriaSlug: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoriaSlug === categoriaSlug);
}

export function getCategoria(slug: string): Categoria | undefined {
  return CATEGORIAS.find((c) => c.slug === slug);
}

export const COLOR_MAP: Record<string, {
  bg: string; text: string; ring: string; tag: string; badge: string; glow: string;
}> = {
  blue:   { bg: "bg-blue-500/10",   text: "text-blue-400",   ring: "ring-blue-500/20",   tag: "bg-blue-500/10 text-blue-300",   badge: "bg-blue-500/20 text-blue-300",   glow: "shadow-blue-500/20" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", ring: "ring-indigo-500/20", tag: "bg-indigo-500/10 text-indigo-300", badge: "bg-indigo-500/20 text-indigo-300", glow: "shadow-indigo-500/20" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", ring: "ring-violet-500/20", tag: "bg-violet-500/10 text-violet-300", badge: "bg-violet-500/20 text-violet-300", glow: "shadow-violet-500/20" },
  cyan:   { bg: "bg-cyan-500/10",   text: "text-cyan-400",   ring: "ring-cyan-500/20",   tag: "bg-cyan-500/10 text-cyan-300",   badge: "bg-cyan-500/20 text-cyan-300",   glow: "shadow-cyan-500/20" },
  teal:   { bg: "bg-teal-500/10",   text: "text-teal-400",   ring: "ring-teal-500/20",   tag: "bg-teal-500/10 text-teal-300",   badge: "bg-teal-500/20 text-teal-300",   glow: "shadow-teal-500/20" },
  green:  { bg: "bg-green-500/10",  text: "text-green-400",  ring: "ring-green-500/20",  tag: "bg-green-500/10 text-green-300",  badge: "bg-green-500/20 text-green-300",  glow: "shadow-green-500/20" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", ring: "ring-yellow-500/20", tag: "bg-yellow-500/10 text-yellow-300", badge: "bg-yellow-500/20 text-yellow-300", glow: "shadow-yellow-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", ring: "ring-orange-500/20", tag: "bg-orange-500/10 text-orange-300", badge: "bg-orange-500/20 text-orange-300", glow: "shadow-orange-500/20" },
};
