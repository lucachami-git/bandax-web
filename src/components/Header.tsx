"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CarritoBtn from "@/components/CarritoBtn";

const navLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#ventajas", label: "Ventajas" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const WHATSAPP = "https://wa.me/5491100000000?text=Hola%2C%20quisiera%20consultar%20sobre%20sus%20productos.";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-9 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-slate-700/80 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <Image
              src="/Bandax-Logo.png"
              alt="Bandax Argentina"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/tienda"
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Tienda
            </Link>
            <CarritoBtn />
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-400 px-4 py-2 text-sm font-semibold text-white transition-colors"
            >
              <Phone size={15} />
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <CarritoBtn />
            <button
              className="text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleNav}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/tienda"
              onClick={handleNav}
              className="rounded-lg px-4 py-3 text-base font-medium text-blue-400 hover:bg-slate-800 hover:text-white transition-colors"
            >
              Tienda →
            </Link>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-green-500 py-3 text-base font-semibold text-white"
            onClick={handleNav}
          >
            <Phone size={18} />
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
