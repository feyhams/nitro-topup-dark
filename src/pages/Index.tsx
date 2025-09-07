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
import { Hero } from "@/components/Hero";

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
    { name: "Telkomsel 10K", price: "Rp 9.500", discount: "5% OFF", category: "mobile" },
    { name: "PLN 50K", price: "Rp 50.000", discount: "Gratis Admin", category: "electricity" },
    { name: "ML 86 Diamond", price: "Rp 18.000", discount: "Hot Deal", category: "games" },
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <Hero />

      <div className="container mx-auto px-4 space-y-20">
        {/* Search Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-heading font-bold text-foreground">Cari Produk</h2>
            <p className="text-muted-foreground">Temukan produk yang Anda butuhkan</p>
          </div>
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm}
            placeholder="Cari produk top-up..."
          />
        </section>

        {/* Categories Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-heading font-bold text-foreground">Kategori Produk</h2>
            <p className="text-muted-foreground">Pilih kategori sesuai kebutuhan Anda</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                onClick={() => navigate(category.path)}
                className="animate-fade-in"
              />
            ))}
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-heading font-bold text-foreground">Produk Populer</h2>
            <p className="text-muted-foreground">Produk yang paling banyak dipilih pengguna</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product, index) => (
              <Card 
                key={index}
                className="p-6 glass-card cursor-pointer animate-scale-in"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Star className="w-5 h-5 text-neon-cyan" />
                    <Badge className="bg-warning text-warning-foreground">
                      {product.discount}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-foreground">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Populer</span>
                      <span className="text-lg font-bold text-neon-cyan">
                        {product.price}
                      </span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full"
                    onClick={() => navigate(`/products/${product.category}`)}
                  >
                    Beli Sekarang
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 glass-card rounded-2xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-heading font-bold text-foreground">Mengapa Pilih TopUpPro?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-neon-cyan" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">Keamanan Terjamin</h3>
                <p className="text-muted-foreground">
                  Transaksi aman dengan enkripsi SSL dan sistem keamanan berlapis
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-neon-cyan" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">Proses Instan</h3>
                <p className="text-muted-foreground">
                  Top-up langsung masuk ke akun Anda dalam hitungan detik
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-neon-cyan" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">Support 24/7</h3>
                <p className="text-muted-foreground">
                  Tim customer service siap membantu Anda kapan saja
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
