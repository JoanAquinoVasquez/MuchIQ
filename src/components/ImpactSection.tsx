import React from "react";
import { TrendingUp, Users, Heart, Leaf } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      title: "Impacto Económico",
      description: "Más ingresos directos para artesanos, restaurantes y emprendimientos locales de Lambayeque.",
      icon: TrendingUp,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Impacto Social",
      description: "Fomentamos una mayor participación de la comunidad en su propia cultura y patrimonio.",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Impacto Cultural",
      description: "Preservamos tradiciones y visibilizamos espacios arqueológicos poco conocidos.",
      icon: Heart,
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Sostenibilidad",
      description: "Distribución equilibrada de visitantes para evitar la saturación y promover ciudades ordenadas.",
      icon: Leaf,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <section id="impacto" className="py-32 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
          <div className="max-w-2xl space-y-6">
            <p className="text-primary font-black tracking-[0.3em] uppercase text-xs">Más que una App</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
              Transformando el flujo <br />
              <span className="text-gradient">en impacto real.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Lambayeque recibe 1.25 millones de visitantes anuales. MuchIQ llega para convertir ese potencial en beneficios para todos.
            </p>
          </div>
          
          <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 max-w-sm">
             <div className="space-y-4">
                <p className="text-4xl font-black text-primary">+37M</p>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Viajes internos anuales en Perú</p>
                <div className="h-1 w-full bg-primary/20 rounded-full" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Estamos ante un crecimiento imparable del turismo doméstico. MuchIQ es el puente hacia este nuevo mercado.
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, i) => (
            <div key={i} className="group p-10 rounded-[3rem] border border-border/50 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 bg-white">
              <div className="space-y-8">
                <div className={`w-14 h-14 ${impact.bg} ${impact.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  <impact.icon className="w-7 h-7" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-black tracking-tight text-foreground">{impact.title}</h4>
                  <p className="text-muted-foreground leading-relaxed font-medium">{impact.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
