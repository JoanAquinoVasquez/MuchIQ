import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const links = {
    explorer: [
      { name: "Descargar App", href: "#" },
      { name: "Rutas Destacadas", href: "#" },
      { name: "Cómo Funciona", href: "#" },
      { name: "Recompensas", href: "#" },
    ],
    business: [
      { name: "Registrar Negocio", href: "#" },
      { name: "Planes y Precios", href: "#" },
      { name: "Casos de Éxito", href: "#" },
      { name: "Recursos", href: "#" },
    ],
    about: [
      { name: "Nosotros", href: "#" },
      { name: "Blog Cultural", href: "#" },
      { name: "Contacto", href: "#" },
      { name: "Trabaja con Nosotros", href: "#" },
    ],
    legal: [
      { name: "Términos de Uso", href: "#" },
      { name: "Política de Privacidad", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-cultural border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-dragon rounded-xl flex items-center justify-center">
                <span className="text-2xl">🐉</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">MuchIQ</div>
                <div className="text-sm text-muted-foreground">Turismo Inteligente</div>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Conectando exploradores con la riqueza cultural, gastronómica y turística del norte peruano.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Lambayeque, Perú</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>contacto@dragonnorte.pe</span>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Para Exploradores</h4>
            <ul className="space-y-3">
              {links.explorer.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Para Negocios</h4>
            <ul className="space-y-3">
              {links.business.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.about.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-secondary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2025 MuchIQ. Todos los derechos reservados. Inspirado en la herencia Mochica.
            </p>
            
            <div className="flex gap-6">
              {links.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm italic text-muted-foreground">
              "Porque descubrir el norte es volver a nuestras raíces"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
