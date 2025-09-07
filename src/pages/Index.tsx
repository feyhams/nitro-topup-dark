import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Smartphone, 
  Zap, 
  Wifi, 
  Gamepad2, 
  Shield,
  Headphones,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchBar } from "@/components/SearchBar";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "Pulsa & Paket Data",
      description: "Isi pulsa dan beli paket data dengan mudah",
      icon: Smartphone,
      path: "/products/mobile"
    },
    {
      title: "Token PLN",
      description: "Beli token PLN listrik prabayar",
      icon: Zap,
      path: "/products/electricity"
    },
    {
      title: "Paket Internet",
      description: "Paket internet murah untuk semua operator",
      icon: Wifi,
      path: "/products/data"
    },
    {
      title: "Voucher Game",
      description: "Top-up game favorit dengan harga terbaik",
      icon: Gamepad2,
      path: "/products/games"
    }
  ];

  const popularProducts = [
    { name: "Telkomsel 10K", price: "Rp 9.500", discount: "5% OFF" },
    { name: "PLN 50K", price: "Rp 50.000", discount: "Gratis Admin" },
    { name: "ML 86 Diamond", price: "Rp 18.000", discount: "Hot Deal" },
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Platform <span className="text-neon-cyan">TopUp</span> Digital
              <br />
              <span className="text-3xl md:text-5xl text-muted-foreground">Terpercaya</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Isi pulsa, beli token PLN, paket data, dan voucher game dengan mudah, 
              cepat, dan aman. Proses instan dalam hitungan detik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-transform">
                Mulai Top-Up Sekarang
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                1M+ pengguna aktif
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search Section */}
        <div className="mb-16 animate-slide-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
              Apa yang ingin Anda isi hari ini?
            </h2>
            <p className="text-muted-foreground">
              Pilih kategori atau cari langsung produk yang Anda butuhkan
            </p>
          </div>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            onFilterChange={() => {}}
          />
        </div>

        {/* Categories */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Pilih Kategori
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dari pulsa hingga voucher game, semua ada di sini dengan harga terbaik
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => (
              <div key={index} style={{ animationDelay: `${300 + index * 100}ms` }}>
                <CategoryCard
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  onClick={() => navigate(category.path)}
                  className="animate-scale-in hover:scale-105 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Popular Products */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Penawaran Populer
            </h2>
            <p className="text-muted-foreground">
              Produk terlaris dengan harga spesial untuk Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product, index) => (
              <Card
                key={index}
                className="p-6 hover-glow cursor-pointer bg-gradient-dark border-border/50 transition-all duration-300 hover:scale-[1.02] animate-scale-in group"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-gradient-accent text-white border-0 animate-glow">
                    Populer
                  </Badge>
                  <span className="text-sm text-success font-medium">{product.discount}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-neon-cyan">{product.price}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Mengapa Pilih TopUpPro?
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik dengan standar keamanan tinggi
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-200 animate-scale-in" style={{ animationDelay: "700ms" }}>
              <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
                <Shield className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Aman & Terpercaya</h3>
              <p className="text-muted-foreground text-center">
                Transaksi dilindungi enkripsi SSL dan diawasi OJK
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-200 animate-scale-in" style={{ animationDelay: "800ms" }}>
              <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
                <Zap className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Proses Instan</h3>
              <p className="text-muted-foreground text-center">
                Top-up berhasil dalam hitungan detik, 24/7
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-200 animate-scale-in" style={{ animationDelay: "900ms" }}>
              <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
                <Headphones className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Support 24/7</h3>
              <p className="text-muted-foreground text-center">
                Tim dukungan profesional siap membantu Anda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
