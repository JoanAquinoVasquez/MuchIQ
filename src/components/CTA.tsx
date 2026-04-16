import React from "react";
import { WaitlistForm } from "./WaitlistForm";
import { Sparkles, Globe, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section id="waitlist-section" className="py-32 bg-foreground relative overflow-hidden">
      {/* Background Ornaments for Tech/Culture Mix */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto rounded-[4rem] bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-24 text-center space-y-16 shadow-2xl">
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
               <Sparkles className="w-4 h-4 text-primary" />
               <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.3em]">Acceso Beta Fundador</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
              Sé parte de la <br />
              <span className="text-primary italic">próxima expedición.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-xl mx-auto">
              Únete a la lista de espera exclusiva y sé de los primeros en experimentar el norte peruano con tu propio mentor inteligente.
            </p>
          </div>

          <div className="flex justify-center max-w-xl mx-auto">
             <WaitlistForm variant="cta" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
             <div className="flex items-center justify-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                 <Globe className="w-5 h-5 text-primary" />
               </div>
               <span className="text-[10px] font-black text-white/40 uppercase tracking-widest text-left">Impacto <br />Cultural</span>
             </div>
             <div className="flex items-center justify-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                 <MapPin className="w-5 h-5 text-primary" />
               </div>
               <span className="text-[10px] font-black text-white/40 uppercase tracking-widest text-left">Hecho en <br />Lambayeque</span>
             </div>
             <div className="flex items-center justify-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                 <Sparkles className="w-5 h-5 text-primary" />
               </div>
               <span className="text-[10px] font-black text-white/40 uppercase tracking-widest text-left">Poder <br />AI</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
