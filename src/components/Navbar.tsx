import React, { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import logoMuchiq from "@/assets/icono_muchiq_landing.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const section = document.getElementById('waitlist-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Impacto", href: "#impacto" },
    { name: "Funciones", href: "#features" },
    { name: "Negocios", href: "#negocios" },
    { name: "Visión", href: "#vision" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 px-6 md:px-12 bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "py-8 px-6 md:px-12 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <img src={logoMuchiq} alt="MuchIQ" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tighter">MuchIQ</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={scrollToWaitlist}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-200 bg-foreground font-pj rounded-xl shadow-xl hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative flex items-center gap-2 uppercase tracking-widest text-[12px]">
              Unirse
              <Rocket className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-primary" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-6 animate-fade-in md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-black tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={scrollToWaitlist}
              className="w-full py-4 bg-foreground text-background font-black rounded-xl text-center uppercase tracking-widest"
            >
              Unirse Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
