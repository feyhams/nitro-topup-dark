import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Smartphone, 
  Zap, 
  Wifi, 
  Gamepad2, 
  Clock,
  Shield,
  TrendingUp,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchBar } from "@/components/SearchBar";

const Index = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("all");

  const categories = [
    {
      title: "Mobile Credit",
      description: "Top up your phone balance instantly",
      icon: Smartphone,
      path: "/products/mobile"
    },
    {
      title: "Electricity Tokens",
      description: "PLN tokens for your home",
      icon: Zap,
      path: "/products/electricity"
    },
    {
      title: "Data Packages",
      description: "Internet data for all providers",
      icon: Wifi,
      path: "/products/data"
    },
    {
      title: "Game Vouchers",
      description: "Gaming credits and diamonds",
      icon: Gamepad2,
      path: "/products/games"
    }
  ];

  const popularProducts = [
    { name: "Telkomsel 10K", price: 10000, discount: "5% OFF" },
    { name: "PLN 50K", price: 50000, discount: "Free Admin" },
    { name: "ML 86 Diamond", price: 20000, discount: "Hot Deal" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-dark border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TopUp Pro
              </h1>
              <p className="text-muted-foreground mt-1">Digital payments made easy</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => navigate("/history")}>
                <Clock className="w-4 h-4 mr-2" />
                History
              </Button>
              <Button variant="neon">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Platform
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              What would you like to top up?
            </h2>
            <p className="text-muted-foreground text-lg">
              Fast, secure, and reliable digital transactions
            </p>
          </div>
          <div className="flex justify-center">
            <SearchBar 
              value={searchValue}
              onChange={setSearchValue}
              onFilterChange={setFilter}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Choose Your Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                onClick={() => navigate(category.path)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <TrendingUp className="w-6 h-6 text-neon-cyan" />
            <h3 className="text-2xl font-bold text-foreground">Hot Deals Today</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {popularProducts.map((product, index) => (
              <Card
                key={index}
                className="p-6 hover-glow cursor-pointer bg-gradient-dark border-border/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-gradient-accent text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    {product.discount}
                  </Badge>
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-2">{product.name}</h4>
                <p className="text-2xl font-bold text-neon-cyan">
                  Rp {product.price.toLocaleString('id-ID')}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-neon-cyan" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">100% Secure</h4>
              <p className="text-muted-foreground">SSL encrypted transactions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-neon-cyan" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Instant Delivery</h4>
              <p className="text-muted-foreground">Credits delivered in seconds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-neon-cyan" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Trusted Platform</h4>
              <p className="text-muted-foreground">Over 1M+ satisfied users</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
