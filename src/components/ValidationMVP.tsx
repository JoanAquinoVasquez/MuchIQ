import React from "react";
import qrApp from "@/assets/qr-app.jpeg";
import { Sparkles, Smartphone, ShieldCheck, Zap } from "lucide-react";

const ValidationMVP = () => {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-white border border-border shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-16 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">MVP de Validación</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                  Prueba el futuro <br />
                  del turismo <span className="text-gradient">ahora.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Escanea el código QR para entrar a la beta pública. Empieza a planear tu viaje a Lambayeque con el poder de la Inteligencia Artificial.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col gap-2">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground">Seguridad</p>
                  <p className="text-[10px] text-muted-foreground">Demo protegida y segura</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground">Velocidad</p>
                  <p className="text-[10px] text-muted-foreground">Acceso instantáneo</p>
                </div>
              </div>
            </div>

            {/* Right Side - QR Code Visual */}
            <div className="lg:w-[40%] bg-primary flex flex-col items-center justify-center p-12 text-center text-white relative">
              <div className="absolute inset-0 pattern-mochica opacity-10" />
              
              <div className="relative z-10 space-y-6">
                <div className="bg-white p-4 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-500">
                  <img src={qrApp} alt="MuchIQ MVP QR" className="w-48 h-48 sm:w-64 sm:h-64 rounded-xl" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Escanea para descargar</p>
                
                <div className="flex justify-center gap-4 pt-4">
                  <div className="h-10 px-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[10px] font-black opacity-50">
                    iOS
                  </div>
                  <div className="h-10 px-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[10px] font-black opacity-50">
                    ANDROID
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationMVP;
