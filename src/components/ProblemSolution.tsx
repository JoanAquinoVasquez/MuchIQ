import React from "react";
import { SearchX, Clock, MapIcon, Compass, Target, Store } from "lucide-react";

const ProblemSolution = () => {
  const points = [
    {
      problem: "Información Dispersa",
      problemDesc: "Datos desactualizados y poco atractivos en redes o páginas informales.",
      solution: "Centralización Inteligente",
      solutionDesc: "Toda la riqueza de Lambayeque en una sola App rápida, sencilla y oficial.",
      iconProblem: SearchX,
      iconSolution: Compass
    },
    {
      problem: "Experiencias Genéricas",
      problemDesc: "Los visitantes invierten demasiado tiempo buscando y terminan en lo de siempre.",
      solution: "Rutas Personalizadas",
      solutionDesc: "IA y GPS se unen para diseñar una aventura auténtica basada en tus gustos.",
      iconProblem: Clock,
      iconSolution: Target
    },
    {
      problem: "Negocios Invisibles",
      problemDesc: "Artesanos y locales carecen de canales digitales efectivos para atraer clientes.",
      solution: "MuchIQ para Negocios",
      solutionDesc: "Convierte visibilidad en ventas, mide tu retorno y accede a métricas inteligentes.",
      iconProblem: MapIcon,
      iconSolution: Store
    }
  ];

  return (
    <section id="problem-solution" className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-red-500/5 border border-red-500/10 rounded-full">
            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">El Desafío Regional</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-foreground">
            Lambayeque tiene el potencial, <br />
            <span className="text-muted-foreground uppercase text-3xl md:text-4xl block mt-4">MuchIQ tiene la tecnología.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            Unimos el pasado glorioso con el futuro digital para que Lambayeque deje de ser una ciudad de paso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div key={i} className="group relative">
              <div className="h-full bg-white p-12 rounded-[3.5rem] border border-border/50 shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                <div className="space-y-12">
                  {/* Problem Side */}
                  <div className="space-y-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                      <point.iconProblem className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-xl font-bold text-foreground line-through decoration-red-500/50">{point.problem}</h4>
                       <p className="text-sm text-muted-foreground font-medium">{point.problemDesc}</p>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-border border-dashed" />

                  {/* Solution Side */}
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 rotate-12 group-hover:rotate-0 transition-transform">
                      <point.iconSolution className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-2xl font-black text-primary tracking-tight">{point.solution}</h4>
                       <p className="text-muted-foreground font-medium leading-relaxed">{point.solutionDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
