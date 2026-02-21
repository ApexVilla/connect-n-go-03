import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/filcurv-logo.jpg";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Rutas", href: "#rutas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm border-b border-brand-border shadow-red" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Transporte FILCURV"
            className="h-12 w-12 rounded-full object-cover border-2 border-primary group-hover:border-brand-red-bright transition-colors duration-200"
          />
          <div className="hidden sm:block">
            <p className="font-condensed font-900 text-lg leading-none text-foreground tracking-wide">TRANSPORTE</p>
            <p className="font-condensed font-900 text-2xl leading-none text-gradient-red tracking-widest">FILCURV</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button desktop */}
        <a
          href="https://wa.me/584120726834"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 font-condensed font-700 text-sm tracking-widest uppercase rounded bg-gradient-red text-primary-foreground shadow-red hover:shadow-none transition-all duration-200 hover:scale-105"
        >
          WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-sm border-t border-brand-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-semibold tracking-widest uppercase text-muted-foreground hover:text-foreground border-b border-brand-border transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/584120726834"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 py-3 font-condensed font-700 text-sm tracking-widest uppercase rounded bg-gradient-red text-primary-foreground"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
