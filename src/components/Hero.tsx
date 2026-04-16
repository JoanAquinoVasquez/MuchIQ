import React from "react";
import { Sparkles, ShieldCheck, Zap, ArrowRight, Target } from "lucide-react";
import museoImg from "@/assets/museo.png"; 
import logoMuchiq from "@/assets/icono_muchiq_landing.png";

const Hero = () => {
    const scrollToWaitlist = () => {
        const section = document.getElementById('waitlist-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-background selection:bg-primary/20">
            {/* Advanced Ambient Lighting (Blobs) */}
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Content Section - Visionary & Strategic */}
                    <div className="flex-1 space-y-12 animate-fade-in text-center lg:text-left">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm mx-auto lg:mx-0">
                                <img src={logoMuchiq} alt="MuchIQ Logo" className="w-5 h-5 object-contain" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Destino Inteligente</span>
                            </div>

                            <h1 className="text-7xl md:text-9xl font-black text-foreground leading-[0.85] tracking-tighter">
                                Lambayeque <br />
                                <span className="text-gradient">reimaginado.</span> 
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium text-balance">
                                Descubrir el norte es volver a nuestras raíces. <strong>MuchIQ</strong> transforma el flujo turístico en impacto real, económico y social para nuestra región.
                            </p>
                        </div>

                        {/* CEO CTA Button */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                            <button 
                                onClick={scrollToWaitlist}
                                className="w-full sm:w-auto px-10 py-6 bg-foreground text-background font-black rounded-2xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all flex items-center justify-center gap-3 group overflow-hidden"
                            >
                                <span className="uppercase tracking-widest">Unirse a la Visión</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <div className="flex items-center gap-2 opacity-60">
                                <Target className="w-5 h-5 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Modelo de Turismo Digital</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className="flex-1 relative w-full lg:w-auto mt-12 lg:mt-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
                        
                        <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group aspect-square max-w-lg mx-auto lg:ml-auto">
                            <img 
                                src={museoImg} 
                                alt="Lambayeque Inteligente" 
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
                        </div>
                        
                        {/* Status Tags */}
                        <div className="absolute -top-10 -left-6 lg:-left-12 z-30 glass-card p-6 rounded-3xl animate-bounce-slow shadow-2xl border border-white/40">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary p-3 rounded-2xl shadow-xl">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">Impacto Real</p>
                                    <p className="text-sm font-black text-foreground">Turismo Inteligente</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-10 right-0 z-30 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white/50 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-black text-foreground">Recompensas por Visitas</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
