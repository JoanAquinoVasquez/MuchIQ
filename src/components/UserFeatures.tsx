import { Sparkles, Map, Bot, Gift, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const UserFeatures = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Recomendaciones personalizadas",
      description: "Sugerencias según tus gustos, ubicación y preferencias culturales",
      color: "primary",
    },
    {
      icon: Map,
      title: "Rutas temáticas",
      description: "Gastronómica, cultural, urbana y artesanal - elige tu aventura",
      color: "secondary",
    },
    {
      icon: Bot,
      title: "Asistente de IA",
      description: "Consulta cualquier duda y planifica tu recorrido perfecto",
      color: "accent",
    },
    {
      icon: Gift,
      title: "Sistema de puntos",
      description: "Gana puntos explorando y canjéalos por descuentos exclusivos",
      color: "primary",
    },
    {
      icon: MessageCircle,
      title: "Comunidades temáticas",
      description: "Comparte experiencias y descubre lugares a través de otros exploradores",
      color: "secondary",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Para Exploradores
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Funcionalidades que <span className="text-gradient-mochica">transforman</span> tu experiencia
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Herramientas inteligentes diseñadas para que descubras, aprendas y 
            ganes mientras exploras el norte peruano
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              accent: "bg-accent/10 text-accent",
            };
            
            return (
              <Card 
                key={index} 
                className="hover-lift border-2 group transition-all duration-300 hover:border-primary/50"
              >
                <CardContent className="p-8 space-y-4">
                  <div className={`w-16 h-16 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserFeatures;
