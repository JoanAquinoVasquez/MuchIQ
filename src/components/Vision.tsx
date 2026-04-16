import React from "react";
import { Flag, Compass, Heart, Gem } from "lucide-react";

const Vision = () => {
  const pillars = [
    {
      icon: Flag,
      title: "Modelo Nacional",
      description: "Convertir a Lambayeque en el referente de turismo cultural y digital para todo el Perú."
    },
    {
      icon: Compass,
      title: "Identidad Viva",
      description: "Hacer que cada recorrido sea una forma de preservar y visibilizar nuestras raíces."
    },
    {
      icon: Heart,
      title: "Impacto Colectivo",
      description: "Asegurar que cada compra y visita impulse directamente la economía del artesano y el local."
    },
    {
      icon: Gem,
      title: "Destino Inteligente",
      description: "Un futuro sostenible donde la tecnología ayuda a ordenar y potenciar nuestro patrimonio."
    }
  ];

  return (
    <section id="vision" className="py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <p className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Nuestra Misión</p>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Raíces que <br />
              miran al <span className="text-gradient">futuro.</span> 
            </h2>
          </div>
          <div className="max-w-md">
             <p className="text-muted-foreground text-xl leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              "Ayúdennos a hacer de Lambayeque un destino inteligente y sostenible que inspire al resto del país."
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {pillars.map((pillar, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-muted/30 hover:bg-white border border-transparent hover:border-border/50 hover:shadow-2xl transition-all duration-500">
              <div className="space-y-8">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-foreground tracking-tight">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
