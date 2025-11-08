import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Community = () => {
  const testimonials = [
    {
      name: "María Sánchez",
      role: "Exploradora Local",
      avatar: "MS",
      rating: 5,
      text: "Descubrí lugares increíbles en mi propia ciudad que nunca había visitado. La ruta gastronómica es espectacular.",
    },
    {
      name: "Carlos Mendoza",
      role: "Guía Turístico",
      avatar: "CM",
      rating: 5,
      text: "Como guía, esta app me ayuda a crear experiencias más ricas para mis turistas. Los datos culturales son muy completos.",
    },
    {
      name: "Rosa Villegas",
      role: "Artesana",
      avatar: "RV",
      rating: 5,
      text: "Ahora recibo muchos más visitantes interesados en mis cerámicas. La visibilidad ha cambiado mi negocio completamente.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-cultural relative overflow-hidden">
      <div className="absolute inset-0 pattern-mochica opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nuestra Comunidad
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Historias de quienes ya <span className="text-gradient-mochica">vuelan con el dragón</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Miles de exploradores y socios comparten sus experiencias y descubrimientos cada día
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift border-2 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12 bg-gradient-dragon">
                    <AvatarFallback className="text-primary-foreground font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card/60 backdrop-blur-sm border-2 border-border rounded-full px-8 py-6 shadow-elevated">
            <div>
              <div className="text-3xl font-bold text-primary">4.8/5</div>
              <div className="text-sm text-muted-foreground">Valoración promedio</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-secondary">1000+</div>
              <div className="text-sm text-muted-foreground">Reseñas positivas</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-accent">250+</div>
              <div className="text-sm text-muted-foreground">Historias compartidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
