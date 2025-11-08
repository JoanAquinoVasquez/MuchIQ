import culturalPattern from "@/assets/saludo.gif";

const CulturalEssence = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated hover-lift">
              <img 
                src={culturalPattern} 
                alt="Patrones culturales Mochica del norte peruano"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-dragon rounded-full blur-3xl opacity-20" />
          </div>
          
          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Nuestra Esencia
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              El legado del <span className="text-gradient-mochica">Dragón Mochica Andino</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                El <strong className="text-foreground">Dragón Mochica Andino</strong> representa la fuerza, 
                la sabiduría y la conexión entre la tierra, el mar y el cielo.
              </p>
              
              <p>
                En nuestra app, revive su legado guiando a una nueva generación a descubrir 
                la <strong className="text-foreground">cultura viva del norte peruano</strong>.
              </p>
              
              <p>
                Cada ruta, cada experiencia, cada punto en el mapa es un homenaje a las raíces 
                mochicas que aún laten en cada rincón de Lambayeque y el norte del Perú.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-xl border border-border hover-lift">
                <div className="text-2xl mb-2">🏺</div>
                <div className="text-sm font-semibold text-foreground">Cerámica</div>
                <div className="text-xs text-muted-foreground">Tradición</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border hover-lift">
                <div className="text-2xl mb-2">🌊</div>
                <div className="text-sm font-semibold text-foreground">Costa</div>
                <div className="text-xs text-muted-foreground">Conexión</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border hover-lift">
                <div className="text-2xl mb-2">⛰️</div>
                <div className="text-sm font-semibold text-foreground">Montaña</div>
                <div className="text-xs text-muted-foreground">Fuerza</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalEssence;
