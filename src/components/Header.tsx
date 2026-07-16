"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { href: "/productos/bandas-transportadoras", label: "Bandas Transportadoras y de Proceso" },
  { href: "/productos/bandas-modulares",       label: "Bandas Plásticas Modulares" },
  { href: "/productos/bandas-poliuretano",     label: "Bandas de Poliuretano" },
  { href: "/productos/correas-planas",         label: "Correas de Transmisión Planas" },
  { href: "/productos/grampas",                label: "Sistemas de Sujeción y Fijación" },
  { href: "/productos/correas-posicionamiento",label: "Correas Dentadas / Sincrónicas" },
  { href: "/productos/correas-transmision",    label: "Correas Trapezoidales en V" },
  { href: "/productos/accesorios",             label: "Accesorios y Repuestos" },
];

const navLinks = [
  { href: "/#ventajas",  label: "Ventajas" },
  { href: "/#nosotros",  label: "Nosotros" },
  { href: "/#faq",       label: "Preguntas frecuentes" },
  { href: "/#contacto",  label: "Contacto" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => { setOpen(false); setProductsOpen(false); };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">

          {/* Logo — siempre linkea al inicio */}
          <Link href="/" className="flex items-center shrink-0" onClick={closeMenu}>
            <Image
              src="/Bandax-Logo.png"
              alt="Bandax Argentina"
              width={170}
              height={58}
              className="h-12 lg:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">

            {/* Productos con dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 transition-colors">
                Productos
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown panel */}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 transition-all duration-200">
                <div className="rounded-2xl bg-white shadow-xl border border-slate-100 py-2 overflow-hidden">
                  {productLinks.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* ── Right: contacto + WhatsApp ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+541147175151"
              className="hidden xl:flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Phone size={13} />
              011 4717-5151
            </a>
            <a
              href="https://www.facebook.com/Bandax.SA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hidden xl:block text-slate-400 hover:text-slate-600 transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/bandax.sa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden xl:block text-slate-400 hover:text-slate-600 transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pb-6 pt-3 shadow-lg">

          {/* Productos accordion */}
          <button
            className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={() => setProductsOpen(!productsOpen)}
          >
            Productos
            <ChevronDown
              size={18}
              className={`text-slate-400 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {productsOpen && (
            <div className="ml-4 mb-1 flex flex-col">
              {productLinks.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          )}

          {/* Other nav */}
          <nav className="flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Contact row */}
          <div className="mt-3 flex items-center gap-4 px-4">
            <a href="tel:+541147175151" className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors">
              <Phone size={13} />
              011 4717-5151
            </a>
            <a href="https://www.facebook.com/Bandax.SA" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-slate-600 transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/bandax.sa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-slate-600 transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
