import React from "react";
import { Bot, MapPin, Zap, Star } from "lucide-react";

const Vision = () => {
  const pillars = [
    {
      icon: Bot,
      title: "IA Ancestral",
      description: "Nuestra IA no solo guía, interpreta la historia de Lambayeque para ti."
    },
    {
      icon: MapPin,
      title: "Geolocalización 2.0",
      description: "Descubre lugares ocultos con la precisión que implementamos para el explorador moderno."
    },
    {
      icon: Zap,
      title: "Impacto Local",
      description: "Conectamos directamente con artesanos y negocios locales sin intermediarios."
    },
    {
      icon: Star,
      title: "Gamificación",
      description: "Gana recompensas reales mientras aprendes sobre la cultura Mochica."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-primary font-bold tracking-widest uppercase text-xs">Nuestro ADN</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Tecnología que <br /> respeta la historia.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
            Hemos desarrollado un ecosistema digital que pone el poder de Lambayeque en la palma de tu mano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {pillars.map((pillar, i) => (
            <div key={i} className="space-y-6 group animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <pillar.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
