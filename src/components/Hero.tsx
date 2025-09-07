import { Button } from "@/components/ui/button";
import { Shield, Zap, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(/lovable-uploads/c256e183-33d7-4e00-95fb-92af53e1826e.png)` }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Dark dotted pattern background */}
      <div className="absolute inset-0 bg-background bg-luxury-dots opacity-60" />
      
      {/* Neon outline frame */}
      <div className="absolute inset-8 border-2 border-primary/40 rounded-lg pointer-events-none glow-subtle" />
      
      {/* Content container with neon outline */}
      <div className="relative max-w-4xl mx-auto text-center space-y-8 p-8 border border-primary/30 rounded-xl bg-background/20 backdrop-blur-sm glow-subtle">

        {/* Main Headlines */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground tracking-tight">
            Gilz<span className="text-neon-cyan">Pro</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Platform top-up digital terpercaya untuk pulsa, token listrik, paket data, dan voucher game
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 glow-primary font-bold"
            onClick={() => navigate("/products/mobile")}
          >
            Mulai Top Up Sekarang
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 border-primary/50 text-neon-cyan hover:bg-primary/10 hover:border-primary hover:glow-subtle"
            onClick={scrollToCategories}
          >
            Lihat Produk
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground mb-4">Platform terpercaya dengan</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-neon-cyan" />
              <span className="text-foreground">SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-neon-cyan" />
              <span className="text-foreground">Proses Instan</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-neon-cyan" />
              <span className="text-foreground">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-neon-cyan" />
              <span className="text-foreground">100K+ Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};