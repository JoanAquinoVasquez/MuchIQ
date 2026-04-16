import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-lg border border-white/20' : ''}`}>
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary p-1.5 rounded-lg shadow-lg group-hover:rotate-12 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">MuchIQ</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Visión</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Tecnología</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest pointer-events-none opacity-30 text-muted-foreground line-through">Comunidad</a>
          </div>

          <button className="bg-foreground text-background text-xs font-black px-6 py-2.5 rounded-full hover:scale-105 transition-all active:scale-95">
            JOIN WAITLIST
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
