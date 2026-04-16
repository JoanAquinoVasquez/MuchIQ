import React from "react";
import { Facebook, Instagram, Mail, MapPin, Sparkles } from "lucide-react";
import culturalPattern from "@/assets/icono_muchiq_landing.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.04 1.62.7 3.08 1.75 4.17 1.13 1.02 2.6 1.68 4.22 1.79v4.03c-1.53-.04-2.97-.39-4.26-1l.06.03c-.63-.3-1.16-.61-1.66-.96l.04.03c-.01 2.92.01 5.84-.02 8.75-.08 1.48-.57 2.83-1.37 3.96l.02-.02c-1.32 1.89-3.46 3.13-5.9 3.21l-.01 0c-.1 0-.21.01-.33.01-1.38 0-2.68-.38-3.78-1.05l.03.02c-2.01-1.21-3.39-3.27-3.65-5.68l0-.03c-.02-.5-.03-1-.01-1.49.39-3.82 3.59-6.78 7.49-6.78.44 0 .87.04 1.28.11l-.04-.01c.02 1.48-.04 2.96-.04 4.44-.34-.12-.73-.19-1.14-.19-1.49 0-2.77.95-3.24 2.29l-.01.02c-.11.34-.17.73-.17 1.14 0 .16.01.33.03.49l0-.02c.27 1.64 1.67 2.87 3.36 2.87.05 0 .1 0 .14 0l-.01 0c1.17-.04 2.19-.66 2.76-1.59l.01-.01c.21-.3.36-.66.41-1.05l0-.01c.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/muchiq.pe", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/muchiq.pe", label: "Instagram" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@muchiq.pe", label: "TikTok" },
  ];

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          {/* Brand Section */}
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:rotate-6 transition-transform">
                <img src={culturalPattern} alt="MuchIQ Icon" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">MuchIQ</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Reconectando al mundo con la esencia del norte peruano a través de tecnología y sabiduría ancestral.
            </p>

            <div className="flex items-center gap-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Systems Active</span>
            </div>
          </div>

          {/* Social links Section */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground">Social</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-2xl bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-primary" />
                <span>muchiq.team@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Lambayeque, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            © 2026 MuchIQ. Inspirado en el Dragón Mochica.
          </p>
          <div className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-all cursor-default">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest">Made in Lambayeque</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
