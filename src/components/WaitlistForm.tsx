import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, ArrowRight, User, Mail } from "lucide-react";

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
}

export const WaitlistForm = ({ variant = 'hero' }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/waitlist/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(`¡Bienvenido ${name}! Revisa tu correo electrónico.`);
        setEmail('');
        setName('');
      } else {
        toast.error(data.message || "Algo salió mal. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Waitlist error:', error);
      toast.error("No pudimos conectar con el servidor. Inténtalo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex flex-col gap-4 w-full max-w-xl p-1 transition-all ${variant === 'hero' ? 'animate-fade-up' : ''}`}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Name Field */}
        <div className="relative flex-1 group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
            <User className="w-4 h-4" />
          </div>
          <Input
            type="text"
            placeholder="Tu nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-14 bg-white border-2 border-border/50 pl-12 pr-6 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 rounded-2xl transition-all shadow-sm group-hover:shadow-md"
            disabled={loading}
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative flex-1 group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </div>
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 bg-white border-2 border-border/50 pl-12 pr-6 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 rounded-2xl transition-all shadow-sm group-hover:shadow-md"
            disabled={loading}
            required
          />
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={loading}
        size="lg"
        className="h-14 px-8 bg-foreground hover:bg-foreground/90 text-background font-black rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 disabled:opacity-70 group"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Reservar mi lugar
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
      
      <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase text-center md:text-left px-2">
        Al registrarte, aceptas recibir actualizaciones exclusivas de MuchIQ.
      </p>
    </form>
  );
};

export default WaitlistForm;
