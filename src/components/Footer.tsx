const navProducts = [
  "Bandas Transportadoras",
  "Bandas Modulares",
  "Bandas de Poliuretano",
  "Correas de Transmisión",
  "Accesorios",
];

const navCompany = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ventajas", href: "#ventajas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP = "https://wa.me/5491100000000?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-lg">
                B
              </span>
              <span className="text-xl font-black tracking-tight text-white">
                BANDAX
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Soluciones industriales en bandas y correas de transmisión. Buenos
              Aires, Argentina.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 px-4 py-2 text-sm font-semibold text-green-400 transition-colors"
            >
              WhatsApp →
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Productos
            </h4>
            <ul className="flex flex-col gap-2">
              {navProducts.map((p) => (
                <li key={p}>
                  <a
                    href="#productos"
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2">
              {navCompany.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Contacto
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-500">
              <li>info@bandax.com</li>
              <li>Buenos Aires, Argentina</li>
              <li className="pt-1">
                Entrega local inmediata · Envíos a todo el país
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Bandax Argentina. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-slate-700">
            Bandas transportadoras · Correas de transmisión · Soluciones industriales
          </p>
        </div>
      </div>
    </footer>
  );
}
