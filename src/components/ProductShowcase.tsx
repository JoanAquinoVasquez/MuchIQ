import React from "react";
import { Brain, Calendar, MapPin, Trophy, ShieldCheck } from "lucide-react";
import productMockup from "@/assets/product-mockup.png";

const ProductShowcase = () => {
  const steps = [
    {
      title: "Planificación con IA",
      description: "Nuestra IA analiza tus gustos y el contexto del destino para crear rutas únicas en segundos.",
      icon: Brain,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Exploración Visual",
      description: "Visualiza tu día con fotos, descripciones y mapas interactivos sin salir de la app.",
      icon: Calendar,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Recompensas Reales",
      description: "Acumula puntos MuchIQ visitando lugares y canjéalos por premios en negocios locales.",
      icon: Trophy,
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section id="producto" className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Mockup Display */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="relative z-10 w-full max-w-[450px] mx-auto animate-float">
               <img 
                src={productMockup} 
                alt="MuchIQ App Timeline" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[3rem]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <span className="text-xs font-black uppercase tracking-widest text-foreground">Verificado por Expertos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Content */}
          <div className="flex-1 space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Experiencia MuchIQ</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                Tu aventura, <br />
                <span className="text-gradient">más inteligente.</span>
              </h2>
              
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
                MuchIQ no es solo una guía, es un ecosistema que conecta al viajero con lo mejor de Lambayeque a través de tecnología de vanguardia.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`flex-shrink-0 w-14 h-14 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {step.description}
                    </p>
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

export default ProductShowcase;
