import React from "react";
import { Trophy, BarChart3, Map, Smartphone } from "lucide-react";
import appPreview from "@/assets/app-preview.png";

const FeaturesDetail = () => {
  const features = [
    {
      title: "Explora Jugando",
      description: "Acumula puntos y gana recompensas reales: descuentos en restaurantes, entradas y más.",
      icon: Trophy,
      color: "bg-amber-500"
    },
    {
      title: "Rutas con IA y GPS",
      description: "Información en tiempo real y guías personalizados para una experiencia auténtica y premiada.",
      icon: Map,
      color: "bg-primary"
    },
    {
      title: "Métricas Inteligentes",
      description: "Para negocios: mide el retorno de inversión y el tráfico generado hacia tu local.",
      icon: BarChart3,
      color: "bg-secondary"
    },
    {
      title: "Visibilidad Total",
      description: "Convierte tu negocio u oferta artesanal en un punto clave del circuito turístico digital.",
      icon: Smartphone,
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* App Proof */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative z-20 w-full max-w-[340px] aspect-[9/19] bg-foreground rounded-[3.5rem] border-[10px] border-white shadow-2xl mx-auto overflow-hidden">
              <img 
                src={appPreview} 
                alt="MuchIQ Gamified Experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/10 rounded-full blur-[120px]" />
          </div>

          {/* Features Detail */}
          <div className="flex-1 space-y-16 order-1 lg:order-2" id="negocios">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Ecosistema MuchIQ</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
                Cada visita es una <br />
                <span className="text-gradient">aventura premiada.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                Unimos la diversión del juego con la seriedad de los negocios locales para impulsar la economía de Lambayeque.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-white transition-all group">
                  <div className="space-y-6">
                    <div className={`w-12 h-12 ${feature.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-black text-xl text-foreground italic">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetail;
