export interface ProductModel {
  name: string;
  description: string;
  applications?: string[];
}

export interface ProductCatalog {
  name: string;
  url: string;
  description?: string;
}

export interface ProductVideo {
  title: string;
  youtubeId: string;
}

export interface ProductoDetalle {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  brand?: string;
  brandDescription?: string;
  models: ProductModel[];
  catalogs: ProductCatalog[];
  videos: ProductVideo[];
  industries?: string[];
}

export const WHATSAPP_NUMBER = "5491147175151";

export const productos: ProductoDetalle[] = [
  {
    slug: "bandas-transportadoras",
    name: "Bandas Transportadoras y de Proceso",
    shortDescription: "Para industria alimenticia, logística y manufactura. Alta resistencia, fácil higienización y larga vida útil.",
    fullDescription: "Somos distribuidores oficiales de YONGLI en Argentina. Nuestras bandas transportadoras y de proceso están fabricadas 100% libres de solventes, con materiales de alta performance adaptables a cada necesidad industrial. Cubrimos desde la industria alimenticia hasta logística, manufactura, electrónica y más.",
    heroImage: "/images/productos/transportadoras-header.jpg",
    brand: "Yongli",
    brandDescription: "Fabricante líder mundial de bandas transportadoras con certificaciones para industria alimenticia (FDA/EU) y logística.",
    models: [
      {
        name: "Bandas de PVC",
        description: "Alta resistencia a grasas, aceites, químicos y temperaturas hasta 110°C. Disponibles en múltiples revestimientos y espesores.",
        applications: ["Industria láctea", "Bebidas", "Agricultura"],
      },
      {
        name: "Bandas de Poliuretano",
        description: "Permiten giros en filo de cuchilla, estabilidad lateral y cobertura antibacterial. Óptimas para procesos que requieren precisión.",
        applications: ["Logística", "Neumático", "Automotriz"],
      },
      {
        name: "Bandas de Silicona",
        description: "Recubrimiento en 1 y 2 telas, con propiedades antiadherentes. Rango de temperatura de -40°C a +150°C.",
        applications: ["Industria del dulce", "Altas temperaturas"],
      },
      {
        name: "Bandas Tejidas Sin Recubrimiento",
        description: "Doble impregnación de poliuretano para mayor resistencia. Ideales para panificados industriales y neumático.",
        applications: ["Panificados", "Neumático"],
      },
      {
        name: "Bandas de Poliolefina",
        description: "Atóxicas, con cumplimiento de normativa FDA y UE. Especiales para industria del tabaco y alimenticia de alta exigencia.",
        applications: ["Tabaco", "Alimenticia FDA/EU"],
      },
      {
        name: "Accesorios para Bandas",
        description: "Perfiles guías trapezoidales en PVC y poliuretano, tacos de arrastre por alta frecuencia y bordes laterales ondulados de 30-50 mm.",
        applications: ["Guías", "Perfiles", "Bordes"],
      },
    ],
    catalogs: [
      { name: "Yongli Logistics 2025", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/YONGLI-Logistics-2025.pdf", description: "Soluciones para logística y distribución" },
      { name: "Bakery 2025", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/Bakery-2025.pdf", description: "Industria panadera" },
      { name: "Yongli Electronics 2025", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/YONGLI-Electronics-2025.pdf", description: "Electrónica y manufactura" },
      { name: "Yongli Airport EN 2025", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/YONGLI-Airport-EN-2025.pdf", description: "Aeropuertos y handling" },
      { name: "Sport 2025", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/Sport-2025.pdf", description: "Equipamiento deportivo" },
      { name: "Wood EU 2025", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/Wood-EU-2025.pdf", description: "Industria maderera" },
      { name: "Yongli Top Cover Profiles", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/YONGLI-Top-Cover-Profiles-2025.pdf", description: "Perfiles de superficie" },
      { name: "Brochure Non-Woven 2025", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/Brochure-non-woven-2025.pdf", description: "No tejidos" },
      { name: "Brochure Printing Blanket", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/Brochure-printing-blanket-2025.pdf", description: "Impresión" },
      { name: "Corporate Brochure 2025", url: "https://www.bandax.com/nuevo/wp-content/uploads/2025/12/Corporate-2025-EN.pdf", description: "Brochure corporativo Yongli" },
    ],
    videos: [],
    industries: ["Alimenticia", "Logística", "Manufactura", "Automotriz", "Neumático", "Electrónica"],
  },
  {
    slug: "bandas-modulares",
    name: "Bandas Plásticas Modulares",
    shortDescription: "Sistema modular de fácil reemplazo por tramo. Ideal para líneas de producción con curvas y elevaciones.",
    fullDescription: "Las bandas modulares plásticas de Bandax ofrecen un sistema de reemplazo por tramos individuales, lo que reduce tiempos de parada y costos de mantenimiento. Aptas para aplicaciones en frío, curvas, elevaciones y procesos de limpieza intensivos.",
    heroImage: "/images/productos/modulares-header.jpg",
    brand: "ScanBelt",
    brandDescription: "Fabricante europeo especializado en bandas modulares plásticas para industria alimenticia y logística.",
    models: [
      {
        name: "S101 de Polipropileno Azul",
        description: "Banda radial modular doble línea. Mantiene posición durante curvas para rebanado automático. Permite enfriar y transportar panes de hamburguesas y productos similares.",
        applications: ["Panificados", "Rebanado automático", "Enfriado"],
      },
      {
        name: "S101 POM Azul",
        description: "Sistema de baja fricción antiadherente con giro freezer radial. Especial para congelado y transporte de langostinos y mariscos.",
        applications: ["Congelado", "Empaque", "Mariscos"],
      },
      {
        name: "S.50-808 Easy Clean",
        description: "Sistema bermellón para fritador de papas bastón. Material resistente al impacto que soporta cortes repetitivos con fácil limpieza.",
        applications: ["Fritura", "Corte", "Procesamiento"],
      },
      {
        name: "S.25-800",
        description: "Diseñadas para productos empacados en finales de línea. Fáciles de limpiar y resistentes a la abrasión, mantienen el engranaje ideal para etiquetado.",
        applications: ["Finales de línea", "Empaque", "Etiquetado"],
      },
    ],
    catalogs: [
      { name: "ScanBelt Brochure", url: "https://www.bandax.com/old/wp-content/uploads/2017/02/SCANBELT-Brochure.pdf", description: "Brochure general de productos ScanBelt" },
      { name: "Catálogo Técnico ScanBelt", url: "https://www.bandax.com/old/wp-content/uploads/2017/02/SCANBELT-CatalogoTecnico.pdf", description: "Especificaciones técnicas completas" },
      { name: "Industria Pesquera", url: "https://www.bandax.com/old/wp-content/uploads/2017/02/SCANBELT-SeafoodIndustry.pdf", description: "Aplicaciones en industria pesquera y mariscos" },
    ],
    videos: [
      { title: "Correas modulares para procesos de transporte", youtubeId: "Ac6Yqu58BdA" },
      { title: "Aplicaciones en industria pesquera", youtubeId: "gkZQ8vR78wc" },
      { title: "Procesamiento de mariscos", youtubeId: "ERqqq6WHMKU" },
    ],
    industries: ["Alimenticia", "Pesquera", "Logística", "Empaque"],
  },
  {
    slug: "bandas-poliuretano",
    name: "Bandas de Poliuretano",
    shortDescription: "Alta resistencia química y mecánica. Perfectas para entornos húmedos, aceites y temperaturas extremas.",
    fullDescription: "Las bandas de poliuretano Gates Mectrol combinan resistencia química, mecánica y antibacterial en un solo producto. Son la elección preferida para industrias que requieren máxima higiene y durabilidad bajo condiciones exigentes.",
    heroImage: "/images/productos/poliuretano-header.jpg",
    brand: "Gates Mectrol",
    brandDescription: "División de Gates especializada en bandas de poliuretano para la industria alimenticia y de proceso.",
    models: [
      {
        name: "Bandas para Contacto Directo con Alimentos",
        description: "Diseñadas para reducir el riesgo de contaminación microbiana. Ideales para el transporte de carne molida y productos cárnicos.",
        applications: ["Carne", "Procesamiento de alimentos"],
      },
      {
        name: "Bandas de Tracción Positiva",
        description: "Construcción con dientes que mejoran la distribución del torque, con refuerzos de Kevlar® para mayor durabilidad.",
        applications: ["Transporte a granel", "Alimentos"],
      },
      {
        name: "Bandas Drenadoras",
        description: "Fabricadas con uretano grado Éter que mejora la resistencia al agua. Perfectas para el transporte de frutas y verduras que requieren drenaje.",
        applications: ["Frutas", "Verduras", "Drenaje"],
      },
      {
        name: "Bandas con Empujadores y Bordes Ondulados",
        description: "Permiten transportar productos en planos inclinados sin que resbalen. Especiales para pastas frescas y productos delicados.",
        applications: ["Pastas frescas", "Planos inclinados"],
      },
      {
        name: "Transportadores Acanalados",
        description: "Para equipos de más de 1,5 metros. Diseño acanalado que facilita la limpieza profunda y el transporte de pastas frescas.",
        applications: ["Pastas frescas", "Fácil limpieza"],
      },
      {
        name: "Sistema de Grampas PosiLace",
        description: "Alternativa mecánica al empalme en caliente. Permite armado y desarmado rápido sin herramientas especiales.",
        applications: ["Empalme mecánico", "Mantenimiento rápido"],
      },
    ],
    catalogs: [
      { name: "GatesMectrol Food Belt Overview", url: "https://www.bandax.com/old/wp-content/uploads/2017/04/GatesMectrol_FoodBelt_OverviewBrochure_SpanishV2.pdf", description: "Brochure en español de bandas alimenticias" },
      { name: "Catálogo Técnico Mectrol", url: "https://www.bandax.com/old/wp-content/uploads/2017/02/MECTROL-CatalogoTecnico.pdf", description: "Especificaciones técnicas completas" },
      { name: "TPU Food Belting", url: "https://www.bandax.com/nuevo/wp-content/uploads/2020/09/TPU_Food-Belting.pdf", description: "Bandas TPU para alimentación" },
      { name: "Food Conveying Belt Catalog 2020", url: "https://www.bandax.com/nuevo/wp-content/uploads/2021/06/food-conveying-belt-catalog-2020_07_09.pdf", description: "Catálogo completo de bandas alimenticias" },
    ],
    videos: [],
    industries: ["Alimenticia", "Cárnica", "Frutas y verduras", "Procesamiento de alimentos"],
  },
  {
    slug: "correas-planas",
    name: "Correas de Transmisión Planas",
    shortDescription: "Transmisión de potencia eficiente con mínima vibración. Disponibles en múltiples anchos y largos.",
    fullDescription: "Somos distribuidores exclusivos de NITTA Corporation para Argentina. Las correas planas de transmisión NITTA son reconocidas mundialmente por su alta resistencia al desgarre, la abrasión y las sobrecargas, con aplicaciones especiales en industrias gráfica, papelera y textil.",
    heroImage: "/images/productos/correas-planas-header.jpg",
    brand: "Nitta",
    brandDescription: "Nitta Corporation es un fabricante japonés líder en correas de transmisión planas con presencia global en las industrias gráfica, papelera y textil.",
    models: [
      {
        name: "Correas para Industria Gráfica",
        description: "Alta resistencia al desgarre, abrasión y sobrecargas. Compatibles con rotativas, offset, stackers, plegadoras y encuadernadoras.",
        applications: ["Rotativas", "Offset", "Plegadora", "Encuadernadora"],
      },
      {
        name: "Correas para Plegadoras/Pegadoras",
        description: "Disponibles en espesores de 3, 4 y 6 mm con caucho especialmente formulado para el proceso de pegado de cartón.",
        applications: ["Plegadoras", "Pegadoras de cartón"],
      },
      {
        name: "Correas para Formadoras de Tubos",
        description: "Espesores de 3 y 4 mm. El compuesto resiste hasta 5 veces más al desgarre que las correas convencionales.",
        applications: ["Formadoras de tubos", "Empaques"],
      },
      {
        name: "Correas para Bobinadoras/Desbobinadoras",
        description: "Disponibles cerradas sin fin, con extremos preparados o con empalme en planta para mayor versatilidad operativa.",
        applications: ["Bobinadoras", "Desbobinadoras"],
      },
      {
        name: "Correas para Offset",
        description: "Servicio de empalme en planta y entrega express en 24 hs. Mínima vibración para impresión de alta calidad.",
        applications: ["Impresión offset", "Entrega 24hs"],
      },
      {
        name: "Correas para Industria del Cartón",
        description: "Superficie rugosa y coeficiente de fricción estable para el manejo de cajas y cartón corrugado.",
        applications: ["Cartón corrugado", "Packaging"],
      },
    ],
    catalogs: [
      { name: "Catálogo General Nitta", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/General_Catalog_U-GC-21.pdf", description: "Catálogo completo de productos Nitta" },
      { name: "Impresión y Encuadernación", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/Printing_and_Boobinding_industry_B-PA-05E_PD_1.58MB.pdf", description: "Soluciones para artes gráficas" },
      { name: "Cajas Corrugadas", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/B-CA-08E.pdf", description: "Industria del cartón corrugado" },
      { name: "Industria Textil", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/Textile_Brochure.pdf", description: "Soluciones para la industria textil" },
      { name: "Diarios y Revistas", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/newspaper.pdf", description: "Industria periodística" },
      { name: "Papel Tissue", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/Tissue_Industry.pdf", description: "Industria del papel tissue" },
      { name: "Polybelt para Impresión", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/Polybelt-for-Printing.pdf", description: "Correas Polybelt para artes gráficas" },
      { name: "Correas para Formadoras de Tubos", url: "https://www.bandax.com/nuevo/wp-content/uploads/2020/08/Correas_para_Formadoras_de_Tubos_-esp.pdf", description: "Soluciones para formadoras de tubos" },
      { name: "Kit PolySprint", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/Nitta-Polysprint-Toolkit.pdf", description: "Herramientas de empalme PolySprint" },
      { name: "Cuestionario Técnico", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/Cuestionario-Correas.pdf", description: "Formulario de especificaciones técnicas" },
    ],
    videos: [
      { title: "Nitta Corporation of America", youtubeId: "a-jDYKkd8vQ" },
    ],
    industries: ["Gráfica", "Papelera", "Textil", "Cartón", "Packaging"],
  },
  {
    slug: "grampas",
    name: "Sistemas de Sujeción y Fijación",
    shortDescription: "Conectores, grapas y empalmes para bandas de todo tipo. Repuestos originales con entrega inmediata.",
    fullDescription: "Las soluciones mecánicas de empalme de Bandax son la alternativa ideal al empalme en caliente. Ofrecemos grampas plásticas y metálicas —inoxidables y galvanizadas— con instalación sencilla y capacidad de autorreparación que reduce tiempos de parada en planta.",
    heroImage: "/images/productos/grampas-header.jpg",
    brand: "Alligator · Clipper · Novitool",
    brandDescription: "Marcas líderes mundiales en sistemas de empalme mecánico para bandas transportadoras de todo tipo.",
    models: [
      {
        name: "Grampas Clipper Plásticas",
        description: "Solución económica y de fácil instalación para bandas livianas. Disponibles en diferentes tamaños para distintos espesores de banda.",
        applications: ["Bandas livianas", "Alimenticia", "General"],
      },
      {
        name: "Alligator Staple Gold Class Plus",
        description: "Sistema de empalme metálico de alta resistencia con herramienta dedicada. Para bandas de alto tonelaje y aplicaciones industriales exigentes.",
        applications: ["Alta resistencia", "Industria pesada"],
      },
      {
        name: "Prensa Novitool® Aero®",
        description: "Prensa portátil neumática para instalación rápida y precisa de grampas. Reduce el tiempo de empalme y garantiza resultados uniformes.",
        applications: ["Empalme rápido", "Portátil", "Neumática"],
      },
    ],
    catalogs: [],
    videos: [],
    industries: ["Panificadoras", "Aeropuertos", "Logística", "Neumático", "Automotriz", "Textil"],
  },
  {
    slug: "correas-posicionamiento",
    name: "Correas Dentadas / Sincrónicas",
    shortDescription: "Transmisión sincrónica sin deslizamiento. Para aplicaciones que requieren posicionamiento exacto.",
    fullDescription: "Las correas dentadas Gates TPU de poliuretano ofrecen transmisión sincrónica sin deslizamiento, con pasos disponibles desde T2.5 hasta XH. Fabricadas con poliuretano de gran resistencia y refuerzos de acero o Kevlar, son ideales para aplicaciones de posicionamiento lineal de alta precisión.",
    heroImage: "/images/productos/transmision-header.jpg",
    brand: "Gates",
    brandDescription: "Gates Corporation, líder mundial en transmisión de potencia, ofrece correas dentadas de poliuretano para aplicaciones de alta precisión.",
    models: [
      {
        name: "Pasos Métricos — T y AT",
        description: "Disponibles en pasos T2.5, T5, T10, T20, AT3, AT5, AT10 y AT20. Anchos hasta 450 mm, velocidades hasta 60 m/s. Configuración abierta o cerrada sin fin.",
        applications: ["Posicionamiento lineal", "Automatización"],
      },
      {
        name: "Pasos Industriales — 3M a 14M",
        description: "Pasos 3M, 5M, 8M, 14M, S5M y S8M para aplicaciones de mayor carga. Refuerzos de acero o Kevlar según requerimiento.",
        applications: ["Transmisión industrial", "Alta carga"],
      },
      {
        name: "Pasos Pulgadas — XL, L, H, XH",
        description: "Pasos MXL, XL, L, H y XH para compatibilidad con maquinaria estándar americana. Todos disponibles con o sin recubrimiento.",
        applications: ["Maquinaria americana", "Estándar imperial"],
      },
      {
        name: "Recubrimientos Especiales",
        description: "Las correas admiten múltiples recubrimientos: caucho natural, PVC, poliuretano en distintas durezas (75°-92° Shore A), silicona y antiestático.",
        applications: ["Antiestático", "Silicona", "PVC"],
      },
    ],
    catalogs: [],
    videos: [],
    industries: ["Automatización", "CNC", "Manufactura", "Electrónica", "Robótica"],
  },
  {
    slug: "correas-transmision",
    name: "Correas Trapezoidales en V",
    shortDescription: "La solución clásica para transmisión de potencia. Disponibles en todos los perfiles estándar.",
    fullDescription: "Somos distribuidores Gates para Argentina. Nuestras correas trapezoidales en V abarcan desde los modelos clásicos según normas DIN/ISO hasta los de alta performance como Rib Ace y Super Torque, cubriendo todas las necesidades de transmisión de potencia en industria y agro.",
    heroImage: "/images/productos/transmision-03.jpg",
    brand: "Gates",
    brandDescription: "Gates Corporation, el estándar de la industria en correas de transmisión de potencia por más de 100 años.",
    models: [
      {
        name: "Rib Ace",
        description: "Correa de espesor reducido con flexibilidad particularmente alta. Relaciones de transmisión de hasta 40:1, bajo nivel de ruido. Supera en más del 50% el rendimiento de correas convencionales.",
        applications: ["Alta eficiencia", "Bajo ruido", "Compacto"],
      },
      {
        name: "Super Torque — STS y HPS",
        description: "Diseñadas para exigencias muy altas en transmisión de potencia, funcionamiento y precisión. Las líneas STS y HPS son la elección para aplicaciones críticas.",
        applications: ["Alta potencia", "Precisión", "Aplicaciones críticas"],
      },
      {
        name: "Power Ace",
        description: "Correas angostas que ocupan menos espacio que los modelos clásicos y ofrecen mayor capacidad de transmisión mediante perfiles optimizados y materiales de alta calidad.",
        applications: ["Compacto", "Alta capacidad"],
      },
      {
        name: "Clásicas — DIN 2215 / ISO 4184",
        description: "Correas trapezoidales estándar conforme a normas DIN 2215 e ISO 4184. Aplicables a distintos sectores industriales y agrícolas con total interoperabilidad.",
        applications: ["Industrial", "Agrícola", "Estándar DIN/ISO"],
      },
    ],
    catalogs: [
      { name: "Industrial Power Transmission Vol. 2", url: "https://www.bandax.com/nuevo/wp-content/uploads/2020/08/BUI-1009_IPTP_catalog_Vol_2_9-17.pdf", description: "Catálogo completo de transmisión industrial Gates" },
      { name: "Manual de Diseño Trapezoidal", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/bu-143manual.pdf", description: "Manual técnico de diseño y selección" },
      { name: "Instalación y Mantenimiento", url: "https://www.bandax.com/nuevo/wp-content/uploads/2023/02/Instalacion-y-Mantenimiento.pdf", description: "Guía de instalación y mantenimiento" },
      { name: "Metric V Belts", url: "https://www.bandax.com/nuevo/wp-content/uploads/2020/08/1466_BUI-1000_Metric-V-Belts-v2.pdf", description: "Correas trapezoidales métricas" },
      { name: "HP HTS 8M", url: "https://www.bandax.com/nuevo/wp-content/uploads/2020/08/154_HP-HTS-8M-brochure_2016-08-02.pdf", description: "Correas HTS serie 8M" },
      { name: "Ceptor-X Outline", url: "https://www.bandax.com/nuevo/wp-content/uploads/2020/08/1490_BUI-1052_Ceptor-X-S8M-S14M_20190606_outlines.pdf", description: "Ceptor-X S8M/S14M" },
    ],
    videos: [],
    industries: ["Industrial general", "Agrícola", "Minería", "Construcción", "Ventilación"],
  },
  {
    slug: "accesorios",
    name: "Accesorios y Repuestos",
    shortDescription: "Poleas, tensores, rodamientos y accesorios para el mantenimiento completo de su línea de producción.",
    fullDescription: "Bandax cuenta con un completo stock de accesorios y repuestos para mantener su línea de producción en funcionamiento. Poleas, tensores, rodamientos, perfiles guía y todo lo necesario para el mantenimiento preventivo y correctivo de sistemas de transporte y transmisión.",
    heroImage: "/images/productos/transmision-02.jpg",
    models: [
      {
        name: "Poleas y Tambores",
        description: "Stock permanente de poleas motrices y tensoras para distintos anchos de banda. Disponibles en acero inoxidable y acero galvanizado.",
        applications: ["Reemplazo", "Actualización de línea"],
      },
      {
        name: "Tensores y Soportes",
        description: "Sistemas de tensado automático y manual para correas transportadoras y de transmisión. Facilitan el ajuste sin detener la línea.",
        applications: ["Tensado", "Ajuste en marcha"],
      },
      {
        name: "Rodamientos y Ejes",
        description: "Rodamientos de marcas líderes compatibles con los sistemas de transporte más comunes del mercado argentino.",
        applications: ["Reemplazo rápido", "Stock permanente"],
      },
    ],
    catalogs: [],
    videos: [],
    industries: ["Industrial general", "Mantenimiento preventivo"],
  },
];

export function getProducto(slug: string): ProductoDetalle | undefined {
  return productos.find((p) => p.slug === slug);
}
