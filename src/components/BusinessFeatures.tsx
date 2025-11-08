import { MapPinned, Route, TrendingUp, Tags } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BusinessFeatures = () => {
  const features = [
    {
      icon: MapPinned,
      title: "Registro y visibilidad",
      description: "Aparece en el mapa turístico digital y llega a miles de exploradores",
    },
    {
      icon: Route,
      title: "Rutas culturales",
      description: "Forma parte de rutas gastronómicas, culturales y artesanales curadas",
    },
    {
      icon: TrendingUp,
      title: "Estadísticas detalladas",
      description: "Accede a datos de visitas, interacciones y valoraciones de usuarios",
    },
    {
      icon: Tags,
      title: "Promociones exclusivas",
      description: "Crea ofertas especiales para partners y atrae más clientes",
    },
  ];

  return (
    <section className="py-24 bg-gradient-cultural relative overflow-hidden">
      <div className="absolute inset-0 pattern-mochica opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Para Establecimientos
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impulsa tu negocio con <span className="text-gradient-mochica">tecnología turística</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Conecta con turistas, aumenta tu visibilidad y forma parte del ecosistema 
            turístico más innovador del norte
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover-lift border-2 bg-card/80 backdrop-blur-sm group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="max-w-4xl mx-auto bg-card/60 backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-8 shadow-elevated">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">+150</div>
              <div className="text-muted-foreground">Negocios registrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-muted-foreground">Aumento en visibilidad</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2.5x</div>
              <div className="text-muted-foreground">Más interacciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
