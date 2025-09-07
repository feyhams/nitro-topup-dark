import { Link } from "react-router-dom";
import { Zap, Shield, Clock, Headphones } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const features = [
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      description: "Transaksi dilindungi enkripsi SSL"
    },
    {
      icon: Clock,
      title: "Proses Instan",
      description: "Top-up berhasil dalam hitungan detik"
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Tim dukungan siap membantu Anda"
    }
  ];

  return (
    <footer className="bg-card border-t border-border/50 mt-16">
      {/* Trust Indicators */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-background/50 border border-border/30"
              >
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-border/30">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Gilz<span className="text-neon-cyan">Pro</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Platform top-up digital terpercaya untuk semua kebutuhan Anda. 
              Cepat, aman, dan mudah digunakan.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/mobile" className="text-muted-foreground hover:text-primary transition-colors">
                  Pulsa & Paket Data
                </Link>
              </li>
              <li>
                <Link to="/products/electricity" className="text-muted-foreground hover:text-primary transition-colors">
                  Token PLN
                </Link>
              </li>
              <li>
                <Link to="/products/games" className="text-muted-foreground hover:text-primary transition-colors">
                  Voucher Game
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Dukungan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} GilzPro. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};