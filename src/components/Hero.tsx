import React from "react";
import { WaitlistForm } from "./WaitlistForm";
import { Sparkles, ShieldCheck, Globe, Zap } from "lucide-react";
import museoImg from "@/assets/museo.png"; 
import logoMuchiq from "@/assets/icono_muchiq_landing.png";

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background selection:bg-primary/20">
            {/* Advanced Ambient Lighting (Blobs) */}
            <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Content Section - Massive Impact */}
                    <div className="flex-1 space-y-12 animate-fade-up">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 shadow-sm">
                                <img src={logoMuchiq} alt="MuchIQ Logo" className="w-5 h-5 object-contain" />
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">MuchIQ Startup</span>
                            </div>

                            <h1 className="text-7xl md:text-9xl font-black text-foreground leading-[0.85] tracking-tighter">
                                El norte <br />
                                <span className="text-gradient">peruano,</span> <br />
                                reimaginado.
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed font-medium text-balance">
                                La plataforma de inteligencia cultural que transforma tu smartphone en una ventana al pasado Mochica y Lambayeque.
                            </p>
                        </div>

                        {/* Direct Waitlist Focus */}
                        <div className="space-y-8 max-w-lg">
                            <div className="flex items-center gap-3 text-primary font-black text-xs tracking-widest">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                </span>
                                ÚNETE A LA REVOLUCIÓN CULTURAL
                            </div>
                            
                            <WaitlistForm variant="hero" />
                            
                            <div className="flex flex-wrap gap-8 pt-4">
                                <div className="flex items-center gap-2.5 group cursor-default">
                                    <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Acceso Fundador</span>
                                </div>
                                <div className="flex items-center gap-2.5 group cursor-default">
                                    <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                                        <Globe className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Turismo de Impacto</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Section - Clean Tech Integration */}
                    <div className="flex-1 relative w-full lg:w-auto mt-12 lg:mt-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
                        
                        {/* Main Image Container */}
                        <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-[12px] border-white group aspect-video lg:aspect-square max-w-2xl mx-auto lg:ml-auto focus-within:ring-4 ring-primary/20 transition-all">
                            <img 
                                src={museoImg} 
                                alt="Experiencia Cultural Lambayeque" 
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
                        </div>
                        
                        {/* Corrected Floating AI Card - No more awkward overlapping */}
                        <div className="absolute -top-10 -left-6 lg:-left-12 z-30 glass-card p-6 rounded-3xl animate-bounce shadow-2xl border border-white/40">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary p-3 rounded-2xl shadow-indigo-500/20 shadow-xl">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">AI Discovery</p>
                                    <p className="text-sm font-black text-foreground">Engines Online</p>
                                </div>
                            </div>
                        </div>

                        {/* Subtle Tech Badge - Bottom Right */}
                        <div className="absolute -bottom-6 -right-4 lg:right-0 z-30 bg-foreground text-background px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                            <Sparkles className="w-4 h-4 text-secondary" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Next-Gen Plataform</span>
                        </div>

                        {/* Tech Dots Ornament */}
                        <div className="absolute top-1/2 -right-12 -translate-y-1/2 grid grid-cols-2 gap-3 opacity-20 pointer-events-none">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-primary rounded-full" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase">Muchiq Experience</span>
                <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
