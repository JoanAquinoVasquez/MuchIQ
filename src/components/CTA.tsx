import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Building2, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mochica opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Únete al <span className="text-gradient-mochica">vuelo del dragón</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Elige tu camino y comienza tu aventura en el norte peruano
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Explorer Card */}
          <Card className="hover-lift border-2 hover:border-primary/50 transition-all duration-300 group bg-card/80 backdrop-blur-sm">
            <CardContent className="p-10 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-8 h-8 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground">Soy Explorador</h3>
                <p className="text-lg text-muted-foreground">
                  Descubre lugares únicos, gana puntos y vive experiencias inolvidables
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Recomendaciones personalizadas
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Rutas culturales y gastronómicas
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Sistema de recompensas
                </li>
              </ul>
              
              <Button variant="hero" size="lg" className="w-full group">
                Registrarme como Explorador
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Business Card */}
          <Card className="hover-lift border-2 hover:border-accent/50 transition-all duration-300 group bg-card/80 backdrop-blur-sm">
            <CardContent className="p-10 space-y-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground">Soy Aliado</h3>
                <p className="text-lg text-muted-foreground">
                  Aumenta tu visibilidad, conecta con turistas y crece tu negocio
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Aparece en el mapa turístico
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Estadísticas y análisis
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Promociones exclusivas
                </li>
              </ul>
              
              <Button variant="cultural" size="lg" className="w-full group">
                Registrar mi Negocio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;
