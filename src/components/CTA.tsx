import React from "react";
import { WaitlistForm } from "./WaitlistForm";
import { Sparkles, ArrowRight, Star } from "lucide-react";

const CTA = () => {
    return (
        <section className="section-padding bg-foreground text-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
            
            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm animate-fade-up">
                        <Star className="w-5 h-5 text-secondary fill-secondary" />
                        <span className="text-sm font-bold uppercase tracking-widest">Únete a los Pioneros</span>
                    </div>

                    <div className="space-y-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
                        <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                            No solo visites el norte. <br />
                            <span className="text-primary italic">Siéntelo.</span>
                        </h2>
                        <p className="text-xl text-background/60 max-w-2xl mx-auto leading-relaxed">
                            Estamos construyendo algo único. Los primeros 50 registrados recibirán el badge de "Explorador Fundador" con beneficios vitalicios en la plataforma.
                        </p>
                    </div>

                    <div className="w-full flex justify-center animate-fade-up" style={{ animationDelay: '200ms' }}>
                        <WaitlistForm variant="cta" />
                    </div>

                    <div className="flex items-center gap-8 pt-8 animate-fade-up" style={{ animationDelay: '300ms' }}>
                        <div className="text-center">
                            <p className="text-3xl font-black">2026</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-background/40">Lanzamiento</p>
                        </div>
                        <div className="w-[1px] h-12 bg-white/20" />
                        <div className="text-center">
                            <p className="text-3xl font-black">100%</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-background/40">Cultural</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
