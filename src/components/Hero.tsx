import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.webp";

interface HeroProps {
  imageUrl?: string;
}

export const Hero = ({ imageUrl }: HeroProps) => {
  const navigate = useNavigate();

  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-10 left-10 w-32 h-32 text-yellow-500/10"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <circle cx="20" cy="20" r="2" />
          <circle cx="80" cy="30" r="1.5" />
          <circle cx="60" cy="70" r="1" />
          <path d="M30 40 Q50 20 70 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
        <svg
          className="absolute bottom-20 right-20 w-40 h-40 text-yellow-500/5"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <circle cx="30" cy="60" r="1.5" />
          <circle cx="70" cy="20" r="2" />
          <path d="M20 80 Q50 60 80 80" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Main Headlines */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground tracking-tight">
            Gilz<span className="text-neon-cyan">Go</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Platform top-up digital terpercaya untuk pulsa, token listrik, paket data, dan voucher game
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-accent hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
            onClick={() => navigate("/products/mobile")}
          >
            Mulai Top Up Sekarang
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 glass-card border-primary/30 text-primary hover:bg-primary/10"
            onClick={scrollToCategories}
          >
            Lihat Produk
          </Button>
        </div>


        {/* Special Badge */}
        <div className="flex justify-center">
          <Badge className="bg-gradient-accent text-white border-0 px-4 py-2 text-sm animate-glow">
            🔥 Promo Spesial Hari Ini - Diskon hingga 20%
          </Badge>
        </div>
      </div>
    </section>
  );
};