import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
}

const API_URL = '';

export const WaitlistForm = ({ variant = 'hero' }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Por favor ingresa un correo electrónico");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/waitlist/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("¡Bienvenido al equipo! Revisa tu correo electrónico.");
        setEmail('');
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
      className={`flex flex-col sm:flex-row gap-3 w-full max-w-lg p-1 transition-all ${variant === 'hero' ? 'animate-fade-up' : ''}`}
    >
      <div className="relative flex-1 group">
        <Input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-14 bg-white border-2 border-border/50 px-6 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 rounded-2xl transition-all shadow-sm group-hover:shadow-md"
          disabled={loading}
          required
        />
      </div>
      <Button 
        type="submit" 
        disabled={loading}
        size="lg"
        className="h-14 px-8 bg-foreground hover:bg-foreground/90 text-background font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 disabled:opacity-70 group"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Reservar mi lugar
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
};

export default WaitlistForm;
