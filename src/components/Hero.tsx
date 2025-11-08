import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Download } from "lucide-react";
import dragonHero from "@/assets/museo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cultural">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-mochica opacity-50" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">MuchIQ - App Móvil de Turismo Inteligente</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient-mochica">Descubre</span>, explora y{" "}
              <span className="text-gradient-mochica">vive</span> el norte como nunca antes
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Tu app de turismo inteligente que te conecta con la cultura, gastronomía y experiencias 
              únicas del norte peruano
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Descargar App
              </Button>
              <Button variant="cultural" size="lg" className="group">
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Explora Ahora
              </Button>
            </div>
            
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Lugares descubiertos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Usuarios activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground">Socios aliados</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dragon Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden dragon-glow hover-lift">
              <img 
                src={dragonHero} 
                alt="Dragón Mochica Andino - Símbolo de sabiduría y conexión cultural"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-2 -right-8 bg-card border-2 border-primary/20 rounded-2xl p-4 shadow-xl animate-bounce">
              <div className="flex items-end gap-3">
                <div className="w-12 h-12 bg-gradient-dragon rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Nuevo Logro</div>
                  <div className="text-xs text-muted-foreground">+50 puntos ganados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
