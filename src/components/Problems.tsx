import { AlertCircle, MapPinOff, Store, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problems = () => {
  const problems = [
    {
      icon: MapPinOff,
      title: "Falta de integración",
      description: "No existen plataformas que integren cultura, gastronomía y puntos urbanos de interés en un solo lugar",
    },
    {
      icon: AlertCircle,
      title: "Desconocimiento local",
      description: "Los propios habitantes desconocen los tesoros culturales y gastronómicos de su región",
    },
    {
      icon: Store,
      title: "Baja visibilidad",
      description: "Comercios locales y artesanos tienen poca visibilidad ante turistas y exploradores",
    },
    {
      icon: TrendingDown,
      title: "Falta de incentivos",
      description: "No hay motivación suficiente para que las personas exploren y descubran su propia región",
    },
  ];

  return (
    <section className="py-24 bg-gradient-cultural relative overflow-hidden">
      <div className="absolute inset-0 pattern-mochica opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Problemas que Resolvemos
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            El turismo del norte necesita <span className="text-gradient-mochica">una revolución</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Identificamos los desafíos que enfrentan viajeros y negocios locales, 
            y creamos soluciones inteligentes para cada uno
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="hover-lift border-2 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
