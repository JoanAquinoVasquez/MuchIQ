import { Heart, Leaf, TrendingUp, Users } from "lucide-react";
import peruLandscape from "@/assets/peru-landscape.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Revive la herencia cultural",
      description: "Redescubre y difunde la tradición Moche y la riqueza del norte peruano",
    },
    {
      icon: Leaf,
      title: "Turismo responsable",
      description: "Promueve el turismo consciente y sostenible en comunidades locales",
    },
    {
      icon: TrendingUp,
      title: "Impacto económico directo",
      description: "Genera ingresos para emprendedores, restaurantes y artesanos locales",
    },
    {
      icon: Users,
      title: "Comunidad conectada",
      description: "Une a exploradores, guías y negocios en un ecosistema colaborativo",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={peruLandscape} 
          alt="Paisaje del norte peruano - costa, desierto y montañas"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Beneficios y Propósito
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Más que una app, un <span className="text-gradient-mochica">movimiento cultural</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Cada exploración contribuye a preservar nuestra herencia y fortalecer la economía local
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="flex gap-6 p-8 bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-border hover-lift group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-dragon rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-lg text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-foreground max-w-4xl mx-auto italic">
            "Porque descubrir el norte es volver a nuestras raíces. 
            <span className="text-gradient-mochica"> Vive, aprende y gana</span> explorando con nosotros."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
